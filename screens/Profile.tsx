import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>This is the profile screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
