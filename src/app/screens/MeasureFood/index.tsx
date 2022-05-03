import React from 'react'
import {View, BackHandler, Image, SafeAreaView, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {generalStyles} from '@styles/index';
import Button from '@components/Button/index';
import Header from 'app/components/Header';
import {
  AppRoutes,
  MainNavigationProp as PrincipalNavigationProp,
} from '@router/index';
import { _GeneralColors } from 'modules/resources/colors';
import { icon_mano, icon_puno, icon_taza, icon_spoon, icon_balance } from 'modules/resources/images';
export type MeasureFoodNavigationProps = PrincipalNavigationProp<AppRoutes>;
export default function MeasureFood() {
  const navigation = useNavigation<MeasureFoodNavigationProps>();
  return (
    <SafeAreaView style={generalStyles.container}>
       <View style={{width: '100%'}}>
      <Header haveReturnBtn={true}      
      />
      </View>
      <Text style={{color: 'white',fontSize:20,textAlign: 'center'}}>¿Como deseas medir tus porciones de alimentos?</Text>
      <TouchableOpacity style={styles.containeritems} >
        <View style={{alignItems: 'center',flexDirection:'row',marginTop:12}}>
          <Image source={icon_mano} style={{width:55,height:55,tintColor: 'orange'}}/>
          <Image source={icon_puno} style={{width:55,height:55,tintColor: 'orange'}}/>
          <Image source={icon_taza} style={{width:55,height:55,tintColor: 'orange'}}/>
          <Image source={icon_spoon} style={{width:55,height:55,tintColor: 'orange'}}/>
        </View>
        <Text style={{color: 'white',fontSize:20,textAlign: 'center',fontWeight: 'bold'}}>Palmas puños tazas y cdas</Text>
        <Text style={{color: 'white',fontSize:16,textAlign: 'center',marginTop: 12}}>Facil de utilizar u consideran tu tamaño corporal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containeritems}>
      <View style={{alignItems: 'center',flexDirection:'row',marginTop:12}}>
          <Image source={icon_balance} style={{width:55,height:55,tintColor: 'orange'}}/>
          
        </View>
        <Text style={{color: 'white',fontSize:20,textAlign: 'center',fontWeight: 'bold'}}>Gramos</Text>
        <Text style={{color: 'white',fontSize:16,textAlign: 'center',marginTop: 12}}>Recomendable si cuentas con balanza para alimentos</Text>
      </TouchableOpacity>
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
    width:330,
    margin:12,
    marginTop: 30,
    padding: 12,
    marginRight: 12,
    marginLeft: 12,
    backgroundColor: _GeneralColors.items,
    borderRadius: 10
  },
  image: {
    margin:4,
    width: 35,
    height: 35,
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