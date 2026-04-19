import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';

// Dumy screens for demonstrating the tabs layout
const ChatsScreen = () => <View style={styles.screen}><Text>Chats</Text></View>;
const SellScreen = () => <View style={styles.screen}><Text>Sell</Text></View>;
const MyAdsScreen = () => <View style={styles.screen}><Text>My Ads</Text></View>;
const AccountScreen = () => <View style={styles.screen}><Text>Account</Text></View>;

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: styles.tabBar,
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#999',
                tabBarIcon: ({ color }) => {
                let iconName: string = '';

                switch (route.name) {
                    case 'Home':
                    iconName = 'home-outline';
                    break;
                    case 'Chats':
                    iconName = 'chatbubble-outline';
                    break;
                    case 'MyAds':
                    iconName = 'list-outline';
                    break;
                    case 'Account':
                    iconName = 'person-outline';
                    break;
                }

                return <Ionicons name={iconName} size={22} color={color} />;
            },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Chats" component={ChatsScreen} />

            <Tab.Screen
                name="Sell"
                component={SellScreen}
                options={{
                tabBarLabel: '',
                tabBarIcon: () => (
                    <View style={styles.fabButton}>
                    <Ionicons name="add" size={28} color="#000" />
                    </View>
                ),
                }}
            />

            <Tab.Screen name="MyAds" component={MyAdsScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />

        </Tab.Navigator>
    );
};

export default MainTabNavigator;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBar: {
        height: 70,
        paddingBottom: 10,
        paddingTop: 10,
        backgroundColor: '#fff',
        borderTopWidth: 0.5,
        borderTopColor: '#eee',
    },
    fabButton: {
        width: 60,
        height: 60,
        backgroundColor: '#F4C542',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
});