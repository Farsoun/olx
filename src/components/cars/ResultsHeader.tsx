import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ResultsHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Showing: <Text style={styles.bold}>6042 Results</Text> for Cars for Sale
      </Text>

      <TouchableOpacity>
        <Text style={styles.sort}>Sort By ↑↓</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResultsHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  text: {
    color: '#666',
  },
  bold: {
    fontWeight: 'bold',
    color: '#000',
  },
  sort: {
    color: '#4AA3C3',
  },
});