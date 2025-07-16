import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { hp, wp } from '../../enums/styleGuide';

export default function reviewScreen() {
  return (
    <View style={{ backgroundColor: '#0000006E', flex: 1 }}>
      <TouchableOpacity>
        <Image
          source={require('../../assets/icons/slash.png')}
          style={{ width: 50, height: 50, marginLeft: wp(5), marginTop: wp(5) }}
        />
      </TouchableOpacity>

      <ScrollView
        style={{
          width: '100%',
          marginTop: hp(10),
          backgroundColor: '#FFFFFF',
        }}
        contentContainerStyle={{ paddingBottom: hp(10) }} // so bottom buttons aren't cut off
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require('../../assets/images/purpleprofile.png')}
          style={{
            width: wp(32),
            height: wp(32),
            alignSelf: 'center',
            marginTop: wp(5),
          }}
        />
        <Text
          style={{
            fontSize: wp(5.3),
            fontWeight: '400',
            alignSelf: 'center',
            marginTop: hp(2),
            color: "#412160",
          }}
        >
          Driver Name
        </Text>
        <Text
          style={{
            fontSize: wp(3.8),
            fontWeight: '400',
            alignSelf: 'center',
            color: "#C4C4C4",
          }}
        >
          Monday 1:00 p.m to 2:00 p.m
        </Text>
        <Text
          style={{
            fontSize: wp(3.8),
            fontWeight: '400',
            alignSelf: 'center',
            color: "#C4C4C4",
          }}
        >
          Central City to Airport
        </Text>
        <Text
          style={{
            fontSize: wp(6),
            fontWeight: '500',
            alignSelf: 'center',
            marginTop: hp(4),
            color: "#412160",
          }}
        >
          Rating
        </Text>
        <Image
          source={require('../../assets/icons/stars.png')}
          style={{
            width: 220,
            height: 30,
            alignSelf: 'center',
            marginTop: wp(2),
          }}
        />
        <View style={{ marginTop: wp(8), marginLeft: wp(7) }}>
          <Text
            style={{
              fontSize: wp(5),
              fontWeight: '400',
              color: "#412160",
            }}
          >
            Review
          </Text>

          <View
            style={{
              width: '90%',
              height: hp(17),
              borderWidth: 2,
              borderColor: '#412160',
              marginTop: wp(2),
              borderRadius: 10,
              paddingHorizontal: wp(2),
              paddingVertical: wp(1),
            }}
          >
            <TextInput
              placeholder="Write here something...."
              multiline
              style={{ flex: 1, textAlignVertical: 'top' }}
            />
          </View>
        </View>

        <View
          style={{
            width: '80%',
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: hp(8),
            marginBottom: hp(5),
          }}
        >
          <TouchableOpacity
            style={{
              width: '45%',
              height: hp(6),
              justifyContent: 'center',
              borderWidth: 0.1,
              borderRadius: 7,
            }}
          >
            <Text
              style={{
                fontSize: wp(4),
                fontWeight: '500',
                alignSelf: 'center',
                color: '#412160',
              }}
            >
              Cancel
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '45%',
              height: hp(6),
              justifyContent: 'center',
              backgroundColor: '#412160',
              borderRadius: 7,
            }}
          >
            <Text
              style={{
                fontSize: wp(4),
                fontWeight: '400',
                alignSelf: 'center',
                color: '#FFFFFF',
              }}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
