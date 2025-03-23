import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { faReact, faAngular, faNodeJs, faDocker } from '@fortawesome/free-brands-svg-icons';


const skills = [
  { name: "MERN/MEAN Stacks", icon: "server", gradient: ["#4F46E5", "#9333EA"] },
  { name: "JavaScript", icon: "js-square", gradient: ["#3B82F6", "#22D3EE"] },
  { name: "TypeScript", icon: "code", gradient: ["#10B981", "#14B8A6"] },
  { name: "HTML", icon: "html5", gradient: ["#F97316", "#F59E0B"] },
  { name: "CSS", icon: "css3-alt", gradient: ["#3B82F6", "#4338CA"] },
  { name: "Bootstrap", icon: "bold", gradient: ["#8B5CF6", "#EC4899"] },
  { name: "Angular Material", icon: "layer-group", gradient: ["#16A34A", "#22D3EE"] },
  { name: "TailwindCSS", icon: "paint-brush", gradient: ["#14B8A6", "#0E7490"] },
  { name: "Angular", icon: faAngular, gradient: ["#F87171", "#F97316"] },
  { name: "React", icon: faReact, gradient: ["#0EA5E9", "#9333EA"] },
  { name: "NodeJS", icon: faNodeJs, gradient: ["#34D399", "#10B981"] },
  { name: "ExpressJS", icon: "cogs", gradient: ["#A78BFA", "#4338CA"] },
  { name: "REST APIs", icon: "network-wired", gradient: ["#10B981", "#22D3EE"] },
  { name: "MySQL", icon: "database", gradient: ["#22D3EE", "#3B82F6"] },
  { name: "PostgreSQL", icon: "project-diagram", gradient: ["#9333EA", "#4F46E5"] },
  { name: "MongoDB", icon: "leaf", gradient: ["#16A34A", "#84CC16"] },
  { name: "Git", icon: "code-branch", gradient: ["#374151", "#6B7280"] },
  { name: "Agile Methodologies (Scrum)", icon: "sitemap", gradient: ["#F59E0B", "#F97316"] },
  { name: "Docker", icon: faDocker, gradient: ["#3B82F6", "#0EA5E9"] },
  { name: "EmailJS", icon: "envelope", gradient: ["#3B82F6", "#10B981"] },
];


const Skills = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Skills</Text>
      <View style={styles.skillsList}>
        {skills.map((skill, index) => (
          <View
            key={index}
            style={[
              styles.skillCard,
              { backgroundColor: skill.gradient[0] },
              { borderColor: skill.gradient[1] },
            ]}
            >
            <Text style={styles.skillText}>{skill.name}</Text>
            <Icon name={skill.icon} size={30} color="#fff" style={styles.icon} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1F2937",
    textAlign: "center",
    marginBottom: 20,
  },
  skillsList: {
    marginTop: 10,
  },
  skillCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 2,
    marginHorizontal: 10,
    backgroundColor: "#D1D5DB",
  },
  skillText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
  icon: {
    marginRight: 10,
  },
});

export default Skills;
