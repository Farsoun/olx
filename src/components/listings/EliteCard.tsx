import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Ad } from '../../types/ad';

interface Props {
    ad: Ad;
    onPress?: () => void;
}

const EliteCard: React.FC<Props> = ({ ad, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.9} onPress={onPress}>

            <View style={styles.eliteHeader}>
                <Ionicons name="ribbon-outline" size={16} color="#000" />
                <Text style={styles.eliteText}>Elite</Text>
            </View>

            <View>
                <Image source={{ uri: ad.image }} style={styles.image} />

                {ad.isVerified && (
                    <View style={styles.verifiedBadge}>
                        <Ionicons name="checkmark-circle" size={16} color="#4BB543" />
                        <Text style={styles.verifiedText}>Verified</Text>
                    </View>
                )}

                <TouchableOpacity style={styles.favorite}>
                    <Ionicons name="heart-outline" size={20} color="#fff" />
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.price}>USD {ad.price.toLocaleString()}</Text>

                <Text style={styles.title} numberOfLines={1}>
                    {ad.title}
                </Text>

                <View style={styles.row}>
                    <Text style={styles.meta}>📅 {ad.year}</Text>
                    <Text style={styles.meta}>🛣 {ad.mileage}</Text>
                    <Text style={styles.meta}>⛽ {ad.fuel}</Text>
                </View>

                <Text style={styles.location}>{ad.location}</Text>
                <Text style={styles.time}>{ad.time}</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={[styles.whatsapp, styles.flex]}>
                        <Ionicons name="logo-whatsapp" size={18} color="#2BB741" />
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.flex, styles.middle]}>
                        <Ionicons name="chatbubble-outline" size={16} />
                        <Text style={styles.buttonText}>Chat</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.flex, styles.right]}>
                        <Ionicons name="call-outline" size={16} />
                        <Text style={styles.buttonText}>Call</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default EliteCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 7,
        marginBottom: 16,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#E5C36A',
        marginHorizontal: 10
    },

    eliteHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E5C36A',
        padding: 10,
    },

    eliteText: {
        marginLeft: 6,
        fontWeight: '600',
    },

    image: {
        width: '100%',
        height: 200,
    },

    verifiedBadge: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: '#fff',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },

    verifiedText: {
        marginLeft: 4,
        fontSize: 12,
    },

    favorite: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(0,0,0,0.4)',
        padding: 6,
        borderRadius: 20,
    },

    content: {
        padding: 12,
    },

    price: {
        color: '#E4572E',
        fontSize: 18,
        fontWeight: 'bold',
    },

    title: {
        marginTop: 4,
        fontSize: 14,
        color: '#333',
    },

    row: {
        flexDirection: 'row',
        marginTop: 6,
        gap: 10,
    },

    meta: {
        fontSize: 12,
        color: '#555',
    },

    location: {
        marginTop: 6,
        color: '#777',
    },

    time: {
        fontSize: 12,
        color: '#aaa',
    },

    actions: {
        flexDirection: 'row',
        marginTop: 12,
    },

    flex: {
        flex: 1,
    },

    whatsapp: {
        backgroundColor: '#E8F5E9',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginRight: 6,
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 8,
    },

    middle: {
        marginHorizontal: 3,
    },

    right: {
        marginLeft: 6,
    },

    buttonText: {
        marginLeft: 6,
    },
});