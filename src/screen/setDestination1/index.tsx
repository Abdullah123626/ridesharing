import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { hp, wp } from '../../enums/styleGuide';
export default function setDestination1(props:any) {
  const {navigation} =props
  return (
    <View style={{ flex: 1, backgroundColor: '#412160' }}>
      <Image
        source={require('../../assets/icons/slash.png')}
        style={{ width: 50, height: 50, marginTop: hp(0.5), marginLeft: hp(2) }}
      />
      <View style={{ width: '100%', height: '100%', marginTop: hp(0.7) }}>
        <Image source={require('../../assets/images/purrpleMap.png')} />
        <View
          style={{
            width: '100%',
            height: '79%',
            marginTop: hp(14),
            backgroundColor: 'rgba(255, 255, 255, 0.65)',
            position: 'absolute',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}
        >
          <View
            style={{
              width: '90%',
              height: '8%',
              backgroundColor: '#FFFFFF',
              alignSelf: 'center',
              justifyContent: 'space-between',
              marginTop: wp(10),
              borderRadius: 10,
              flexDirection: 'row',
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/images/Locationshadow.png')}
                  style={{ width: 55, height: 50 }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: wp(4.5),
                  fontWeight: '400',
                  color: '#412160',
                  marginTop: wp(4),
                  marginLeft: wp(4),
                }}
              >
                Indoe
              </Text>
            </View>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/cross.png')}
                style={{
                  width: 17,
                  height: 17,
                  marginRight: wp(4),
                  marginTop: wp(5),
                }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: '90%',
              height: '8%',
              backgroundColor: '#FFFFFF',
              alignSelf: 'center',
              justifyContent: 'space-between',
              marginTop: wp(5),
              borderRadius: 10,
              flexDirection: 'row',
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/images/Locationshadow.png')}
                  style={{ width: 55, height: 50 }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: wp(4.5),
                  fontWeight: '400',
                  color: '#412160',
                  marginTop: wp(4),
                  marginLeft: wp(4),
                }}
              >
                Ujjain
              </Text>
            </View>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/cross.png')}
                style={{
                  width: 17,
                  height: 17,
                  marginRight: wp(4),
                  marginTop: wp(5),
                }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: '100%',
              height: 3,
              backgroundColor: '#DDDDDD',
              marginTop: hp(3),
            }}
          ></View>

          <TouchableOpacity
          onPress={()=>navigation.navigate("homeScreen")}
            style={{
              width: '90%',
              height: '11%',
              backgroundColor: '#FFFFFF',
              alignSelf: 'center',
              borderRadius: 12,
              marginTop: wp(5),
              flexDirection: 'row',
            }}
          >
            <Image
              source={require('../../assets/images/car2.png')}
              style={{
                width: 60,
                height: 60,
                marginLeft: wp(3),
                justifyContent: 'center',
                marginTop: wp(2),
              }}
            />
            <View style={{ marginLeft: wp(5), justifyContent: 'center' }}>
              <Text
                style={{ fontSize: wp(5), color: '#412160', fontWeight: '600' }}
              >
                Book Any Car
              </Text>
              <Text
                style={{
                  fontSize: wp(3.5),
                  color: '#412160',
                  fontWeight: '500',
                }}
              >
                Mini, Prime Sedan
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=> navigation.navigate("setDestination2")}
            style={{
              width: '90%',
              height: '11%',
              backgroundColor: '#FFFFFF',
              alignSelf: 'center',
              borderRadius: 12,
              marginTop: wp(4),
              flexDirection: 'row',
            }}
          >
            <Image
              source={require('../../assets/images/car2.png')}
              style={{
                width: 60,
                height: 60,
                marginLeft: wp(3),
                justifyContent: 'center',
                marginTop: wp(2),
              }}
            />
            <View style={{ marginLeft: wp(5), justifyContent: 'center' }}>
              <Text
                style={{ fontSize: wp(5), color: '#412160', fontWeight: '600' }}
              >
                Mini
              </Text>
              <Text
                style={{
                  fontSize: wp(3.5),
                  color: '#412160',
                  fontWeight: '500',
                }}
              >
                economical cars, 4 seater
              </Text>
            </View>
          </TouchableOpacity>

          <View
            style={{
              width: '90%',
              height: 3,
              backgroundColor: '#DDDDDD',
              marginTop: hp(3),
              alignSelf: 'center',
            }}
          ></View>

          <TouchableOpacity
            style={{
              width: '90%',
              height: '11%',
              backgroundColor: '#FFFFFF',
              alignSelf: 'center',
              borderRadius: 12,
              marginTop: wp(4),
              flexDirection: 'row',
            }}
          >
            <Image
              source={require('../../assets/images/car2.png')}
              style={{
                width: 60,
                height: 60,
                marginLeft: wp(3),
                justifyContent: 'center',
                marginTop: wp(2),
              }}
            />
            <View style={{ marginLeft: wp(5), justifyContent: 'center' }}>
              <Text
                style={{ fontSize: wp(5), color: '#412160', fontWeight: '600' }}
              >
                Prime Sedan
              </Text>
              <Text
                style={{
                  fontSize: wp(3.5),
                  color: '#412160',
                  fontWeight: '500',
                }}
              >
                Top drivers, 6 seater
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              width: '90%',
              height: 3,
              backgroundColor: '#DDDDDD',
              marginTop: hp(2),
              alignSelf: 'center',
            }}
          ></View>

          <TouchableOpacity
            style={{
              width: '90%',
              height: '11%',
              backgroundColor: '#FFFFFF',
              alignSelf: 'center',
              borderRadius: 12,
              marginTop: wp(4),
              flexDirection: 'row',
            }}
          >
            <Image
              source={require('../../assets/images/car2.png')}
              style={{
                width: 60,
                height: 60,
                marginLeft: wp(3),
                justifyContent: 'center',
                marginTop: wp(2),
              }}
            />
            <View style={{ marginLeft: wp(5), justifyContent: 'center' }}>
              <Text
                style={{ fontSize: wp(5), color: '#412160', fontWeight: '600' }}
              >
                Luxry Car
              </Text>
              <Text
                style={{
                  fontSize: wp(3.5),
                  color: '#412160',
                  fontWeight: '500',
                }}
              >
                Top drivers, 6 seater
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
