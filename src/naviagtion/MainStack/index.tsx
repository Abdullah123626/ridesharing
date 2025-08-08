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
import appName from '../../screen/appName';
import enterDetails from '../../screen/enterDetails';
import carDetails from '../../screen/carDetails';
import kycScreen from '../../screen/kycScreen';
import contactSupport2 from '../../screen/contactSupport2';
import settingScreen from '../../screen/settingScreen';
import History from '../../screen/History';
import billingDetails from '../../screen/billingDetails';
import paymentHistory from '../../screen/paymentHistory';
import Settings from '../../screen/Settings';
import Map from '../../screen/Map';
import Review from '../../screen/Review';
import driverList from '../../screen/driverList';
import Notification from '../../screen/Notification';
//Import your screens here 


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
        <Stack.Screen name="appName" component={appName} />
        <Stack.Screen name="enterDetails" component={enterDetails} />
        <Stack.Screen name="carDetails" component={carDetails} />
        <Stack.Screen name="kycScreen" component={kycScreen} />
        <Stack.Screen name="contactSupport2" component={contactSupport2} />
        <Stack.Screen name="settingScreen" component={settingScreen} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="billingDetails" component={billingDetails} />
        <Stack.Screen name="paymentHistory" component={paymentHistory} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Review" component={Review} />
        <Stack.Screen name="driverList" component={driverList} />
        <Stack.Screen name="Notification" component={Notification} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
