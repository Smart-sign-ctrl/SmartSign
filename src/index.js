import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './routes';
import { hideSplash } from 'react-native-splash-view';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      hideSplash();
    }, 3000);
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
