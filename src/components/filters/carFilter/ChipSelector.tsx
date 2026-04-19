import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
    options: string[];
}

export default function ChipSelector({ options }: Props) {
    const [selected, setSelected] = useState(options[0]);

    return (
        <View style={styles.container}>
            {options.map((item) => {
                const active = selected === item;

                return (
                    <TouchableOpacity
                        key={item}
                        onPress={() => setSelected(item)}
                        style={[
                        styles.chip,
                        active && styles.activeChip,
                        ]}>

                        <Text style={active ? styles.activeText : styles.text}>
                        {item}
                        </Text>

                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
        flexWrap: 'wrap',
    },
    chip: {
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    activeChip: {
        backgroundColor: '#d7f3f7',
        borderColor: '#7fd3df',
    },
    text: {
        color: '#444',
    },
    activeText: {
        color: '#000',
        fontWeight: '500',
    },
});