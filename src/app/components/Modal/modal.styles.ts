import {StyleSheet} from 'react-native';
import {_GeneralColors} from '@colors/index';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: _GeneralColors.background,
    paddingHorizontal: 10,
  },
  content: {
    backgroundColor: _GeneralColors.lightGray,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
  },
});
