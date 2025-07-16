import { View, Text, Image, TouchableOpacity, TouchableNativeFeedbackComponent } from 'react-native';
import React from 'react';
import { hp, wp } from '../../enums/styleGuide';
export default function notificationScreen(props:any) {
    const {navigation} =props
  return (
    <View style={{ flex: 1, backgroundColor: '#412160' }}>
      <View
        style={{
          flexDirection: 'row',
          width: '70%',
          justifyContent: 'space-around',
          marginTop: hp(2.5),
          marginLeft: wp(2),
        }}
      >
        <TouchableOpacity onPress={()=>navigation.goBack()}> 
        <Image
          source={require('../../assets/icons/backarrow.png')}
          style={{ width: 25, height: 25, tintColor: '#FFFFFF' }}
        />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', marginLeft: wp(6), gap: wp(3) }}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/notification.png')}
              style={{
                width: 30,
                height: 30,
                tintColor: '#FFFFFF',
                marginTop: wp(0.3),
              }}
            />
          </TouchableOpacity>
          <Text
            style={{ fontSize: wp(6), fontWeight: '400', color: '#FFFFFF' }}
          >
            Notification
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#FFFFFF',
          marginTop: hp(2),
        }}
      >
        <TouchableOpacity
        onPress={()=>navigation.navigate("setDestination1")}
          style={{
            width: '100%',
            height: '8%',
            backgroundColor: '#D7F5D0',
            alignSelf: 'center',
            justifyContent: "center",
            marginTop: wp(3),
            
          }}
        >
            <View  style={{flexDirection:"row",width:wp(95),justifyContent:"space-between"}}>
          <View style={{ marginLeft: wp(8), flexDirection: 'row' }}>
            <Image
              source={require('../../assets/icons/profile.png')}
              style={{ width: 50, height: 50 }}
            />
            <Text
              style={{
                fontSize: wp(5),
                fontWeight: '400',
                color: '#412160',
                marginLeft: wp(4),
                marginTop:hp(1.5)
              }}
            >
              Your ride is confirm
            </Text>
          </View>
          <TouchableOpacity style={{width:58,height:34,backgroundColor:"#412160",justifyContent:"center",marginTop:wp(2),}}>
            <Text style={{fontSize:wp(3.8),fontWeight:"600",color:"#FFFFFF",alignSelf:"center"}}>New</Text>
          </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: '100%',
            height: '8%',
            backgroundColor: '#F3F1F5',
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: wp(1),
          }}
        >
          <View style={{ marginLeft: wp(8), flexDirection: 'row' }}>
            <Image
              source={require('../../assets/icons/messeges.png')}
              style={{ width: 30, height: 30 }}
            />
            <Text
              style={{
                fontSize: wp(5),
                fontWeight: '400',
                color: '#412160',
                marginLeft: wp(4),
              }}
            >
              You have a new message
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: '100%',
            height: '8%',
            backgroundColor: '#F3F1F5',
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: wp(1),
          }}
        >
          <View style={{ marginLeft: wp(8), flexDirection: 'row' }}>
            <Image
              source={require('../../assets/icons/messeges.png')}
              style={{ width: 30, height: 30 }}
            />
            <Text
              style={{
                fontSize: wp(5),
                fontWeight: '400',
                color: '#412160',
                marginLeft: wp(4),
              }}
            >
              You have a new message
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: '100%',
            height: '8%',
            backgroundColor: '#F3F1F5',
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: wp(1),
          }}
        >
          <View style={{ marginLeft: wp(8), flexDirection: 'row' }}>
            <Image
              source={require('../../assets/icons/messeges.png')}
              style={{ width: 30, height: 30 }}
            />
            <Text
              style={{
                fontSize: wp(5),
                fontWeight: '400',
                color: '#412160',
                marginLeft: wp(4),
              }}
            >
              You have a new message
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: '100%',
            height: '8%',
            backgroundColor: '#F3F1F5',
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: wp(1),
          }}
        >
          <View style={{ marginLeft: wp(8), flexDirection: 'row' }}>
            <Image
              source={require('../../assets/icons/messeges.png')}
              style={{ width: 30, height: 30 }}
            />
            <Text
              style={{
                fontSize: wp(5),
                fontWeight: '400',
                color: '#412160',
                marginLeft: wp(4),
              }}
            >
              You have a new message
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
