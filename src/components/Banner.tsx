import React, { useEffect, useRef, useState } from 'react';
import {View, Image, StyleSheet, Dimensions, FlatList} from 'react-native';

const { width } = Dimensions.get('window');

const banners = [
    {
        id: '1',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200',
    },
    {
        id: '2',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200',
    },
    {
        id: '3',
        image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200',
    },
];

const Banner = () => {
    const flatListRef = useRef<FlatList>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        let nextIndex = currentIndex + 1;

        if (nextIndex >= banners.length) {
            nextIndex = 0;
        }

        flatListRef.current?.scrollToIndex({
            index: nextIndex,
            animated: true,
        });

        setCurrentIndex(nextIndex);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={banners}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                    resizeMode="cover"
                />
                )}
                onMomentumScrollEnd={(e) => {
                const index = Math.round(
                    e.nativeEvent.contentOffset.x / (width - 32)
                );
                setCurrentIndex(index);
                }}
            />
        </View>
    );
};

export default Banner;

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
    },
    image: {
        width: width,
        height: 150,
    },
    dots: {
        position: 'absolute',
        bottom: 8,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#ccc',
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#fff',
        width: 8,
        height: 8,
    },
});