/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import {
  AppRoutes,
  MainNavigationProp as PrincipalNavigationProp,
} from '@router/index';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FirstPage from '@screens/FirstPage/index'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthRoute from 'app/router/AuthRoute';
import InitialObjectives from 'app/screens/InitialObjectives';
import PersonalData from 'app/screens/PersonalData';
import Question1 from 'app/screens/Question1';
import FoodElection from 'app/screens/FoodElection';
import Question2 from 'app/screens/Question2';
import MeasureFood from 'app/screens/MeasureFood';
import MainRoute from 'app/router/MainRoute';

const Stack = createNativeStackNavigator();
const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage"
        screenOptions={{headerShown: false, animation: 'slide_from_bottom'}}>
        <Stack.Screen name ="FirtPage" component={FirstPage}/>
        <Stack.Screen name ="AuthRoute" component={AuthRoute}/>
        <Stack.Screen name ="InitialObjectives" component={InitialObjectives}/>
        <Stack.Screen name ="PersonalData" component={PersonalData}/>
        <Stack.Screen name ="Question1" component={Question1}/>
        <Stack.Screen name ="FoodElection" component={FoodElection}/>
        <Stack.Screen name = "Question2" component={Question2}/>
        <Stack.Screen name = "MeasureFood" component={MeasureFood}/>
        <Stack.Screen name = "MainRoute" component={MainRoute}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;