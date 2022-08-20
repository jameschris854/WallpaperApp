import React, { useEffect, useState } from "react";
import { Animated, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import FavSvg from "../../Assets/Svg/FavSvg";
import withGradientBg from "../../components/withGradientBg";
import colors from "../../constants/colors";
import useDimensions from "../../hooks/useDimensions";

const Component = () => {
    const [animVal] = useState(new Animated.Value(0))
    const commonReducer = useSelector((state: RootState) => state.commonReducer)
    const Colors : typeof colors= commonReducer.colors
    const dispatch = useDispatch()
    const {height,width} = useDimensions('window')

    useEffect(() => {
        Animated.loop(Animated.timing(animVal,{
            toValue:1,
            useNativeDriver:false,
            duration:5000
          }),{
          }).start()
    }, [])
    
    const sizeAnim = animVal.interpolate({inputRange:[0,0.5,1],outputRange:[24,height/2,height*1.5]})
    const opacity = animVal.interpolate({inputRange:[0,0.5,1],outputRange:[1,0.5,1]})
    return(
        <>
        <View style={{paddingHorizontal:16,height:'100%',width:'100%'}}>
            <Text style={{fontSize:18,paddingTop:16,width:'100%',color:Colors.lightText}}>Favourites<Text style={{fontWeight:'bold',fontSize:16,fontStyle:'normal',color:Colors.lightText}}>(0)</Text></Text>
            <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                <Animated.View style={{opacity,borderWidth:1,borderColor:Colors.backgroundColorLight,borderRadius:height,height:sizeAnim,width:sizeAnim,justifyContent:'center',alignItems:'center',position:'absolute'}}>
                    <FavSvg color={Colors.backgroundColorLight} height={24} width={24} />
                </Animated.View>
                <Animated.Text style={{opacity,fontStyle:'italic',color:Colors.lightText,fontSize:16,marginTop:50}}>No Items</Animated.Text>
            </View>
        </View>
        </>
    )
}

export default withGradientBg(Component)
