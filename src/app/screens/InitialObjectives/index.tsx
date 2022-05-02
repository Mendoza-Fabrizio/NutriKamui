import React from 'react'
import {
  SafeAreaView,
  Animated,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import {generalStyles} from '@styles/index';
import {
  AppRoutes,
  MainNavigationProp as PrincipalNavigationProp,
} from '@router/index';
import {useNavigation} from '@react-navigation/native';
import { _GeneralColors} from 'modules/resources/colors';
import {icon_lose_weight,icon_keep_weight,icon_get_strong} from '@images/index'
export type InitialObjectivesNavigationProps = PrincipalNavigationProp<AppRoutes>;
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from 'app/components/Button/index';
import { AuthRoutes } from 'app/router/AuthRoute';
import Header from 'app/components/Header';
export default function InitialObjectives() {
  const navigation = useNavigation<InitialObjectivesNavigationProps>();
  return (
    <SafeAreaView style={generalStyles.container}>
      <View style={{width:'100%'}}>
      <Header
      haveReturnBtn={true}
      />
      </View>
      <Text style={styles.label}>¿Cuál es tu objetivo?</Text>
      <TouchableOpacity style={styles.containeritems}>
        <Image source={icon_lose_weight} style={{width:75,height:75,margin:12 }}/>
        <View style={{flexDirection:'column', width: 200, margin:12}}>
          <Text style={{textAlign: 'center',color:'white',fontSize: 16, fontWeight: 'bold'}}>Perder Peso</Text>
          <Text style={{textAlign: 'center',color:'white',fontSize: 14,marginTop: 10}}>Maximiza la perdida de grasa y conserva tu masa muscular</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containeritems}>
        <Image source={icon_keep_weight} style={{width:75,height:75,margin:12}}/>
        <View style={{flexDirection:'column', width: 200, margin:12}}>
          <Text style={{textAlign: 'center',color:'white',fontSize: 16, fontWeight: 'bold'}}>Mantener Peso</Text>
          <Text style={{textAlign: 'center',color:'white',fontSize: 14,marginTop: 10}}>Conserva tu estado fisico y mantente saludable</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containeritems}>
        <Image source={icon_get_strong} style={{width:75,height:75,margin:12}}/>
        <View style={{flexDirection:'column', width: 200, margin:12}}>
          <Text style={{textAlign: 'center',color:'white',fontSize: 16, fontWeight: 'bold'}}>Ganar Musculo</Text>
          <Text style={{textAlign: 'center',color:'white',fontSize: 14,marginTop: 10}}>Incrementa tu masa muscular y vuelvete mas fuerte</Text>
        </View>
      </TouchableOpacity>
      <View style={{height: 200,width:'100%',alignItems:'center'}}>
        <Text style={styles.label}></Text>
      </View>
      
    </SafeAreaView>
  )
  
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
  containeritems:{
    flexDirection:'row',
    alignItems: 'flex-start',
    width:350,
    margin: 12,
    marginRight: 12,
    marginLeft: 12,
    backgroundColor: _GeneralColors.items,
    borderRadius: 25
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