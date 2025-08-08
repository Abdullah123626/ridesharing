import { StyleSheet, Touchable } from 'react-native';
import { hp, wp } from '../../enums/styleGuide';
export const styles = StyleSheet.create({
  Header: {
    width: '100%',
    height: '6.5%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#412160',
  },
  Headerview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: wp(4),
    width: '85%',
  },
  Image: {
    width: 25,
    height: 25,
    tintColor: '#ffffff',
  },
  Text: {
    fontSize: wp(5),
    fontWeight: '700',
    color: '#FFFFFF',
    alignSelf: 'center',
  },
  text: {
    fontSize: wp(5),
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: wp(5),
    color: '#412160',
  },

  Touchableview: {
    marginTop: wp(10),
    width: '80%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  touchable: {
    width: '40%',
    height: hp(6),
    backgroundColor: '#412160',
    justifyContent: 'center',
    borderRadius: wp(2),
  },
  touchabletext: {
    fontSize: wp(4),
    fontWeight: '500',
    color: '#fff',
    alignSelf: 'center',
  },
  touchable2: {
    width: '40%',
    height: hp(6),
    backgroundColor: '#412160',
    justifyContent: 'center',
    borderRadius: wp(2),
  },

  mainView: {
    width: '90%',
    height: '25%',
    alignSelf: 'center',
    backgroundColor: '#412160',
    marginTop: hp(5),
    borderRadius: wp(2),

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,

    // Android shadow
    elevation: 8,
  },
  View: {
    flexDirection: 'row',
    marginLeft: wp(3),
    marginTop: wp(6),
    gap: wp(1.5),
  },
  Image1: {
    width: 17,
    height: 17,
    tintColor: '#FFFFFF',
  },
  text1: {
    fontSize: wp(3),
    fontWeight: '500',
    color: '#FFFFFF',
  },
  View1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: wp(10),
    width: '80%',
    alignSelf: 'center',
  },
  viewtext: {
    fontSize: wp(4),
    fontWeight: '500',
    color: '#fff',
  },
  View2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: wp(1),
    width: '80%',
    alignSelf: 'center',
  },

  Touchable: {
    width: '100%',
    height: '7%',
    backgroundColor: '#412160',
    marginTop: wp(21.5),
    justifyContent: 'center',
  },
  Touchbaletext: {
    fontSize: wp(5),
    fontWeight: '700',
    alignSelf: 'center',
    color: '#fff',
  },
});
