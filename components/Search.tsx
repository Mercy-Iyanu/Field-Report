import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Ionicons } from '@expo/vector-icons';

interface SearchProps {
  placeholder: string;
  onChangeText: (text: string) => void;
}

export default function Search({ placeholder, onChangeText }: SearchProps) {
  const [searchText, setSearchText] = useState('');

  const handleClear = () => {
    setSearchText('');
    onChangeText('');
  };

  const handleChangeText = (text: string) => {
    setSearchText(text);
    onChangeText(text);
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput 
        placeholder={placeholder}
        placeholderTextColor='#CDCDE0'
        onChangeText={handleChangeText}
        value={searchText}
        style={styles.searchInput}
      />
      {searchText.length > 0 && (
        <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
          <Ionicons name="close-outline" size={20} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create ({
    searchContainer: {
        backgroundColor: '#1E1E2D',
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 16,
        marginBottom: 24,
      },
    searchInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: '#fff',
        fontSize: 16,
    },
    clearButton: {
      marginLeft: -10,
    }
})