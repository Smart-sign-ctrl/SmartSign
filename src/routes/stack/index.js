import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Chat, Home, VideoRecorder } from '../../screens';

const Stack = createNativeStackNavigator();

function Main() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen
        options={{
          headerTransparent: true,
          title: '',
        }}
        name="VideoRecorder"
        component={VideoRecorder}
      />
    </Stack.Navigator>
  );
}

export default Main;
