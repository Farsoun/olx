import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface Props {
    placeholderMin?: string;
    placeholderMax?: string;
}

export default function RangeInput({
    placeholderMin = 'Min',
    placeholderMax = 'Max',
    }: Props) {
    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholderMin} style={styles.input}/>
            <TextInput placeholder={placeholderMax} style={styles.input}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 12,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 12,
    },
});