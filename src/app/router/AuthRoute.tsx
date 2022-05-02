import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login/index';
import { NavigationContainer } from '@react-navigation/native';

export enum AuthRoutes {
  Login = 'Login',
}

type AuthStackParamList = {
  [AuthRoutes.Login]: undefined;
};

export type MainNavigationProp<
  RouteName extends keyof AuthStackParamList = AuthRoutes,
> = NativeStackNavigationProp<AuthStackParamList, RouteName>;

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthRoutesScreen = () => {
  return (
      <Stack.Navigator
      initialRouteName={AuthRoutes.Login}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={AuthRoutes.Login} component={LoginScreen} />
    </Stack.Navigator>
    
  );
};

export default AuthRoutesScreen;
