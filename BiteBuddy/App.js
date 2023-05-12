import React from "react";
import Navigation from "./navigation";
import { StatusBar } from 'expo-status-bar';

function App() {
  return (
    <>
      <StatusBar style="light" />
      <Navigation />
    </>
  );
}

export default App;