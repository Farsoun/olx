import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  onOpenFilters: () => void;
}

const FilterRow: React.FC<Props> = ({ onOpenFilters }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.filterBtn}
        onPress={onOpenFilters}
      >
        <Ionicons name="options-outline" size={16} color="#4AA3C3" />
        <Text style={styles.filterText}>Filters</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.pill}>
        <Text>All country</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.pill}>
        <Text>Cars for Sale</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    gap: 10,
    marginBottom: 10,
  },
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6F4F9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  filterText: {
    marginLeft: 5,
    color: '#4AA3C3',
  },
  pill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});