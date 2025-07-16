import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { hp, wp } from '../../enums/styleGuide';
import ActiveRides from '../../component/Core/ActiveRdes';
import SchduleRide from '../../component/Core/SchduleRide';
export default function rideDetails(props: any) {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, backgroundColor: '#412160' }}>
      <View
        style={{
          width: '90%',
          marginTop: wp(5),
          alignSelf: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/icons/backarrow.png')}
            style={{
              width: 25,
              height: 25,
              tintColor: '#FFFFFF',
              marginTop: wp(1),
            }}
          />
        </TouchableOpacity>
        <Text
          style={{ fontSize: wp(5.5), fontWeight: '400', color: '#FFFFFF' }}
        >
          Ride Details
        </Text>
        <View style={{ marginRight: wp(7) }}></View>
      </View>

      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#FFFFFF',
          marginTop: wp(4),
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            width: '60%',
            marginLeft: wp(8),
            marginTop: wp(8),
          }}
        >
          <TouchableOpacity
            style={{
              width: 17,
              height: 17,
              borderRadius: 30,
              borderWidth: 2,
              marginTop: wp(1),
              borderColor: '#555555',
            }}
          ></TouchableOpacity>
          <Text
            style={{
              fontSize: wp(4.5),
              fontWeight: '500',
              marginLeft: wp(10),
              color: '#412160',
            }}
          >
            Flexible
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '60%',
            marginLeft: wp(8),
            marginTop: wp(8),
          }}
        >
          <TouchableOpacity
            style={{
              width: 17,
              height: 17,
              borderRadius: 30,
              borderWidth: 2,
              marginTop: wp(1),
              borderColor: '#555555',
            }}
          ></TouchableOpacity>
          <Text
            style={{
              fontSize: wp(5),
              fontWeight: '500',
              marginLeft: wp(10),
              color: '#412160',
            }}
          >
            Schedule Ride
          </Text>
        </View>

        <SchduleRide />
      </View>
    </View>
  );
}
