import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { hp, wp } from '../../../enums/styleGuide';
import Textinputt from '../Textinputt';

export default function SignUpStep1({ onContinue }) {
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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -6 },
        shadowOpacity: 0.4,
        shadowRadius: 12,
        elevation: 18,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontSize: wp(6.5),
            marginLeft: 20,
            color: '#412160',
            marginTop: 10,
            fontWeight: '400',
          }}
        >
          Driver Details
        </Text>
<View style={{ marginTop: wp(2) }}>
  {[
    {
      placeholder: 'Full Name',
      icon: require('../../../assets/icons/contact.png'),
    },
    {
      placeholder: 'Email Id',
      icon: require('../../../assets/icons/mail.png'),
    },
    {
      placeholder: 'Password',
      icon: require('../../../assets/icons/eye.png'),
    },
    {
      placeholder: 'Confirm Password',
      icon: require('../../../assets/icons/eye.png'),
    },
    {
      placeholder: 'Mobile Number',
      icon: require('../../../assets/icons/phone.png'),
    },
    {
      placeholder: 'Date of birth',
      icon: require('../../../assets/icons/calender.png'),
    },
    {
      placeholder: 'Estate & City',
      icon: require('../../../assets/icons/location.png'),
    },
  ].map((item, index) => (
    <Textinputt
      key={index}
      imageSource={item.icon}
      imageStyle={{ width: 38, height: 38 }}
      placeholderText={item.placeholder}
      textInputStyle={{ fontSize: wp(4), color: '#412160' }}
    />
  ))}
</View>


        <TouchableOpacity
          onPress={onContinue}
          style={{
            width: '90%',
            height: '6.5%',
            backgroundColor: '#412160',
            alignSelf: 'center',
            marginTop: hp(3),
            borderRadius: 20,
            justifyContent: 'center',
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
            Save and Continue
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            gap: 5,
            marginTop: wp(2),
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: wp(4), fontWeight: '400',marginTop:wp(2) }}>
            Already have an account?
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: wp(6),
                fontWeight: '500',
                color: '#412160',
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
