import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { hp, wp } from '../../enums/styleGuide';
export default function homeScreen(props:any) {
  const {navigation} =props
  return (
    <View style={{ flex: 1, backgroundColor: '#412160' }}>
      <View
        style={{
          width: wp(90),
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'space-between',
          marginTop: wp(2),
        }}
      >
        <TouchableOpacity>
        <Image
          source={require('../../assets/icons/slash.png')}
          style={{ width: 50, height: 50 }}
        />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: wp(5.5),
            fontWeight: '500',
            color: '#FFFFFF',
            marginTop: wp(2),
          }}
        >
          Home
        </Text>
        <View style={{ marginRight: wp(8) }}></View>
      </View>

      <View
        style={{
          width: '100%',
          height: '100%',
          marginTop: wp(1),
          backgroundColor: '#FFFFFF',
        }}
      >
        <View
          style={{
            width: '90%',
            height: hp(70),
            borderRadius: 12,
            borderWidth:0.001,
            alignSelf: 'center',
            marginTop: hp(10),
            shadowColor: '#000',
            shadowOffset: { width:0, height: 3 },
            shadowOpacity: 0.15,
            shadowRadius: 6,
            // Android Shadow
            elevation:1.5,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              justifyContent: 'space-between',
              width: '88%',
              marginTop: wp(4),
            }}
          >
            <Image
              source={require('../../assets/images/purpleprofile.png')}
              style={{ width: wp(25), height: wp(25) }}
            />
            <View style={{ marginTop: wp(4) }}>
              <Text style={{ fontSize: wp(4.8), color: '#412160' }}>
                Passenger Name
              </Text>
              <Text
                style={{
                  fontSize: wp(4.8),
                  color: '#412160',
                  marginLeft: wp(5),
                }}
              >
                Wed 12/02/20
              </Text>
              <Text
                style={{
                  fontSize: wp(4.8),
                  color: '#412160',
                  marginLeft: wp(15),
                }}
              >
                01:05PM
              </Text>
            </View>
          </View>

          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: wp(16),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{ fontSize: wp(5), fontWeight: '400', color: '#412160' }}
            >
              Contact Number
            </Text>
            <Text
              style={{ fontSize: wp(5), fontWeight: '400', color: '#412160' }}
            >
              XXXXXXXXXX
            </Text>
          </View>

          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: wp(5),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{ fontSize: wp(5), fontWeight: '400', color: '#412160' }}
            >
              Pickup Point
            </Text>
            <Text
              style={{ fontSize: wp(5), fontWeight: '400', color: '#412160' }}
            >
              Central City
            </Text>
          </View>

          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: wp(5),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{ fontSize: wp(5), fontWeight: '400', color: '#412160' }}
            >
              Drop location
            </Text>
            <Text
              style={{ fontSize: wp(5), fontWeight: '400', color: '#412160' }}
            >
              Airport
            </Text>
          </View>

          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: wp(5),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{ fontSize: wp(5), fontWeight: '400', color: '#412160' }}
            >
              Distance
            </Text>
            <Text
              style={{ fontSize: wp(5), fontWeight: '400', color: '#412160' }}
            >
              10KM
            </Text>
          </View>

          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: wp(5),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{ fontSize: wp(5), fontWeight: '400', color: '#412160' }}
            >
              Price{' '}
            </Text>
            <Text
              style={{ fontSize: wp(5), fontWeight: '400', color: '#412160' }}
            >
              $50
            </Text>
          </View>

          <View
            style={{
              width: '90%',
              height: '10%',
              alignSelf: 'center',
              marginTop: hp(10),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <TouchableOpacity
            onPress={()=>navigation.navigate("startRide")}
              style={{
                width: '45%',
                height: '80%',
                backgroundColor: '#17D406',
                justifyContent: 'center',
                borderRadius: 12,
              }}
            >
              <Text
                style={{
                  color: '#FFFFFF',
                  alignSelf: 'center',
                  fontSize: wp(4.5),
                  fontWeight: '500',
                }}
              >
                Accept
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: '45%',
                height: '80%',
                backgroundColor: '#FD1919',
                justifyContent: 'center',
                borderRadius: 12,
              }}
            >
              <Text
                style={{
                  color: '#FFFFFF',
                  alignSelf: 'center',
                  fontSize: wp(4.5),
                  fontWeight: '500',
                }}
              >
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
