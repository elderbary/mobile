import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold
} from '@expo-google-fonts/montserrat';

import Navigator from './components/Navigator';

const App = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold
  });
  if(!fontsLoaded) {
    return <AppLoading/>
  }
  return(
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  )
}
export default App;