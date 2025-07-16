import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { hp, wp } from '../../enums/styleGuide';

export default function signUp(props: any) {
  const { navigation } = props;

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/images/carlocation.png')}
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
        resizeMode="cover"
      >
        {/* Title */}
        <Text
          style={{
            fontSize: wp(6.9),
            fontWeight: '400',
            color: '#FFFFFF',
            marginTop: wp(10),
          }}
        >
          Saidiwa Ride Sharing
        </Text>

        {/* Sign Up Heading */}
        <Text
          style={{
            fontSize: wp(9),
            fontWeight: '500',
            color: '#FFFFFF',
            marginTop: hp(30),
          }}
        >
          Sign Up
        </Text>

        {/* Sign Up for Driver */}
        <TouchableOpacity

        onPress={()=> navigation.navigate("driverSignUp")}
          style={{
            width: '85%',
            height: hp(6),
            justifyContent: 'center',
            borderRadius: 25,
            backgroundColor: '#FFFFFF',
            marginTop: wp(8),
          }}
        >
          <Text
            style={{
              fontSize: wp(5.5),
              fontWeight: '500',
              alignSelf: 'center',
              color: '#412160',
            }}
          >
            SignUp for Driver
          </Text>
        </TouchableOpacity>

        {/* Sign Up for Passenger */}
        <TouchableOpacity
          onPress={() => navigation.navigate('passengerSignUp')}
          style={{
            width: '85%',
            height: hp(6),
            justifyContent: 'center',
            borderRadius: 25,
            backgroundColor: '#FFFFFF',
            marginTop: wp(4),
          }}
        >
          <Text
            style={{
              fontSize: wp(5.5),
              fontWeight: '500',
              alignSelf: 'center',
              color: '#412160',
            }}
          >
            SignUp for Passenger
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
