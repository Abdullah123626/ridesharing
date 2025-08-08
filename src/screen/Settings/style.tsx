import { StyleSheet } from 'react-native';
import { hp, wp } from '../../enums/styleGuide';

export const styles = StyleSheet.create({
  Header: {
    width: '100%',
    height: '6.5%',
    backgroundColor: '#412160',
    justifyContent: 'center',
  },
  Headerview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: wp(5),
    width: '83%',
  },
  Image: {
    width: 20,
    height: 20,
    tintColor: '#fff',
    marginTop: wp(1),
  },
  Text: {
    fontSize: wp(5.5),
    fontWeight: '700',
    color: '#fff',
  },

  View: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginTop: wp(10),
  },

  view: {
    flexDirection: 'row',
    gap: wp(4),
  },
  Image1: {
    width: 20,
    height: 20,
    tintColor: '#412160',
  },
  text: {
    fontSize: wp(4.5),
    fontWeight: '500',
    color: '#412160',
  },
  Image2: {
    width: 20,
    height: 20,
    tintColor: '#412160',
    marginTop: wp(1),
  },
  View2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginTop: wp(5),
  },
});
