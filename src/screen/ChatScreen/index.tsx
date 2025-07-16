import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  FlatList, StyleSheet, KeyboardAvoidingView, Platform,
  Alert, Image, Linking, Modal, ScrollView
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';
import uuid from 'react-native-uuid';

export default function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [mediaModalVisible, setMediaModalVisible] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState([]);

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
        const msgs = snapshot.docs
          .map(doc => ({ id: doc.id, ...doc.data() }))
          .filter(msg => !msg.deletedFor?.includes(currentUserId));
        setMessages(msgs);
      });

    return () => unsubscribe();
  }, []);

  const uploadMediaToStorage = async (media) => {
    const ext = media.path.split('.').pop();
    const filename = `${uuid.v4()}.${ext}`;
    const storagePath = `chatFiles/${roomId}/${filename}`;
    const reference = storage().ref(storagePath);
    await reference.putFile(media.path);
    const downloadUrl = await reference.getDownloadURL();
    return { downloadUrl, storagePath, mime: media.mime };
  };

  const sendMessage = async () => {
    if (!input.trim() && selectedMedia.length === 0) return;

    for (const media of selectedMedia) {
      const uploaded = await uploadMediaToStorage(media);

      await messagesRef.add({
        senderId: currentUserId,
        createdAt: firestore.FieldValue.serverTimestamp(),
        fileUrl: uploaded.downloadUrl,
        fileType: uploaded.mime.includes('video') ? 'video' : 'image',
        fileName: media.filename || 'media',
        storagePath: uploaded.storagePath,
        deletedFor: [],
      });
    }
    setSelectedMedia([]);

    if (input.trim()) {
      await messagesRef.add({
        senderId: currentUserId,
        text: input.trim(),
        createdAt: firestore.FieldValue.serverTimestamp(),
        deletedFor: [],
      });
      setInput('');
    }
  };

  const openGallery = () => {
    ImagePicker.openPicker({
      multiple: true,
      mediaType: 'any',
    }).then(images => {
      setSelectedMedia(images);
      setMediaModalVisible(false);
    }).catch(() => setMediaModalVisible(false));
  };

  const deleteMessage = (item) => {
    Alert.alert('Delete Message', 'Choose an option', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete for Me',
        onPress: async () => {
          await messagesRef.doc(item.id).update({
            deletedFor: firestore.FieldValue.arrayUnion(currentUserId),
          });
        },
      },
      {
        text: 'Delete for Everyone',
        style: 'destructive',
        onPress: async () => {
          if (item.senderId === currentUserId) {
            if (item.storagePath) {
              try {
                await storage().ref(item.storagePath).delete();
              } catch (err) {
                console.log('Storage delete error:', err);
              }
            }
            await messagesRef.doc(item.id).delete();
          } else {
            Alert.alert("Only the sender can delete for everyone.");
          }
        },
      },
    ]);
  };

  const renderItem = ({ item }) => {
    const isCurrentUser = item.senderId === currentUserId;
    return (
      <View style={{ alignSelf: isCurrentUser ? 'flex-end' : 'flex-start', marginBottom: 8 }}>
        <TouchableOpacity
          onLongPress={() => deleteMessage(item)}
          style={[styles.message, isCurrentUser ? styles.myMessage : styles.otherMessage]}
        >
          {item.text && <Text style={styles.messageText}>{item.text}</Text>}
          {item.fileType === 'image' && (
            <Image source={{ uri: item.fileUrl }} style={styles.image} />
          )}
          {item.fileType === 'video' && (
            <Text style={[styles.messageText, { fontStyle: 'italic' }]}>🎥 Video: {item.fileName}</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#f0f0f0' }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        inverted
        contentContainerStyle={{ padding: 10 }}
      />

      {selectedMedia.length > 0 && (
        <ScrollView horizontal style={{ paddingHorizontal: 10 }}>
          {selectedMedia.map((media, index) => (
            <Image key={index} source={{ uri: media.path }} style={{ width: 70, height: 70, marginRight: 8, borderRadius: 10 }} />
          ))}
        </ScrollView>
      )}

      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => setMediaModalVisible(true)} style={styles.iconButton}>
          <Text style={{ fontSize: 18 }}>➕</Text>
        </TouchableOpacity>

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

      <Modal
        transparent
        visible={mediaModalVisible}
        animationType="fade"
        onRequestClose={() => setMediaModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalBackground}
          activeOpacity={1}
          onPressOut={() => setMediaModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.modalButton} onPress={openGallery}>
              <Text style={styles.modalText}>🖼️ Select Images/Videos</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </KeyboardAvoidingView>
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
    backgroundColor:"#000",
    alignSelf: 'flex-end',
  },
  otherMessage: {
    backgroundColor: '#000',
    alignSelf: 'flex-start',
  },
  messageText: {
    color: '#fff',
    marginBottom: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  iconButton: {
    marginHorizontal: 5,
  },
  input: {
    flex: 1,
    backgroundColor: '#eee',
    paddingHorizontal: 15,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: '#000205ff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    padding: 20,
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 20,
  },
  modalButton: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    color: '#2f6cadff',
    fontWeight: '600',
  },
});