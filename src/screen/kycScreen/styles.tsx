import { StyleSheet } from "react-native";
import {hp,wp} from "../../enums/styleGuide"



export const styles = StyleSheet.create({
    headerView :{
        width:"100%",height:"6%",backgroundColor:"#412160",justifyContent:"center"

    },

    headerImage:{
        width:20,height:20,tintColor:"#FFF",marginTop:wp(1),marginLeft:wp(6)
    },

    greentick:{
        width:wp(30),height:wp(30),marginTop:hp(30),alignSelf:"center"
    },
    kyctext:{

        fontSize:wp(6.5),fontWeight:"700",alignSelf:"center" ,marginTop:wp(8),color:"#000000"   },

        textView:{
            marginTop:wp(20),alignSelf:"center"

        },
        textStyle:{
            fontSize:wp(4.5),fontWeight:"300",color:"#797777"

        },
        textStyle2:{
            fontSize:wp(4.5),fontWeight:"300",color:"#797777",alignSelf:"center"

        },

        textView2:{
                        marginTop:wp(3),alignSelf:"center"


        },

        textStyleView:{
            fontSize:wp(4.5),fontWeight:"300",color:"#797777"

        },
        textStyleView2:{
            fontSize:wp(4.5),fontWeight:"300",color:"#797777",alignSelf:"center"

        },



















})
