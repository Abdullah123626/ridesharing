import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { hp, wp } from '../../enums/styleGuide';
import ImagePicker from 'react-native-image-crop-picker';

export default function enterDetails(props:any) {
  const {navigation}=props
  const [carPhoto, setCarPhoto] = useState(null);
  const [psvPhoto, setPsvPhoto] = useState(null);
  const [inspectionPhoto, setInspectionPhoto] = useState(null);
  const [registrationPhoto, setRegistrationPhoto] = useState(null);

  const pickImage = (setter) => {
    Alert.alert(
      'Upload Photo',
      'Choose an option',
      [
        {
          text: 'Camera',
          onPress: () => {
            ImagePicker.openCamera({
              width: 300,
              height: 400,
              cropping: true,
            }).then((image) => {
              setter(image.path);
            });
          },
        },
        {
          text: 'Gallery',
          onPress: () => {
            ImagePicker.openPicker({
              width: 300,
              height: 400,
              cropping: true,
            }).then((image) => {
              setter(image.path);
            });
          },
        },
        { text: 'Cancel', style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

  const renderUploadBox = (label, imageUri, onPress) => (
    <>
      <View style={{ marginTop: wp(7), marginLeft: wp(5.5) }}>
        <Text style={{ fontSize: wp(4), fontWeight: '500', color: '#412160' }}>{label}</Text>
      </View>
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: '90%',
          height: hp(25),
          borderRadius: 6,
          borderWidth: 1,
          borderColor: '#000',
          alignSelf: 'center',
          marginTop: wp(2),
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {imageUri ? (
          <Image
            source={{ uri: imageUri }}
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
          />
        ) : (
          <Text style={{ fontSize: wp(6), fontWeight: '400', color: 'grey' }}>
            Upload Photo
          </Text>
        )}
      </TouchableOpacity>
    </>
  );

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: hp(5) }}
      >
        {/* Header */}
        <View style={{ width: '100%', height: '3.7%', backgroundColor: '#412160', justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between',width:wp(88) }}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image
              source={require('../../assets/icons/backarrow.png')}
              style={{ width: 20, height: 20, tintColor: '#FFF', marginLeft: wp(5), marginTop: wp(1) }}
            />
            </TouchableOpacity>
            <Text style={{ fontSize: wp(5), fontWeight: '700', color: '#FFF' }}>Enter Details</Text>
            <View  />
          </View>
        </View>

        {/* Input Fields */}
        {[
          { label: 'Car Name', placeholder: 'Enter your car name' },
          { label: 'Car Modal No.', placeholder: 'Enter Your Car Modal No...' },
          { label: 'Car Number', placeholder: 'Enter Your Car Number...' },
        ].map((item, index) => (
          <View key={index}>
            <View style={{ marginTop: wp(4), marginLeft: wp(5.5) }}>
              <Text style={{ fontSize: wp(4), fontWeight: '500', color: '#412160' }}>{item.label}</Text>
            </View>
            <TextInput
              placeholder={item.placeholder}
              placeholderTextColor={'grey'}
              style={{
                width: '90%',
                height: hp(6),
                borderRadius: 6,
                borderWidth: 1,
                borderColor: '#000',
                alignSelf: 'center',
                paddingHorizontal: wp(2),
                marginTop: wp(2),
              }}
            />
          </View>
        ))}

        {/* Assign Driver */}
        <View style={{ marginTop: wp(4), marginLeft: wp(5.5) }}>
          <Text style={{ fontSize: wp(4), fontWeight: '500', color: '#412160' }}>Assign Driver</Text>
        </View>
        <TouchableOpacity
          style={{
            width: '90%',
            height: hp(6),
            borderRadius: 6,
            borderWidth: 1,
            borderColor: '#000',
            alignSelf: 'center',
            paddingHorizontal: wp(2),
            marginTop: wp(2),
            justifyContent: 'center',
          }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TextInput placeholder="Select your driver..." style={{ flex: 1 }} />
            <Image source={require('../../assets/icons/down.png')} style={{ width: 20, height: 20 }} />
          </View>
        </TouchableOpacity>

        {/* More Info */}
        <View style={{ marginTop: wp(4), marginLeft: wp(5.5) }}>
          <Text style={{ fontSize: wp(4), fontWeight: '500', color: '#412160' }}>More Info</Text>
        </View>
        <TextInput
          placeholder="Write here..."
          placeholderTextColor={'grey'}
          textAlignVertical="top"
          multiline
          style={{
            width: '90%',
            height: hp(15),
            borderRadius: 6,
            borderWidth: 1,
            borderColor: '#000',
            alignSelf: 'center',
            paddingHorizontal: wp(2),
            marginTop: wp(2),
          }}
        />

        {/* Upload Sections */}
        {renderUploadBox('Car Photo', carPhoto, () => pickImage(setCarPhoto))}
        {renderUploadBox('Public Service Vehicle Insurance (PSV)', psvPhoto, () => pickImage(setPsvPhoto))}
        {renderUploadBox('Annual inspection report', inspectionPhoto, () => pickImage(setInspectionPhoto))}
        {renderUploadBox('Vehicle Registration Car', registrationPhoto, () => pickImage(setRegistrationPhoto))}

        {/* Save Button */}
        <TouchableOpacity
          style={{
            width: '100%',
            height: hp(6),
            backgroundColor: '#412160',
            justifyContent: 'center',
            marginTop: wp(10),
          }}
        >
          <Text style={{ fontSize: wp(4.5), fontWeight: '700', alignSelf: 'center', color: '#FFFFFF' }}>
            Save
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
