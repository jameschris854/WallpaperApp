import React from "react";
import { View, TouchableOpacity, Text, Dimensions, useColorScheme } from "react-native";
import Colors from "../colors";
import Constants from "../constants";
import * as Animatable from 'react-native-animatable';
import useDimensions from "../hooks/useDimensions";
import { BottomTabs } from "../types/constantsType";

const BottomTabComponent : React.FC<({state:any,descriptors:any,navigation: any})> = ({ state, descriptors, navigation }) => {
    
    const isDarkMode = useColorScheme() === 'dark';

    const handleTabPress = (val: string) => navigation.navigate({name:val})

    const {width} = useDimensions('window')

    const getActiveTab : BottomTabs  = Constants.BottomTabs.find((e) => e.index == state.index )

    return (
        <View style={{ flexDirection: 'row',height:70,width:width*0.9,backgroundColor: Colors.backgroundColorLight ,position:'absolute',bottom:10,left:'5%',borderRadius:24,overflow:'hidden',shadowColor:getActiveTab?.color,shadowRadius:3,shadowOffset:1,elevation:30,shadowOpacity:1}}>

          <Animatable.View 
          transition={"left"} 
          style={{position:'absolute',backgroundColor:isDarkMode ? "darkgrey" : getActiveTab?.color,width:`${100/Constants.BottomTabs.length}%`,height:'100%',top:0,left:(width*0.9/3)*state.index}}
          duration={300}
          />

          {Constants.BottomTabs.map(({title,Icon,value,index,color}) => {
            const isFocused = state.index === index;
            const baseColor =  isFocused ? Colors.light : isDarkMode ? Colors.light : color
            const iconSize = 23 + (isFocused ? 5 : 0)
            return (
              <TouchableOpacity
                activeOpacity={0}
                accessibilityRole="button"
                onPress={() => handleTabPress(value)}
                style={{flex:1,justifyContent:'center',alignItems:'center'}}
                key={index}
              >
                <Icon width={iconSize} height={iconSize} color={baseColor}  />
                <Text style={{ color:baseColor ,textAlign:'center'}}>
                  {title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      );
}

export default BottomTabComponent