import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './style';
import mapScreen from '../mapScreen';

export default function Settings(props: any) {
  const { navigation } = props;
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.Header}>
        <View style={styles.Headerview}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assets/icons/backarrow.png')}
              style={styles.Image}
            />
          </TouchableOpacity>
          <Text style={styles.Text}>Settings</Text>
          <View></View>
        </View>
      </View>
      <View style={styles.View}>
        <View style={styles.view}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/lock2.png')}
              style={styles.Image1}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Change Password</Text>
        </View>

        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/vectorarrow.png')}
            style={styles.Image2}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.View2}>
        <View style={styles.view}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/setting.png')}
              style={styles.Image1}
            />
          </TouchableOpacity>
          <Text style={styles.text}>App Settings</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/vectorarrow.png')}
            style={styles.Image2}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.View2}>
        <View style={styles.view}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/about.png')}
              style={styles.Image1}
            />
          </TouchableOpacity>
          <Text style={styles.text}>About</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/vectorarrow.png')}
            style={styles.Image2}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
