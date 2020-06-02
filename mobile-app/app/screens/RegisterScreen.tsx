import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Screen from "../components/Screen";

const RegisterScreen = () => {
  return (
    <Screen style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text>RegisterScreen</Text>
      </View>
    </Screen>
  );
};

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

export default RegisterScreen;
