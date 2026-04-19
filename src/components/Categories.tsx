import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

const DATA = [
    { id: '1', title: 'Vehicles', icon: 'https://cdn-icons-png.flaticon.com/512/743/743922.png' },
    { id: '2', title: 'Properties', icon: 'https://cdn-icons-png.flaticon.com/512/619/619153.png' },
    { id: '3', title: 'Mobiles', icon: 'https://cdn-icons-png.flaticon.com/512/15/15874.png' },
    { id: '4', title: 'Electronics', icon: 'https://cdn-icons-png.flaticon.com/512/1041/1041372.png' },
    { id: '5', title: 'Furniture', icon: 'https://cdn-icons-png.flaticon.com/512/3082/3082030.png' },
];

const Categories = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>All categories</Text>
            <FlatList
                data={DATA}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <View style={styles.item}>
                    <View style={styles.circle}>
                    <Image source={{ uri: item.icon }} style={styles.icon} />
                    </View>
                    <Text style={styles.label}>{item.title}</Text>
                </View>
                )}
            />
        </View>
    );
};

export default Categories;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        marginHorizontal: 16,
        marginBottom: 10,
    },
    item: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    circle: {
        width: 60,
        height: 60,
        borderRadius: 35,
        backgroundColor: '#efd062',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 30,
        height: 30,
    },
    label: {
        marginTop: 6,
        fontSize: 12,
        textAlign: 'center',
    },
});