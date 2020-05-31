import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import Divider from "react-native-divider";

function Separator() {
  return <View style={styles.separator} />;
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          flexDirection: "column-reverse",
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
      <View style={{ flex: 1, justifyContent: "center" }}>
        <TextInput
          placeholder="Phone number, username or email"
          style={styles.textInput}
        />
        <TextInput placeholder="Password" style={styles.textInput} />
        <Text style={{ alignSelf: "flex-end", padding: 15, color: "#2196F3" }}>
          Forgot password?
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => alert("whe")}>
          <Text style={styles.text}>Log in</Text>
        </TouchableOpacity>
      </View>
      <Divider orientation="center" color="gray">
        <Text style={{ fontSize: 14 }}>OR</Text>
      </Divider>
      <View style={{ flex: 1 }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  textInput: {
    borderRadius: 4,
    borderColor: "gray",
    borderWidth: 0.5,
    height: 38,
    padding: 10,
    marginTop: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    backgroundColor: "#2196F3",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});
