import React from "react";
import {
  Grid,
  Button,
  Header,
  Form,
  Segment,
  Divider,
  Icon,
  Image,
  Container,
  Label,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const SigupForm = () => {
  const maxWidth = 350;

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
                    fluid
                    placeholder="Phone number, username or email"
                  />

                  <Form.Input fluid placeholder="Full Name" />
                  <Form.Input fluid placeholder="Username" />

                  <Form.Input fluid placeholder="Password" type="password" />

                  <Button color="blue" fluid size="large">
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
