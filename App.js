/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Orientation from 'react-native-orientation-locker';
import Immersive from 'react-native-immersive';
import {Provider} from 'react-redux';
import store from './src/Redux/store';
import HomeScreen from './src/Screens/HomeScreen';
import Form1 from './src/Screens/Forms/Form1';
import Form2 from './src/Screens/Forms/Form2';
import Form3 from './src/Screens/Forms/Form3';
import Form4 from './src/Screens/Forms/Form4';

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    Orientation.lockToPortrait();
    return () => {
      Orientation.unlockAllOrientations(); // Unlocks all orientations when the component unmounts
    };
  }, []);
  Immersive.setImmersive(true);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Form1"
            component={Form1}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Form2"
            component={Form2}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Form3"
            component={Form3}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Form4"
            component={Form4}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
