import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { hp, wp } from '../../enums/styleGuide';
import PastScreen from '../../component/Core/PastScreen';
import CurrentScreen from '../../component/Core/CurrentScreen';

export default function Profile(props:any ) {
  const {navigation} =props
  const [activeTab, setActiveTab] = useState('PAST'); // Default: PAST active

  return (
    <View style={{ flex: 1, backgroundColor: '#412160' }}>
      {/* 🔙 Header */}
      <View
        style={{
          width: '70%',
          flexDirection: 'row',
          marginLeft: wp(7),
          marginTop: wp(5),
        }}
      >
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Image
            source={require('../../assets/icons/backarrow.png')}
            style={{ width: 25, height: 25, tintColor: '#FFFFFF' }}
          />
        </TouchableOpacity>
        <Image
          source={require('../../assets/icons/clocl.png')}
          style={{ width: 25, height: 25, marginLeft: wp(10), marginTop: wp(1) }}
        />
        <Text
          style={{
            fontSize: wp(6),
            fontWeight: '600',
            color: '#FFFFFF',
            marginLeft: wp(5),
            marginBottom: 12,
          }}
        >
          Your Bookings
        </Text>
      </View>

      {/* ⚪ White Container */}
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: '#FFFFFF',
        }}
      >
        {/* 🔄 Toggle Buttons */}
        <View
          style={{
            width: '100%',
            height: '16%',
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          {/* PAST */}
          <TouchableOpacity
            onPress={() => setActiveTab('PAST')}
            style={{
              width: '50%',
              height: '39%',
              backgroundColor: activeTab === 'PAST' ? '#41216045' : 'transparent',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontSize: wp(5),
                fontWeight: '400',
                alignSelf: 'center',
                color: '#412160',
              }}
            >
              PAST
            </Text>
          </TouchableOpacity>

          {/* CURRENT */}
          <TouchableOpacity
            onPress={() => setActiveTab('CURRENT')}
            style={{
              width: '50%',
              height: '39%',
              backgroundColor: activeTab === 'CURRENT' ? '#41216045' : 'transparent',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontSize: wp(5),
                fontWeight: '400',
                alignSelf: 'center',
                color: '#412160',
              }}
            >
              CURRENT
            </Text>
          </TouchableOpacity>
        </View>

        {/* Conditionally Render Tabs */}
        {activeTab === 'PAST' ? <PastScreen /> : <CurrentScreen />}
      </View>
    </View>
  );
}
