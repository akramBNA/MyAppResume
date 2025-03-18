import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";

const ContactDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Details</Text>

      <View style={styles.card}>
        <View style={[styles.iconContainer, { backgroundColor: "#E0F2FE" }]}>
          <FontAwesome5 name="phone" size={24} color="#0284C7" />
        </View>
        <Text style={styles.text}>+216 24 824 361</Text>
      </View>

      <View style={styles.card}>
        <View style={[styles.iconContainer, { backgroundColor: "#FEE2E2" }]}>
          <FontAwesome5 name="envelope" size={24} color="#DC2626" />
        </View>
        <Text style={styles.text}>akrambenaoun1993@gmail.com</Text>
      </View>

      <View style={styles.card}>
        <View style={[styles.iconContainer, { backgroundColor: "#D1FAE5" }]}>
          <FontAwesome5 name="map-marker-alt" size={24} color="#047857" />
        </View>
        <Text style={styles.text}>Ariana, Tunisia</Text>
      </View>

      <TouchableOpacity
        style={styles.card}
        onPress={() => Linking.openURL("https://linkedin.com/in/akram-ben-aoun-638b77194")}
      >
        <View style={[styles.iconContainer, { backgroundColor: "#DBEAFE" }]}>
          <FontAwesome name="linkedin" size={24} color="#1D4ED8" />
        </View>
        <Text style={[styles.text, styles.link]}>Akram Ben Aoun</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#F3F4F6",
    padding: 16,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 15,
  },
  iconContainer: {
    padding: 12,
    borderRadius: 50,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "#374151",
    textAlign: "center",
  },
  link: {
    color: "#2563EB",
  },
});

export default ContactDetails;
