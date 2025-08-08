import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { HEIGHT, hp, WIDTH, wp } from '../../enums/styleGuide';

export default function passengerProfile(props:any) {
    const {navigation} =props
  return (
    <View style={{ flex: 1 }}>
      {/* Top Left Purple Image */}
      <Image
        source={require('../../assets/images/purple.png')}
        style={{
          width: 110,
          height: 110,
          marginLeft: wp(1),
          borderBottomRightRadius: wp(40),
        }}
      />

      {/* Top Right Purple Image with Pencil Icon */}
      <View
        style={{
          position: 'absolute',
          top: wp(17),
          right: wp(6),
        }}
      >
        <Image
          source={require('../../assets/images/backpurple.png')}
          style={{
            width: 110,
            height: 110,
            borderBottomLeftRadius: wp(0),
          }}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: wp(1),
            right: wp(20),
          }}
        >
          <Image
            source={require('../../assets/icons/pencil.png')}
            style={{ width: 42, height: 42 }}
          />
        </TouchableOpacity>
      </View>

      {/* Back Button */}
      <TouchableOpacity 
      onPress={()=>navigation.goBack()}
      style={{ position: 'absolute' }}>
        <Image
          source={require('../../assets/icons/backarrow.png')}
          style={{
            width: 30,
            height: 30,
            marginTop: wp(8),
            tintColor: '#FFFFFF',
            marginLeft: hp(3),
          }}
        />
      </TouchableOpacity>

      {/* Divider Line */}
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: 'grey',
          alignSelf: 'center',
          marginTop: wp(19),
        }}
      />

      {/* Input Fields */}
      {[
        'Full Name',
        'Phone Number',
        'Email',
        'DOB(Date of Birth)',
        'State & City',
      ].map((label, index) => (
        <View key={index} style={{ marginTop: wp(4), marginLeft: wp(8) }}>
          <Text
            style={{
              fontSize: wp(4.5),
              fontWeight: '500',
              color: '#412160',
            }}
          >
            {label}
          </Text>
          <TextInput placeholder=""  style={{width:"84%"}}/>
          <View
            style={{
              width: wp(80),
              height: 2,
              backgroundColor: '#412160',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 2.84,
              elevation: 3,
            }}
          />
        </View>
      ))}

      {/* Bottom Decorative Image */}
      <View>
        <Image
          source={require('../../assets/images/borderpurple.png')}
          style={{
            width: 180,
            height: 150,
            marginLeft: wp(53),
            marginTop: wp(19),
            borderTopLeftRadius: wp(0),
          }}
        />
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity
        style={{
          width: '42%',
          height: '5.5%',
          alignSelf: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
          borderRadius: 12,
          position: 'absolute',
          marginTop: hp(92),
        }}
      >
        <Text
          style={{
            fontSize: wp(5),
            fontWeight: '500',
            alignSelf: 'center',
            color: '#412160',
          }}
        >
          Edit Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
}
