import {StyleSheet} from 'react-native';
import {_GeneralColors} from '@colors/index';

export default StyleSheet.create({
  container: {
    backgroundColor: 'black',
    marginBottom: 12,
    borderRadius: 20,
    borderColor: _GeneralColors.primary,
    borderWidth: 1.2,
    paddingTop: 10,
    paddingHorizontal: 15,
  
    width:'100%',
    marginRight: 12,
    marginLeft: 12,
  },
  label: {
    fontWeight: 'bold',
    color: _GeneralColors.primary,
  },
  required: {
    color: 'red',
  },
  textInput: {
    padding: 0,
    marginVertical: 10,
    color: 'white',
  },
});
