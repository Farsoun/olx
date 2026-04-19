import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const businesses = [
  {
    id: '1',
    name: 'Saad & Trad SAL',
    logo: 'https://via.placeholder.com/80',
  },
  {
    id: '2',
    name: 'Transmotor Moubark',
    logo: 'https://via.placeholder.com/80',
  },
  {
    id: '3',
    name: 'Bassoul Heneine',
    logo: 'https://via.placeholder.com/80',
  },
];

const FeaturedBusinesses = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Featured Businesses</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {businesses.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.logo }} style={styles.logo} />
            <Text style={styles.name}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedBusinesses;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  title: {
    paddingHorizontal: 12,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  logo: {
    width: 80,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  name: {
    textAlign: 'center',
    fontSize: 12,
  },
});