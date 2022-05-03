import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import AuthRouteScreen from './AuthRoute';
import MainRoute from './MainRoute';
export enum AppRoutes {
  FirstPage = "FirstPage",
  AuthRoute = "AuthRoute",
  InitialObjectives = "InitialObjectives",
  PersonalData = "PersonalData",
  Question1 = "Question1",
  FoodElection = "FoodElection",
  Question2 = "Question2",
  MeasureFood = "MeasureFood",
  MainRoute = "MainRoute",
}
type MainStackParamList = {
  [AppRoutes.FirstPage]: undefined;
  [AppRoutes.AuthRoute]: undefined;
  [AppRoutes.InitialObjectives]: undefined;
  [AppRoutes.PersonalData]: undefined;
  [AppRoutes.Question1]: undefined;
  [AppRoutes.FoodElection]: undefined;
  [AppRoutes.Question2]: undefined;
  [AppRoutes.MeasureFood]: undefined;
  [AppRoutes.MainRoute]: undefined;
}
export type MainNavigationProp<
  RouteName extends keyof MainStackParamList = AppRoutes,
  > = NativeStackNavigationProp<MainStackParamList, RouteName>;

const Stack = createNativeStackNavigator<MainStackParamList>();
const AppRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: 'slide_from_bottom' }}>
        <Stack.Screen
          name={AppRoutes.AuthRoute}
          component={AuthRouteScreen}
        />
        <Stack.Screen
        name ={AppRoutes.MainRoute}
        component={MainRoute}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
};