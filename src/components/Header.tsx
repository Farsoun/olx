import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.locationContainer}>
                <Ionicons name="location-outline" size={18} color="#F4C542" />
                <Text style={styles.country}>Lebanon</Text>
                <Ionicons name="chevron-down" size={16} color="#000" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.bellContainer}>
                <Ionicons name="notifications-outline" size={22} color="#000" />
                <View style={styles.dot} />
            </TouchableOpacity>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 10,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    country: {
        fontSize: 16,
        fontWeight: '600',
    },
    bellContainer: {
        position: 'relative',
    },
    dot: {
        position: 'absolute',
        right: 0,
        top: 0,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'red',
    },
});