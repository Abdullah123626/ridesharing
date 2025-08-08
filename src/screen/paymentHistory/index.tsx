import { View, Text, Image, TouchableOpacity, Touchable } from 'react-native'
import React from 'react'
import { styles } from './style'

export default function paymentHistory() {
  return (
    <View style={{flex:1}}>
        <View style={styles.Header}>
            <View style={styles.Headerview}>
                <TouchableOpacity>
                <Image source={require('../../assets/icons/backarrow.png')} style={styles.Image}/>
                </TouchableOpacity>
                <Text style={styles.Text}>Payments History</Text>
                <View></View>
            </View>
        </View>

        <Text style={styles.text}>Payments Details </Text>


        <View style={styles.Touchableview}>
            <TouchableOpacity style={styles.touchable}>
                <Text style={styles.touchabletext}>Total Earning</Text>
               <Text style={styles.touchabletext}>$100</Text>

            </TouchableOpacity>


 <TouchableOpacity style={styles.touchable}>
                <Text style={styles.touchabletext}>Total Due</Text>
               <Text style={styles.touchabletext}>$40</Text>

            </TouchableOpacity>






        </View>


        <View style={styles.mainView}>
            <View style={styles.View}>
                <Image source={require('../../assets/icons/pin.png')} style={styles.Image1}/>
                <Text style={styles.text1}>IT park - Regal Square, Indore</Text>
            </View>

            <View style={styles.View1}>
                <Text style={styles.viewtext}>Booking ID</Text>
                <Text style={styles.viewtext}>BOK1304920</Text>
            </View>

             <View style={styles.View2}>
                <Text style={styles.viewtext}>Amount</Text>
                <Text style={styles.viewtext}>$50</Text>
            </View>


            <View style={styles.View2}>
                <Text style={styles.viewtext}>Status</Text>
                <Text style={styles.viewtext}>Due</Text>
            </View>


            <View style={styles.View2}>
                <Text style={styles.viewtext}>Distance(in Km)</Text>
                <Text style={styles.viewtext}>5 Km</Text>
            </View>


            
            





        </View>







        <View style={styles.mainView}>
            <View style={styles.View}>
                <Image source={require('../../assets/icons/pin.png')} style={styles.Image1}/>
                <Text style={styles.text1}>IT park - Regal Square, Indore</Text>
            </View>

            <View style={styles.View1}>
                <Text style={styles.viewtext}>Booking ID</Text>
                <Text style={styles.viewtext}>BOK1304920</Text>
            </View>

             <View style={styles.View2}>
                <Text style={styles.viewtext}>Amount</Text>
                <Text style={styles.viewtext}>$50</Text>
            </View>


            <View style={styles.View2}>
                <Text style={styles.viewtext}>Status</Text>
                <Text style={styles.viewtext}>Due</Text>
            </View>


            <View style={styles.View2}>
                <Text style={styles.viewtext}>Distance(in Km)</Text>
                <Text style={styles.viewtext}>5 Km</Text>
            </View>


            
            





        </View>






















<TouchableOpacity style={styles.Touchable}>
    <Text style={styles.Touchbaletext}>Your Total Balance : $60</Text>
</TouchableOpacity>



















    </View>
  )
}