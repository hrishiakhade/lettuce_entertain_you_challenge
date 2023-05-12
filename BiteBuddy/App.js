import { StatusBar } from 'expo-status-bar';
import React from "react";
import { SafeAreaView } from 'react-native';
import Navigation from "./navigation";
import { COLORS } from './utils/constants';

function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 , backgroundColor: COLORS.black}}>
        <StatusBar translucent={false} style='light'/>
        <Navigation />
      </SafeAreaView>
    </>
  );
}

export default App;