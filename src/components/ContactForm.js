import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
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
    onSubmit: (values) => {
      setIsLoading(true);
      console.log("Form submitted: ", values);
      // Handle email sending logic here
      setTimeout(() => setIsLoading(false), 2000);
    },
  });

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", padding: 20, backgroundColor: "white" }}>
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Text style={{ fontSize: 26, fontWeight: "bold", color: "#333" }}>Contact Me</Text>
      </View>

      {isLoading && <ActivityIndicator size="large" color="#6200ee" style={{ marginBottom: 20 }} />}

      <View>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Your First Name"
          value={formik.values.firstName}
          onChangeText={formik.handleChange("firstName")}
          onBlur={formik.handleBlur("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName && <Text style={styles.error}>{formik.errors.firstName}</Text>}

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Last Name"
          value={formik.values.lastName}
          onChangeText={formik.handleChange("lastName")}
          onBlur={formik.handleBlur("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName && <Text style={styles.error}>{formik.errors.lastName}</Text>}

        <Text style={styles.label}>Subject</Text>
        <TextInput
          style={styles.input}
          placeholder="Subject"
          value={formik.values.subject}
          onChangeText={formik.handleChange("subject")}
          onBlur={formik.handleBlur("subject")}
        />
        {formik.touched.subject && formik.errors.subject && <Text style={styles.error}>{formik.errors.subject}</Text>}

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          keyboardType="email-address"
          value={formik.values.email}
          onChangeText={formik.handleChange("email")}
          onBlur={formik.handleBlur("email")}
        />
        {formik.touched.email && formik.errors.email && <Text style={styles.error}>{formik.errors.email}</Text>}

        <Text style={styles.label}>Message</Text>
        <TextInput
          style={[styles.input, { height: 100, textAlignVertical: "top" }]}
          placeholder="Your Message"
          multiline
          value={formik.values.message}
          onChangeText={formik.handleChange("message")}
          onBlur={formik.handleBlur("message")}
        />
        {formik.touched.message && formik.errors.message && <Text style={styles.error}>{formik.errors.message}</Text>}
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
