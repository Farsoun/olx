import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function CategoryCard() {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Image style={styles.image} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/743/743922.png' }}/>
                <View>
                    <Text style={styles.title}>Vehicles</Text>
                    <Text style={styles.subtitle}>Cars for Sale</Text>
                </View>
            </View>

            <TouchableOpacity>
                <Text style={styles.change}>Change</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#f5d76e',
    },
    title: {
        fontWeight: '600',
        fontSize: 16,
    },
    subtitle: {
        color: '#777',
    },
    change: {
        fontWeight: '500',
    },
});