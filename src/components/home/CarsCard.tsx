import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CarCard = ({ item }: any) => {
    const [liked, setLiked] = useState(false);

    return (
        <TouchableOpacity style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.content}>
                <View style={styles.priceRow}>
                    <Text style={styles.price}>{item.price}</Text>

                    <TouchableOpacity onPress={() => setLiked(!liked)}>
                        <Ionicons
                            name={liked ? 'heart' : 'heart-outline'}
                            size={20}
                            color={liked ? 'red' : '#000'}
                            style={styles.favIcon}
                        />
                    </TouchableOpacity>
                </View>

                <Text style={styles.title} numberOfLines={1}>
                    {item.title}
                </Text>

                <Text style={styles.details}>
                    {item.year} - {item.km} km
                </Text>

                <Text style={styles.location}>{item.location}</Text>
                <Text style={styles.time}>{item.time}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CarCard;

const styles = StyleSheet.create({
    card: {
        width: 260,
        marginLeft: 16,
        backgroundColor: '#fff',
        borderRadius: 7,
        overflow: 'hidden',
        borderColor: '#eee',
        borderWidth: 1,
    },
    image: {
        width: '100%',
        height: 140,
    },
    content: {
        padding: 10,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    price: {
        color: '#FF5A5F',
        fontWeight: '700',
        fontSize: 16,
    },
    title: {
        marginTop: 4,
        color: '#333',
    },
    details: {
        marginVertical: 6,
        color: '#555',
    },
    location: {
        color: '#666',
        fontSize: 12,
    },
    time: {
        color: '#999',
        fontSize: 11,
    },
    favIcon: {
        backgroundColor: '#fff',
        padding: 4,
        borderRadius: 20,
    },
});