import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactMe = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      subject: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().min(2, "Too short!").required("First Name is required"),
      lastName: Yup.string().min(2, "Too short!").required("Last Name is required"),
      subject: Yup.string().max(100, "Subject is too long").required("Subject is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      message: Yup.string().min(10, "Message is too short").required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      setIsLoading(true);
    
      setTimeout(() => {
        Alert.alert("Service Unavailable", "We are currently improving our service. Please try again later.",
          [{ text: "OK", onPress: () => {
            resetForm();
            setIsLoading(false);
          }}]
        );
      }, 1500);
    },
  });

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {isLoading && (
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color="#6200ee" />
        </View>
      )}

      <ScrollView
        contentContainerStyle={[styles.container, isLoading && styles.blurred]}
        scrollEnabled={!isLoading}
      >
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <Text style={{ fontSize: 26, fontWeight: "bold", color: "#333" }}>Contact Me</Text>
        </View>

        <View>
          {["firstName", "lastName", "subject", "email", "message"].map((field) => (
            <View key={field}>
              <Text style={styles.label}>{field.charAt(0).toUpperCase() + field.slice(1)}</Text>
              <TextInput
                style={[styles.input, field === "message" && { height: 100, textAlignVertical: "top" }]}
                value={formik.values[field]}
                onChangeText={formik.handleChange(field)}
                onBlur={formik.handleBlur(field)}
                keyboardType={field === "email" ? "email-address" : "default"}
                multiline={field === "message"}
                editable={!isLoading}
              />
              {formik.touched[field] && formik.errors[field] && <Text style={styles.error}>{formik.errors[field]}</Text>}
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={formik.handleSubmit} disabled={isLoading}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = {
  container: { flexGrow: 1, justifyContent: "center", padding: 20 },
  blurred: { opacity: 0.3 },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  label: { fontSize: 16, fontWeight: "600", color: "#333", marginTop: 15 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 5, fontSize: 16, marginTop: 5 },
  error: { color: "red", fontSize: 12, marginTop: 5 },
  button: { backgroundColor: "#6200ee", padding: 15, borderRadius: 5, marginTop: 20, alignItems: "center" },
  buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
};

export default ContactMe;
