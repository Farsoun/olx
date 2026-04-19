import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
    title: string;
    onPress?: () => void;
}

const SectionHeader: React.FC<Props> = ({ title, onPress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>

            {onPress && (
                <TouchableOpacity style={styles.viewAllContainer} onPress={onPress}>
                <Text style={styles.viewAll}>View All</Text>
                <Ionicons name="chevron-forward" size={20} color="#000" />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default SectionHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        marginTop: 10,
        marginBottom: 5,
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
    },
    viewAllContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    viewAll: {
        color: '#4AA3C3',
        fontWeight: '700',
    },
});