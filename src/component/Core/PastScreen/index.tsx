import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { hp, wp } from '../../../enums/styleGuide';

export default function PastScreen() {
  const data = Array(10).fill(null); // 6 static items

  const renderItem = () => (
    <View
      style={{
        width: '90%',
        alignSelf: 'center',
        paddingVertical: wp(3),
        borderBottomWidth: 0.1,
        borderColor: '#ccc',
        marginTop: hp(3), // ⬅️ Add marginTop here
      }}
    >
      <Text style={{ fontSize: wp(5), fontWeight: '500', color: '#412160' }}>
        Driver Name
      </Text>
      <Text
        style={{
          fontSize: wp(4.2),
          fontWeight: '400',
          marginTop: wp(1),
          color: '#412160',
        }}
      >
        July/21/21, 7:15PM
      </Text>
      <Text
        style={{
          fontSize: wp(4),
          fontWeight: '200',
          marginTop: wp(1.5),
        }}
      >
        Mini Car
      </Text>
      <View
        style={{
          width: '90%',
          flexDirection: 'row',
          marginTop: wp(3),
          justifyContent: 'space-between',
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              width: 17,
              height: 17,
              borderRadius: 50,
              backgroundColor: '#17D406',
              marginTop: wp(0.6),
            }}
          />
          <Text
            style={{
              fontSize: wp(4.2),
              fontWeight: '400',
              marginLeft: wp(2),
              color: '#412160',
            }}
          >
            Pickup Point
          </Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              width: 17,
              height: 17,
              borderRadius: 50,
              borderWidth: 3,
              marginTop: wp(0.9),
              borderColor: 'red',
            }}
          />
          <Text
            style={{
              fontSize: wp(4),
              fontWeight: '400',
              marginLeft: wp(2),
              color: '#412160',
            }}
          >
            Drop Point
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
