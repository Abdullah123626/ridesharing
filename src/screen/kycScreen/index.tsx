import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import {hp,wp} from "../../enums/styleGuide"
import { styles } from './styles'
export default function kycScreen() {
  return (
    <View style={{flex:1}}>
      <View style={styles.headerView}>
        <TouchableOpacity>
        <Image source={require('../../assets/icons/backarrow.png')} style={styles.headerImage}/>
        </TouchableOpacity>

        



        





      </View>
                  <Image source={require('../../assets/images/greentick.png')} style={styles.greentick}/>

                  <Text style={styles.kyctext}>KYC Submitted</Text>



                  <View style={styles.textView}>
                    <Text style={styles.textStyle}>Your KYC has successfully </Text>
                    <Text style={styles.textStyle2}>submitted.</Text>

                  </View>



                  <View style={styles.textView2}>
                    <Text style={styles.textStyleView}>You will be notify once your KYC is  </Text>
                    <Text style={styles.textStyleView2}>approved.</Text>

                  </View>
















    </View>
  )
}