import React from "react";
import {
  Button,
  Segment,
  Form,
  Header,
  Divider,
  Icon,
  Image,
  Grid,
} from "semantic-ui-react";

import { Link } from "react-router-dom";

const LoginForm = () => {
  const maxWidth = 350;

  return (
    <Segment basic textAlign="center">
      <Segment style={{ maxWidth }}>
        <Form size="large">
          <Segment basic padded="very" textAlign="center">
            <Header size="huge">Delgram</Header>
            <Form.Input fluid placeholder="Phone number, username or email" />
            <Form.Input fluid placeholder="Password" type="password" />

            <Button color="blue" fluid size="large">
              Log in
            </Button>
            <Divider horizontal>Or</Divider>
            <Segment basic>
              <Icon name="facebook"></Icon>
              <Link to="#">Log in with Facebook</Link>
            </Segment>

            <Header as="h5" color="red">
              Sorry, your password was incorrect. Please double-check your
              password.
            </Header>

            <Segment basic>
              <Link to="#">Forgot password?</Link>
            </Segment>
          </Segment>
        </Form>
      </Segment>
      <Segment style={{ maxWidth }}>
        Don't have an account? <Link to="/signup">Sign up</Link>
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
  );
};

export default LoginForm;
