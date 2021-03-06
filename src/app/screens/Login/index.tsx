import React from 'react';
import {View, BackHandler, Image, SafeAreaView, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {generalStyles} from '@styles/index';
import InputForm from '@components/InputForm/index';
import {
  AppRoutes,
  MainNavigationProp as PrincipalNavigationProp,
} from '@router/index';
import Buttom from '@components/Button/index';
import loginStyles from './login.styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from 'app/components/Header';
import MainRoute from 'app/router/MainRoute';
import { icon_logo } from 'modules/resources/images';
export type LoginNavigationProps = PrincipalNavigationProp<AppRoutes.AuthRoute>;
export interface LoginScreenProps {
  email: string;
  password: string;
  actionSetEmail: (email: string) => void;
  actionSetPassword: (password: string) => void;
  actionLoginUser: (navigation: LoginNavigationProps) => void;
}
const LoginScreen: React.FC<LoginScreenProps> = () => {
  const navigation = useNavigation<LoginNavigationProps>();
  const [email,setEmail] = React.useState("");
  const [password,setPassword] = React.useState("");
  const handleLoginUser =  (navigation: LoginNavigationProps) => {

  }
  const onGoBackCallback = () => {
    return true;
  };
  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onGoBackCallback);
    navigation.addListener('beforeRemove', onGoBackCallback);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onGoBackCallback);
      navigation.removeListener('beforeRemove', onGoBackCallback);
    };
  }, [navigation]);

  return (
    <SafeAreaView style={[generalStyles.container, loginStyles.container]}>
      <View style={{width: '100%',marginRight: 60}}>
      <Header
      haveReturnBtn={true}
      />
      </View>
      <View style={{justifyContent: 'space-between',width:'100%',height:'100%',alignItems:'center',flex:1,marginTop:100}}>
      <Image source={icon_logo} style={{width:90,height:90}}/>
      <InputForm
        label="Correo/Nombre de usuario"
        placeHolder="Ingrese su correo electr??nico"
        keyboardType="email-address"
        onChangeValue={setEmail}
        value={email}
      />
      <InputForm
        label="Contrase??a"
        placeHolder="Ingrese su contrase??a"
        onChangeValue={setPassword}
        value={password}
        secureText
      />
      <View style={loginStyles.wrapperButtom}>
        <Buttom
          handleOnPress={() => navigation.navigate(AppRoutes.MainRoute)}
          label="INICIAR SESI??N"
          disabled={password.length === 0 || email.length === 0}
        />
      </View>
      <View
        style={loginStyles.version}>
        <Text style={loginStyles.label_version}>Powered by NutriKamui - v1.0.1</Text>
      </View>
      </View>
      
    </SafeAreaView>
  );
};
export default LoginScreen;