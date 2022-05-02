import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 25,
    elevation: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContent: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  goBackBtn: {
    marginRight: 15,
  },
  title: {color: 'white', fontSize: 17},
  icon: {width: 22, height: 22, resizeMode: 'contain', tintColor: 'white'},
});
