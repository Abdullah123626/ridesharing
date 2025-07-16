import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { hp, WIDTH, wp } from '../../enums/styleGuide';
export default function setting(props: any) {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, backgroundColor: '#412160' }}>
      <View
        style={{
          width: '70%',
          flexDirection: 'row',
          marginLeft: wp(7),
          marginTop: wp(4),
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/icons/backarrow.png')}
            style={{
              width: 25,
              height: 25,
              tintColor: '#FFFFFF',
              marginTop: wp(1),
            }}
          />
        </TouchableOpacity>
        <Image
          source={require('../../assets/icons/setting.png')}
          style={{
            width: 30,
            height: 30,
            marginLeft: wp(16),
            marginTop: wp(0.5),
          }}
        />
        <Text
          style={{
            fontSize: wp(6.5),
            fontWeight: '600',
            color: '#FFFFFF',
            marginLeft: wp(5),
            marginBottom: 12,
          }}
        >
          Settings
        </Text>
      </View>

      <View
        style={{
          width: '100%',
          height: '100%',
          marginTop: hp(0.5),
          backgroundColor: '#FFFFFF',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '85%',
            alignSelf: 'center',
            marginTop: hp(10),
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../../assets/icons/ring.png')}
              style={{ width: 30, height: 30 }}
            />
            <TouchableOpacity onPress={()=>navigation.navigate("notificationScreen")}>
              <Text
                style={{
                  fontSize: wp(5),
                  marginLeft: wp(5),
                  fontWeight: '400',
                }}
              >
                Notifications
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate("notificationScreen")}>
            <Image
              source={require('../../assets/icons/vectorarrow.png')}
              style={{ width: 30, height: 25, tintColor: '#412160' }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '85%',
            alignSelf: 'center',
            marginTop: hp(4),
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../../assets/icons/lock2.png')}
              style={{ width: 30, height: 30 }}
            />
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: wp(5),
                  marginLeft: wp(5),
                  fontWeight: '400',
                }}
              >
                Change Password
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/vectorarrow.png')}
              style={{ width: 30, height: 25, tintColor: '#412160' }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '85%',
            alignSelf: 'center',
            marginTop: hp(4),
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../../assets/icons/pin.png')}
              style={{ width: 30, height: 30 }}
            />
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: wp(5),
                  marginLeft: wp(5),
                  fontWeight: '400',
                }}
              >
                Location
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/vectorarrow.png')}
              style={{ width: 30, height: 25, tintColor: '#412160' }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '85%',
            alignSelf: 'center',
            marginTop: hp(4),
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../../assets/icons/setting.png')}
              style={{ width: 30, height: 30, tintColor: '#412160' }}
            />
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: wp(5),
                  marginLeft: wp(5),
                  fontWeight: '400',
                }}
              >
                App Settings
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/vectorarrow.png')}
              style={{ width: 30, height: 25, tintColor: '#412160' }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '85%',
            alignSelf: 'center',
            marginTop: hp(4),
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../../assets/icons/about.png')}
              style={{ width: 30, height: 30 }}
            />
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: wp(5),
                  marginLeft: wp(5),
                  fontWeight: '400',
                }}
              >
                About
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/vectorarrow.png')}
              style={{ width: 30, height: 25, tintColor: '#412160' }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
