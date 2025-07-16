import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { hp, wp } from '../../../enums/styleGuide';
export default function SchduleRide() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          height: '8%',
          alignSelf: 'center',
          marginTop: hp(12),
        }}
      >
        <View
          style={{
            width: '20%',
            height: '30%',
            justifyContent: 'center',
            borderWidth: 0.4,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              fontSize: wp(4.5),
              fontWeight: '500',
              alignSelf: 'center',
              color: '#412160',
            }}
          >
            Date{' '}
          </Text>
        </View>

        <View
          style={{
            width: '30%',
            height: '40%',
            justifyContent: 'center',
            borderWidth: 0.4,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              fontSize: wp(4.5),
              fontWeight: '500',
              alignSelf: 'center',
              color: '#412160',
            }}
          >
            02/05/20{' '}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          alignSelf: 'center',
          marginTop: hp(0),
          height: '12%',
        }}
      >
        <View
          style={{
            width: '20%',
            height: '40%',
            justifyContent: 'center',
            borderWidth: 0.4,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              fontSize: wp(4.5),
              fontWeight: '500',
              alignSelf: 'center',
              color: '#412160',
            }}
          >
            Time{' '}
          </Text>
        </View>

        <View
          style={{
            width: '30%',
            height: '40%',
            justifyContent: 'center',
            borderWidth: 0.4,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              fontSize: wp(4.5),
              fontWeight: '500',
              alignSelf: 'center',
              color: '#412160',
            }}
          >
            02:54 PM{' '}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          alignSelf: 'center',
          height: '12%',
        }}
      >
        <View
          style={{
            width: '20%',
            height: '40%',
            justifyContent: 'center',
            borderWidth: 0.4,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              fontSize: wp(4.5),
              fontWeight: '500',
              alignSelf: 'center',
              color: '#412160',
            }}
          >
            Rate{' '}
          </Text>
        </View>

        <View
          style={{
            width: '20%',
            height: '40%',
            justifyContent: 'center',
            borderWidth: 0.4,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              fontSize: wp(4.5),
              fontWeight: '500',
              alignSelf: 'center',
              color: '#412160',
            }}
          >
            ${' '}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          width: '80%',
          height: '8%',
          backgroundColor: '#412160',
          alignSelf: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          marginTop: hp(30),
        }}
      >
        <Text
          style={{
            fontSize: wp(6),
            fontWeight: '400',
            alignSelf: 'center',
            color: '#FFFFFF',
          }}
        >
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}
