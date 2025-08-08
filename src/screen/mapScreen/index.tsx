import { View, Text, TouchableOpacity, Modal, Image } from 'react-native';
import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { hp, wp } from '../../enums/styleGuide';
import { useNavigation } from '@react-navigation/native';

export default function mapScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      {/* Map View */}
      <MapView
        style={{ width: '100%', height: '100%' }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

      {/* ✅ Back/Drawer Icon — Positioned absolutely above the map */}
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={{
          position: 'absolute',
          top: hp(5),
          left: wp(5),
          zIndex: 999,
        }}
      >
        <Image
          source={require('../../assets/icons/slash.png')}
          style={{ width: 40, height:40, }}
        />
      </TouchableOpacity>

      {/* 🔽 Your original Modal and Buttons code — no changes made below */}

       <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              width: '100%',
              height: hp(65),
              backgroundColor: 'white',
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
              padding: wp(5),
              paddingTop: hp(2),
              alignItems: 'center',
            }}
          >
            <View
              style={{
                width: wp(80),
                alignSelf: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: wp(2),
              }}
            >
              <TouchableOpacity>
                <Image
                  source={require('../../assets/icons/backarrow.png')}
                  style={{ width: 26, height: 26 }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: wp(4.5),
                  fontWeight: '500',
                  color: '#412160ss',
                }}
              >
                Schedule Ride
              </Text>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/icons/crosshair.png')}
                  style={{ width: 26, height: 26 }}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: '85%',
                height: '13.5%',
                alignSelf: 'center',
                marginTop: wp(10),
                backgroundColor: '#FFFFFF',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                borderRadius: 10,

                // iOS Shadow
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 6,

                // Android Shadow
                elevation: 10,
              }}
            >
              <Image
                source={require('../../assets/images/locate.png')}
                style={{ width: 58, height: 58 }}
              />
              <Text
                style={{
                  fontSize: wp(5),
                  fontWeight: '400',
                  marginTop: wp(4),
                  marginLeft: 7,
                  color: '#412160',
                }}
              >
                Pick up location
              </Text>
              <Image
                source={require('../../assets/images/cross.png')}
                style={{
                  width: 20,
                  height: 20,
                  marginTop: wp(5),
                  marginLeft: wp(15),
                }}
              />
            </View>

            <View
              style={{
                width: '85%',
                height: '11.8%',
                alignSelf: 'center',
                marginTop: wp(3),
                backgroundColor: '#FFFFFF',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                borderRadius: 10,

                // iOS Shadow
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 6,

                // Android Shadow
                elevation: 10,
              }}
            >
              <Image
                source={require('../../assets/images/aroundlocation.png')}
                style={{ width: 58, height: 58 }}
              />
              <Text
                style={{
                  fontSize: wp(5),
                  fontWeight: '400',
                  marginTop: wp(4),
                  marginLeft: 7,
                  color: '#412160',
                }}
              >
                Enter destination
              </Text>
              <Image
                source={require('../../assets/images/cross.png')}
                style={{
                  width: 20,
                  height: 20,
                  marginTop: wp(5),
                  marginLeft: wp(13),
                }}
              />
            </View>

            <Text
              style={{
                fontSize: wp(5),
                fontWeight: '400',
                alignSelf: 'center',
                marginTop: wp(10),
                color: '#412160sssssss',
              }}
            >
              Set Date & Time
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: wp(90),
                marginTop: wp(6),
              }}
            >
              <View
                style={{
                  width: wp(20),
                  height: wp(12),
                  borderRadius: 13,
                  borderWidth: 0.3,
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
                  Date:
                </Text>
              </View>

              <View
                style={{
                  width: wp(35),
                  height: wp(12),
                  borderRadius: 13,
                  borderWidth: 0.3,
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
                  02/06/2021
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: wp(90),
                marginTop: wp(6),
              }}
            >
              <View
                style={{
                  width: wp(20),
                  height: wp(12),
                  borderRadius: 13,
                  borderWidth: 0.3,
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
                  Time :
                </Text>
              </View>

              <View
                style={{
                  width: wp(35),
                  height: wp(12),
                  borderRadius: 13,
                  borderWidth: 0.3,
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
                  02:00PM
                </Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{
                backgroundColor: '#412160',
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderRadius: 10,
                marginTop: hp(4),
                marginLeft: hp(24),
                width: wp(36),
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontWeight: '600',
                  fontSize: wp(5),
                  alignSelf: 'center',
                }}
              >
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {!modalVisible && (
        <View
          style={{
            position: 'absolute',
            bottom: 70,
            width: '100%',
            justifyContent: 'space-evenly',
            paddingHorizontal: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={{
              width: '85%',
              alignSelf: 'center',
              height: '50%',
              backgroundColor: '#412160',
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 12,
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: wp(5.3),
                alignSelf: 'center',
                fontWeight: '500',
              }}
            >
              Schedule Your Ride
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '85%',
              alignSelf: 'center',
              height: '50%',
              backgroundColor: '#412160',
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 12,
              marginTop: wp(6),
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: wp(5.3),
                alignSelf: 'center',
                fontWeight: '500',
              }}
            >
              Get Your Ride Now
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
