import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import DocumentPicker, { DocumentPickerResponse, types } from 'react-native-document-picker';

interface DocumentPickerComponentProps {
  onFileSelect: (response: DocumentPickerResponse[]) => void;
}

export default function DocumentPickerComponent({ onFileSelect }: DocumentPickerComponentProps) {
  const [fileResponse, setFileResponse] = useState<DocumentPickerResponse[] | null>(null);

  const handleDocumentSelection = async () => {
    try {
      const response = await DocumentPicker.pick({
        type: [
          types.images,
          types.pdf,
          types.docx,
          types.xlsx,
        ],
      });
      setFileResponse(response);
      onFileSelect(response);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        throw err;
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleDocumentSelection}>
        <Text style={styles.buttonText}>Select Document</Text>
      </TouchableOpacity>
      {fileResponse && fileResponse.length > 0 && (
        <View style={styles.fileContainer}>
          <Text style={styles.fileName}>File Name: {fileResponse[0]?.name ?? 'Unknown'}</Text>
          <Text style={styles.fileType}>File Type: {fileResponse[0]?.type ?? 'Unknown'}</Text>
          <Text style={styles.fileSize}>File Size: {fileResponse[0]?.size ?? 0} bytes</Text>
          {fileResponse[0]?.type?.startsWith('image/') && (
            <Image
              source={{ uri: fileResponse[0]?.uri }}
              style={styles.image}
              resizeMode="contain"
            />
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  button: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  fileContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  fileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  fileType: {
    fontSize: 14,
    color: '#666',
  },
  fileSize: {
    fontSize: 14,
    color: '#666',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
});
