import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "@env";

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

      const emailParams = {
        firstName: values.firstName,
        lastName: values.lastName,
        subject: values.subject,
        email: values.email,
        message: values.message,
      };

      emailjs
        .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailParams, EMAILJS_PUBLIC_KEY)
        .then(() => {
          Alert.alert("Success", "Your message has been sent!");
          resetForm();
          setIsLoading(false);
        })
        .catch(() => {
          Alert.alert("Error", "There was an issue sending your message. Please try again.");
          setIsLoading(false);
        });
    },
  });

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", padding: 20, backgroundColor: "white" }}>
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Text style={{ fontSize: 26, fontWeight: "bold", color: "#333" }}>Contact Me</Text>
      </View>

      {isLoading && <ActivityIndicator size="large" color="#6200ee" style={{ marginBottom: 20 }} />}

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
            />
            {formik.touched[field] && formik.errors[field] && <Text style={styles.error}>{formik.errors[field]}</Text>}
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={formik.handleSubmit} disabled={isLoading}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = {
  label: { fontSize: 16, fontWeight: "600", color: "#333", marginTop: 15 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 5, fontSize: 16, marginTop: 5 },
  error: { color: "red", fontSize: 12, marginTop: 5 },
  button: { backgroundColor: "#6200ee", padding: 15, borderRadius: 5, marginTop: 20, alignItems: "center" },
  buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
};

export default ContactMe;
