import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import RecentSearches from '../components/home/RecentSearches';
import CardsTitle from '../components/home/CardsTitle';
import PropertyCard from '../components/home/PropertyCard';
import CarCard from '../components/home/CarsCard';

import { RootStackParamList } from '../navigation/AppStack';

type NavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Cars'
>;

const properties = [
    {
        image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1200&q=80',
        price: 'USD 155,000',
        title: '65m² + Storage + Parking',
        beds: 1,
        baths: 1,
        size: 65,
        location: 'Larnaca, Cyprus',
        time: '6 days ago',
    },
    {
        image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&q=80',
        price: 'USD 235,000',
        title: 'Duplex 114m² Terrace',
        beds: 4,
        baths: 3,
        size: 114,
        location: 'Lyon, France',
        time: '6 days ago',
    },
];

const cars = [
    {
        image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?w=300&q=80',
        price: 'USD 18,800',
        title: 'Mitsubishi Eclipse Cross 2018',
        year: 2018,
        km: 126000,
        location: 'Dekweneh, Metn',
        time: '3 days ago',
    },
    {
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=300&q=80',
        price: 'USD 19,000',
        title: 'Mercedes-Benz C-Class 2016',
        year: 2016,
        km: 34000,
        location: 'Baabda Town, Baabda',
        time: '5 days ago',
    },
];

const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp>();

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}>

                <Header />
                <SearchBar />
                <Banner />
                <Categories />

                <RecentSearches
                    data={[
                        'kitten in Cats',
                        'iphone 15 pro in Mobile Phones',
                    ]}
                    onPress={(value) => {
                        console.log('Search:', value);
                    }}
                />

                <CardsTitle
                    title="International Properties"
                    data={properties}
                    renderItem={({ item }) => <PropertyCard item={item} />}
                    onSeeAll={() => console.log('See all properties')}
                />

                <CardsTitle
                    title="Cars for Sale"
                    data={cars}
                    renderItem={({ item }) => <CarCard item={item} />}
                    onSeeAll={() => navigation.navigate('Cars')}
                />

            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});