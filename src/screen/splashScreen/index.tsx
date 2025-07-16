import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { hp, wp } from '../../enums/styleGuide';

export default function SplashScreen({ navigation }: any) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('rideDetails'); // works now
    }, 2000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#412160',
      }}
    >
      <Text
        style={{
          alignSelf: 'center',
          fontSize: wp(7),
          fontWeight: '400',
          color: '#FFFFFF',
        }}
      >
        Saidiwa Ride
      </Text>
    </View>
  );
}
