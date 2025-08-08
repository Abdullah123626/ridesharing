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

export default function carDetails(props:any) {
const {navigation} =props

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
      <Text
        style={{
          fontSize: wp(4.2),
          fontWeight: '400',
          color: '#412160',
          marginTop: wp(3),
          marginLeft: wp(6),
        }}
      >
        {label}
      </Text>
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: '90%',
          height: '25%',
          alignSelf: 'center',
          borderRadius: wp(1.5),
          borderWidth: 1,
          borderColor: '#000',
          paddingHorizontal: 10,
          marginTop: wp(2),
          justifyContent: 'center',
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
          <Text style={{ fontSize: wp(6), fontWeight: '500', alignSelf: 'center' }}>
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
        contentContainerStyle={{ paddingBottom: hp(100) }}
      >
        <View
          style={{
            width: '100%',
            height: '7%',
            backgroundColor: '#412160',
            justifyContent: 'center',
          }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image
              source={require('../../assets/icons/backarrow.png')}
              style={{
                width: 20,
                height: 20,
                tintColor: '#FFF',
                marginTop: wp(1),
                marginLeft: wp(5),
              }}
            />
            </TouchableOpacity>
            <Text style={{ fontSize: wp(5), fontWeight: '700', color: '#FFF' }}>Car Details</Text>
            <View />
          </View>
        </View>

        {/* TextInputs */}
        <Text style={{ fontSize: wp(4.2), fontWeight: '400', color: '#412160', marginTop: wp(10), marginLeft: wp(6) }}>
          Car Name
        </Text>
        <TextInput
          placeholder="Maruti Suzuki"
          placeholderTextColor={'#000'}
          style={{
            width: '90%',
            height: '5%',
            alignSelf: 'center',
            borderRadius: wp(1.5),
            borderWidth: 1,
            borderColor: '#000',
            paddingHorizontal: 10,
            marginTop: wp(2),
            fontWeight: '700',
          }}
        />

        <Text style={{ fontSize: wp(4.2), fontWeight: '400', color: '#412160', marginTop: wp(3), marginLeft: wp(6) }}>
          Car Modal No.
        </Text>
        <TextInput
          placeholder="Cx432"
          placeholderTextColor={'#000'}
          style={{
            width: '90%',
            height: '5%',
            alignSelf: 'center',
            borderRadius: wp(1.5),
            borderWidth: 1,
            borderColor: '#000',
            paddingHorizontal: 10,
            marginTop: wp(2),
            fontWeight: '700',
          }}
        />

        <Text style={{ fontSize: wp(4.2), fontWeight: '400', color: '#412160', marginTop: wp(3), marginLeft: wp(6) }}>
          Car Number
        </Text>
        <TextInput
          placeholder="MP-09-2020"
          placeholderTextColor={'#000'}
          style={{
            width: '90%',
            height: '5%',
            alignSelf: 'center',
            borderRadius: wp(1.5),
            borderWidth: 1,
            borderColor: '#000',
            paddingHorizontal: 10,
            marginTop: wp(2),
            fontWeight: '700',
          }}
        />

        <Text style={{ fontSize: wp(4.2), fontWeight: '400', color: '#412160', marginTop: wp(3), marginLeft: wp(6) }}>
          Assigned Driver
        </Text>
        <TextInput
          placeholder="Driver Name"
          placeholderTextColor={'#000'}
          style={{
            width: '90%',
            height: '5%',
            alignSelf: 'center',
            borderRadius: wp(1.5),
            borderWidth: 1,
            borderColor: '#000',
            paddingHorizontal: 10,
            marginTop: wp(2),
            fontWeight: '700',
          }}
        />

        <Text style={{ fontSize: wp(4.2), fontWeight: '400', color: '#412160', marginTop: wp(3), marginLeft: wp(6) }}>
          More Info
        </Text>
        <TextInput
          placeholder="Extra laggage not allowed. Onboard Free wifi available."
          placeholderTextColor={'#000'}
          textAlignVertical="top"
          multiline
          style={{
            width: '90%',
            height: '11%',
            alignSelf: 'center',
            borderRadius: wp(1.5),
            borderWidth: 1,
            borderColor: '#000',
            paddingHorizontal: 10,
            marginTop: wp(2),
            fontWeight: '700',
          }}
        />

        {/* Upload boxes with image picker */}
        {renderUploadBox('Car Photo', carPhoto, () => pickImage(setCarPhoto))}

        <Text style={{ fontSize: wp(4.2), fontWeight: '400', color: '#412160', marginTop: wp(3), marginLeft: wp(6) }}>
          Public Service Vehicle Insurance
        </Text>
        <Text style={{ fontSize: wp(4.2), fontWeight: '400', color: '#412160', marginLeft: wp(6) }}>
          (PSV)
        </Text>
        {renderUploadBox('', psvPhoto, () => pickImage(setPsvPhoto))}

        {renderUploadBox('Annual Inspection Report', inspectionPhoto, () => pickImage(setInspectionPhoto))}

        {renderUploadBox('Vehicle Registration Car', registrationPhoto, () => pickImage(setRegistrationPhoto))}
      </ScrollView>
    </View>
  );
}
