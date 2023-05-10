import React, { useState } from 'react';
import { Alert, ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import BackgroundImage from '../../assets/pattern.jpg';
import { Cards } from '../../components/card';
import { Header } from '../../components/header';
import { calculateRecommendation } from '../../model/restaurant';
import { APP_STRINGS } from '../../utils/constants';
import { quizQuestions } from '../../utils/data.js';

const HomeScreen = ({ navigation }) => {
    const [index, setIndex] = useState(0);
    const [questionData, setQuestionData] = useState(quizQuestions);
    const [totalpoints, setTotalPoints] = useState(0);

    return (
        <SafeAreaView style={styles.container}>
            {/* <StatusBar style="auto" /> */}
            <ImageBackground
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                source={BackgroundImage}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Header title={APP_STRINGS.title} subtitle={APP_STRINGS.subtitle} />
                    <Cards
                        questionData={questionData[index]}
                        isLastQuestion={index === questionData.length - 1}
                        handleNext={(points) => {
                            setTotalPoints(totalpoints + points);
                            if (index === questionData.length - 1) {
                                navigation.navigate('ResultScreen', { totalpoints: totalpoints });
                                // Alert.alert('Your recommendation is: ' + calculateRecommendation(totalpoints + points));
                                setTotalPoints(0);
                                setIndex(0);
                            } else {
                                setIndex(index + 1);
                            }
                        }} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default HomeScreen;