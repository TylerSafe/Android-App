
/** npx react-native run-android */

import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity 
    onPress={onPress}
    style={styles.appButtonContainer}
    activeOpacity={0.75}
  >
  <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={require('C:/Users/Tyler/Desktop/React/first_project/background.png')} resizeMode="cover" style={styles.image}>

    <AppButton title="About Us"/>
    <Text> </Text>
    <AppButton title="Menu"/>
    <Text> </Text>
    <AppButton title="Book Now"/>
    <Text> </Text>
    <Text> </Text>
    <Text> </Text>
    <Text> </Text>
      
    </ImageBackground>
  </View>
  
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end"
  },
  text: {
    color: "white",
    fontSize: 34,
    lineHeight: 50,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "rgba(52, 52, 52, 0.75)",
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center"
  }
});



export default App;

/**import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits. cool
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App; */
