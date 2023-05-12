import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import BackgroundImage from '../../assets/pattern.jpg';
import { Cards } from '../../components/card';
import { Header } from '../../components/header';
import { APP_STRINGS, COLORS } from '../../utils/constants';
import { quizQuestions } from '../../utils/data.js';


export const handleNext = (index, questionData, points, totalpoints, setIndex, setTotalPoints, navigation) => {                  // seperate function for handleNext to make it easier to test
    setTotalPoints(totalpoints + points);
    if (index === questionData.length - 1) {

        setTimeout(() => {
            navigation.navigate('ResultScreen', { totalpoints: totalpoints + points });
            setTotalPoints(0);
            setIndex(0);
        }, 100);

    } else {
        setIndex(index + 1);
    }
};

const HomeScreen = ({ navigation }) => {
    const [index, setIndex] = useState(0);
    const [questionData, setQuestionData] = useState(quizQuestions);
    const [totalpoints, setTotalPoints] = useState(0);


    return (
        <ImageBackground
            style={styles.imageContainer}
            source={BackgroundImage}>
            <View style={styles.imageContainer}>
                <Header title={APP_STRINGS.title} subtitle={APP_STRINGS.subtitle} />
                <Cards
                    questionData={questionData[index]}
                    isLastQuestion={index === questionData.length - 1}
                    // handleNext={handleNext} 
                    handleNext={(points) => handleNext(index, questionData, points, totalpoints, setIndex, setTotalPoints, navigation)}

                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;