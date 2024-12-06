import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { launchCamera, launchImageLibrary, Asset } from 'react-native-image-picker';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { Color } from '../utils'; // Assuming this contains color definitions

interface ImagePickerModalProps {
  visible: boolean;
  onClose: () => void;
  onImagePicked: (uri: string) => void;
}

const ImagePickerModal: React.FC<ImagePickerModalProps> = ({ visible, onClose, onImagePicked }) => {
  const requestCameraPermission = async () => {
    const permission = await check(PERMISSIONS.ANDROID.CAMERA);
    if (permission === RESULTS.GRANTED) {
      launchCamera({}, handleImagePick);
    } else {
      const requestResult = await request(PERMISSIONS.ANDROID.CAMERA);
      if (requestResult === RESULTS.GRANTED) {
        launchCamera({}, handleImagePick);
      } else {
        Alert.alert('Permission Denied', 'You need to grant camera permission to use this feature.');
      }
    }
  };

  const openGallery = () => {
    launchImageLibrary({}, handleImagePick);
  };

  const handleImagePick = (response: { didCancel?: boolean; error?: string; assets?: Asset[] }) => {
    if (!response.didCancel && !response.error && response.assets && response.assets.length > 0) {
      onImagePicked(response.assets[0].uri || '');
    }
    onClose(); // Close the modal once an image is picked
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Select Image Source</Text>
          <TouchableOpacity style={styles.modalButton} onPress={requestCameraPermission}>
            <Text style={styles.modalButtonText}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={openGallery}>
            <Text style={styles.modalButtonText}>Choose from Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalCancelButton} onPress={onClose}>
            <Text style={styles.modalCancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: Color.primaryColor,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
  modalCancelButton: {
    marginTop: 10,
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalCancelText: {
    color: Color.primaryColor,
    fontSize: 16,
  },
});

export default ImagePickerModal;
