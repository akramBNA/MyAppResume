import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";

const languageData = [
  { name: "Arabic", percentage: 100, color: "rgba(34, 197, 94, 0.8)" },
  { name: "English", percentage: 90, color: "rgba(59, 130, 246, 0.8)" },
  { name: "French", percentage: 70, color: "rgba(249, 115, 22, 0.8)" },
  { name: "Turkish", percentage: 90, color: "rgba(234, 179, 8, 0.8)" },
];

const screenWidth = Dimensions.get("window").width;
const chartSize = screenWidth * 0.35;

const Languages = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spoken Languages</Text>
      <View style={styles.grid}>
        {languageData.map((lang, index) => (
          <View key={index} style={styles.languageItem}>
            <PieChart
              data={[
                { name: lang.name, population: lang.percentage, color: lang.color },
                { name: "Remaining", population: 100 - lang.percentage, color: "#e5e7eb" },
              ]}
              width={chartSize}
              height={chartSize}
              chartConfig={{ color: () => "black" }}
              accessor="population"
              backgroundColor="transparent"
              center={[0, 0]}
              hasLegend={false}
            />
            <Text style={styles.languageText}>{lang.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  languageItem: {
    width: "45%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  languageText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "600",
    color: "#444",
    textAlign: "center",
  },
});

export default Languages;
