import { View, Text } from 'react-native'
import React from 'react'
import {hp,wp} from "../../../enums/styleGuide"
export default function ActiveRides() {
  return (
    <View style={{flex:1}}>
      <Text style={{fontSize:wp(5.3),fontWeight:"400",alignSelf:"center",marginTop:hp(10),color:"#555555"}}>Active Rides</Text>

      <View style={{flexDirection:"row",justifyContent:"space-between",alignSelf:"center",width:"85%",marginTop:wp(16)}}>
        <Text style={{fontSize:wp(4.8),color:"#412160",fontWeight:"400"}}>Passenger Name</Text>
        <Text style={{fontSize:wp(4.8),color:"#412160",fontWeight:"400"}}>Demo</Text>
      </View>


       <View style={{flexDirection:"row",justifyContent:"space-between",alignSelf:"center",width:"85%",marginTop:wp(4)}}>
        <Text style={{fontSize:wp(4.8),color:"#412160",fontWeight:"400"}}>Date</Text>
        <Text style={{fontSize:wp(4.8),color:"#412160",fontWeight:"400"}}>Wed 12/02/20</Text>
      </View>

      <View style={{flexDirection:"row",justifyContent:"space-between",alignSelf:"center",width:"85%",marginTop:wp(4)}}>
        <Text style={{fontSize:wp(4.8),color:"#412160",fontWeight:"400"}}>Time</Text>
        <Text style={{fontSize:wp(4.8),color:"#412160",fontWeight:"400"}}>01:00PM</Text>
      </View>


        <View style={{flexDirection:"row",justifyContent:"space-between",alignSelf:"center",width:"85%",marginTop:wp(4)}}>
        <Text style={{fontSize:wp(4.8),color:"#412160",fontWeight:"400"}}>Contact Number</Text>
        <Text style={{fontSize:wp(4.8),color:"#412160",fontWeight:"400"}}>XXXXXXXXXX</Text>
      </View>


        <View style={{flexDirection:"row",justifyContent:"space-between",alignSelf:"center",width:"85%",marginTop:wp(4)}}>
        <Text style={{fontSize:wp(4.8),color:"#412160",fontWeight:"400"}}>Pickup Point</Text>
        <Text style={{fontSize:wp(4.8),color:"#412160",fontWeight:"400"}}>Central City</Text>
      </View>


<View style={{flexDirection:"row",justifyContent:"space-between",alignSelf:"center",width:"85%",marginTop:wp(4)}}>
        <Text style={{fontSize:wp(4.8),color:"#412160",fontWeight:"400"}}>Drop location</Text>
        <Text style={{fontSize:wp(4.8),color:"#412160",fontWeight:"400"}}>Airport</Text>
      </View>


      <View style={{flexDirection:"row",justifyContent:"space-between",alignSelf:"center",width:"85%",marginTop:wp(4)}}>
        <Text style={{fontSize:wp(4.8),color:"#412160",fontWeight:"400"}}>Distance</Text>
        <Text style={{fontSize:wp(4.8),color:"#412160",fontWeight:"400"}}>10KM</Text>
      </View>


      <View style={{flexDirection:"row",justifyContent:"space-between",alignSelf:"center",width:"85%",marginTop:wp(4)}}>
        <Text style={{fontSize:wp(4.8),color:"#412160",fontWeight:"400"}}>Price </Text>
        <Text style={{fontSize:wp(4.8),color:"#412160",fontWeight:"400"}}>$50</Text>
      </View>




    </View>
  )
}