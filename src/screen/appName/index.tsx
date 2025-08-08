import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import {hp,wp} from "../../enums/styleGuide"
export default function appName(props:any) {
    const {navigation} =props
  return (
    <View style={{flex:1}}>
      <View style={{width:"100%",height:"8%",justifyContent: 'center',backgroundColor:"#412160"}}>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginLeft:wp(6)}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image source={require("../../assets/icons/backarrow.png")} style={{width:20,height:20,tintColor:"#FFF",marginTop:wp(1)}}/>
        </TouchableOpacity>
        <Text style={{fontSize:wp(5),fontWeight:"600",color:"#fff"}}>App Name</Text>
        <View style={{marginRight:wp(10)}}></View>
        </View>
      </View>


      <Text style={{fontSize:wp(6),fontWeight:"500",color:"#412160",alignSelf:"center",marginTop:wp(20)}}>Car List</Text>

      <View style={{width:"85%",height:"5%",borderWidth:0.5,borderColor:"#412160",borderRadius:9,alignSelf:"center",marginTop:wp(7),justifyContent:"center"}}>
        <View style={{flexDirection:"row",justifyContent:"space-around",gap:wp(20)}}>
            <Text style={{fontSize:wp(5),fontWeight:"500",color:"#412160"}}>XUV500</Text>
            <Text style={{fontSize:wp(5),fontWeight:"500",color:"#412160"}}>MP09X3333</Text>
        </View>
      </View>



      <View style={{width:"85%",height:"5%",borderWidth:0.5,borderColor:"#412160",borderRadius:9,alignSelf:"center",marginTop:wp(7),justifyContent:"center"}}>
        <View style={{flexDirection:"row",justifyContent:"space-around",gap:wp(20)}}>
            <Text style={{fontSize:wp(5),fontWeight:"500",color:"#412160"}}>WAGON R</Text>
            <Text style={{fontSize:wp(5),fontWeight:"500",color:"#412160"}}>MP41CA3383</Text>
        </View>
      </View>


<View style={{width:"85%",height:"5%",borderWidth:0.5,borderColor:"#412160",borderRadius:9,alignSelf:"center",marginTop:wp(7),justifyContent:"center"}}>
        <View style={{flexDirection:"row",justifyContent:"space-around",gap:wp(45)}}>
            <Text style={{fontSize:wp(5),fontWeight:"500",color:"#412160"}}>Car Name</Text>
            <Text style={{fontSize:wp(5),fontWeight:"500",color:"#412160"}}>#3</Text>
        </View>
      </View>



<View style={{width:"85%",height:"12%",borderWidth:0.5,borderColor:"#412160",borderRadius:9,alignSelf:"center",marginTop:wp(7),justifyContent:"center"}}>
        <View style={{flexDirection:"row",justifyContent:"space-around",gap:wp(45)}}>
            <Text style={{fontSize:wp(5),fontWeight:"500",color:"#412160"}}>Car Name</Text>
            <Text style={{fontSize:wp(5),fontWeight:"500",color:"#412160"}}>#4</Text>
        </View>


        <TouchableOpacity 
        onPress={()=>navigation.navigate('enterDetails')}
        
        
        style={{width:"35%",height:"35%",alignSelf:"center",justifyContent:"center",marginTop:wp(5),backgroundColor:"#412160",borderRadius:6}}>
            <Text style={{fontSize:wp(3.5),fontWeight:"500",alignSelf:"center",color:"#FFF"}}>View Details</Text>
        </TouchableOpacity>




      </View>






      <View style={{width:"85%",height:"5%",borderWidth:0.5,borderColor:"#412160",borderRadius:9,alignSelf:"center",marginTop:wp(7),justifyContent:"center"}}>
        <View style={{flexDirection:"row",justifyContent:"space-around",gap:wp(45)}}>
            <Text style={{fontSize:wp(5),fontWeight:"500",color:"#412160"}}>Car Name</Text>
            <Text style={{fontSize:wp(5),fontWeight:"500",color:"#412160"}}>#7</Text>
        </View>
      </View>




      <View style={{width:"85%",height:"5%",borderWidth:0.5,borderColor:"#412160",borderRadius:9,alignSelf:"center",marginTop:wp(7),justifyContent:"center"}}>
        <View style={{flexDirection:"row",justifyContent:"space-around",gap:wp(45)}}>
            <Text style={{fontSize:wp(5),fontWeight:"500",color:"#412160"}}>Car Name</Text>
            <Text style={{fontSize:wp(5),fontWeight:"500",color:"#412160"}}>#8</Text>
        </View>
      </View>








      <TouchableOpacity 
      onPress={()=>navigation.navigate('carDetails')}
      
      
      style={{width:"100%",height:"7%",justifyContent:"center",backgroundColor:"#412160",marginTop:hp(14.5)}}>
        <Text style={{fontSize:wp(6.5),fontWeight:"500",alignSelf:"center",color:"#FFF"}}>Add a Car</Text>
      </TouchableOpacity>












    </View>
  )
}