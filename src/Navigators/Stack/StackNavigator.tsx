import React from 'react';
import { CardStyleInterpolators, createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import { DetailsScreen } from '../../Screens/Details';
import Constants from '../../constants/constants';
import CategoryItemList from '../../Screens/Category/CategoryItemList';

const Stack = createStackNavigator();

function StackNavigator(tab) {

  const selectedTab = Constants.BottomTabs.find(e => e.value == tab.route.name)

  const commonAnimation = {transitionSpec: {
    open: TransitionSpecs.BottomSheetSlideInSpec,
    close: TransitionSpecs.BottomSheetSlideInSpec,
  }}

  return (
    <Stack.Navigator initialRouteName={selectedTab?.value} defaultScreenOptions={{headerShown:false}} screenOptions={{headerShown:false}}>
      <Stack.Screen name={selectedTab?.value} component={selectedTab?.component}  />
      <Stack.Screen  name="Details" component={DetailsScreen} options={{cardStyleInterpolator:CardStyleInterpolators.forVerticalIOS}}/>
      <Stack.Screen name="CategoryItemList" component={CategoryItemList} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>
    </Stack.Navigator>
  );
}

export default StackNavigator