import *as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

import HomeScreen from "../screens/Home.js"
import ISSScreen  from './screens/ISS.js';
import MeteorScreen from './screens/Meteors.js';

const Stack = createStackNavigator ()

export default function App (){
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name = "Home Screen" component={HomeScreen}/>
      <Stack.Screen name = "ISS Screen" component = {ISSScreen}/>
      <Stack.screen name = "Meteor Screen" component = {MeteorScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
}
