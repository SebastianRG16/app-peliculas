import React, {useEffect, useRef, useState} from 'react';
import 'react-native-gesture-handler';
import {
  NavigationContainer,
} from '@react-navigation/native';
import {MyStack} from './src/navigation/StackNavigator';
import { useThemeStore } from './src/storage/storage';

const App = () => {

  const { loadTheme } = useThemeStore();

  useEffect(() => {
    loadTheme();
  }, [loadTheme]);

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
