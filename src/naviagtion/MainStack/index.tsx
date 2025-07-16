// MainStack.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import splashScreen from '../../screen/splashScreen';
import onBoarding from '../../screen/onBoarding';
import signinScreen from '../../screen/signinScreen';
import forgotPassword from '../../screen/forgotPassword';
import signUp from '../../screen/signUp';
import passengerSignUp from '../../screen/passengerSignUp';
import driverSignUp from '../../screen/driverSignUp';
import mapScreen from '../../screen/mapScreen';
import drawer from '../../screen/DrawerNavigator';
import DrawerNavigator from '../../screen/DrawerNavigator';
import passengerProfile from '../../screen/passengerProfile';
import notificationScreen from '../../screen/notificationScreen';
import setDestination1 from '../../screen/setDestination1';
import ChatScreen from '../../screen/ChatScreen';
import setDestination2 from '../../screen/setDestination2';
import driverChat from '../../screen/driverChat';
import rideOtp from '../../screen/rideOtp';
import rideEnd from '../../screen/rideEnd';
import reviewScreen from '../../screen/reviewScreen';
import homeScreen from '../../screen/homeScreen';
import startRide from '../../screen/startRide';
import rideDetails from '../../screen/rideDetails';
// Import your screens here


const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="splashScreen" component={splashScreen} />
        <Stack.Screen name="onBoarding" component={onBoarding} />
        <Stack.Screen name="signinScreen" component={signinScreen} />
        <Stack.Screen name="forgotPassword" component={forgotPassword} />
        <Stack.Screen name="signUp" component={signUp} />
        <Stack.Screen name="passengerSignUp" component={passengerSignUp} />
        <Stack.Screen name="driverSignUp" component={driverSignUp} />
        {/* Main app navigation now uses DrawerNavigator */}
        <Stack.Screen name="MainApp" component={DrawerNavigator} />
        <Stack.Screen name="passengerProfile" component={passengerProfile} />
        <Stack.Screen name="notificationScreen" component={notificationScreen} />
        <Stack.Screen name="setDestination1" component={setDestination1} />
        <Stack.Screen name="setDestination2" component={setDestination2} />
        <Stack.Screen name="rideOtp" component={rideOtp} />
        <Stack.Screen name="rideEnd" component={rideEnd} />
        <Stack.Screen name="reviewScreen" component={reviewScreen} />
        <Stack.Screen name="driverChat" component={driverChat} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="homeScreen" component={homeScreen} />
        <Stack.Screen name="startRide" component={startRide} />
        <Stack.Screen name="rideDetails" component={rideDetails} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
