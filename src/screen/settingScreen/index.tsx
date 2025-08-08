import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';

export default function settingScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.headerView}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/backarrow.png')}
              style={styles.headerimage}
            />
          </TouchableOpacity>
          <Text style={styles.headertext}>Settings</Text>
          <View></View>
        </View>
      </View>

      <View style={styles.View}>
        <View style={styles.View2}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/notification.png')}
              style={styles.Image1}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.Text}>Notification</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/vectorarrow.png')}
            style={styles.Image2}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.MainView2}>
        <View style={styles.View2}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/lock2.png')}
              style={styles.Image1}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.Text}>Change Password</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/vectorarrow.png')}
            style={styles.Image2}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.MainView2}>
        <View style={styles.View2}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/pin.png')}
              style={styles.Image1}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.Text}>Location</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/vectorarrow.png')}
            style={styles.Image2}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.MainView2}>
        <View style={styles.View2}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/payents.png')}
              style={styles.Image1}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.Text}>Payments</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/vectorarrow.png')}
            style={styles.Image2}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.MainView2}>
        <View style={styles.View2}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/setting.png')}
              style={styles.Image1}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.Text}>App Settings</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/vectorarrow.png')}
            style={styles.Image2}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.MainView2}>
        <View style={styles.View2}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/about.png')}
              style={styles.Image1}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.Text}>About</Text>
          </TouchableOpacity>
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
