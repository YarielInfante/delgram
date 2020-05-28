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
import LoginForm from "../../features/user/LoginForm";

const Login = () => {
  const maxWidth = 350;

  return (
    <Container>
      <Grid
        textAlign="center"
        style={{ height: "80vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <LoginForm />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Login;
