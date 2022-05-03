import React from 'react'
import {View, BackHandler, Image, SafeAreaView, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {generalStyles} from '@styles/index';
import Button from '@components/Button/index';
import Header from 'app/components/Header';
import {
  AppRoutes,
  MainNavigationProp as PrincipalNavigationProp,
} from '@router/index';
import { _GeneralColors } from 'modules/resources/colors';
export type Question2NavigationProps = PrincipalNavigationProp<AppRoutes>;
export default function Question2() {
  const navigation = useNavigation<Question2NavigationProps>();
  return (
    <SafeAreaView style={generalStyles.container}>
      <View style={{width: '100%'}}>
      <Header haveReturnBtn={true}      
      />
      <Text style={{textAlign: 'center',color:'white',fontSize: 18,marginTop: 10,fontWeight:'bold'}}>¿Realizas entrenamientos de Fuerza?</Text>
      <Text style={{textAlign: 'center',color:'white',fontSize: 14,marginHorizontal:38,marginTop: 30}}>*Cualquier entrenamiento que someta tus musculos ante una carga externa(pesas,bandas,poleas,tu propio peso, etc)</Text>
      <View style={{marginTop:14 ,width:350,alignSelf:'center'}}
      >
        <Button label="Si" handleOnPress={()=>navigation.navigate(AppRoutes.FoodElection)}/>
        <Button label="No" handleOnPress={()=>navigation.navigate(AppRoutes.FoodElection)}/>
      </View>

      </View>
    </SafeAreaView>
  )
}
