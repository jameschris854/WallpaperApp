import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailsScreen } from '../../Screens/Details';
import Constants from '../../constants/constants';

const Stack = createStackNavigator();

function StackNavigator(tab) {

  const selectedTab = Constants.BottomTabs.find(e => e.value == tab.route.name)

  return (
    <Stack.Navigator initialRouteName={selectedTab?.value} defaultScreenOptions={{headerShown:false}} screenOptions={{headerShown:false}}>
      <Stack.Screen name={selectedTab?.value} component={selectedTab?.component} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator