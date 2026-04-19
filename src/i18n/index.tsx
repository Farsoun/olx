import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import en from './locales/en';
import ar from './locales/ar';

const resources = {
    en: { translation: en },
    ar: { translation: ar },
};

const getDeviceLanguage = () => {
    const locales = RNLocalize.getLocales();
    if (locales.length > 0) {
        return locales[0].languageCode === 'ar' ? 'ar' : 'en';
    }
    return 'en';
};

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v4',
    resources,
    lng: getDeviceLanguage(),
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;