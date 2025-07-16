import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import { hp, wp } from '../../enums/styleGuide';
import Textinputt from '../../component/Core/Textinputt';
import signinScreen from '../signinScreen';

export default function forgotPassword(props: any) {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, backgroundColor: '#412160' }}>
      <Text
        style={{
          fontSize: wp(6),
          fontWeight: '400',
          alignSelf: 'center',
          marginTop: wp(12),
          color: '#FFFFFF',
        }}
      >
        Saidiwa Ride Sharing
      </Text>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          width: '90%',
          height: '80%',
          marginTop: wp(5),
          alignSelf: 'center',
          borderRadius: 15,
        }}
      >
        <Text
          style={{
            fontSize: wp(8),
            fontWeight: '500',
            alignSelf: 'center',
            marginTop: hp(7),
            color: '#412160',
          }}
        >
          {' '}
          Forgot Password
        </Text>
        <View
          style={{
            width: wp(80),
            height: hp(6),
            borderRadius: 29,
            borderWidth: 1,
            alignSelf: 'center',
            marginTop: wp(11),
            flexDirection: 'row',
          }}
        >
          <Image
            source={require('../../assets/icons/contact.png')}
            style={{ width: 50, height: 50, marginRight: 10 }}
          />
          <TextInput
            placeholder="Enter Email or Number"
            style={{
              color: '#412160',
              fontWeight: '700',
              fontSize: wp(4),
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('signUp')}
          style={{
            width: '90%',
            height: '7%',
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: wp(7),
            borderRadius: 25,
            backgroundColor: '#412160',
          }}
        >
          <Text
            style={{
              fontSize: wp(5.5),
              fontWeight: '400',
              alignSelf: 'center',
              color: '#FFFFFF',
            }}
          >
            Send
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            gap: 6,
            marginTop: wp(2),
            marginLeft: hp(23),
          }}
        >
          <Text style={{ fontSize: wp(3.6), marginTop: wp(2.8) }}>Back to</Text>
          <TouchableOpacity onPress={() => navigation.navigate('signinScreen')}>
            <Text
              style={{ fontSize: wp(6.4), fontWeight: '400', color: '#412160' }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '120%',
            height: '60%',
            alignSelf: 'center',
            marginTop: wp(26),
            overflow: 'hidden',
          }}
        >
          {/* Arc Circle with Stronger Shadow */}
          <View
            style={{
              position: 'absolute',
              top: wp(27),
              left: -wp(10.7),
              width: wp(130),
              height: wp(130),
              borderRadius: wp(130) / 2,
              backgroundColor: '#FFFFFF',

              // Shadow (iOS)
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.6,
              shadowRadius: 20,
              elevation: 24,
            }}
          />

          {/* Text Content */}
          <View style={{ marginTop: wp(35) }}>
            <Text
              style={{
                fontSize: wp(4.5),
                fontWeight: '400',
                alignSelf: 'center',
                marginTop: wp(1),
                color: '#412160',
              }}
            >
              Don’t have an account?
            </Text>
            <Text
              style={{
                fontSize: wp(7),
                fontWeight: '400',
                color: '#412160',
                alignSelf: 'center',
                marginTop: wp(3),
              }}
            >
              Sign Up
            </Text>

            <View
              style={{
                width: wp(40),
                alignSelf: 'center',
                marginTop: wp(6),
                flexDirection: 'row',
                gap: hp(1.5),
              }}
            >
              <TouchableOpacity
                onPress={() => Linking.openURL('https://www.facebook.com/')}
              >
                <Image
                  source={require('../../assets/icons/facebook.png')}
                  style={{ width: wp(18), height: wp(18) }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => Linking.openURL('https://www.google.com/')}
              >
                <Image
                  source={require('../../assets/icons/google.png')}
                  style={{ width: wp(18), height: wp(18) }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
