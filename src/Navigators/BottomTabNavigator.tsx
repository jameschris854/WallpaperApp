import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from "../colors";
import BackSvg from "../Assets/Svg/BackSvg";
import BottomTabComponent from "./BottomTabComponent";
import Constants from "../constants";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

    return(
        <Tab.Navigator 
        tabBar={(props) => <BottomTabComponent {...props} />}
        initialRouteName={"home"}
        screenOptions={{
            headerLeft:() => <BackSvg color={Colors.lightText} width={24} height={24} />,
            headerStyle:{height:Constants.AppHeader.height,backgroundColor:'transparent',elevation:0},
            headerTitleStyle:{color:Colors.lightText},
            headerBackground:() => <View style={{width:'100%',height:'100%',backgroundColor:'rgba(1,1,1,0.8)'}} />,
            headerTransparent:true
        }}>
            {Constants.BottomTabs.map((e) => <Tab.Screen key={e.index} name={e.value} component={e.component} options={{headerShown:e.showHeader}} />)}
        </Tab.Navigator>
    )
}

export default BottomTabNavigator