import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { hp, wp } from '../../enums/styleGuide';
import { TEST_ID } from 'react-native-gifted-chat';

export default function SetDestination1(props: any) {
  const { navigation } = props;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: '#412160' }}>
      {/* Slash Icon */}
      <Image
        source={require('../../assets/icons/slash.png')}
        style={{ width: 50, height: 50, marginTop: hp(0.5), marginLeft: hp(2) }}
      />

      {/* Background Map */}
      <View style={{ width: '100%', height: '100%', marginTop: hp(0.7) }}>
        <Image source={require('../../assets/images/purrpleMap.png')} />

        {/* Foreground Panel */}
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.65)',
            position: 'absolute',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}
        >
          {/* ✅ First card with modal trigger */}
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={{
              width: '90%',
              height: '9.5%',
              backgroundColor: '#FFFFFF',
              alignSelf: 'center',
              borderRadius: 12,
              marginTop: wp(5),
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <Image
              source={require('../../assets/images/car2.png')}
              style={{
                width: 60,
                height: 60,
                marginTop: wp(3),
              }}
            />
            <View style={{ justifyContent: 'center' }}>
              <Text
                style={{ fontSize: wp(5), color: '#412160', fontWeight: '600' }}
              >
                Car Model Name $15
              </Text>
              <Text
                style={{
                  fontSize: wp(3.5),
                  color: '#412160',
                  fontWeight: '500',
                }}
              >
                economical cars, 4 seater, 2 Seats Avail.
              </Text>
            </View>
          </TouchableOpacity>

          {/* ✅ Modal for first card */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                backgroundColor: 'rgba(0,0,0,0.4)',
              }}
            >
              <View
                style={{
                  backgroundColor: '#fff',
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  padding: wp(5),
                  minHeight: hp(30),
                }}
              >
                <View style={{ flexDirection: 'row', gap: hp(8) }}>
                  <Image
                    source={require('../../assets/images/purpleprofile.png')}
                    style={{ width: wp(30), height: wp(30) }}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: wp(5.5),
                        fontWeight: '500',
                        color: '#412160',
                      }}
                    >
                      Driver Name{' '}
                    </Text>
                    <Text
                      style={{
                        fontSize: wp(4),
                        fontWeight: '500',
                        color: '#412160',
                        marginTop: wp(1),
                      }}
                    >
                      Mini
                    </Text>

                    <Text
                      style={{
                        fontSize: wp(4),
                        fontWeight: '500',
                        color: '#412160',
                        marginTop: wp(1),
                      }}
                    >
                      Honda Car Name | 2018
                    </Text>

                    <View
                      style={{ flexDirection: 'row', gap: 5, marginTop: wp(2) }}
                    >
                      <Image
                        source={require('../../assets/icons/starrr.png')}
                        style={{ width: 20, height: 20 }}
                      />
                      <Text
                        style={{
                          fontSize: wp(4),
                          fontWeight: '500',
                          color: '#412160',
                        }}
                      >
                        4.2 Rating
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop: wp(3) }}>
                  <Text
                    style={{
                      fontSize: wp(5),
                      fontWeight: '500',
                      color: '#412160',
                    }}
                  >
                    Available Now
                  </Text>
                  <View
                    style={{
                      width: 13,
                      height: 13,
                      borderRadius: 90,
                      backgroundColor: '#17D406',
                      marginTop: wp(2.5),
                      marginLeft: wp(1),
                    }}
                  ></View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    gap: hp(12),
                    marginTop: wp(4),
                  }}
                >
                  <Text
                    style={{
                      fontSize: wp(5),
                      fontWeight: '500',
                      color: '#412160',
                    }}
                  >
                    {' '}
                    Seat Available
                  </Text>
                  <View></View>
                  <Text
                    style={{
                      fontSize: wp(5),
                      fontWeight: '500',
                      color: '#412160',
                    }}
                  >
                    02
                  </Text>
                </View>

                <Text
                  style={{
                    fontSize: wp(4.5),
                    fontWeight: '300',
                    marginTop: wp(5),
                  }}
                >
                  On Board Free wifi Available , Extra
                </Text>
                <Text style={{ fontSize: wp(4.5), fontWeight: '300' }}>
                  laggage are not allowed
                </Text>








                <View
                  style={{
                    width: '100%',
                    height: '12%',
                    marginTop: '8%',
                    borderWidth: 1,
                    marginRight: wp(50),
                    justifyContent: 'center',
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      gap: hp(19),
                    }}
                  >
                    <Text style={{ fontSize: wp(4.5), fontWeight: '400' }}>
                      {' '}
                      Payment Method
                    </Text>
                    <TouchableOpacity>
                      <Image
                        source={require('../../assets/icons/vectorarrow.png')}
                        style={{ width: 20, height: 20, tintColor: 'black' }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={{
                    width: '93%',
                    alignSelf: 'center',
                    marginTop: hp(3),
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <TouchableOpacity
                     onPress={() =>navigation.navigate("rideOtp")}
                  
                      style={{
                        width: wp(37),
                        height: wp(12),
                        backgroundColor: '#412160',
                        borderRadius: 40,
                        justifyContent: 'center',
                      }}
                    >
                      <Text
                        style={{
                          fontSize: wp(5),
                          fontWeight: '500',
                          alignSelf: 'center',
                          color: '#FFFFFF',
                        }}
                      >
                        Book Now
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=> navigation.navigate("driverChat")}
                      style={{
                        width: wp(37),
                        height: wp(12),
                        backgroundColor: '#17D406',
                        borderRadius: 40,
                        justifyContent: 'center',
                      }}
                    >
                      <Text
                        style={{
                          fontSize: wp(5),
                          fontWeight: '500',
                          alignSelf: 'center',
                          color: '#FFFFFF',
                        }}
                      >
                        Chat Now
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* <Pressable
                  onPress={() => setModalVisible(false)}
                  style={{
                    marginTop: hp(2),
                    backgroundColor: '#412160',
                    paddingVertical: hp(1.5),
                    borderRadius: 10,
                    alignItems: 'center',
                  }}
                >
                  
                </Pressable> */}
              </View>
            </View>
          </Modal>

          {/* 🔁 Remaining Cards (copied pattern with dividers) */}
          {[...Array(5)].map((_, index) => (
            <React.Fragment key={index}>
              <View
                style={{
                  width: '90%',
                  height: 3,
                  backgroundColor: '#DDDDDD',
                  marginTop: hp(1),
                  alignSelf: 'center',
                }}
              ></View>

              <TouchableOpacity
              onPress={()=>navigation.navigate("rideEnd")}
                style={{
                  width: '90%',
                  height: '9.5%',
                  backgroundColor: '#FFFFFF',
                  alignSelf: 'center',
                  borderRadius: 12,
                  marginTop: wp(2),
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}
              >
                <Image
                  source={require('../../assets/images/car2.png')}
                  style={{
                    width: 60,
                    height: 60,
                    marginTop: wp(3),
                  }}
                />
                <View style={{ justifyContent: 'center' }}>
                  <Text
                    style={{
                      fontSize: wp(5),
                      color: '#412160',
                      fontWeight: '600',
                    }}
                  >
                    Car Model Name $15
                  </Text>
                  <Text
                    style={{
                      fontSize: wp(3.5),
                      color: '#412160',
                      fontWeight: '500',
                    }}
                  >
                    economical cars, 4 seater
                  </Text>
                </View>
              </TouchableOpacity>
            </React.Fragment>
          ))}
        </View>
      </View>
    </View>
  );
}
