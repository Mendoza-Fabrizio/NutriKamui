import React from 'react'
import {
  SafeAreaView,
  Animated,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {generalStyles} from '@styles/index';
import {
  AppRoutes,
  MainNavigationProp as PrincipalNavigationProp,
} from '@router/index';
import {useNavigation} from '@react-navigation/native';
import {icon_logo_main} from '@images/index'
export type SplashNavigationProps = PrincipalNavigationProp<AppRoutes>;
import Button from 'app/components/Button/index';
import Header from 'app/components/Header';
export default function FirstPage() {
  const logoFade = React.useRef(new Animated.Value(0)).current;
  const spinnerFade = React.useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<SplashNavigationProps>();
  return (
    <SafeAreaView style={generalStyles.container}>
      <Image source={icon_logo_main} style={{marginTop: 100,width:300,height:300}}/>
      <Text style={{textAlign: 'center',color: 'white',margin:12,marginTop:50,fontSize: 18,marginHorizontal:70}}>Consigue resultados con una alimentacion saludable e inteligente</Text>

      <Button label="Empezar" handleOnPress={()=>navigation.navigate(AppRoutes.InitialObjectives)}/>
      <Text style={{textAlign: 'center',color: 'white',margin:12,marginTop:30,fontSize: 18}}>¿Ya tienes una cuenta?</Text>
      <TouchableOpacity onPress={()=>navigation.navigate(AppRoutes.AuthRoute)}>
        <Text style={{textAlign: 'center',color: 'white',margin:12,fontSize: 18}}>Iniciar Sesion</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
  
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
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