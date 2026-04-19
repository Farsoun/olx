import React, { useState } from 'react';
import {View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import SearchHeader from '../../components/SearchBar';
import FilterRow from '../../components/cars/FilterRow';
import ResultsHeader from '../../components/cars/ResultsHeader';
import TabsSwitch from '../../components/cars/TabsSwitch';
import FeaturedBusinesses from '../../components/cars/FeaturedBusinesses';
import SectionHeader from '../../components/SectionHeader';

import EliteAdCard from '../../components/listings/EliteCard';
import NormalAdCard from '../../components/listings/NormalCard';

import CarsFilter from '../Filters/CarsFilter';

interface Ad {
    id: string;
    image: string;
    price: number;
    title: string;
    year: number;
    mileage: number;
    fuel: string;
    location: string;
    time: string;
    isVerified?: boolean;
}

const ads: Ad[] = [
    {
        id: '1',
        image:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200',
        price: 18800,
        title: 'Mitsubishi Eclipse Cross 2018',
        year: 2018,
        mileage: 126000,
        fuel: 'Petrol',
        location: 'Dekweneh, Metn',
        time: '3 days ago',
        isVerified: true,
    },
    {
        id: '2',
        image:
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200',
        price: 19000,
        title: 'Mercedes C-Class 2016',
        year: 2016,
        mileage: 34000,
        fuel: 'Diesel',
        location: 'Baabda',
        time: '5 days ago',
    },
];

const CarsScreen = () => {
    const navigation = useNavigation();
    const [selectedTab, setSelectedTab] =
        useState<'All' | 'New' | 'Used'>('All');
    const [showFilters, setShowFilters] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
        
        {/* ✅ HEADER */}
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                <Ionicons name="chevron-back" size={22} color="#000" />
            </TouchableOpacity>

            <View style={styles.searchWrapper}>
                <SearchHeader />
            </View>
        </View>

        <View style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
            
            <FilterRow onOpenFilters={() => setShowFilters(true)} />

            <ResultsHeader />

            <TabsSwitch selected={selectedTab} onChange={setSelectedTab} />

            <FeaturedBusinesses />

            <SectionHeader
                title="Elite Ads"
                onPress={() => console.log('View all elite')}
            />

            {ads.map((ad) => (
                <EliteAdCard
                    key={ad.id}
                    ad={ad}
                    onPress={() => console.log('Pressed:', ad.title)}
                />
            ))}

            <SectionHeader
                title="Featured Ads"
                onPress={() => console.log('View all featured')}
            />

            {ads.map((ad) => (
                <NormalAdCard key={ad.id} ad={ad} />
            ))}
            </ScrollView>

            <CarsFilter
                visible={showFilters}
                onClose={() => setShowFilters(false)}
            />
        </View>
        </SafeAreaView>
    );
};

export default CarsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
    },

    backBtn: {
        padding: 2,
        marginRight: 2,
    },

    searchWrapper: {
        flex: 1,
        marginLeft: -6,
    },
});