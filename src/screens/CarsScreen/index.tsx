import React, { useEffect, useState } from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, Text} from 'react-native';
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

import { fetchAds } from '../../services/adsService';

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

const CarsScreen = () => {
    const navigation = useNavigation();

    const [selectedTab, setSelectedTab] =
        useState<'All' | 'New' | 'Used'>('All');
    const [showFilters, setShowFilters] = useState(false);

    const [ads, setAds] = useState<Ad[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadAds();
    }, []);

    const loadAds = async () => {
    try {
        setLoading(true)

        const res = await fetchAds({
            category: '23',
            from: 0,
            size: 12,
        })

        const hits = res?.hits?.hits ?? []

        const mapped = hits.map((item: any, index: number) => ({
            id: item._id ? `${item._id}-${index}` : `ad-${index}`,
            image:
                item._source?.images?.[0]?.url ||
                'https://via.placeholder.com/300',
            price: item._source?.price?.value ?? 0,
            title: item._source?.title ?? '',
            year: item._source?.car?.year ?? 0,
            mileage: item._source?.car?.mileage ?? 0,
            fuel: item._source?.car?.fuel ?? '',
            location: item._source?.location?.name ?? '',
            time: item._source?.created_at ?? '',
            isVerified: item._source?.is_verified ?? false,
        }))

        setAds(mapped)
    } catch {
        setAds([])
    } finally {
        setLoading(false)
    }
}

    const renderHeader = () => (
        <>
            <FilterRow onOpenFilters={() => setShowFilters(true)} />
            <ResultsHeader />
            <TabsSwitch selected={selectedTab} onChange={setSelectedTab} />
            <FeaturedBusinesses />
            <SectionHeader title="Elite Ads" onPress={() => {}} />
        </>
    );

    const renderFooter = () => (
        <SectionHeader title="Featured Ads" onPress={() => {}} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backBtn}
                >
                    <Ionicons name="chevron-back" size={22} color="#000" />
                </TouchableOpacity>

                <View style={styles.searchWrapper}>
                    <SearchHeader />
                </View>
            </View>

            <View style={{ flex: 1 }}>
                {loading ? (
                    <ActivityIndicator style={{ marginTop: 20 }} />
                ) : ads.length === 0 ? (
                    <Text style={{ textAlign: 'center', marginTop: 20 }}>
                        No ads found
                    </Text>
                ) : (
                    <FlatList
                        data={ads}
                        keyExtractor={(item, index) =>
                            item.id || index.toString()
                        }
                        renderItem={({ item, index }) => {
                            if (index < 2) {
                                return (
                                    <EliteAdCard
                                        ad={item}
                                        onPress={() => {}}
                                    />
                                );
                            }

                            return <NormalAdCard ad={item} />;
                        }}
                        ListHeaderComponent={renderHeader}
                        ListFooterComponent={renderFooter}
                        showsVerticalScrollIndicator={false}
                    />
                )}

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