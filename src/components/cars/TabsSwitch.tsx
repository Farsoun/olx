import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
  selected: string;
  onChange: (value: 'All' | 'New' | 'Used') => void;
}

const TabsSwitch: React.FC<Props> = ({ selected, onChange }) => {
  const tabs = ['All', 'New', 'Used'];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          onPress={() => onChange(tab as any)}
          style={[
            styles.tab,
            selected === tab && styles.activeTab,
          ]}
        >
          <Text style={selected === tab ? styles.activeText : styles.text}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabsSwitch;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 12,
    borderWidth: 1,
    borderColor: '#4AA3C3',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
  },
  tab: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#4AA3C3',
  },
  text: {
    color: '#333',
  },
  activeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});