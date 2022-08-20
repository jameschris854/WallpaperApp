/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  useColorScheme,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/Navigators/BottomTabNavigator';
import { useDispatch } from 'react-redux';
import { setDarkMode } from './src/redux/slice/commonSlice';

const App = () => {
  const dispatch = useDispatch()
  const appTheme = useColorScheme()
  
  useEffect(() => {
    dispatch(setDarkMode(appTheme ? appTheme === 'dark' : false))
  },[])

  return (
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
  );
};

export default App;
