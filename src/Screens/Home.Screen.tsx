import React, { useEffect, useState } from "react";
import { Animated, Easing, FlatList, Image, ScrollView, Text, View } from "react-native";
import { getWallPapers } from "../Apis/sync";
import useDimensions from "../hooks/useDimensions";
import * as Animatable from 'react-native-animatable';
import Colors from "../colors";
import Constants from "../constants";
import LogoSvg from "../Assets/Svg/LogoSvg";


const Home = () => {
    const HEADER_HEIGHT = Constants.AppHeader.height
    const [wallpapers,setWallpapers] = useState([])
    const scrollOffset = new Animated.Value(0)
    const loopAnim = new Animated.Value(0)
    const {height,width} = useDimensions('window')

    useEffect(() => {
        getWallPapers().then((res) => {
            res.json().then((res) => {
                return setWallpapers(res.results);
            })
        }).catch((e) => console.log(e))

        Animated.loop(
            Animated.timing(loopAnim,{
            duration:5000,
            toValue:1,
            easing:Easing.circle,
            useNativeDriver:false
        })).start()
    },[])
    

    const _renderItem = ({item,index}) => {
        return  <Animatable.View  key={index} iterationDelay={125*index} animation={"fadeInUp"} duration={250} useNativeDriver easing={"ease-in-out"}  style={{width:'48.5%',marginLeft:index%2 !== 0 ? '2%': '0%',marginTop:'2%',backgroundColor:Colors.backgroundColorDark,borderRadius:3}}>
                    <Image source={{uri:item.links.download}} style={{width:'100%',height:height/4}} />
                </Animatable.View>
    }

    const delay = 0.5

    const handleScroll = (e) => {
        let scrollOffsetVal = 0
        scrollOffset.addListener((v) => scrollOffsetVal = v.value)
        if(-scrollOffsetVal <= HEADER_HEIGHT)  scrollOffset.setValue(-e.nativeEvent.contentOffset.y * delay)
    }

    let headerBg = scrollOffset.interpolate({
        inputRange:[-HEADER_HEIGHT*delay,0],
        outputRange:['rgba(0, 0, 0, 0.1)','rgba(0, 0, 0, 0.8)'],
    })

    let headerText = loopAnim.interpolate({
        inputRange:[0,0.3,0.6,1],
        outputRange:['cyan','indianred','green','cyan'],
    })

    const headerColor = headerText
    headerText.addListener((v: any) => console.log(v))
    return (
        <>
        <Animated.View style={{width:'100%',height:'100%',paddingHorizontal:'2%',backgroundColor:Colors.backgroundColorLight}}>
        <Animated.View style={{position:'absolute',height:HEADER_HEIGHT,width:width,backgroundColor:headerBg,top:scrollOffset,justifyContent:'center',alignItems:'center',zIndex:1,flexDirection:'row'}}>
            <LogoSvg width={30} height={30} />
            <Text style={{fontStyle:'italic',textDecorationStyle:"double",fontSize:18,justifyContent:'center',alignItems:'center',textAlign:'center',textAlignVertical:'center',marginLeft:-3}}>allPapers</Text>
        </Animated.View>
        {
            wallpapers.length ? 

            <Animated.FlatList
            
            data={wallpapers}
            renderItem={(props) => <_renderItem {...props} />}
            scrollEnabled
            horizontal={false}
            numColumns={2}
            maxToRenderPerBatch={2}
            onScroll={handleScroll}
            style={{paddingTop:HEADER_HEIGHT}}
            />

            : <Text>loading...</Text>

        }
        </Animated.View>
        </>
    )
}

export default Home