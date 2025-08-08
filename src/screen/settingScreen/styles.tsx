import { StyleSheet } from 'react-native';
import { hp, wp } from '../../enums/styleGuide';
export const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '6.5%',
    backgroundColor: '#412160',
    justifyContent: 'center',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: wp(7),
    width: '80%',
  },
  headerimage: {
    width: 20,
    height: 20,
    tintColor: '#fff',
    marginTop: wp(1),
  },
  headertext: {
    fontSize: wp(5),
    fontWeight: '600',
    color: '#fff',
  },

  View: {
    width: '90%',
    alignSelf: 'center',
    marginTop: hp(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  View2: {
    flexDirection: 'row',
    gap: wp(5),
  },
  Image1: {
    width: 25,
    height: 25,
    marginTop: wp(0.5),
    tintColor: '#412160',
  },
  Text: {
    fontSize: wp(5),
    fontWeight: '600',
  },
  Image2: {
    width: 25,
    height: 25,
    tintColor: '#412160',
  },

  MainView2: {
    width: '90%',
    alignSelf: 'center',
    marginTop: hp(2.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
