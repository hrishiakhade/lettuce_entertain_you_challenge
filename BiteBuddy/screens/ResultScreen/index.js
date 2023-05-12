import React from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import RestaurantBackground from '../../assets/result_background.jpg';
import { calculateRecommendation } from '../../model/restaurant';
import { APP_STRINGS, COLORS } from '../../utils/constants';
import { LoadingSpinner } from '../../components/loadingSpinner';

const ResultScreen = ({ route, navigation }) => {
    const { totalpoints } = route.params;
    const [loading, setLoading] = React.useState(true);

    const handleRestartPress = () => {
        navigation.popToTop();
    }

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <ImageBackground style={styles.container} source={RestaurantBackground}>
            {
                loading ? LoadingSpinner(loading) :
                    <View style={styles.contentContainer}>
                        <Text style={styles.title}>{APP_STRINGS.result_title}</Text>
                        <View style={styles.resultContainer}>
                            <Text style={styles.resultText}>{APP_STRINGS.result_subtitle}</Text>
                            <Text style={styles.resultName}>{calculateRecommendation(totalpoints)}</Text>
                        </View>
                        <Pressable
                            testID="restartButton"
                            style={({ pressed }) => [
                                styles.button,
                                {
                                    backgroundColor: pressed ? COLORS.button_pressed : COLORS.button_unpressed,
                                    transform: [{ scale: pressed ? 0.95 : 1 }]
                                }
                            ]} onPress={handleRestartPress}>
                            <Text style={styles.buttonText}>{APP_STRINGS.restart_button}</Text>
                        </Pressable>
                    </View>
            }
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Add a semi-transparent dark overlay
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.button_text,
        marginBottom: 20,
    },
    resultContainer: {
        marginBottom: 30,
        alignItems: 'center',
    },
    resultText: {
        fontSize: 20,
        color: COLORS.button_text,
        textAlign: 'center',
        marginBottom: 10,
    },
    resultName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.result_text,
        textAlign: 'center',
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
    },
});

export default ResultScreen;
