import {
  View,
  Text,
  Image,
  Touchable,
  TouchableWithoutFeedbackComponent,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { styles } from './styles';

export default function contactSupport2() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerstyle}>
        <View style={styles.headerView2}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/backarrow.png')}
              style={styles.headerImage}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Contact Support</Text>
          <View></View>
        </View>
      </View>

      <Image
        source={require('../../assets/images/contactsupport.png')}
        style={styles.image}
      />

      <Text style={styles.text}>Need Some Help?</Text>

      <View style={styles.View}>
        <Text style={styles.Text}>Get Lost? Stuck Somewhere?</Text>
        <Text style={styles.Text}>Feel free to get in touch with us</Text>
      </View>

      <TouchableOpacity style={styles.touchable1}>
        <Text style={styles.touchText}>Contact Us</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchable2}>
        <Text style={styles.touchText2}>Email Us</Text>
      </TouchableOpacity>
    </View>
  );
}
