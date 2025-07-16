import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Swiper from 'react-native-swiper';
import { hp, wp } from '../../enums//styleGuide';

const onBordingscreen = (props: any) => {
  const { navigation } = props;
  const [hasNavigated, setHasNavigated] = useState(false);

  const handleIndexChange = (index: number) => {
    if (index === 2 && !hasNavigated) {
      setHasNavigated(true); // prevent multiple timeouts
      setTimeout(() => {
        navigation.replace('signinScreen'); // navigate after 2 sec
      }, 2000);
    }
  };

  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      onIndexChanged={handleIndexChange}
    >
      <View style={{ flex: 1, backgroundColor: '#412160' }}>
        <Text
          style={{
            fontSize: wp(7),
            fontWeight: '300',
            alignSelf: 'center',
            marginTop: wp(20),
            color: '#FFFFFF',
          }}
        >
          LOREM IPSUM
        </Text>
        <View style={{ alignSelf: 'center', marginTop: wp(4) }}>
          <Text
            style={{ alignSelf: 'center', fontSize: wp(3.7), color: '#FFFFFF' }}
          >
            Lorem ipsum dolor sit amet, consectetur
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: wp(3.7),
              color: '#FFFFFF',
              marginTop: wp(0.8),
            }}
          >
            adipiscing elit velsem telluorbi sed feugiat leo
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: wp(3.7),
              color: '#FFFFFF',
              marginTop: wp(0.8),
            }}
          >
            vulputate maximus iverra. Praesent imper
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: wp(3.7),
              color: '#FFFFFF',
              marginTop: wp(0.8),
            }}
          >
            convallis tortor eu sagittis.
          </Text>
        </View>
        <Image
          source={require('../../assets/images/locationlady.png')}
          style={{
            width: wp(94),
            height: hp(44),
            marginTop: hp(13),
            marginLeft: wp(7),
          }}
        />
      </View>

      <View style={{ flex: 1, backgroundColor: '#412160' }}>
        <Image
          source={require('../../assets/images/car.png')}
          style={{
            width: wp(90),
            height: hp(46),
            alignSelf: 'center',
            marginTop: wp(50),
          }}
        />
        <Text
          style={{
            fontSize: wp(7),
            fontWeight: '300',
            alignSelf: 'center',
            marginTop: wp(8),
            color: '#FFFFFF',
          }}
        >

          LOREM IPSUM
        </Text>
        <View style={{ alignSelf: 'center', marginTop: wp(4) }}>
          <Text
            style={{ alignSelf: 'center', fontSize: wp(3.7), color: '#FFFFFF' }}
          >
            Lorem ipsum dolor sit amet, consectetur
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: wp(3.7),
              color: '#FFFFFF',
              marginTop: wp(0.8),
            }}
          >
            adipiscing elit velsem telluorbi sed feugiat leo
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: wp(3.7),
              color: '#FFFFFF',
              marginTop: wp(0.8),
            }}
          >
            vulputate maximus iverra. Praesent imper
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: wp(3.7),
              color: '#FFFFFF',
              marginTop: wp(0.8),
            }}
          >
            convallis tortor eu sagittis.
          </Text>
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor: '#412160' }}>
        <Text
          style={{
            fontSize: wp(7),
            fontWeight: '300',
            alignSelf: 'center',
            marginTop: hp(75),
            color: '#FFFFFF',
          }}
        >
          LOREM IPSUM
        </Text>
        <View style={{ alignSelf: 'center', marginTop: wp(4) }}>
          <Text
            style={{ alignSelf: 'center', fontSize: wp(3.7), color: '#FFFFFF' }}
          >
            Lorem ipsum dolor sit amet, consectetur
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: wp(3.7),
              color: '#FFFFFF',
              marginTop: wp(0.8),
            }}
          >
            adipiscing elit velsem telluorbi sed feugiat leo
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: wp(3.7),
              color: '#FFFFFF',
              marginTop: wp(0.8),
            }}
          >
            vulputate maximus iverra. Praesent imper
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: wp(3.7),
              color: '#FFFFFF',
              marginTop: wp(0.8),
            }}
          >
            convallis tortor eu sagittis.
          </Text>
        </View>
      </View>
    </Swiper>
  );
};

export default onBordingscreen;

const styles = StyleSheet.create({
  wrapper: {},
});
