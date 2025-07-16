import { View, TextInput, Image, StyleSheet } from 'react-native';
import React from 'react';
import { hp, wp } from '../../../enums/styleGuide';

export default function Textinput2({
  imageSource,
  placeholderText,
  imageStyle = {},       // default empty object
  textInputStyle = {},   // default empty object
}) {
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={imageSource}
          style={[styles.image, imageStyle]} // default + optional
          resizeMode="contain"
        />
        <TextInput
          placeholder={placeholderText}
          placeholderTextColor="#999"
          style={[styles.input, textInputStyle]} // default + optional
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp(80),
    height: hp(5.2),
    borderRadius: 29,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: wp(4),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(0),
  },
  image: {
    width: 24, // <- fixed size always
    height: 24,
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#412160',     // <- fixed color
    fontWeight: '400',    // <- fixed weight
    fontSize: wp(4.5),     // <- fixed size
  },
});
