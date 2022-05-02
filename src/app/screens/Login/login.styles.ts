import {StyleSheet} from 'react-native';
import {Edges} from '@styles/index';

export default StyleSheet.create({
  container: {
    paddingHorizontal: Edges.PADDING_HORIZONTAL,
  },
  wrapperLogo: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
  },
  logo: {
    width: 250,
    height: 150,
    resizeMode: 'contain',
  },
  wrapperButtom: {
    marginTop: 15,
    width: '100%'
  },
  version:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 30,
  },
  label_version:{
    color: 'white'
  }
});
