import { StyleSheet } from "react-native";
import {hp,wp} from "../../enums/styleGuide";


export const styles = StyleSheet.create({
    headerstyle:{
        width:"100%",height:"6.5%",backgroundColor:"#412160",alignContent:"center",justifyContent:"center"

    },
    headerView2:{
        flexDirection:"row",justifyContent:"space-between",marginLeft:wp(7),width:wp(80)
    },
 headerImage:{
        width:20,height:20,tintColor:"#ffffff",marginTop:wp(1)
 },
 headerText:{
    fontSize:wp(4.5),fontWeight:"500",color:"#ffffff",
 }, 

 image:{
width:wp(40),height:wp(40),alignSelf:"center",marginTop:hp(10)
 },
 text:{
fontSize:wp(4.5),fontWeight:"700",marginTop:wp(7),alignSelf:"center",color:"#000000"
 },

 View:{
    alignSelf:"center",marginTop:hp(3)

 },
 Text:{
    fontSize:wp(5),fontWeight:"300",color:"#C4C4C4",alignSelf:"center"

 },


 touchable1:{

    width:"60%",height:"7%",backgroundColor:"#412160",alignSelf:"center",justifyContent:"center",borderRadius:wp(2),marginTop:hp(30)
 },
 touchText:{
    fontSize:wp(4.5),fontWeight:"700",color:"#fff",alignSelf:"center"

 },
 touchable2:{
        width:"60%",height:"7%",alignSelf:"center",justifyContent:"center",borderRadius:wp(2),marginTop:hp(1),borderWidth:1.5,borderColor:"#412160"


 },
 touchText2:{
    fontSize:wp(4.5),fontWeight:"700",color:"#412160",alignSelf:"center"

 },






})

