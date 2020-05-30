import React, { useState } from "react";
import {
  Grid,
  Button,
  Header,
  Form,
  Segment,
  Divider,
  Image,
  Container,
  InputOnChangeData,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import {
  combineValidators,
  isRequired,
  composeValidators,
  createValidator,
  matchesPattern,
} from "revalidate";
import { UserRegisterDTO } from "@delgram/core";
import agent from "../../app/api/agent";

interface IconValue {
  color?: string;
  name?: string;
}
const SigupForm = () => {
  const maxWidth = 350;
  let user: Partial<UserRegisterDTO> = new UserRegisterDTO();

  const [userRegister, setUserRegister] = useState(user);
  const [disableSummit, setDisableSummit] = useState(true);
  const [loading, setLoading] = useState(false);
  const [fieldTouched, setFieldTouched] = useState({
    email: false,
    firstName: false,
    username: false,
    password: false,
  });
  const [fieldValid, setFieldValid] = useState({
    email: {},
    firstName: {},
    username: {},
    password: {},
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => {
    setUserRegister({ ...userRegister, [event.target.name]: data.value });
    setFieldTouched({ ...fieldTouched, [event.target.name]: true });
    setFieldValid({
      ...fieldValid,
      [event.target.name]: validateForm(event.target.name, data.value),
    });

    setDisableSummit(
      Object.values(fieldValid as IconValue).filter(
        (v: IconValue) => v.name === "check"
      ).length !== Object.keys(fieldValid).length
    );

    console.log(
      Object.values(fieldValid as IconValue).filter(
        (v: IconValue) => v.name === "check"
      ).length === Object.keys(fieldValid).length
    );
  };

  const validateForm = (name: string, value: string): IconValue => {
    if (validate({ [name]: value })?.[name]) {
      return { color: "red", name: "cancel" };
    } else {
      return { color: "green", name: "check" };
    }
  };

  const validate = combineValidators({
    email: composeValidators(
      isRequired({ message: "Required" }),
      createValidator(
        (message) => (value) => {
          if (
            value &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
          ) {
            return message;
          }
        },
        "Invalid email address"
      )
    )(),
    firstName: isRequired("firstName"),
    username: isRequired("username"),
    password: composeValidators(
      isRequired("password"),
      matchesPattern(
        /^((?=.*\d)|(?=.*[!@#$%^&*]))(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{10,}$/
      )
    )("password"),
  });

  const summitForm = () => {
    setLoading(true);
    setDisableSummit(true);
    agent.UserService.register(userRegister as UserRegisterDTO).then(() => {
      setLoading(false);
      setDisableSummit(false);
      setUserRegister(new UserRegisterDTO());
    });
  };

  return (
    <Container>
      <Grid
        textAlign="center"
        style={{ height: "80vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Segment basic textAlign="center">
            <Segment style={{ maxWidth }}>
              <Form size="large">
                <Segment basic padded="very" textAlign="center">
                  <Header size="huge">Delgram</Header>
                  <Header size="medium">
                    Sign up to see photos and videos from your friends.
                  </Header>
                  <Segment basic>
                    <Button
                      icon="facebook"
                      color="blue"
                      content="Signup with Facebook"
                    />
                  </Segment>
                  <Divider horizontal>Or</Divider>

                  <Form.Input
                    placeholder="Mobile number or email"
                    name="email"
                    onChange={handleChange}
                    value={userRegister.email}
                    icon={fieldTouched.email ? fieldValid.email : {}}
                  />

                  <Form.Input
                    value={userRegister.firstName}
                    placeholder="Full Name"
                    onChange={handleChange}
                    name="firstName"
                    icon={fieldTouched.firstName ? fieldValid.firstName : {}}
                  ></Form.Input>
                  <Form.Input
                    name="username"
                    onChange={handleChange}
                    value={userRegister.username}
                    placeholder="Username"
                    icon={fieldTouched.username ? fieldValid.username : {}}
                  />

                  <Form.Input
                    name="password"
                    onChange={handleChange}
                    value={userRegister.password}
                    placeholder="Password"
                    type="password"
                    icon={fieldTouched.password ? fieldValid.password : {}}
                  />

                  <Button
                    color="blue"
                    fluid
                    size="large"
                    disabled={disableSummit}
                    onClick={summitForm}
                    loading={loading}
                  >
                    Sign up
                  </Button>
                </Segment>
              </Form>
            </Segment>
            <Segment style={{ maxWidth }}>
              Have an account? <Link to="/login">Log In</Link>
            </Segment>
            <Segment basic style={{ maxWidth }}>
              Get the app
              <Grid columns={2} doubling style={{ padding: "4%" }}>
                <Grid.Column>
                  <Image src="/assets/apple-store-png-3.png" />
                </Grid.Column>
                <Grid.Column>
                  <Image src="/assets/googleplaystore.png" />
                </Grid.Column>
              </Grid>
            </Segment>
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default SigupForm;
