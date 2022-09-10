import React, { useEffect, useState } from "react";
import { Animated, Image, Text, TouchableOpacity, View } from "react-native";
import useDimensions from "../hooks/useDimensions";
import * as Animatable from 'react-native-animatable';
import Constants from "../constants/constants";
import LogoSvg from "../Assets/Svg/LogoSvg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { setAppLoaded, setDarkMode } from "../redux/slice/commonSlice";
import colors from "../constants/colors";
import ThemeSvg from "../Assets/Svg/ThemeSvg";
import Sync from "../Apis/sync";
import withGradientBg from "../components/withGradientBg";
import ImageCardWrapper from "../components/ImageCardWrapper";
import useHeaderAndFooterScrollAnimation from "../hooks/useHeaderAndFooterScrollAnimation";
import BaseImageList from "../components/BaseImageList";
import Page from "../constants/model/Page";


const Home = () => {
    const Colors : typeof colors.Theme = useSelector((state: RootState) => state.commonReducer.colors)
    const dispatch = useDispatch()
    const HEADER_HEIGHT = Constants.AppHeader.height
    const [wallpapers,setWallpapers] = useState([])
    const {width} = useDimensions('window')
    const { headerBg,scrollOffset,handleScroll} = useHeaderAndFooterScrollAnimation()
    const [lastAnimatedIndex,setLastAnimatedIndex] = useState(0)
   
    useEffect(() => {
        Sync.getWallPapers().then((res) => {
                dispatch(setAppLoaded())
                return setWallpapers(res.results);
        }).catch((e) => console.log(e))
    },[])


    const getWallPapers = async (e:Event,page:Page) => {
        if(page.totalPages && page.page >= page.totalPages) return
        try{
            page.setPage(page.page+1)
            console.log(page)
            const res = await Sync.getWallPapers(page.page)
            page.setTotalPages(res.total_pages)
            page.setTotalRecords(res.total)
            
            setWallpapers([...wallpapers,...res.results])
            setLastAnimatedIndex(wallpapers.length-1)
        }catch(e){
            console.log('homne api wallL: ', e)
        }

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
            <BaseImageList
            data={wallpapers}
            handleScroll={handleScroll}
            pageHeaderHeight={HEADER_HEIGHT}
            handlePageEndReached={getWallPapers}
            lastAnimatedIndex={lastAnimatedIndex}
            />
            </Animated.View>
        </>
    )
}

export default withGradientBg(Home);