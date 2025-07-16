import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { hp, wp } from '../../enums/styleGuide';
import Textinputt from '../../component/Core/Textinputt';

export default function passengerSignUp() {
  return (
    <View style={{ flex: 1, backgroundColor: '#412160' }}>
      <View
        style={{
          width: '90%',
          height: '100%',
          alignSelf: 'center',
          backgroundColor: '#FFFFFF',
          marginTop: hp(13),
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: hp(10) }}
        >
          <Text
            style={{
              fontSize: wp(9),
              fontWeight: '400',
              alignSelf: 'center',
              marginTop: wp(8),
              color: '#412160',
            }}
          >
            Sign Up
          </Text>

          <Textinputt
            imageSource={require('../../assets/icons/contact.png')}
            imageStyle={{ width: 48, height: 48 }}
            placeholderText={'Full Name'}
            textInputStyle={{ fontSize: wp(5), color: '#412160' }}
          />

          <Textinputt
            imageSource={require('../../assets/icons/mail.png')}
            imageStyle={{ width: 48, height: 48 }}
            placeholderText={'Email Id'}
            textInputStyle={{ fontSize: wp(5), color: 'black' }}
          />

          <Textinputt
            imageSource={require('../../assets/icons/eye.png')}
            imageStyle={{ width: 48, height: 48 }}
            placeholderText={'Password'}
            textInputStyle={{ fontSize: wp(5), color: '#412160' }}
          />

          <Textinputt
            imageSource={require('../../assets/icons/eye.png')}
            imageStyle={{ width: 48, height: 48 }}
            placeholderText={'Confirm Password'}
            textInputStyle={{ fontSize: wp(5), color: 'black' }}
          />

          <Textinputt
            imageSource={require('../../assets/icons/phone.png')}
            imageStyle={{ width: 48, height: 48 }}
            placeholderText={'Mobile Number'}
            textInputStyle={{ fontSize: wp(5), color: '#412160' }}
          />

          <Textinputt
            imageSource={require('../../assets/icons/calender.png')}
            imageStyle={{ width: 48, height: 48 }}
            placeholderText={'Date of  birth'}
            textInputStyle={{ fontSize: wp(5), color: '#412160' }}
          />

          <Textinputt
            imageSource={require('../../assets/icons/location.png')}
            imageStyle={{ width: 48, height: 48 }}
            placeholderText={'Estate & City'}
            textInputStyle={{ fontSize: wp(5), color: '#412160' }}
          />

          <TouchableOpacity

            style={{
              width: '90%',
              height: '6%',
              alignSelf: 'center',
              justifyContent: 'center',
              borderRadius: 25,
              backgroundColor: '#412160',
              marginTop: wp(6),
            }}
          >
            <Text
              style={{
                fontSize: wp(5.5),
                fontWeight: '600',
                alignSelf: 'center',
                color: '#FFFFFF',
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>

          <View
            style={{
              alignSelf: 'center',
              marginTop: wp(2),
              flexDirection: 'row',
              gap: 4,
            }}
          >
            <Text
              style={{
                fontSize: wp(4),
                fontWeight: '400',
                marginTop: wp(2),
              }}
            >
              Already have an account?
            </Text>
            <TouchableOpacity>
              <Text style={{ fontSize: wp(6), fontWeight: '400',color:"#412160" }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
