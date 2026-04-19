import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
    data: string[];
    onPress?: (value: string) => void;
}

const RecentSearches: React.FC<Props> = ({ data, onPress }) => {
    return (
        <View style={styles.wrapper}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.container}>

                {data.map((item, index) => (
                    <TouchableOpacity
                        key={`${item}-${index}`}
                        style={styles.card}
                        activeOpacity={0.8}
                        onPress={() => onPress?.(item)}>
                        <Ionicons name="time-outline" size={18} color="#666" />

                        <View style={styles.textContainer}>
                        <Text style={styles.title} numberOfLines={1}>
                            {item}
                        </Text>

                        <Text style={styles.subtitle}>
                            +1 more filters
                        </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default RecentSearches;

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 10,
    },

    container: {
        paddingHorizontal: 16,
    },

    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#eee',
        marginRight: 10,
        minWidth: 180,
        maxWidth: 260,
    },

    textContainer: {
        marginLeft: 8,
        flex: 1,
    },

    title: {
        fontSize: 14,
        fontWeight: '500',
        color: '#111',
    },

    subtitle: {
        fontSize: 12,
        color: '#888',
    },
});