import React from "react";
import { Grid, Image, Responsive } from "semantic-ui-react";
import LoginForm from "./LoginForm";

function WelcomeForm() {
  return (
    <Grid columns={2} stackable style={{ marginTop: "7%" }}>
      <Responsive
        minWidth={980}
        as={Grid.Column}
        style={{ left: "13%", height: "50%" }}
      >
        <Image size="huge" src={"/assets/iphone-white-placeholder.png"} />
      </Responsive>

      <Grid.Column>
        <LoginForm />
      </Grid.Column>
    </Grid>
  );
}

export default WelcomeForm;
