import { View, Text } from 'react-native'
import React from 'react'
import {hp,wp} from "../../../enums/styleGuide"
import MapView from 'react-native-maps'

export default function MapScreen() {
  return (
    <View style={{flex:1 }}>
        <MapView
        style={{width:"100%",height:"100%",marginTop:wp(2)}}
       
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
    </View>
  )
}