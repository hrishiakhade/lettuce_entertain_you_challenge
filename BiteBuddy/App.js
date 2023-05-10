import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ImageBackground, SafeAreaView, Alert } from 'react-native';
import BackgroundImage from './assets/pattern.jpg';
import { Header } from './components/header';
import { APP_STRINGS } from './utils/constants';
import { Cards } from './components/card';
import { quizQuestions } from './utils/data.js';

export default function App() {
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
                Alert.alert('Your score is ' + (totalpoints + points) + ' points');
                console.log(index);
                //success message
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
