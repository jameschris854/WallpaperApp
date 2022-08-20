import React, { useEffect, useState } from "react";
import { Animated, Image, Text, TouchableOpacity, View } from "react-native";
import useDimensions from "../hooks/useDimensions";
import * as Animatable from 'react-native-animatable';
import Constants from "../constants/constants";
import LogoSvg from "../Assets/Svg/LogoSvg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { setDarkMode } from "../redux/slice/commonSlice";
import colors from "../constants/colors";
import ThemeSvg from "../Assets/Svg/ThemeSvg";
import Sync from "../Apis/sync";
import withGradientBg from "../components/withGradientBg";
import ImageCardWrapper from "../components/ImageCardWrapper";
import useHeaderAndFooterScrollAnimation from "../hooks/useHeaderAndFooterScrollAnimation";


const Home = () => {
    const Colors : typeof colors.Theme = useSelector((state: RootState) => state.commonReducer.colors)

    const dispatch = useDispatch()
    const HEADER_HEIGHT = Constants.AppHeader.height
    const [wallpapers,setWallpapers] = useState([])
    const {height,width} = useDimensions('window')
    const { headerBg,scrollOffset,handleScroll} = useHeaderAndFooterScrollAnimation()

    useEffect(() => {
        Sync.getWallPapers().then((res) => {
                return setWallpapers(res.results);
        }).catch((e) => console.log(e))
    },[])
    

    const _renderItem = ({item,index}) => {
        return  <Animatable.View  key={index} iterationDelay={125*index} animation={"fadeInUp"} duration={250} useNativeDriver easing={"ease-in-out"}  style={{maxHeight:height/3,width:'47.5%',marginLeft:index%2 !== 0 ? 'auto': '0%',marginTop:'4%',backgroundColor:Colors.cardBg,borderRadius:15,overflow:'hidden'}}>
                    <ImageCardWrapper item={item}>
                        <Image source={{uri:item.urls.full}} style={{width:'100%',height:'100%'}} resizeMode={"cover"} />
                    </ImageCardWrapper>
                </Animatable.View>
    }

    return (
        <>
            <Animated.View style={{width:'100%',height:'100%',paddingHorizontal:'4%'}}>
            <Animated.View style={{paddingHorizontal:'4%',position:'absolute',height:HEADER_HEIGHT,width:width,backgroundColor:headerBg,top:scrollOffset,justifyContent:'space-between',alignItems:'center',zIndex:1,flexDirection:'row'}}>
                <View style={{flexDirection:'row'}}>
                    <LogoSvg width={30} height={30} />
                    <Text style={{fontStyle:'italic',textDecorationStyle:"double",fontSize:22,justifyContent:'center',alignItems:'center',textAlign:'center',textAlignVertical:'center',marginLeft:-6,marginBottom:2}}>ally</Text>
                </View>
                <TouchableOpacity onPress={() => dispatch(setDarkMode(!colors.isThemeDark))}>
                    <ThemeSvg />
                </TouchableOpacity>
            </Animated.View>
            {
                wallpapers.length ? 

                <Animated.FlatList
                showsVerticalScrollIndicator={false}
                data={wallpapers}
                renderItem={(props) => <_renderItem {...props} />}
                scrollEnabled
                horizontal={false}
                numColumns={2}
                maxToRenderPerBatch={2}
                onScroll={handleScroll}
                scrollEventThrottle={300}
                ListHeaderComponent={<View style={{height:HEADER_HEIGHT,width:'100%'}} />}
                ListFooterComponent={<View style={{height:16,width:'100%'}} />}
                />

                : <Text>loading...</Text>

            }
            </Animated.View>
        </>
    )
}

export default withGradientBg(Home);