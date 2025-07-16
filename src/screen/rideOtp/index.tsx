import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { hp, wp } from '../../enums/styleGuide';
export default function RideOtp() {
  const navigation = useNavigation();

  const origin = {
    latitude: 37.78825,
    longitude: -122.4324,
  };

  const destination = {
    latitude: 37.79457,
    longitude: -122.4212,
  };

  const routeCoords = [
    origin,
    {
      latitude: 37.79085,
      longitude: -122.4284,
    },
    destination,
  ];

  return (
    <View style={{ flex: 1 }}>
      {/* Map View */}
      <MapView
        style={{ width: '100%', height: '100%' }}
        initialRegion={{
          ...origin,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {/* Polyline Route */}
        <Polyline
          coordinates={routeCoords}
          strokeColor="#800080" // Purple
          strokeWidth={5}
        />

        {/* Car Marker at Start of Route */}
        <Marker coordinate={routeCoords[0]}>
          <Image
            source={require('../../assets/images/car2.png')}
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
          />
        </Marker>

        {/* Location Marker at End of Route */}
        <Marker coordinate={routeCoords[routeCoords.length - 1]}>
          <Image
            source={require('../../assets/icons/location.png')}
            style={{ width: 30, height: 30 }}
            resizeMode="contain"
          />
        </Marker>
      </MapView>

      {/* Slash Icon Overlay */}
      <TouchableOpacity
        onPress={() => navigation.openDrawer?.()}
        style={{
          position: 'absolute',
          top: 50,
          left: 20,
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 30,
          elevation: 5,
        }}
      >
        <Image
          source={require('../../assets/icons/slash.png')}
          style={{ width: 25, height: 25 }}
          resizeMode="contain"
        />
      </TouchableOpacity>

      {/* Bottom White View */}
      <View
       style={{ position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '22%',
    backgroundColor: 'white',
    elevation: 20, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: -5 }, // Shadow only on top side
    shadowOpacity: 0.25,
    shadowRadius: 8,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    zIndex: 999,
  }}
      >
        {' '}
        <View
          style={{
            flexDirection: 'row',
            gap: hp(6),
            marginTop: wp(2),
            alignSelf: 'center',
          }}
        >
          <Image
            source={require('../../assets/images/purpleprofile.png')}
            style={{ width: wp(20), height: wp(20) }}
          />
          <View>
            <Text
              style={{
                fontSize: wp(5.5),
                fontWeight: '500',
                color: '#412160',
              }}
            >
              Driver Name{' '}
            </Text>
            <Text
              style={{
                fontSize: wp(4),
                fontWeight: '500',
                color: '#412160',
                marginTop: wp(1),
              }}
            >
              Mini
            </Text>

            <Text
              style={{
                fontSize: wp(4),
                fontWeight: '500',
                color: '#412160',
                marginTop: wp(1),
              }}
            >
              Honda Car Name | 2018
            </Text>

            <View style={{ flexDirection: 'row', gap: 5, marginTop: wp(2) }}>
              <Image
                source={require('../../assets/icons/ourolephone.png')}
                style={{ width: 20, height: 20 }}
              />
              <Text
                style={{
                  fontSize: wp(4),
                  fontWeight: '500',
                  color: '#412160',
                }}
              >
                9874563210
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: '#412160',
            height: '22%',
            marginTop: hp(3),
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              width: wp(80),
              justifyContent: 'space-between',
              alignSelf: 'center',
              marginTop: wp(2),
            }}
          >
            <Text style={{ fontSize: wp(4.2), color: '#FFFFFF' }}>
              OTP before start your ride
            </Text>
            <Text style={{ fontSize: wp(4.5), color: '#FFFFFF' }}>2512</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
