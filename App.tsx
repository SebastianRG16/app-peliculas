import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {MyStack} from './src/navigation/StackNavigator';
import {useThemeStore} from './src/storage/storage';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/theme/theme';

// Crear una instancia del QueryClient
const queryClient = new QueryClient();

const App = () => {
  const {loadTheme} = useThemeStore();

  useEffect(() => {
    loadTheme();
  }, [loadTheme]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
