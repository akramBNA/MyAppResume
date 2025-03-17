import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Skills = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skills</Text>
      <Text style={styles.subtitle}>component works!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  // title: {
  //   fontSize: 24,
  //   fontWeight: "bold",
  // },
  // subtitle: {
  //   fontSize: 16,
  //   marginTop: 10,
  // },
});

export default Skills;
