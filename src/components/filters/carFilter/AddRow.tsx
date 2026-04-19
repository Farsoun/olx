import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
    label: string;
}

export default function AddRow({ label }: Props) {
    return (
        <TouchableOpacity style={styles.row}>
            <Text style={styles.label}>{label}</Text>

            <View style={styles.right}>
                <Ionicons name="add" size={18} />
                <Text style={styles.add}>Add</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    label: {
        fontWeight: '600',
        fontSize: 16,
    },
    right: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    add: {
        fontWeight: '500',
    },
});