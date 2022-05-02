import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import AuthRouteScreen from './AuthRoute';
export enum AppRoutes {
  FirstPage = "FirstPage",
  AuthRoute = "AuthRoute",
  InitialObjectives = "InitialObjectives",
}
type MainStackParamList = {
  [AppRoutes.FirstPage]: undefined;
  [AppRoutes.AuthRoute]: undefined;
  [AppRoutes.InitialObjectives]: undefined;
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
      </Stack.Navigator>
    </NavigationContainer>

  );
};