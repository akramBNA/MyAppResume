import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const timelineWidth = 3;
const dotSize = 14;

const educationData = [
  {
    school: "RebootKamp Tunisia (RBK)",
    date: "Oct 2022 - Mar 2023",
    description: "Certificate of completion in Full Stack JavaScript Web Development",
    color: "#10B981",
  },
  {
    school: "Kocaeli University",
    date: "Sep 2014 - Jul 2019",
    description: "Bachelor's Degree in Computer Science",
    color: "#3B82F6",
  },
];

const Education = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Education</Text>

      <View style={styles.timelineContainer}>
        <View style={styles.timeline} />

        {educationData.map((item, index) => (
          <View key={index} style={styles.entry}>
            <View style={[styles.dot, { backgroundColor: item.color }]} />
            
            <View style={styles.textContainer}>
              <Text style={styles.school}>{item.school}</Text>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1F2937",
    marginBottom: 20,
  },
  timelineContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    position: "relative",
    marginLeft: 10,
    flexWrap: "wrap",
  },
  timeline: {
    position: "absolute",
    left: 10,
    width: timelineWidth,
    backgroundColor: "#D1D5DB",
    top: 0,
    bottom: 0,
  },
  entry: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 30,
    width: "100%",
    marginTop: 5,
  },
  dot: {
    width: dotSize,
    height: dotSize,
    borderRadius: dotSize / 2,
    borderWidth: 2,
    borderColor: "#fff",
    marginRight: 15,
    marginLeft: 5,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  school: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2937",
  },
  date: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 6,
  },
  description: {
    fontSize: 15,
    color: "#374151",
    lineHeight: 22,
  },
});

export default Education;
