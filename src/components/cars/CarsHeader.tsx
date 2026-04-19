import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const CarsHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={22} />
      </TouchableOpacity>

      {/* Search */}
      <View style={styles.searchBox}>
        <Ionicons name="search-outline" size={18} color="#888" />
        <TextInput
          placeholder="What are you looking for?"
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default CarsHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 10,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 8,
    marginLeft: 5,
  },
});