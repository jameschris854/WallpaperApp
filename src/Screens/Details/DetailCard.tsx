import React, { useState } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import { Colors } from "react-native/Libraries/NewAppScreen"
import DownloadSvg from "../../Assets/Svg/DownloadSvg"
import FavSvg from "../../Assets/Svg/FavSvg"
import useDimensions from "../../hooks/useDimensions"
import WallpaperManager from "react-native-wallpaper-manage";
import { setDetailsState } from "../../redux/slice/commonSlice"
import { useDispatch } from "react-redux"
import ProgressiveImage from "../../components/ProgressiveImage"

const DetailCard = ({item}) => {
    
    const {height,width} = useDimensions("window");
    const dispatch = useDispatch()
    const [showOptions,setShowOptions] = useState(true)

    const setAsWallpaper = async () => {
        try{
           await  WallpaperManager.setWallpaper(item.links.download, 1)
           dispatch(setDetailsState(false))
        }catch(e){
            console.error(e)
        }
    }

    const downloadImage = () => {

    }

    const share = () => {

    }

    return (
        <TouchableWithoutFeedback onPress={() => setShowOptions(!showOptions)} style={{height,width}}>
            <View style={{position:'absolute',bottom:showOptions ? 0 : -70,width:"100%",height:70,flexDirection:'row',justifyContent:'space-evenly',zIndex:2}}>
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
            <ProgressiveImage HighResImage={item.urls.raw} lowResImage={item.urls.small} style={{width:'100%',height:'100%',backgroundColor:Colors.cardBg}} resizeMode={"cover"} />
        </TouchableWithoutFeedback>
    )
}

export default DetailCard
