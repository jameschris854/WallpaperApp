import React, { useEffect, useState } from "react";
import { ActivityIndicator, Animated, BackHandler, Image, Text, Touchable, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import GradientBackground from "../../components/GradientBackground";
import { RootState } from "../../redux/store/store";
import WallpaperManager, {TYPE} from "react-native-wallpaper-manage";
import { scrollControlInit, setDetailsState } from "../../redux/slice/commonSlice";
import DownloadSvg from "../../Assets/Svg/DownloadSvg";
import FavSvg from "../../Assets/Svg/FavSvg";
import Constants from "../../constants/constants";

const Component = () => {

    const commonReducer = useSelector((state: RootState) => state.commonReducer)
    const Colors = commonReducer.colors
    const dispatch = useDispatch()
    const [showOptions,setShowOptions] = useState(true)
    const [animVal] = useState(new Animated.Value(0))

    const setAsWallpaper = async () => {
        try{
           await  WallpaperManager.setWallpaper(commonReducer.details.links.download, 1)
           dispatch(setDetailsState(false))
        }catch(e){
            console.error(e)
        }
    }

    const downloadImage = () => {

    }

    const share = () => {

    }

    useEffect(() => {
    dispatch(scrollControlInit({bottomTabState:Constants.BottomTabStates.HIDE}))

      if(commonReducer.detailsState){
          Animated.timing(animVal,{
            toValue:1,
            useNativeDriver:false,
            duration:100 
          }).start()
      }

      const _unsubscribe = BackHandler.addEventListener('hardwareBackPress',() => {
        Animated.timing(animVal,{
            toValue:0,
            useNativeDriver:false,
            duration:100 
          }).start()

          dispatch(setDetailsState(false))

      })

      return(() => _unsubscribe.remove())

    }, [commonReducer.detailsState])
    

    return(
        <>  
            <GradientBackground fromColor={Colors.backgroundColorDark} toColor={Colors.backgroundColorLight}>
                <TouchableOpacity activeOpacity={1} onPress={() => setShowOptions(!showOptions)}>
                    <ActivityIndicator style={{position:'absolute',justifyContent:'center',alignItems:'center',height:'100%',width:'100%'}} size={"large"} />
                    {commonReducer.details?.urls?.raw && <Image source={{uri:commonReducer.details.urls.raw}} style={{height:'100%',width:'100%'}}/>}
                    <View style={{position:'absolute',bottom:showOptions ? 0 : -70,width:"100%",height:70,flexDirection:'row',justifyContent:'space-evenly'}}>
                        <TouchableOpacity onPress={() => setAsWallpaper()}>
                            <Text>Set as wallpaper</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => downloadImage()}>
                            <DownloadSvg height={100} width={100} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => share()}>
                            <FavSvg color={'#fff'} height={20} width={20} />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </GradientBackground>
        </>
    )
}

export default Component
