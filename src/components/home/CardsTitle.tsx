import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

interface Props {
    title: string;
    data: any[];
    renderItem: ({ item }: any) => React.ReactElement;
    onSeeAll?: () => void;
}

const CardsTitle: React.FC<Props> = ({
    title,
    data,
    renderItem,
    onSeeAll,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity onPress={onSeeAll}>
                    <Text style={styles.seeAll}>See all</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={data}
                horizontal
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default CardsTitle;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
    },
    seeAll: {
        fontSize: 14,
        color: '#3B82F6',
    },
});