import React, { useCallback, useEffect, useState } from "react";
import { Animated, Easing, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import withGradientBg from "../../components/withGradientBg";
import { RootState } from "../../redux/store/store";
import { init, setSearchResults, setSearchText } from "../../redux/slice/searchSlice";
import Sync from "../../Apis/sync";
import useDimensions from "../../hooks/useDimensions";
import { debounce } from "../../utils/common";
import { useNavigation } from "@react-navigation/native";
import useHeaderAndFooterScrollAnimation from "../../hooks/useHeaderAndFooterScrollAnimation";
import BaseImageList from "../../components/BaseImageList";
import Page from "../../constants/model/Page";
import { scrollControlInit, setDetails } from "../../redux/slice/commonSlice";
import Constants from "../../constants/constants";
import { WallpaperListRes } from "../../types/globalTypes";
const {width} = useDimensions('window')
const HEADER_HEIGHT = 116

const Component = () => {
    const Colors = useSelector((state: RootState) => state.commonReducer.colors)
    const Search = useSelector((state: RootState) => state.searchReducer)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [animVal] = useState(new Animated.Value(0))
    const { headerBg,scrollOffset,handleScroll,resetAnimatedVal} = useHeaderAndFooterScrollAnimation()

    const setSearchResultsInStore = (res: WallpaperListRes) => {
        dispatch(setDetails(res.results))
        dispatch(setSearchResults(res))
    }

    useEffect(() => {
        Animated.loop(Animated.timing(animVal,{
            toValue:1,
            useNativeDriver:false,
            duration:15000,
            easing:Easing.linear
          }),{
        }).start()

        const unsubscribe = navigation.addListener("focus", async (e) => {
            console.log('focus')
            dispatch(scrollControlInit({bottomTabState:Constants.BottomTabStates.SHOW}))
            dispatch(init())
            resetAnimatedVal()
        })

        return () => unsubscribe();

    },[])

    const handleSearchTextChange = async (e) => {
        dispatch(setSearchText(e))
    }

    const getSearchedData = async (e) => {
        const res = await Sync.getSearchRes(e)
        setSearchResultsInStore(res)
    }

    const memonizedTextChangeHandler = useCallback(debounce(getSearchedData,500), []);

    const handlePageEndReached = async (e:Event,page:Page) => {
        if(page.totalPages && page.page >= page.totalPages) return
        try{
            page.setPage(page.page+1)
            const res = await Sync.getSearchRes(Search.searchText,page.page)
            page.setTotalPages(Search.totalPages)
            page.setTotalRecords(Search.totalRecords)

            setSearchResultsInStore({
                results:[...Search.searchResults,...res.results],
                lastAnimatedIndex:Search.searchResults.length-1,
                total:res.total,
                total_pages:res.total_pages
            })
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
            <BaseImageList
            data={Search.searchResults}
            handleScroll={handleScroll}
            pageHeaderHeight={HEADER_HEIGHT}
            handlePageEndReached={handlePageEndReached}
            lastAnimatedIndex={Search.lastAnimatedIndex}
            />
        </View>
        </>
    )
}

export default withGradientBg(Component)
