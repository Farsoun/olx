import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

interface Props {
    label: string;
}

export default function ToggleRow({ label }: Props) {
  const [enabled, setEnabled] = useState(false);

  return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>

            <Switch
                value={enabled}
                onValueChange={setEnabled}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
    },
});