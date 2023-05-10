import React from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import { FONT_SIZES , COLORS } from '../utils/constants';

export const Header = ({ title, subtitle }) => {
    return (
        <View >
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View >
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize:FONT_SIZES.large,
        fontWeight: 'bold',
        color: COLORS.primary,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: FONT_SIZES.medium,
        fontWeight: 'semibold',
        color: COLORS.primary,
        textAlign: 'center'
    }
});