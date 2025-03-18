import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ContactDetails from './src/components/ContactDetails';
import Education from './src/components/Education';
import Experience from './src/components/Experience';
import Skills from './src/components/Skills';
import Certificates from './src/components/Certificates';
import Languages from './src/components/Languages';
import ContactForm from './src/components/ContactForm';
import AboutMe from './src/components/AboutMe';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="About Me">
        <Drawer.Screen name="About Me" component={AboutMe} />
        <Drawer.Screen name="Contact Details" component={ContactDetails} />
        <Drawer.Screen name="Education" component={Education} />
        <Drawer.Screen name="Experience" component={Experience} />
        <Drawer.Screen name="Skills" component={Skills} />
        <Drawer.Screen name="Certificates" component={Certificates} />
        <Drawer.Screen name="Languages" component={Languages} />
        <Drawer.Screen name="Contact Me" component={ContactForm} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
