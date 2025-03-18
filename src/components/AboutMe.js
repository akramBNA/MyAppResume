import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";

const AboutMe = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        {!imageLoaded && (
          <View style={styles.placeholder}>
            <ActivityIndicator size="large" color="#999" />
          </View>
        )}
        <Image
          source={require("../../assets/profile_picture.png")}
          style={[styles.image, { opacity: imageLoaded ? 1 : 0 }]}
          onLoad={() => setImageLoaded(true)}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>About Me</Text>
        <Text style={styles.description}>
          Hello, my name is <Text style={styles.highlight}>Akram</Text>. I'm a
          junior full-stack JavaScript developer specializing in MERN and MEAN
          stacks. I'm a self-driven person with a strong attention to detail.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  imageWrapper: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: "hidden",
    marginBottom: 20,
    position: "relative",
  },
  placeholder: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#444",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 75,
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
    fontSize: 18,
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
