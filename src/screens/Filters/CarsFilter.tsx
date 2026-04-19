import React, { useEffect, useRef } from 'react';
import {View, Text, Modal, StyleSheet, TouchableOpacity, Animated, Dimensions, Pressable, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Section from '../../components/filters/carFilter/Section';
import RangeInput from '../../components/filters/carFilter/RangeInput';
import SelectRow from '../../components/filters/carFilter/SelectRow';
import ChipSelector from '../../components/filters/carFilter/ChipSelector';
import ToggleRow from '../../components/filters/carFilter/ToggleRow';
import CategoryCard from '../../components/filters/carFilter/CategoryCard';
import AddRow from '../../components/filters/carFilter/AddRow';

const { height } = Dimensions.get('window');

interface Props {
    visible: boolean;
    onClose: () => void;
}

export default function CarsFilter({ visible, onClose }: Props) {
    const translateY = useRef(new Animated.Value(height)).current;

    useEffect(() => {
        Animated.timing(translateY, {
        toValue: visible ? 0 : height,
        duration: visible ? 300 : 250,
        useNativeDriver: true,
        }).start();
    }, [visible]);

    return (
        <Modal visible={visible} transparent animationType="none">
        
            <Pressable style={styles.backdrop} onPress={onClose} />

            <Animated.View
                style={[
                styles.sheet,
                { transform: [{ translateY }] },
                ]}>

                <View style={styles.header}>
                    <View style={styles.headerTop}>
                        <TouchableOpacity onPress={onClose}>
                            <Ionicons name="close" size={30} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                        <Text style={styles.clear}>Clear all</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.bigTitle}>Filters</Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
                    <Section title="Category">
                        <CategoryCard />
                    </Section>
                    
                    <Section>
                        <SelectRow label="Location" value="Lebanon" />
                    </Section>

                    <Section title="Highlights">
                        <ChipSelector options={['Any', 'Available']} />
                    </Section>

                    <Section>
                        <SelectRow label="Payment Options" />
                    </Section>

                    <Section title="Kilometers">
                        <RangeInput />
                    </Section>

                    <Section title="Year">
                        <RangeInput />
                    </Section>

                    <Section>
                        <SelectRow label="Fuel Type" />
                    </Section>

                    <Section title="Transmission Type">
                        <ChipSelector options={['Any', 'Automatic', 'Manual', 'Steptronic']} />
                    </Section>

                    <Section>
                        <SelectRow label="Car Type" />
                    </Section>

                    <Section title="Power (hp)">
                        <RangeInput />
                    </Section>

                    <Section title="Consumption (l/100 km)">
                        <RangeInput />
                    </Section>

                    <Section>
                        <SelectRow label="Air Conditioning" />
                    </Section>

                    <Section>
                        <SelectRow label="Color" />
                    </Section>

                    <Section title="Number of seats">
                        <RangeInput />
                    </Section>

                    <Section title="Number of doors">
                        <ChipSelector options={['Any', '2/3', '4/5']} />
                    </Section>

                    <Section>
                        <SelectRow label="Interior" />
                    </Section>

                    <Section>
                        <SelectRow label="Extra Features" />
                    </Section>

                    <Section title="Seller Type">
                        <ChipSelector options={['Any', 'Individual', 'Agency']} />
                    </Section>

                    <Section title="Number of Owners">
                        <RangeInput />
                    </Section>

                    <Section>
                        <SelectRow label="Source" />
                    </Section>

                    <Section title="Video">
                        <ChipSelector options={['Any', 'Available', 'Not Available']} />
                    </Section>

                    <Section title="">
                        <ToggleRow label="Show Verified Accounts first" />
                    </Section>
                </ScrollView>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>See 8382 results</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
    },

    sheet: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    header: {
        paddingHorizontal: 16,
        paddingTop: 60,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },

    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    bigTitle: {
        fontSize: 28,
        fontWeight: '700',
        marginTop: 10,
    },

    title: {
        fontSize: 18,
        fontWeight: '600',
    },

    clear: {
        color: '#333',
        fontSize: 14,
        fontWeight: 'bold',
        alignContent: 'center',
    },

    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 16,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#eee',
    },

    button: {
        backgroundColor: '#3b3b3b',
        paddingVertical: 16,
        marginHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },
});