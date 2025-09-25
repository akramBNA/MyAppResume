import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";

const { width } = Dimensions.get("window");
const timelineWidth = 3;
const dotSize = 14;

const experiences = [
  {
    id: "1",
    company: "Freelance",
    duration: "Feb 2025 - Present",
    role: "Freelance Full Stack JavaScript Developer",
    details: [
      "Developping a Saas ERP application for a construction company.",
      "Tech Stack: Angular / NodeJS / PostgreSQL",
    ],
    color: "#585b5fff",
  },
  {
    id: "2",
    company: "Infinitum Tech (formally Marabout Technology)",
    duration: "Oct 2023 - Present",
    role: "Full Stack JavaScript Developer",
    details: [
      "Develop and maintain web applications for factory production management.",
      "Tech Stack: Angular / NodeJS / PostgreSQL",
    ],
    color: "#3b82f6",
  },
  {
    id: "3",
    company: "EcoClicko GameHub",
    duration: "Sep 2023 - Oct 2023",
    role: "Full Stack JavaScript Developer Intern",
    details: [
      "Developed an ecological games web application for children as part of a Scrum team.",
      "Tech Stack: React / NodeJS / MySQL",
    ],
    color: "#10b981",
  },
  {
    id: "4",
    company: "RebootKamp (RBK Tunisia)",
    duration: "Oct 2022 - Mar 2023",
    role: "Full Stack JavaScript Intern Developer",
    details: [
      "Developed multiple web applications during a boot camp, utilizing various technologies:",
      "Blogging website (basic HTML/CSS/JS)",
      "Student Management System",
      "Medium Clone website",
      "TUNART: Web",
      "Tech Stack: JavaScript / HTML / CSS / React / NodeJS / ExpressJS / Bootstrap / Git",
    ],
    color: "#9333ea",
  },
  {
    id: "5",
    company: "TechnoARGE",
    duration: "Jul 2018 - Aug 2018",
    role: "Intern Developer",
    details: [
      "Developed a static web application integrated with an embedded systems project.",
      "Tech Stack: HTML / CSS / PHP / C / C++ / Arduino + Hardware",
    ],
    color: "#eab308",
  },
  {
    id: "6",
    company: "Gölcük Municipality",
    duration: "Jul 2016 - Aug 2016",
    role: "Intern Developer",
    details: [
      "Developed a static web application integrated with an embedded systems project.",
      "Tech Stack: HTML / CSS / PHP / C / C++ / Arduino + Hardware",
    ],
    color: "#ef4444",
  },
];

const Experience = () => {
  return (
    <ScrollView style={styles.container}>
    <View>
      <Text style={styles.heading}>Experience</Text>
      <View style={styles.timelineContainer}>
        <View style={styles.timeline} />
        {experiences.map((item, index) => (
          <View key={index} style={styles.entry}>
            <View style={[styles.dot, { backgroundColor: item.color }]} />
            <View style={styles.textContainer}>
              <Text style={styles.company}>{item.company}</Text>
              <Text style={styles.duration}>{item.duration}</Text>
              <Text style={styles.role}>{item.role}</Text>
              {item.details.map((detail, i) => (
                <Text key={i} style={styles.detailItem}>• {detail}</Text>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
    </ScrollView>
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
  company: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2937",
  },
  duration: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 6,
  },
  role: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
  },
  detailItem: {
    fontSize: 15,
    color: "#374151",
    lineHeight: 22,
  },
});

export default Experience;
