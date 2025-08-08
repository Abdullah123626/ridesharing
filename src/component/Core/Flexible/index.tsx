import { View, Text } from 'react-native'
import React from 'react'
import {hp,wp} from "../../../enums/styleGuide"
import { styles } from './style'
export default function Flexibile() {
  return (
    <View style={{flex:1}}>
      <Text style={{fontSize:wp(5),fontWeight:"700",alignSelf:"center",marginTop:hp(10),color:"#555555"
      }}>Active Rides</Text>

      <View style={styles.view}>
        <Text style={styles.text}>Passenger Name</Text>
        <Text style={styles.text}>Demo</Text>
      </View>

<View style={styles.view2}>
        <Text style={styles.text}>Date </Text>
        <Text style={styles.text}>Wed 12/02/20</Text>
      </View>


<View style={styles.view2}>
        <Text style={styles.text}>Time</Text>
        <Text style={styles.text}>01:00PM</Text>
      </View>



<View style={styles.view2}>
        <Text style={styles.text}>Contact Number</Text>
        <Text style={styles.text}>XXXXXXXXXX</Text>
      </View>



<View style={styles.view2}>
        <Text style={styles.text}>Pickup Point</Text>
        <Text style={styles.text}>Central City</Text>
      </View>



<View style={styles.view2}>
        <Text style={styles.text}>Drop location</Text>
        <Text style={styles.text}>Airport</Text>
      </View>



      
<View style={styles.view2}>
        <Text style={styles.text}>Distance</Text>
        <Text style={styles.text}>10KM</Text>
      </View>



      
<View style={styles.view2}>
        <Text style={styles.text}>Price </Text>
        <Text style={styles.text}>$50</Text>
      </View>








    </View>
  )
}