import { StyleSheet, Touchable } from "react-native";
import {hp,wp} from '../../enums/styleGuide'

export const styles = StyleSheet.create({
    Header:{
        width:"100%",height:"6.5%",justifyContent:"center",backgroundColor:"#412160"
    },
    Headerview:{
        flexDirection:"row",justifyContent:"space-between",marginLeft:wp(5),width:wp(80)

    },
    Headerimage:{
        width:35,height:35,marginTop:wp(1)

    },
    Headertext:{
        fontSize:wp(5.5),fontWeight:"600",color:"#fff",marginTop:wp(1)

    },
   View: {
  width: "90%",
  height: "35%",
  alignSelf: "center",
  marginTop: wp(10),
  borderWidth: 0.5,
  borderColor: "#FFFFFF",
  borderRadius: wp(1),

  // iOS Shadow
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.4,
  shadowRadius: 6,

  // Android Shadow
  elevation: 10,
  backgroundColor: "#fff", // Required for elevation to show on Android
}
,
    View2:{
        flexDirection:"row",justifyContent:"space-between"

    },
    Image2:{
        width:138,height:20,marginTop:wp(2),marginRight:wp(2)

    },
    Text:{
        fontSize:wp(4.5),fontWeight:"500",color:"#555555",marginLeft:wp(5),marginTop:wp(3)
    },
    Text2:{
                fontSize:wp(4.5),fontWeight:"500",color:"#555555",marginLeft:wp(5),marginTop:wp(2)


    },
    Touchable:{
        width:"100%",height:"15%",justifyContent:"center",backgroundColor:"#A8A8A8",marginTop:wp(5)

    },
    TouchableText:{
        fontSize:wp(4.5),fontWeight:"500",color:"#ffffff",alignSelf:"center"

    },


})
