import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './telas/Homescreen';
import ProfileScreen from './telas/ProfileScreen';
import LoginScreen from './telas/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  
   const [myProps, setMyProps] = useState({
    prop1: 'valor1!',
    prop2: 'valor2'
   });

  return (
    <View style={styles.container}>
      <Text>Bem vindo ao projeto React Native feito por Daniel Assis</Text>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tela de Home">
       <Stack.Screen name="Tela de Home" component={HomeScreen}/>
       <Stack.Screen name="Tela de Perfil" component={ProfileScreen}/>
       <Stack.Screen name="Tela de Login" component={LoginScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

});
