import { StyleSheet } from 'react-native';
import { hp, wp } from '../../enums/styleGuide';

export const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: '#0000006E',
  },
  Image: {
    width: wp(10),
    height: wp(10),
    marginTop: wp(9),
    marginLeft: wp(4),
  },
  View: {
    width: '100%',
    height: '80%',
    backgroundColor: '#FFFFFF',
    marginTop: hp(15),
  },
  viewimage: {
    width: '30%',
    height: '17.8%',
    marginTop: wp(10),
    alignSelf: 'center',
  },
  Text: {
    fontSize: wp(6),
    fontWeight: '500',
    marginTop: wp(6),
    alignSelf: 'center',
    color: '#555555',
  },
  text: {
    fontSize: wp(6),
    fontWeight: '600',
    marginTop: wp(4),
    alignSelf: 'center',
    color: '#000000',
  },
  starImage: {
    width: wp(70),
    height: wp(8),
    alignSelf: 'center',
    marginTop: wp(10),
  },
  inputtext: {
    fontSize: wp(5),
    fontWeight: '500',
    marginTop: wp(7),
    marginLeft: hp(2),
    color: '#555555',
  },
  Textinnput: {
    width: '90%',
    height: hp(15), // Fixed height using hp for consistency
    marginTop: wp(2),
    marginLeft: hp(2),
    borderRadius: wp(3),
    borderWidth: 1,
    borderColor: '#412160',
    padding: wp(2), // Added padding for better text visibility
    textAlignVertical: 'top', // Ensures text starts from top for multiline
    paddingHorizontal:wp(4)
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '80%',
    marginTop: hp(5),
  },
  touchable: {
    width: '45%',
    height: hp(6), // Fixed height for consistency
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 8,
    justifyContent: 'center',
  },
  touchabletex: {
    alignSelf: 'center',
    fontSize: wp(4.5),
    color: '#412160',
    fontWeight: '600',
  },
  touchable2: {
    width: '45%',
    height: hp(6), // Fixed height for consistency
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: '#412160',
  },
  touchabletext2: {
    fontSize: wp(4.5),
    fontWeight: '600',
    alignSelf: 'center',
    color: '#FFFFFF',
  },
});
