import React from "react";
import { Grid, Image, Container, Responsive } from "semantic-ui-react";
import LoginForm from "./LoginForm";

function WelcomeForm() {
  return (
    <Container style={{ marginTop: "110px" }}>
      <Grid columns={2} stackable>
        <Responsive minWidth={980} as={Grid.Column} style={{ left: "13%" }}>
          <Image fluid src={"/assets/iphone-white-placeholder.png"} />
        </Responsive>

        <Grid.Column>
          <LoginForm />
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default WelcomeForm;
