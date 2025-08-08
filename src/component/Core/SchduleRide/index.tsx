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
            height: '80%',
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
            height: '80%',
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
          marginTop: hp(1),
          height: '7%',
        }}
      >
        <View
          style={{
            width: '20%',
            height: '80%',
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
            height: '80%',
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
          marginTop:wp(2)
        }}
      >
        <View
          style={{
            width: '20%',
            height: '60%',
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
            height: '50%',
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
          width: '85%',
          height: '9%',
          backgroundColor: '#412160',
          alignSelf: 'center',
          justifyContent: 'center',
          borderRadius: 3,
          marginTop: hp(37),
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
