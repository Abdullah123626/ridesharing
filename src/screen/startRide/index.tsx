import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { hp, wp } from '../../enums/styleGuide';
export default function homeScreen(props:any) {
    const {navigation} =props
  return (
    <View style={{ flex: 1, backgroundColor: '#412160' }}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Image source={require("../../assets/icons/backarrow.png")} style={{width:30,height:30,marginTop:hp(2),tintColor:"#FFFFFF",marginLeft:wp(4)}}/>
</TouchableOpacity>
      <View
        style={{
          width: '100%',
          height: '100%',
          marginTop: wp(4),
          backgroundColor: '#FFFFFF',
        }}
      >
        <Text style={{fontSize:wp(5.5),fontWeight:"400",alignSelf:"center",marginTop:hp(2)}}>To Start Ride</Text>
        <View
          style={{
            width: '90%',
            height: hp(80),
            borderRadius: 12,
            borderWidth:0.001,
            alignSelf: 'center',
            marginTop: hp(1),
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
          <Text style={{ fontSize: wp(5), fontWeight: '400', color: '#412160',marginLeft:wp(4.3),marginTop:wp(3) }}
>More Info</Text>
<TextInput placeholder='Write here some info...' style={{width:"80%",height:hp(15),borderWidth:0.5,marginLeft:wp(4.3),borderRadius:3}}/>

          <View
            style={{
              width: '90%',
              height: '10%',
              alignSelf: 'center',
              marginTop: hp(5),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <TouchableOpacity
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
                Call
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>navigation.navigate("rideDetails")}
              style={{
                width: '45%',
                height: '80%',
                backgroundColor: '#412160',
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
                Start Ride
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
