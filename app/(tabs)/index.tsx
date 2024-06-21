import PreviewList from '@/components/PreviewList';
import Search from '@/components/Search';
import { 
  View,
  RefreshControl, 
  Text, 
  Image, 
  ScrollView, 
  StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function HomeScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);
  const logo = require('../../assets/images/logo.png');

  const [searchQuery, setSearchQuery] = useState('');

  const previewLists = [
    {title: 'Attend seminar', description: 'Posted at 9am'},
    {title: 'Call Mr. Amusan', description: 'Posted at 8:45 am'},
    {title: 'Schedule meeting with Dele travels', description: 'Posted at 1pm'}
  ]

  const handleSearchChange = (text: string) => setSearchQuery(text);

  const handlePreviewListPress = (list: any) => {
    console.log("List pressed:", list);
  }

  return (
    <ScrollView 
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello,</Text>
          <Text style={styles.username}>Tosin Onalaja</Text>
        </View>
        <Image
          source={logo}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Search field */}
      <Search 
        placeholder='Looking for something?'
        onChangeText={handleSearchChange}
      />

      {/* Calendar */}

      {/* List of activities */}
      <View style={styles.activitiesContainer}>
        <Text style={styles.activitiesTitle}>Your task for today</Text>
        {previewLists.map ((list, index) => (
          <PreviewList 
            key={index}
            title={list.title}
            description={list.description}
            onPress={() => handlePreviewListPress(list)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622',
    padding: 16,
    paddingTop: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  greeting: {
    color: '#fff',
    fontSize: 14,
  },
  username: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
  logo: {
    width: 50,
    height: 50,
  },
  activitiesContainer: {
    marginBottom: 16,
  },
  activitiesTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 12,
  },
  
});