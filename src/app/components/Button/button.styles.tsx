import {StyleSheet} from 'react-native';
import {_GeneralColors} from '@colors/index';

interface ButtonStylesProp {
  disabled: boolean;
}

export default ({disabled}: ButtonStylesProp) =>
  StyleSheet.create({
    container: {
      backgroundColor: disabled
        ? _GeneralColors.lightGray
        : _GeneralColors.primary,
      marginBottom: 10,
      paddingHorizontal: 20,
      paddingVertical: 15,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      marginTop:12,
      marginLeft: 12,
      marginRight: 12,
    },
    loading: {marginVertical: 1},
    label: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: 15,
    },
  });
