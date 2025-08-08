import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'

export default function billingDetails() {
  return (
    <View style={{flex:1}}>
        <View style={styles.Header}>
            <Text style={styles.Headertext}>
                Billing Details
            </Text>
        </View>


        <Image source={require('../../assets/images/greentick.png')} style={styles.Image}/>
<Text style={styles.Text}>Total Payment</Text>
<Text style={styles.Text2}>$80</Text>



<View style={styles.View}>
    <Text style={styles.text}>Total Distance</Text>
        <Text style={styles.text1}>:    0.8 Km</Text>
</View>






<View style={styles.view}>
    <Text style={styles.text}>Ride Time</Text>
        <Text style={styles.text1}>:    10 Min.</Text>
</View>






<View style={styles.view}>
    <Text style={styles.text}>Total Amount</Text>
        <Text style={styles.text1}>:      $100</Text>
</View>




<TouchableOpacity style={styles.touchable}>
    <Text style={styles.touchabletext}>Ok</Text>
</TouchableOpacity>









    </View>
  )
}