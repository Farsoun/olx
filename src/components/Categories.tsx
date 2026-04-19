import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, FlatList, Image, ActivityIndicator} from 'react-native';

const Categories = () => {
    const [categories, setCategories] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const res = await fetch('https://www.olx.com.lb/api/categories', {
                headers: {
                    'Accept': 'application/json',
                    'User-Agent': 'Mozilla/5.0',
                },
            });

            const data = await res.json();

            console.log('API RESPONSE:', data);

            // 🔥 handle ALL possible shapes
            let list = [];

            if (Array.isArray(data)) {
                list = data;
            } else if (data?.data) {
                list = data.data;
            } else if (data?.categories) {
                list = data.categories;
            } else if (data?.data?.categories) {
                list = data.data.categories;
            }

            const formatted = list.map((item: any) => ({
                id: String(item.id || item.category_id || Math.random()),
                title: item.name || item.title || 'Category',
                icon:
                    item.icon ||
                    item.image ||
                    'https://cdn-icons-png.flaticon.com/512/743/743922.png',
            }));

            setCategories(formatted);
        } catch (e) {
            console.log('Categories error:', e);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <ActivityIndicator style={{ marginTop: 20 }} />;
    }

    if (categories.length === 0) {
        return (
            <View style={{ marginTop: 20 }}>
                <Text style={{ textAlign: 'center' }}>No categories found</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>All categories</Text>

            <FlatList
                data={categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <View style={styles.circle}>
                            <Image source={{ uri: item.icon }} style={styles.icon} />
                        </View>
                        <Text style={styles.label}>{item.title}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default Categories;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        marginHorizontal: 16,
        marginBottom: 10,
    },
    item: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    circle: {
        width: 60,
        height: 60,
        borderRadius: 35,
        backgroundColor: '#efd062',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 30,
        height: 30,
    },
    label: {
        marginTop: 6,
        fontSize: 12,
        textAlign: 'center',
        maxWidth: 70
    },
});