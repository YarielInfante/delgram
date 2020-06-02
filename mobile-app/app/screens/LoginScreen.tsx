import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Divider from "react-native-divider";
import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";
import * as Yup from "yup";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../config/colors";

export default function LoginScreen({ navigation }) {
  const Separator = () => {
    return <View style={styles.separator} />;
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });

  return (
    <Screen style={styles.container}>
      <View
        style={{
          flex: 4,
          alignItems: "center",
          flexDirection: "column-reverse",
          paddingBottom: 37,
        }}
      >
        <Text
          style={{
            alignContent: "center",
            fontSize: 40,
          }}
        >
          Delgram
        </Text>
      </View>
      <View style={{ flex: 4, justifyContent: "center" }}>
        <Form
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Phone number, username or email"
            textContentType="emailAddress"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />

          <Text
            style={{ alignSelf: "flex-end", padding: 15, color: "#2196F3" }}
          >
            Forgot password?
          </Text>

          <SubmitButton title="Log In" />
        </Form>
      </View>
      <Divider orientation="center" color="gray">
        <Text style={{ fontSize: 13 }}>OR</Text>
      </Divider>
      <View
        style={{
          flex: 3,
          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <FontAwesome name="facebook-square" size={24} color={colors.primary} />
        <Text
          style={{ color: colors.primary, fontWeight: "bold", marginLeft: 10 }}
        >
          Log In With Facbook
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Separator />
        <Text
          style={{
            position: "absolute",
            marginTop: 50,
            fontSize: 12,
            alignContent: "flex-end",
            alignSelf: "center",
          }}
        >
          Don't have an account?{" "}
          <Text
            onPress={() => navigation.navigate("Register")}
            style={{ color: colors.primary, fontWeight: "bold" }}
          >
            Sign Up.
          </Text>
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
