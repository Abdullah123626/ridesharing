import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { hp, wp } from '../../enums/styleGuide';

export default function rideEnd({ navigation }: any) {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('reviewScreen'); // 👈 adjust name if different
    }, 2000);

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#412160' }}>
      <TouchableOpacity>
        <Image
          source={require('../../assets/icons/slash.png')}
          style={{ width: 50, height: 50, marginLeft: wp(5), marginTop: wp(2) }}
        />
      </TouchableOpacity>

      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#FFFFFF',
          marginTop: hp(1),
        }}
      >
        <Text
          style={{
            alignSelf: 'center',
            marginTop: wp(10),
            fontSize: wp(4.5),
            fontWeight: '500',
            color: '#412160',
          }}
        >
          Your ride Completed{' '}
        </Text>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: wp(4),
            fontSize: wp(6),
            fontWeight: '500',
            color: '#412160',
          }}
        >
          Total Amount
        </Text>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: hp(4),
            fontSize: wp(9),
            fontWeight: '600',
            color: '#412160',
          }}
        >
          $250
        </Text>
        <Image
          source={require('../../assets/icons/greentick.png')}
          style={{
            width: 140,
            height: 140,
            alignSelf: 'center',
            marginTop: wp(7),
          }}
        />
        <Text
          style={{
            fontSize: wp(4.5),
            fontWeight: '200',
            alignSelf: 'center',
            marginTop: hp(5),
          }}
        >
          Payment Succesful
        </Text>
        <Text
          style={{
            fontSize: wp(4.5),
            fontWeight: '200',
            alignSelf: 'center',
            marginTop: hp(5),
          }}
        >
          Monday, July 21, 02:56 PM
        </Text>
        <View
          style={{
            width: '100%',
            height: hp(6),
            justifyContent: 'center',
            backgroundColor: '#93939321',
            marginTop: hp(28),
          }}
        >
          <Text
            style={{
              fontSize: wp(4),
              fontWeight: '400',
              alignSelf: 'center',
              color: '#555555',
            }}
          >
            Thankyou For Choosing Us!
          </Text>
        </View>
      </View>
    </View>
  );
}
