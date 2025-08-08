
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import { styles } from './style';
import { hp } from '../../enums/styleGuide';

export default function Review() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? hp(8) : hp(2)}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: hp(2), // Increased padding for better spacing
        }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.Main}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/slash.png')}
              style={styles.Image}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={styles.View}>
            <Image
              source={require('../../assets/images/backpurple.png')}
              style={styles.viewimage}
              resizeMode="contain"
            />
            <Text style={styles.Text}>Passenger Name</Text>
            <Text style={styles.text}>Rating</Text>
            <Image
              source={require('../../assets/icons/stars.png')}
              style={styles.starImage}
              resizeMode="contain"
            />
            <Text style={styles.inputtext}>Review</Text>
            <TextInput
              placeholder="Write here something..."
              placeholderTextColor="#555555"
              textAlignVertical="top"
              multiline={true}
              numberOfLines={4}
              style={styles.Textinnput}
              textBreakStrategy="highQuality" // Improves text rendering
              returnKeyType="done" // Adds done button on keyboard
            />
            <View style={styles.view}>
              <TouchableOpacity style={styles.touchable}>
                <Text style={styles.touchabletex}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchable2}>
                <Text style={styles.touchabletext2}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}