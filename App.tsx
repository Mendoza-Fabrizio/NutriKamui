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

const Stack = createNativeStackNavigator();
const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage"
        screenOptions={{headerShown: false, animation: 'slide_from_bottom'}}>
        <Stack.Screen name ="FirtPage" component={FirstPage}/>
        <Stack.Screen name ="AuthRoute" component={AuthRoute}/>
        <Stack.Screen name ="InitialObjectives" component={InitialObjectives}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
