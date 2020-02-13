import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 50,
  },
  header: {
    width,
    paddingHorizontal: 36,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
