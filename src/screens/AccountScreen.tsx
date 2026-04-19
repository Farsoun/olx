import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AccountScreen() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Language</Text>

      <TouchableOpacity onPress={() => changeLanguage('en')} style={styles.btn}>
        <Text>English</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => changeLanguage('ar')} style={styles.btn}>
        <Text>العربية</Text>
      </TouchableOpacity>

      <Text style={styles.preview}>{t('common.welcome')}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 18, marginBottom: 10 },
  btn: {
    padding: 12,
    backgroundColor: '#eee',
    marginBottom: 10,
    borderRadius: 8,
  },
  preview: { marginTop: 20, fontSize: 16 },
});