import React, { useCallback, useEffect, useMemo, useState } from "react";
import { View, TouchableOpacity, Text, Dimensions, useColorScheme, Animated, Button } from "react-native";
import Constants from "../constants/constants";
import * as Animatable from 'react-native-animatable';
import useDimensions from "../hooks/useDimensions";
import { BottomTabs } from "../types/constantsType";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

const BottomTabComponent : React.FC<({state:any,descriptors:any,navigation: any})> = ({ state, descriptors, navigation }) => {
    const Colors = useSelector((state: RootState) => state.commonReducer.colors)
    const shouldShowBottomTabs = useSelector((state: RootState) => state.commonReducer.shouldShowBottomTabs)

    const isDarkMode = Colors.isDarkMode

    const handleTabPress = (val: string) => navigation.navigate({name:val})


    const getActiveTab : BottomTabs  = Constants.BottomTabs.find((e) => e.index == state.index )

    return (
        <Animatable.View transition={"translateY"} useNativeDriver={true} duration={500} style={{ flexDirection: 'row',height:70,width: '100%',backgroundColor: Colors.backgroundColorLight ,position:'absolute',bottom:0,transform:[{translateY:shouldShowBottomTabs ? 0 : 75}],borderRadius:24,overflow:'hidden',shadowColor:getActiveTab?.color,shadowRadius:3,shadowOffset:1,elevation:30,shadowOpacity:1}}>

          {Constants.BottomTabs.map(({title,Icon,value,index,color}) => {
            const isFocused = state.index === index;
            const baseColor =  isFocused ? color : isDarkMode ?'#aa54ac' : color
            const iconSize = 24
            return (
              <TouchableOpacity
                activeOpacity={0}
                accessibilityRole="button"
                onPress={() => handleTabPress(value)}
                style={{flex:1,justifyContent:'center',alignItems:'center'}}
                key={index}
              >
                <Icon width={iconSize} height={iconSize} color={baseColor}  />
              </TouchableOpacity>
            );
          })}
        </Animatable.View>
      );
}

export default BottomTabComponent