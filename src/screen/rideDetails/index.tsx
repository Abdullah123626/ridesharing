import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { hp, wp } from '../../enums/styleGuide';
import SchduleRide from '../../component/Core/SchduleRide';
import Flexibile from '../../component/Core/Flexible';

export default function rideDetails(props: any) {
  const { navigation } = props;
  const [selectedRideType, setSelectedRideType] = useState<'flexible' | 'schedule' | null>(null);

  return (
    <View style={{ flex: 1, backgroundColor: '#412160' }}>
      {/* Header */}
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

      {/* Body */}
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
          marginTop: wp(4),
          borderTopLeftRadius: wp(5),
          borderTopRightRadius: wp(5),
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>

          {/* FLEXIBLE OPTION */}
          <View
            style={{
              flexDirection: 'row',
              width: '60%',
              marginLeft: wp(8),
              marginTop: wp(8),
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              onPress={() => setSelectedRideType('flexible')}
              style={{
                width: 17,
                height: 17,
                borderRadius: 30,
                borderWidth: 2,
                borderColor: selectedRideType === 'flexible' ? '#412160' : '#555555',
                backgroundColor: selectedRideType === 'flexible' ? '#412160' : 'transparent',
              }}
            />
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

          {/* SCHEDULE RIDE OPTION */}
          <View
            style={{
              flexDirection: 'row',
              width: '60%',
              marginLeft: wp(8),
              marginTop: wp(4),
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              onPress={() => setSelectedRideType('schedule')}
              style={{
                width: 17,
                height: 17,
                borderRadius: 30,
                borderWidth: 2,
                borderColor: selectedRideType === 'schedule' ? '#412160' : '#555555',
                backgroundColor: selectedRideType === 'schedule' ? '#412160' : 'transparent',
              }}
            />
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

          {/* COMPONENT DISPLAY AREA */}
          <View style={{ marginTop: wp(8), paddingHorizontal: wp(5), marginBottom: wp(10) }}>
            {selectedRideType === 'flexible' && <Flexibile />}
            {selectedRideType === 'schedule' && <SchduleRide />}
          </View>

        </ScrollView>
      </View>
    </View>
  );
}
