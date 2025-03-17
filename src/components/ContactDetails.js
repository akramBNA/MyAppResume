import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ContactDetails = () => {
  return (
    <View style={styles.container}>
      <Text>Phone: +216 24 824 361</Text>
      <Text>Email: akrambenaoun1993@gmail.com</Text>
      <Text>Address: Ariana, Tunisia</Text>
      <Text>LinkedIn: Akram Ben Aoun</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  },
});

export default ContactDetails;
