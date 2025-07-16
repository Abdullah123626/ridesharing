import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import Profile from '../profile';
import setting from '../setting';
import mapScreen from '../mapScreen';
import contactSupport from '../contactSupport';
import { hp, wp } from '../../enums/styleGuide';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props:any) {
  const {navigation}=props
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{  flex: 1 }}
    >
      {/* 🔷 Top Purple Header (with status bar padding) */}
      <View
        style={{
          backgroundColor: '#412160',
         
          paddingBottom: hp(5),
          
          width: wp(90),
          
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft:17,marginTop:wp(3) }}>
          <Image
            source={require('../../assets/icons/contact.png')}
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              marginBottom: 10,
              marginTop:wp(2)
            }}
          />
          <View style={{ marginLeft: '4%' }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 20,
                fontWeight: '400',
              }}
            >
              Passenger Name
            </Text>
          </View>
        </View>

        <View
          style={{
            width: '80%',
            height: 3,
            backgroundColor: '#FFFFFF',
            marginTop: hp(1),
          }}
        ></View>

        <View style={{ flexDirection: 'row', gap: wp(2) ,marginLeft:hp(19)}}>
          <TouchableOpacity onPress={()=>navigation.navigate("passengerProfile")}>
            <Text
              style={{
                fontSize: wp(5),
                fontWeight: '500',
                marginTop: wp(4),
                color: '#FFFFFF',
              }}
            >
              View Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("passengerProfile")}>
            <Image
              source={require('../../assets/icons/vectorarrow.png')}
              style={{ width: 24, height: 24, marginTop: wp(4.5) }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* 📜 Drawer Items */}
      <View style={{ flex: 1, backgroundColor: 'white', marginTop: hp(2) }}>
        <DrawerItemList {...props} />
      </View>

      {/* 🚪 Logout Button */}
      
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#412160',
        drawerInactiveTintColor: '#412160',
        drawerLabelStyle: { fontSize: 16 },
        drawerStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Drawer.Screen
        name="Map"
        component={mapScreen}
        options={{
          title: 'Notification',
          drawerIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/images/notification.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Booking History"
        component={Profile}
        options={{
          drawerIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/images/bookinghistory.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={setting}
        options={{
          drawerIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/images/bookinghistory.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="ContactSupport"
        component={contactSupport}
        options={{
          drawerIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/images/contactsupport.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />

          <Drawer.Screen
        name="Logout"
        component={contactSupport}
        options={{
          drawerIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/images/contactsupport.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
