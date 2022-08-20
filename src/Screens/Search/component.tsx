import React, { useCallback, useEffect, useState } from "react";
import { Animated, Easing, Image, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import withGradientBg from "../../components/withGradientBg";
import { RootState } from "../../redux/store/store";
import * as Animatable from 'react-native-animatable';
import { init, setSearchResults, setSearchText } from "../../redux/slice/searchSlice";
import Sync from "../../Apis/sync";
import useDimensions from "../../hooks/useDimensions";
import { debounce } from "../../utils/common";
import { useNavigation } from "@react-navigation/native";
import SearchIllSvg from "../../Assets/Svg/SearchIllSvg";
import ImageCardWrapper from "../../components/ImageCardWrapper";
import colors from "../../constants/colors";
import useHeaderAndFooterScrollAnimation from "../../hooks/useHeaderAndFooterScrollAnimation";
import BaseImageList from "../../components/BaseImageList";
import Page from "../../constants/model/Page";
const {height,width} = useDimensions('window')
const HEADER_HEIGHT = 116

const Component = () => {
    const Colors = useSelector((state: RootState) => state.commonReducer.colors)
    const Search = useSelector((state: RootState) => state.searchReducer)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [animVal] = useState(new Animated.Value(0))
    const { headerBg,scrollOffset,handleScroll} = useHeaderAndFooterScrollAnimation()

    useEffect(() => {
        Animated.loop(Animated.timing(animVal,{
            toValue:1,
            useNativeDriver:false,
            duration:15000,
            easing:Easing.linear
          }),{
        }).start()

        const unsubscribe = navigation.addListener("focus", async (e) => {
            dispatch(init())
        })

        return () => unsubscribe();

    },[])

    const handleSearchTextChange = async (e) => {
        dispatch(setSearchText(e))
    }

    const getSearchedData = async (e) => {
        const res = await Sync.getSearchRes(e)
        dispatch(setSearchResults(res))
    }

    const memonizedTextChangeHandler = useCallback(debounce(getSearchedData,500), []);

    const handlePageEndReached = async (e:Event,page:Page) => {
        if(page.totalPages && page.page >= page.totalPages) return
        try{
            page.setPage(page.page+1)
            const res = await Sync.getSearchRes(Search.searchText,page.page)
            page.setTotalPages(Search.totalPages)
            page.setTotalRecords(Search.totalRecords)

            dispatch(setSearchResults({
                results:[...Search.searchResults,...res.results],
                total:res.total,
                total_pages:res.total_pages
            }))
        }catch(e){
            console.log('homne api wallL: ', e)
        }

    }

    return(
        <>
        <View style={{paddingHorizontal:16,height:'100%'}}>
            <Animated.View style={{position:'absolute',height:HEADER_HEIGHT,width:width,backgroundColor:headerBg,top:scrollOffset,justifyContent:'space-between',alignItems:'center',zIndex:1,flexDirection:'column',paddingHorizontal:16}}>
                {Search.searchText != "" && <Text style={{fontSize:18,paddingTop:16,width:'100%'}}>Search Results for <Text style={{fontWeight:'bold',fontSize:24,fontStyle:'italic'}}>"{Search.searchText}"</Text></Text>}
                <TextInput value={Search.searchText} placeholderTextColor={Colors.darkText} placeholder='Search any "Wallpapers"' onChangeText={(e) => {handleSearchTextChange(e),memonizedTextChangeHandler(e)}} style={{height:50,backgroundColor:Colors.backgroundColorLight,borderRadius:4,fontSize:18,marginTop:16,width:'100%',paddingHorizontal:16}} />
            </Animated.View>
            {/* {Search.searchResults.length ?
                <Animated.FlatList
                    showsVerticalScrollIndicator={false}
                    data={Search.searchResults}
                    renderItem={(props) => <_renderItem {...props} />}
                    scrollEnabled
                    horizontal={false}
                    numColumns={2}
                    maxToRenderPerBatch={2}
                    onScroll={handleScroll}
                    scrollEventThrottle={300}
                    style={{flex:1}}
                    ListHeaderComponent={<View style={{height:HEADER_HEIGHT,width:'100%'}} />}
                    ListFooterComponent={<View style={{height:16,width:'100%'}} />}
                /> :
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Animated.View style={{elevation:10,shadowColor:colors.backgroundColorDark,width:200,height:200,overflow:'hidden',borderRadius:200,borderColor:Colors.backgroundColorDark,transform:[{rotate:animVal.interpolate({inputRange:[0,0.5,1],outputRange:["0deg","180deg","360deg"]})}],justifyContent:'flex-start'}}>
                        <Animated.View style={{position:'absolute',left:50,width:200,height:200,transform:[{rotate:animVal.interpolate({inputRange:[0,0.5,1],outputRange:["0deg","-180deg","-360deg"]})}],justifyContent:'flex-start'}}>
                            <SearchIllSvg size={200} Colors={Colors}/>
                        </Animated.View>
                    </Animated.View>
                </View>
            } */}
            <BaseImageList
            data={Search.searchResults}
            handleScroll={handleScroll}
            pageHeaderHeight={HEADER_HEIGHT}
            handlePageEndReached={handlePageEndReached}
            />
        </View>
        </>
    )
}

// transform:[{
//     translateX:animVal.interpolate({inputRange:[0,0.25,0.5,0.75,1],outputRange:[0,24,36,24,0]})}
// ,{
//     translateY:animVal.interpolate({inputRange:[0,0.5,1],outputRange:[0,-20,0]})
// }]}

export default withGradientBg(Component)
