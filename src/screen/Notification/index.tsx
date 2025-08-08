import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { hp, wp } from '../../enums/styleGuide';
export default function Notification(props:any) {
    const {navigation} =props
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: '100%',
          height: '7%',
          backgroundColor: '#412160',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: wp(5),
            width: '80%',
          }}
        >
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image
              source={require('../../assets/icons/backarrow.png')}
              style={{
                width: 20,
                height: 20,
                marginTop: wp(1),
                tintColor: '#fff',
              }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: wp(5), fontWeight: '700', color: '#fff' }}>
            Notifications
          </Text>
          <View></View>
        </View>
      </View>

      <TouchableOpacity
        style={{
          width: '100%',
          height: '7%',
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: wp(2),
          backgroundColor: '#D7F5D0',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            gap: wp(8),
          }}
        >
          <View style={{ flexDirection: 'row', gap: wp(4), marginLeft: wp(3) }}>
            <Image
              source={require('../../assets/images/blueback.png')}
              style={{ width: 45, height: 45 }}
            />
            <Text
              style={{
                fontSize: wp(4.5),
                fontWeight: '500',
                color: '#555555',
                marginTop: wp(2),
              }}
            >
              {' '}
              You Got new Booking
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: '18%',
              height: '75%',
              backgroundColor: '#412160',
              justifyContent: 'center',
              marginTop: wp(1),
            }}
          >
            <Text
              style={{
                fontSize: wp(5),
                fontWeight: '400',
                alignSelf: 'center',
                color: '#fff',
              }}
            >
              New
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>




      <TouchableOpacity
        style={{
          width: '100%',
          height: '7%',
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: wp(2),
          backgroundColor: '#c0c0c0ff',
        }}
      >
        <View style={{ flexDirection: 'row', gap: wp(4), marginLeft: wp(6) }}>
          <Image
            source={require('../../assets/icons/messeges.png')}
            style={{ width: 30, height: 30, marginTop: wp(2) }}
          />
          <Text
            style={{
              fontSize: wp(4.5),
              fontWeight: '500',
              color: '#555555',
              marginTop: wp(2),
            }}
          >
            {' '}
            You have a new message
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: '100%',
          height: '7%',
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: wp(2),
          backgroundColor: '#c0c0c0ff',
        }}
      >
        <View style={{ flexDirection: 'row', gap: wp(4), marginLeft: wp(6) }}>
          <Image
            source={require('../../assets/icons/messeges.png')}
            style={{ width: 30, height: 30, marginTop: wp(2) }}
          />
          <Text
            style={{
              fontSize: wp(4.5),
              fontWeight: '500',
              color: '#555555',
              marginTop: wp(2),
            }}
          >
            {' '}
            You have a new message
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: '100%',
          height: '7%',
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: wp(2),
          backgroundColor: '#c0c0c0ff',
        }}
      >
        <View style={{ flexDirection: 'row', gap: wp(4), marginLeft: wp(6) }}>
          <Image
            source={require('../../assets/icons/messeges.png')}
            style={{ width: 30, height: 30, marginTop: wp(2) }}
          />
          <Text
            style={{
              fontSize: wp(4.5),
              fontWeight: '500',
              color: '#555555',
              marginTop: wp(2),
            }}
          >
            {' '}
            You have a new message
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: '100%',
          height: '7%',
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: wp(2),
          backgroundColor: '#c0c0c0ff',
        }}
      >
        <View style={{ flexDirection: 'row', gap: wp(4), marginLeft: wp(6) }}>
          <Image
            source={require('../../assets/icons/messeges.png')}
            style={{ width: 30, height: 30, marginTop: wp(2) }}
          />
          <Text
            style={{
              fontSize: wp(4.5),
              fontWeight: '500',
              color: '#555555',
              marginTop: wp(2),
            }}
          >
            {' '}
            You have a new message
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
