// App.js
import React from 'react';
import MainStack from './src/naviagtion/MainStack';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaProvider>
          <MainStack />
      </SafeAreaProvider>
    </View>
  );
}
