import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'

export default function driverList() {
  return (
    <View style={{flex:1}}>
    <View style={styles.Header}>
      <View style={styles.Headerview}>
        <TouchableOpacity>
        <Image source={require("../../assets/icons/backarrow.png")} style={styles.headerimage}/>
        </TouchableOpacity>
        <Text style={styles.headertext}>Driver List</Text>
        <View></View>
      </View>

    </View>


    <View style={styles.View}>
      <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%",alignSelf:"center"}}>
      <Text style={styles.Text}>
Search...
      </Text>
      <Image source={require("../../assets/icons/cross.png")} style={styles.Image}/>
      </View>
    </View>






    <View style={styles.View1}>
      <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%",alignSelf:"center"}}>
      <Text style={styles.Text}>
Driver’s Name
      </Text>
      <Text style={styles.Text}>Info</Text>
      </View>
    </View>








    <View style={styles.Mainview}>
      <View style={styles.view}>
        <View  >
        <Text style={styles.text}>Contact Number</Text>
        <Text style={styles.text2}>Maruti Suzuki</Text>
                <Text style={styles.text2}>Address : C-114,</Text>

        </View>
        <Image source={require("../../assets/images/backpurple.png")} style={styles.image}/>
      </View>


      <View style={styles.view2}>
        <Text style={styles.text}> MG Road, Mumbai</Text>
        <Text style={styles.text}> Driver’s Name</Text>

      </View>

      <Text style={styles.text3}>Real Time Location</Text>

      <Text  style={styles.text4}>Ride History</Text>
      <View style={styles.view3}></View>



 <View style={styles.view2}>
        <Text style={styles.text}> Price</Text>
        <Text style={styles.text}>$10</Text>

      </View>


      

      <View style={styles.view2}>
        <Text style={styles.text}> PickUp</Text>
        <Text style={styles.text}>Central City, 214</Text>

      </View>



      <View style={styles.view2}>
        <Text style={styles.text}> Destination</Text>
        <Text style={styles.text}>Airport, Gate No.2</Text>

      </View>



      <View style={styles.view2}>
        <Text style={styles.text}> Mileage</Text>
        <Text style={styles.text}>54.25</Text>

      </View>


      <View style={styles.view2}>
        <Text style={styles.text}> Ride Date</Text>
        <Text style={styles.text}>02/05/20</Text>

      </View>



<View style={styles.view2}>
        <Text style={styles.text}> Driver Payment History</Text>
        <Text style={styles.text}>$10</Text>

      </View>



<View style={styles.touchableview}>
      <TouchableOpacity style={styles.touchable}>
        <Text style={styles.touchabletext}>Call</Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.touchable2}>
        <Text style={styles.touchabletext}>Remove</Text>
      </TouchableOpacity>

</View>
      







    </View>



    <View style={styles.View1}>
      <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%",alignSelf:"center"}}>
      <Text style={styles.Text}>
Driver’s Name
      </Text>
      <Text style={styles.Text}>Info</Text>
      </View>
    </View>















    </View>
  )
}