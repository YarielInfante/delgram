import React, { useContext } from "react";
import {
  Grid,
  Button,
  Header,
  Form,
  Segment,
  Divider,
  Image,
  Container,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import {
  combineValidators,
  isRequired,
  composeValidators,
  createValidator,
  matchesPattern,
} from "revalidate";
import { RootStoreContext } from "../../app/stores/RootStore";
import { observer } from "mobx-react-lite";

interface IconValue {
  color?: string;
  name?: string;
}
const SigupForm = () => {
  const maxWidth = 350;

  const rootStore = useContext(RootStoreContext);
  const {
    userRegister,
    disableSummit,
    loading,
    fieldTouched,
    fieldValid,
    errorMessage,
    handleChange,
    summitForm,
  } = rootStore.userStore;

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

                  <Header as="h4" color="red" content={errorMessage} />

                  <Divider horizontal>Or</Divider>

                  <Form.Input
                    placeholder="Mobile number or email"
                    name="email"
                    onChange={(e, data) =>
                      handleChange(e.target.name, data.value, validateForm)
                    }
                    value={userRegister.email}
                    icon={fieldTouched.email ? fieldValid.email : {}}
                  />

                  <Form.Input
                    value={userRegister.firstName}
                    placeholder="Full Name"
                    onChange={(e, data) =>
                      handleChange(e.target.name, data.value, validateForm)
                    }
                    name="firstName"
                    icon={fieldTouched.firstName ? fieldValid.firstName : {}}
                  ></Form.Input>
                  <Form.Input
                    name="username"
                    onChange={(e, data) =>
                      handleChange(e.target.name, data.value, validateForm)
                    }
                    value={userRegister.username}
                    placeholder="Username"
                    icon={fieldTouched.username ? fieldValid.username : {}}
                  />

                  <Form.Input
                    name="password"
                    onChange={(e, data) =>
                      handleChange(e.target.name, data.value, validateForm)
                    }
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

export default observer(SigupForm);
