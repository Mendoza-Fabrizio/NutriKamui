import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import headerStyles from './header.styles';
import {HeaderProps, HeaderNavProps} from '@interfaces/header';
import { icon_back_arrow } from 'modules/resources/images';
const Header: React.FC<HeaderProps> = ({
  leftComponent,
  haveReturnBtn = false,
  customGoBack,
}) => {
  const navigation = useNavigation<HeaderNavProps>();
  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.leftContent}>
        {haveReturnBtn ? (
          <TouchableOpacity
            style={headerStyles.goBackBtn}
            onPress={() =>
              customGoBack ? customGoBack() : navigation.goBack()
            }>
            <Image source={icon_back_arrow} style={{width:35,height:35,tintColor:'white'}}/>
          </TouchableOpacity>
        ) : (
          leftComponent
        )}
        <Text style={headerStyles.title}></Text>
      </View>
    </View>
  );
};

export default Header;
