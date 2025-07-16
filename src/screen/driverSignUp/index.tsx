import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { hp, wp } from '../../enums/styleGuide';
import SignUpStep1 from '../../component/Core/SignUpStep1';
import SignUpStep2 from '../../component/Core/SignUpStep2';

export default function DriverSignUp(props:any) {
  const {navigation} =props
  const [activeStep, setActiveStep] = useState(1);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#412160',
        alignSelf: 'center',
        width: '100%',
      }}
    >
      <Text
        style={{
          fontSize: wp(6.5),
          fontWeight: '400',
          alignSelf: 'center',
          color: '#FFFFFF',
          marginTop: hp(5),
        }}
      >
        Saidiwa Ride Sharing
      </Text>

      <View
        style={{
          width: '90%',
          height: '25%',
          alignSelf: 'center',
          marginTop: hp(1),
          borderRadius: 15,
          backgroundColor: '#FFFFFF',
        }}
      >
        <Text
          style={{
            alignSelf: 'center',
            marginTop: wp(6),
            fontSize: wp(6.5),
            fontWeight: '400',
            color: '#412160',
          }}
        >
          SIGN UP
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: wp(5),
            gap: 1,
          }}
        >
          <TouchableOpacity
            onPress={() => setActiveStep(1)}
            style={{
              width: 50,
              height: 50,
              borderRadius: 26,
              borderColor: '#412160',
              borderWidth: 1,
              justifyContent: 'center',
              backgroundColor: activeStep === 1 ? '#412160' : '#FFFFFF',
            }}
          >
            <Text
              style={{
                fontSize: wp(5),
                fontWeight: '400',
                alignSelf: 'center',
                color: activeStep === 1 ? '#FFFFFF' : '#412160',
              }}
            >
              1
            </Text>
          </TouchableOpacity>

          <View
            style={{
              width: 60,
              backgroundColor: 'grey',
              height: 1,
              marginTop: wp(6),
            }}
          />

          <TouchableOpacity
            onPress={() => setActiveStep(2)}
            style={{
              width: 50,
              height: 50,
              borderRadius: 26,
              borderColor: '#412160',
              borderWidth: 1,
              justifyContent: 'center',
              backgroundColor: activeStep === 2 ? '#412160' : '#FFFFFF',
            }}
          >
            <Text
              style={{
                fontSize: wp(5),
                fontWeight: '400',
                alignSelf: 'center',
                color: activeStep === 2 ? '#FFFFFF' : '#412160',
              }}
            >
              2
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Step Content */}
      {activeStep === 1 && <SignUpStep1 onContinue={() => setActiveStep(2)} />}
{activeStep === 2 && <SignUpStep2 navigation={navigation} />}
    </View>
  );
}
