import { View, Text, Image, TouchableOpacity, TextInput, FlatList, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { hp, wp } from '../../enums/styleGuide';
import firestore from '@react-native-firebase/firestore';

export default function driverChat(props: any) {
  const { navigation } = props;
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const currentUserId = 'user1';
  const otherUserId = 'user2';
  const roomId = [currentUserId, otherUserId].sort().join('_');

  const messagesRef = firestore()
    .collection('chatRooms')
    .doc(roomId)
    .collection('messages');

  useEffect(() => {
    const unsubscribe = messagesRef
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const msgs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setMessages(msgs);
      });
    return () => unsubscribe();
  }, []);

  const sendMessage = async () => {
    if (input.trim() === '') return;
    await messagesRef.add({
      text: input,
      senderId: currentUserId,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.message,
        item.senderId === currentUserId ? styles.myMessage : styles.otherMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#412160' }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          gap: hp(14),
          marginTop: hp(2),
        }}
      >
        <View style={{ flexDirection: 'row', marginLeft: hp(3), gap: wp(1) }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assets/icons/backarrow.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: '#FFFFFF',
                marginRight: wp(5),
                marginTop: wp(3),
              }}
            />
          </TouchableOpacity>

          <Image
            source={require('../../assets/images/purpleprofile.png')}
            style={{ width: 50, height: 50, tintColor: '#FFFFFF' }}
          />
          <View style={{ marginLeft: hp(1), marginTop: wp(1.5) }}>
            <Text style={{ color: '#FFFFFF', fontSize: wp(4.5) }}>Driver Name</Text>
            <Text style={{ color: '#FFFFFF', alignSelf: 'center', fontSize: wp(4) }}>Online</Text>
          </View>
        </View>

        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/phonecall.png')}
            style={{ width: 28, height: 28, marginRight: wp(5), marginTop: wp(2) }}
          />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: '#FFFFFF', marginTop: hp(2), borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          inverted
          contentContainerStyle={{ padding: 10 }}
        />

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Type message"
            value={input}
            onChangeText={setInput}
            style={styles.input}
          />
          <TouchableOpacity style={styles.button} onPress={sendMessage}>
            <Text style={{ color: '#fff' }}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 8,
    maxWidth: '75%',
  },
  myMessage: {
    backgroundColor: 'grey',
    alignSelf: 'flex-end',
    
  },
  otherMessage: {
    backgroundColor: '#ccc',
    alignSelf: 'flex-start',
  },
  messageText: {
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  input: {
    flex: 1,
    backgroundColor: '#eee',
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    marginLeft: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
});
