
/** npx react-native run-android */

import * as React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
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
          options={{ title: '', headerTintColor: 'white' }}
        />
        <Stack.Screen 
          name="Menu" 
          component={Menu} 
          options={{ title: '', headerTintColor: 'white' }}
        />
        <Stack.Screen 
          name="About Us" 
          component={AboutUs} 
          options={{ title: 'About Us', headerTintColor: 'white'}}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <ImageBackground 
        source={require('C:/Users/Tyler/Desktop/React/first_project/background.png')} 
        resizeMode="cover" 
        style={styles.image}>

        <Image
          style={styles.restaurantSign}
          source={require('C:/Users/Tyler/Desktop/React/first_project/restaurant_name.png')} 
        />

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
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('C:/Users/Tyler/Desktop/React/first_project/background.png')} 
        resizeMode="cover" 
        style={styles.image}>

      </ImageBackground>
    </View>
  )
};

const Menu = ({ navigation, route }) => {
  return (
    
    <View style={styles.container}>
      <ImageBackground 
        source={require('C:/Users/Tyler/Desktop/React/first_project/background.png')} 
        resizeMode="cover" 
        style={styles.image}>
        <ScrollView>
        <Image
          style={styles.menu}
          source={require('C:/Users/Tyler/Desktop/React/first_project/menu.png')} 
        />
        </ScrollView>

      </ImageBackground>
    </View>
  )
};

const AboutUs = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('C:/Users/Tyler/Desktop/React/first_project/background.png')} 
        resizeMode="cover" 
        style={styles.image}>

        <ScrollView style={styles.aboutUsScroll}>
          <Text style={styles.aboutUsText}>
            {"\n"}
            Opening Hours{"\n"}{"\n"}
            Monday: 10am - 9pm{"\n"}
            Tuesday: 10am - 9pm{"\n"}
            Wednesday: 10am - 9pm{"\n"}
            Thursday: 10am - 9pm{"\n"}
            Friday: 10am - 9pm{"\n"}
            Saturday: 10am - 9pm{"\n"}
            Sunday: 10am - 9pm{"\n"}{"\n"}

            Since our modest beginnings in 2005 with a little space in Toronto’s stylish Yorkville locale, 
            ‘Organization Name’ ‘s development has been enlivened with the energy to cook and serve solid, 
            Indian-roused takeout food.{"\n"}{"\n"}

            In contrast to other Indian eateries, ‘Organization Name’ was made with the explicit expectation 
            to appear as something else.{"\n"}{"\n"}
     
            We realize numerous individuals love Indian sustenance, yet a large number of them loathe or are 
            unconscious of the regularly unfortunate fixings that make run-of-the-mill Indian nourishment taste 
            so great.{"\n"}{"\n"}

            Our menu highlights things that utilization the sound and fragrant flavors, however, forgets the 
            stuffing ghee, spread, oil, and overwhelming cream.{"\n"}{"\n"}

            ‘Organization Name’ has developed to incorporate four superb takeout areas in Toronto with additional 
            to come sooner rather than later. Our group takes pride in the way that we can furnish our new and 
            faithful clients with extraordinary tasting Indian-roused nourishment that is not normal for that at 
            some other Indian eatery you visit.{"\n"}{"\n"}

            We perceive that a few people are as yet searching for the run-of-the-mill Indian nourishment, and that 
            is fine with us. Our disclaimer is that on the off chance that you’re anticipating overwhelming, slick, 
            undesirable Indian nourishment, ‘Organization Name’ isn’t the place for you.{"\n"}
          </Text>
        </ScrollView>
      </ImageBackground>
    </View>
  )
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
  },
  restaurantSign: {
    width: 350,
    height: 175,
    alignSelf: "center",
    marginBottom: 200
  },
  menu: {
    width: 380,
    height: 600,
    alignSelf: "center",
    marginBottom: 50,
    marginTop: 80
  },
  aboutUsText: {
    width: 380,
    textAlign: "center",
    alignSelf: "center",
    color: "white",
    backgroundColor: "#000000c0",
    fontSize: 18,
    borderRadius: 30
  },
  aboutUsScroll: {
    marginTop: 70,
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