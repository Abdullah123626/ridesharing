import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import { hp, wp } from '../../enums/styleGuide.ts';

export default function signinScreen(props:any  ) {
  const {navigation} =props
  return (
    <View style={{ flex: 1, backgroundColor: '#412160' }}>
      <Text
        style={{
          fontSize: wp(6),
          fontWeight: '400',
          alignSelf: 'center',
          marginTop: wp(10),
          color: '#FFFFFF',
        }}
      >
        Saidiwa Ride Sharing
      </Text>
      <View
        style={{
          width: wp(90),
          height: hp(80),
          alignSelf: 'center',
          backgroundColor: '#FFFFFF',
          borderRadius: 15,
          marginTop: wp(5),
        }}
      >
        <Text
          style={{
            fontSize: wp(8),
            fontWeight: '400',
            alignSelf: 'center',
            marginTop: wp(6),
            color: '#412160',
          }}
        >
          {' '}
          Login
        </Text>

        <View
          style={{
            width: wp(80),
            height: hp(6),
            borderRadius: 29,
            borderWidth: 1,
            alignSelf: 'center',
            marginTop: wp(6),
            flexDirection: 'row',
          }}
        >
          <Image
            source={require('../../assets/icons/contact.png')}
            style={{ width: 50, height: 50, marginRight: 10 }}
          />
          <TextInput
            placeholder="Email or Number"
            style={{
              color: '#412160',
              fontWeight: '700',
              fontSize: wp(4.5),
            }}
          />
        </View>

        <View
          style={{
            width: wp(80),
            height: hp(6),
            borderRadius: 29,
            borderWidth: 1,
            alignSelf: 'center',
            marginTop: wp(6),
            flexDirection: 'row',
          }}
        >
          <Image
            source={require('../../assets/icons/lock.png')}
            style={{ width: 50, height: 50, marginRight: 10 }}
          />
          <TextInput
            placeholder="Password"
            style={{
              color: '#412160',
              fontWeight: '700',
              fontSize: wp(4.5),
            }}
          />
        </View>

        <View
          style={{
            marginTop: wp(4),
            marginLeft: wp(8),
            flexDirection: 'row',
            gap: 7,
          }}
        >
          <TouchableOpacity
            style={{ width: 20, height: 20, borderRadius: 2, borderWidth: 1 }}
          ></TouchableOpacity>
          <Text
            style={{ fontSize: wp(4), fontWeight: '400', color: '#412160' }}
          >
            Accept all terms and conditions
          </Text>
        </View>

        <TouchableOpacity
        onPress={()=>navigation.navigate ('forgotPassword')}
          style={{
            width: '85%',
            height: hp(6),
            alignSelf: 'center',
            justifyContent: 'center',
            borderRadius: 28,
            backgroundColor: '#412160',
            marginTop: wp(6),
          }}
        >
          <Text
            style={{
              fontSize: wp(4.8),
              fontWeight: '500',
              color: '#FFFFFF',
              alignSelf: 'center',
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate("forgotPassword")}>
          <Text
            style={{
              fontSize: wp(3.7),
              fontWeight: '500',
              color: '#412160',
              marginTop: wp(2),
              marginLeft: hp(24),
            }}
          >
            Forgot Password
          </Text>
        </TouchableOpacity>

        {/* Curved Grey Section with Arc + Shadow */}
        <View
          style={{
            width: '120%',
            height: '50%',
            alignSelf: 'center',
            marginTop: wp(26),
            overflow: 'hidden',
          }}
        >
          {/* Arc Circle with Stronger Shadow */}
          <View
            style={{
              position: 'absolute',
              top: wp(20),
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
          <View style={{ marginTop: wp(27) }}>
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
