
/** npx react-native run-android */

import * as React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    MyStack()
  );
  };

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity 
    onPress={onPress}
    style={styles.appButtonContainer}
    activeOpacity={0.75}
  >
  <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTransparent:true}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen} 
          options={{ title: '' }}
        />
        <Stack.Screen 
          name="Book Now" 
          component={BookNow} 
          options={{ title: '' }}
        />
        <Stack.Screen 
          name="Menu" 
          component={Menu} 
          options={{ title: '' }}
        />
        <Stack.Screen 
          name="About Us" 
          component={AboutUs} 
          options={{ title: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <ImageBackground source={require('C:/Users/Tyler/Desktop/React/first_project/background.png')} resizeMode="cover" style={styles.image}>

    <AppButton title="Book Now" onPress={() => navigation.navigate('Book Now')}/>
    <Text> </Text>
    <AppButton title="Menu" onPress={() => navigation.navigate('Menu')}/>
    <Text> </Text>
    <AppButton title="About Us" onPress={() => navigation.navigate('About Us')}/>
    <Text> </Text>
    <Text> </Text>
    <Text> </Text>
    <Text> </Text>
      
    </ImageBackground>
    </View>
  );
};

const BookNow = ({ navigation, route }) => {
  return <Text> Book Now page </Text>;
};

const Menu = ({ navigation, route }) => {
  return <Text> Menu page </Text>;
};

const AboutUs = ({ navigation, route }) => {
  return <Text> About Us page </Text>;
};

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

/** 
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";



const bookNow = () => Alert.alert("book now")

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={require('C:/Users/Tyler/Desktop/React/first_project/background.png')} resizeMode="cover" style={styles.image}>

    <AppButton title="Book Now" onPress={bookNow}/>
    <Text> </Text>
    <AppButton title="Menu"/>
    <Text> </Text>
    <AppButton title="About Us"/>
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
*/