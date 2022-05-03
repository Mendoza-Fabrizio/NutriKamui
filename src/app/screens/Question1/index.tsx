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
export type Question1NavigationProps = PrincipalNavigationProp<AppRoutes>;
export default function Question1(){
  const navigation = useNavigation<Question1NavigationProps>();
  return(
    <SafeAreaView style={generalStyles.container}>
      <View style={{width: '100%'}}>
      <Header haveReturnBtn={true}      
      />
      </View>
      <View style={{width: '100%',flexDirection:'column'}}>
        <Text style={{color:"white",textAlign:"center",fontSize:20}}>¿Cual es tu nivel de actividad fisica?</Text>
          
        <TouchableOpacity style={styles.containeritems} onPress={()=>navigation.navigate(AppRoutes.FoodElection)}>
          <Text style={{color:"white",textAlign:"center",fontSize:18,fontWeight: 'bold'}}>Sedentario</Text>
          <Text style={{color:"white",textAlign:"center",fontSize:14}}>Nada o poco ejercicio</Text>
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.containeritems} onPress={()=>navigation.navigate(AppRoutes.Question2)}>
          <Text style={{color:"white",textAlign:"center",fontSize:18,fontWeight: 'bold'}}>Ligero</Text>
          <Text style={{color:"white",textAlign:"center",fontSize:14}}>Ejercicio 2-3 dias por semana</Text>
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.containeritems } onPress={()=>navigation.navigate(AppRoutes.Question2)}>
          <Text style={{color:"white",textAlign:"center",fontSize:18,fontWeight: 'bold'}}>Moderado</Text>
          <Text style={{color:"white",textAlign:"center",fontSize:14}}>Ejercicio 4-5 dias por semana</Text>
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.containeritems} onPress={()=>navigation.navigate(AppRoutes.Question2)}>
          <Text style={{color:"white",textAlign:"center",fontSize:18,fontWeight: 'bold'}}>Alto</Text>
          <Text style={{color:"white",textAlign:"center",fontSize:14}}>Ejercicio 6-7 dias por semana</Text>
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.containeritems} onPress={()=>navigation.navigate(AppRoutes.Question2)}>
          <Text style={{color:"white",textAlign:"center",fontSize:18,fontWeight: 'bold'}}>Atleta Profesional</Text>
          <Text style={{color:"white",textAlign:"center",fontSize:14}}>Ejercicio inteso 6-7 dias por semana</Text>
          
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
  containeritems:{
    flexDirection:'column',
    alignItems: 'center',
    alignSelf: 'center',
    width:310,
    margin:12,
    marginTop: 30,
    padding: 12,
    marginRight: 12,
    marginLeft: 12,
    backgroundColor: _GeneralColors.items,
    borderRadius: 10
  },
  image: {
    width: 350,
    height: 200,
    resizeMode: 'contain',
  },
  label: {
    color:'white',
    margin: 12,
    fontSize: 20,
  },
  loading: {
    width: 170,
    height: 120,
    resizeMode: 'contain',
  },
})