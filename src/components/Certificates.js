import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Linking } from "react-native";
import FileViewer from 'react-native-file-viewer';

const Certificates = () => {
  const [files] = useState([
    { path: require('../../assets/certificates/Complete web dev Certificate.pdf'), type: 'pdf', name: 'Complete web dev Certificate', preview: require('../../assets/certificates/Preview Complete web dev Certificate.png') },
    { path: require('../../assets/certificates/Docker Beginner Certificate.pdf'), type: 'pdf', name: 'Docker Beginner Certificate', preview: require('../../assets/certificates/Preview Docker Beginner Certificate.png') },
    { path: require('../../assets/certificates/Kubernetes Beginner Certificate.pdf'), type: 'pdf', name: 'Kubernetes Beginner Certificate', preview: require('../../assets/certificates/Preview Kubernetes Beginner Certificate.png') },
    { path: require('../../assets/certificates/RBK Certificate.jpeg'), type: 'image', name: 'RBK Certificate' },
    { path: require('../../assets/certificates/Scrum Study Certificate.jpeg'), type: 'image', name: 'Scrum Study Certificate' },
    { path: require('../../assets/certificates/EF SET Certificate.pdf'), type: 'pdf', name: 'EF SET Certificate', preview: require('../../assets/certificates/Preview EF SET Certificate.png') }
  ]);

  const openFullscreen = (file) => {
    if (file.type === 'pdf') {
      FileViewer.open(file.path)
        .then(() => console.log('File opened successfully'))
        .catch(error => console.error('Error opening file:', error));
    } else {
      Linking.openURL(file.path);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Earned Certificates</Text>

      <View style={styles.certificatesContainer}>
        {files.map((file, index) => (
          <View key={index} style={styles.card}>
            {file.type === 'pdf' ? (
              <View style={styles.cardContent}>
                <Image source={file.preview} style={styles.image} />
                <Text style={styles.name}>{file.name}</Text>
                <TouchableOpacity onPress={() => openFullscreen(file)}>
                  <Text style={styles.link}>View Certificate</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.cardContent}>
                <Image source={file.path} style={styles.image} />
                <Text style={styles.name}>{file.name}</Text>
                <TouchableOpacity onPress={() => openFullscreen(file)}>
                  <Text style={styles.link}>View Certificate</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  certificatesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    width: '45%',
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  cardContent: {
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },
  link: {
    fontSize: 14,
    color: '#1E90FF',
    textDecorationLine: 'underline',
  },
});

export default Certificates;
