import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";

const AboutMe = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a "page load"
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5s fake loading, you can adjust/remove if tied to real API

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={styles.fullscreenLoader}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={require("../../assets/profile_picture/profile_picture.png")}
          style={styles.image}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>About Me</Text>
        <Text style={styles.description}>
          Hello, my name is <Text style={styles.highlight}>Akram</Text>. I'm a
          full-stack JavaScript developer specializing in MERN and MEAN
          stacks. I'm a self-driven person with a strong attention to detail.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullscreenLoader: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  imageWrapper: {
    width: 200,
    height: 200,
    borderRadius: 75,
    overflow: "hidden",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 75,
    borderWidth: 4,
    borderColor: "#888",
  },
  textContainer: {
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  description: {
    fontSize: 20,
    color: "#ccc",
    textAlign: "center",
    maxWidth: 300,
    lineHeight: 26,
  },
  highlight: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default AboutMe;
