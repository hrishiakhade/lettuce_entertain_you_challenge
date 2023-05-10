import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { calculateRecommendation } from '../../model/restaurant';
import { APP_STRINGS, COLORS } from '../../utils/constants';

const ResultScreen = ({ route, navigation }) => {
    const { totalpoints } = route.params;

    const handleRestartPress = () => {
        navigation.popToTop();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{APP_STRINGS.result_title}</Text>
            </View>
            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>{APP_STRINGS.result_subtitle}</Text>
                <Text style={styles.resultName}>{calculateRecommendation(totalpoints)}</Text>
            </View>
            <Pressable style={({ pressed }) => [
                styles.button,
                {
                    backgroundColor: pressed ? COLORS.button_pressed : COLORS.button_unpressed,
                    transform: [{ scale: pressed ? 0.95 : 1 }]
                }
            ]} onPress={handleRestartPress}>
                <Text style={styles.buttonText}>{APP_STRINGS.restart_button}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        alignSelf: 'stretch',
        backgroundColor: COLORS.result_text,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    resultContainer: {
        marginVertical: 30,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20,
        color: COLORS.primary,
        marginBottom: 10,
    },
    resultName: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.result_text,
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        elevation: 3,
    },
    buttonText: {
        color: COLORS.button_text,
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default ResultScreen;
