import { StyleSheet } from 'react-native';
import { hp, wp } from '../../enums/styleGuide';
export const styles = StyleSheet.create({
  Header: {
    width: '100%',
    height: '6.5%',
    justifyContent: 'center',
    backgroundColor: '#ffffff',

    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // Android Shadow
    elevation: 5,
  },
  Headertext: {
    fontSize: wp(5),
    fontWeight: '700',
    color: '#000',
    alignSelf: 'center',
  },

  Image: {
    width: wp(30),
    height: wp(30),
    alignSelf: 'center',
    marginTop: hp(10),
  },
  Text: {
    fontSize: wp(6),
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: hp(3),
    color: '#000',
  },
  Text2: {
    fontSize: wp(14),
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: hp(1),
    color: '#000',
  },
  View: {
    width: '80%',
    height: '6%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: wp(15),
    flexDirection: 'row',
  },
  text: {
    fontSize: wp(5),
    fontWeight: '700',
    color: '#000000',
  },

  text1: {
    fontSize: wp(4.5),
    fontWeight: '700',
  },

  view: {
    width: '80%',
    height: '6%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: wp(2),
    flexDirection: 'row',
  },

  touchable: {
    width: '100%',
    height: '6.5%',
    justifyContent: 'center',
    marginTop: hp(19),
    backgroundColor: '#412160',
  },
  touchabletext: {
    fontSize: wp(4.5),
    fontWeight: '700',
    color: '#FFFFFF',
    alignSelf: 'center',
  },
});
