import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from './src/LoginScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './src/SignupScreen';
import DoctorsList from './src/DoctorList';
import BookingForm from './src/BookingScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DoctorsList" component={DoctorsList} />
        <Stack.Screen name="BookingForm" component={BookingForm}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App

const styles = StyleSheet.create({})