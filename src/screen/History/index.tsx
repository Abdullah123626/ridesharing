import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'

export default function History() {
  return (
    <View  style={{flex:1}}>
        <View style={styles.Header}>
            <View style={styles.Headerview}>
                <Image source={require('../../assets/icons/slash.png')} style={styles.Headerimage}/>
                <Text style={styles.Headertext}>History</Text>
                <View></View>
            </View>
        </View>


        <View style={styles.View}>
            <Text style={styles.Text}>Passenger Name</Text>
            <Text style={styles.Text2}>Contact Number</Text>
            <Text style={styles.Text2}>Tue 13/01/20 01:45PM to 02:45PM</Text>
            <Text style={styles.Text2}>Pickup Point</Text>
            <Text style={styles.Text2}>Destination</Text>
            <View style={styles.View2}>
            <Text style={styles.Text2}>Rating</Text>
            <Image source={require('../../assets/icons/stars.png')} style={styles.Image2}/>
            </View>
            <Text style={styles.Text2}>Distance </Text>



            <TouchableOpacity style={styles.Touchable}>
                <Text style={styles.TouchableText}>Amount - Rs.45</Text>
            </TouchableOpacity>
        </View>



        <View style={styles.View}>
            <Text style={styles.Text}>Passenger Name</Text>
            <Text style={styles.Text2}>Contact Number</Text>
            <Text style={styles.Text2}>Tue 13/01/20 01:45PM to 02:45PM</Text>
            <Text style={styles.Text2}>Pickup Point</Text>
            <Text style={styles.Text2}>Destination</Text>
            <View style={styles.View2}>
            <Text style={styles.Text2}>Rating</Text>
            <Image source={require('../../assets/icons/stars.png')} style={styles.Image2}/>
            </View>
            <Text style={styles.Text2}>Distance </Text>



            <TouchableOpacity style={styles.Touchable}>
                <Text style={styles.TouchableText}>Amount - Rs.45</Text>
            </TouchableOpacity>
        </View>












        






















    </View>
  )
}