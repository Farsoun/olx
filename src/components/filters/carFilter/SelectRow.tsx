import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
    label: string;
    value?: string;
    onPress?: () => void;
}

export default function SelectRow({ label, value = 'Any', onPress }: Props) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.value}>{value}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    label: {
        fontWeight: '600',
        fontSize: 16,
    },
    value: {
        color: '#777',
        marginTop: 4,
    },
});