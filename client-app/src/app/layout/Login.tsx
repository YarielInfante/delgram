import React from "react";
import { Grid, Container } from "semantic-ui-react";
import LoginForm from "../../features/user/LoginForm";

const Login = () => {
  return (
    <Container>
      <Grid
        textAlign="center"
        style={{ marginTop: "110px" }}
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
