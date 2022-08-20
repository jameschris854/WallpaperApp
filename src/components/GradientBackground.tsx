import React, { ReactElement } from 'react';
import { View, StyleSheet, ColorValue, StyleSheetProperties } from 'react-native';
import Svg, { Defs, Rect, LinearGradient, Stop } from 'react-native-svg';


type Props = {
    children: ReactElement
    fromColor: ColorValue
    toColor: ColorValue
    style: StyleSheetProperties
}

const GradientBackground = ({ children , toColor ,fromColor ,style}: Props)  => {
    return (
        <View style={ { flex: 1,...style } }>
            <Svg height="100%" width="100%" style={ StyleSheet.absoluteFillObject }>
                <Defs>
                    <LinearGradient id="grad" x1="100%" y1="0%" x2="0%" y2="120%">
                        <Stop offset="0.4" stopColor={ fromColor }/>
                        <Stop offset="1" stopColor={ toColor }/>
                    </LinearGradient>
                </Defs>
                <Rect width="100%" height="100%" fill="url(#grad)"/>
            </Svg>
            { children }
        </View>
    );
};

export default GradientBackground;