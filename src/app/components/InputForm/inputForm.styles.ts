import {StyleSheet} from 'react-native';
import {_GeneralColors} from '@colors/index';

export default StyleSheet.create({
  container: {
    backgroundColor: _GeneralColors.lightGray,
    marginBottom: 12,
    borderRadius: 20,
    borderWidth: 1.2,
    paddingTop: 10,
    paddingHorizontal: 15,
    opacity: 0.5,
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
    opacity: 50,
  },
});
