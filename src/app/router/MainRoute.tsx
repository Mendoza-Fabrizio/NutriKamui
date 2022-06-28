import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import {_GeneralColors} from '@colors/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Plan from 'app/screens/Plan';
import BaseDatos from 'app/screens/BaseDatos';
import Recetas from 'app/screens/Recetas';
import Progreso from 'app/screens/Progreso';
import Teams from 'app/screens/Teams';
import { icon_cocinando, icon_diario, icon_plan, icon_search, icon_team } from 'modules/resources/images';

export enum MainRoutes {
  Plan = 'Plan',
  BaseDatos = 'BaseDatos',
  Recetas = 'Recetas',
  Teams = 'Teams',
  Progreso = 'Progreso'
}

type MainTabParamList = {
  [MainRoutes.Plan]: undefined;
  [MainRoutes.BaseDatos]: undefined;
  [MainRoutes.Recetas]: undefined;
  [MainRoutes.Teams]: undefined;
  [MainRoutes.Progreso]: undefined;
};

export type MainNavigationProp<
  RouteName extends keyof MainTabParamList = MainRoutes,
> = BottomTabNavigationProp<MainTabParamList, RouteName>;

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainRoutesScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: 'white',
        tabBarActiveBackgroundColor: _GeneralColors.primary,
        tabBarInactiveBackgroundColor: _GeneralColors.lightGray,
        tabBarStyle: {height: 65, backgroundColor: 'black'},
      }}>
      <Tab.Screen
        name={MainRoutes.Plan}
        component={Plan}
        options={{
          title: 'Plan',
          tabBarLabelStyle: {fontSize: 14},
          tabBarIcon: ({color}) => (
            <Image source = {icon_plan} style={{width:30,height:30}}/>
          ),
        }}
      />
      <Tab.Screen
        name={MainRoutes.BaseDatos}
        component={BaseDatos}
        options={{
          title: 'BaseDatos',
          tabBarLabelStyle: {fontSize: 14},
          tabBarIcon: ({color}) => (
            <Image source = {icon_search} style={{width:30,height:30}}/>
          ),
        }}
      />
      <Tab.Screen
        name={MainRoutes.Recetas}
        component={Recetas}
        options={{
          title: 'Recetas',
          tabBarLabelStyle: {fontSize: 14},
          tabBarIcon: ({color}) => (
            <Image source = {icon_cocinando} style={{width:30,height:30}}/>
          ),
        }}
      />
      <Tab.Screen
        name={MainRoutes.Teams}
        component={Teams}
        options={{
          title: 'Teams',
          tabBarLabelStyle: {fontSize: 14},
          tabBarIcon: ({color}) => (
            <Image source = {icon_team} style={{width:30,height:30}}/>
          ),
        }}
      />
      <Tab.Screen
        name={MainRoutes.Progreso}
        component={Progreso}
        options={{
          title: 'Progreso',
          tabBarLabelStyle: {fontSize: 14},
          tabBarIcon: ({color}) => (
            <Image source = {icon_diario} style={{width:30,height:30}}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainRoutesScreen;

const tabBarStyles = (color: string) =>
  StyleSheet.create({
    icon: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
      tintColor: color,
    },
  });
