import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { hp, wp } from '../../../enums/styleGuide';
import Textinput2 from '../Textinputt';
export default function SignUpStep2(props:any) {
  const {navigation }=props
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        width: '90%',
        height: '100%',
        alignSelf: 'center',
        position: 'absolute',
        marginTop: hp(30),
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

        // iOS Shadow
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: -6 }, // top shadow
        shadowOpacity: 0.4,
        shadowRadius: 12,

        // Android Shadow
        elevation: 18,
      }}
    >
      <Text
        style={{
          fontSize: wp(6),
          fontWeight: '400',
          marginLeft: wp(8),
          marginTop: wp(5),
          color: '#412160',
        }}
      >
        Upload Documents
      </Text>
      <View style={{ marginTop: wp(5) }}>
        <Textinput2
          imageSource={require('../../../assets/icons/id.png')}
          imageStyle={{ width: 40, height: 40 }}
          placeholderText={'Upload ID Proof'}
          textInputStyle={{ fontSize: wp(4), color: '#412160' }}
        />

        <View style={{ marginTop: wp(2) }}>
          <Textinput2
            imageSource={require('../../../assets/icons/contact.png')}
            imageStyle={{ width: 40, height: 40 }}
            placeholderText={'Upload Your Photo'}
            textInputStyle={{ fontSize: wp(4), color: '#412160' }}
          />
        </View>

        <TouchableOpacity
        onPress={()=> navigation.navigate("MainApp")}
          style={{
            width: '90%',
            height: '16%',
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: wp(8),
            borderRadius: 28,
            backgroundColor: '#412160',
          }}
        >
          <Text
            style={{
              fontSize: wp(5),
              fontWeight: '400',
              alignSelf: 'center',
              color: '#FFFFFF',
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: wp(5),
            gap: wp(1.5),
          }}
        >
          <Text
            style={{ marginTop: wp(2), fontSize: wp(3.8), fontWeight: '400' }}
          >
            Already have an account?
          </Text>
          <TouchableOpacity>
            <Text
              style={{ fontSize: wp(5.5), fontWeight: '400', color: '#412160' }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
