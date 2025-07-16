import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { hp, wp } from '../../enums/styleGuide';
export default function contactSupport(props:any) {
  const{navigation} =props
  return (
    <View style={{ flex: 1, backgroundColor: '#412160' }}>
      <View
        style={{
          width: '70%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wp(5),
          marginLeft: wp(4),
        }}
      >
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Image
            source={require('../../assets/icons/backarrow.png')}
            style={{
              width: 25,
              height: 25,
              tintColor: '#FFFFFF',
              marginTop: wp(1.5),
            }}
          />
        </TouchableOpacity>
        <Text style={{ color: '#FFFFFF', fontSize: wp(6), fontWeight: '500' }}>
          Contact Support
        </Text>
      </View>
      <View style={{ flex: 1, backgroundColor: '#FFFFFF', marginTop: wp(4) }}>
        <Image
          source={require('../../assets/images/contactt.png')}
          style={{
            width: '51%',
            height: '26%',
            marginTop: wp(20),
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontSize: wp(7.5),
            fontWeight: '600',
            alignSelf: 'center',
            marginTop: wp(10),
            color: '#412160',
          }}
        >
          Need Some Help?
        </Text>
        <View style={{ marginTop: wp(10), alignSelf: 'center' }}>
          <Text
            style={{
              fontSize: wp(5),
              fontWeight: '300',
              color: '#C4C4C4',
              alignSelf: 'center',
            }}
          >
            Get Lost? Stuck Somewhere?
          </Text>
          <Text
            style={{ fontSize: wp(5), fontWeight: '300', color: '#C4C4C4' }}
          >
            Feel free to get in touch with us
          </Text>
        </View>

        <TouchableOpacity
          style={{
            width: '60%',
            height: '7%',
            alignSelf: 'center',
            justifyContent: 'center',
            backgroundColor: '#412160',
            marginTop: wp(42),
          }}
        >
          <Text
            style={{
              fontSize: wp(6),
              fontWeight: '400',
              color: '#FFFFFF',
              alignSelf: 'center',
            }}
          >
            Contact Us
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: '60%',
            height: '7%',
            alignSelf: 'center',
            justifyContent: 'center',
            borderWidth: 1.5,
            borderColor: '#412160',
            marginTop: wp(5),
          }}
        >
          <Text
            style={{
              fontSize: wp(6),
              fontWeight: '400',
              alignSelf: 'center',
              color: '#412160',
            }}
          >
            Email Us
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
