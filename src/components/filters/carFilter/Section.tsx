import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
    title?: string;
    children: React.ReactNode;
}

export default function Section({ title, children }: Props) {
    return (
        // if ther eis no title, it removes the padding with noTitleContainer
        <View
            style={[
                styles.container,
                !title && styles.noTitleContainer,
            ]}>
            {title ? <Text style={styles.title}>{title}</Text> : null}

        {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },

    noTitleContainer: {
        paddingTop: 0
    },

    title: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
    },
});