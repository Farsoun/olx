import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <Ionicons name="search-outline" size={20} color="#999" />
            <TextInput
                placeholder="What are you looking for?"
                style={styles.input}
            />
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        margin: 16,
        borderRadius: 7,
        paddingHorizontal: 12,
        height: 45,
        borderWidth:1,
        borderColor: '#888',
    },
    input: {
        marginLeft: 10,
        flex: 1,
        color: '#333',
    },
});