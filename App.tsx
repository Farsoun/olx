import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import './src/i18n';
import { I18nManager } from 'react-native';
import i18n from './src/i18n';
import AppStack from './src/navigation/AppStack';


const App = () => {
    // Language with Right to left support
    const isRTL = i18n.language === 'ar';

    if (I18nManager.isRTL !== isRTL) {
      I18nManager.forceRTL(isRTL);
    }

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <AppStack />
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;