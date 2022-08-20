import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BackSvg from "../Assets/Svg/BackSvg";
import BottomTabComponent from "./BottomTabComponent";
import Constants from "../constants/constants";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { DetailsScreen } from "../Screens/Details";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    const Colors = useSelector((state: RootState) => state.commonReducer.colors)

    return(
        <>
            <Tab.Navigator 
            tabBar={(props) => <BottomTabComponent {...props} />}
            initialRouteName={"home"}
            screenOptions={{
                headerLeft:() => <BackSvg color={Colors.lightText} width={24} height={24} />,
                headerStyle:{height:Constants.AppHeader.height,backgroundColor:'transparent',elevation:0},
                headerTitleStyle:{color:Colors.lightText},
                headerBackground:() => <View style={{width:'100%',height:'100%',backgroundColor:'rgba(1,1,1,0.8)'}} />,
                headerTransparent:true,
            }}>
                {Constants.BottomTabs.map((e) => <Tab.Screen key={e.index} name={e.value} component={e.component} options={{headerShown:e.showHeader}} />)}
            </Tab.Navigator>
            <DetailsScreen />
        </>
    )
}

export default BottomTabNavigator