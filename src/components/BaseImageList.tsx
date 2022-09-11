import React, { useEffect, useState } from "react"
import { Animated, Image, View } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"
import ImageCardWrapper from "./ImageCardWrapper"
import * as Animatable from 'react-native-animatable';
import useDimensions from "../hooks/useDimensions";
import Lottie from 'lottie-react-native'
import { useSelector } from "react-redux";
import colors from "../constants/colors";
import { RootState } from "../redux/store/store";
import Page from "../constants/model/Page";

const BaseImageList = ({data,handleScroll,pageHeaderHeight,handlePageEndReached,lastAnimatedIndex=0}) => {
    const {height} = useDimensions('window')
    const Colors : typeof colors.Theme = useSelector((state: RootState) => state.commonReducer.colors)
    const [page] = useState(new Page())

    const _renderItem = ({item,index}) => {
        if(!item?.urls?.small) return
        return  <Animatable.View key={index} animation={lastAnimatedIndex < index ? "bounceInUp" : ""} iterationDelay={(index - lastAnimatedIndex)*130} duration={250} useNativeDriver easing={"ease-in-out"}  style={{maxHeight:height/3,width:'47.5%',marginLeft:index%2 !== 0 ? 'auto': '0%',marginTop:'4%',backgroundColor:Colors.cardBg,borderRadius:15,overflow:'hidden'}}>
                    <ImageCardWrapper item={item} index={index}>
                        <Image source={{uri:item.urls.small}} style={{width:'100%',height:'100%',backgroundColor:Colors.cardBg}} resizeMode={"cover"} />
                    </ImageCardWrapper>
                </Animatable.View>
    }

    const onEndReached = (e) => {
        handlePageEndReached(e,page)
    }
    
    return(
        <>
            {
                data.length ? 
                <Animated.FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={(props) => <_renderItem {...props} />}
                scrollEnabled
                horizontal={false}
                numColumns={2}
                maxToRenderPerBatch={2}
                onScroll={handleScroll}
                scrollEventThrottle={300}
                style={{flex:1}}
                ListHeaderComponent={<View style={{height:pageHeaderHeight,width:'100%'}} />}
                ListFooterComponent={(page.totalPages && page.page < page.totalPages) ? <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                <Lottie style={{width:150,height:150}} colorFilters={[{keypath:"Top 2",color:Colors.backgroundColorLight},{keypath:"Bottom 2",color:Colors.backgroundColorLight},{keypath:"Arch 2",color:Colors.backgroundColorLight},{keypath:"Circle 3",color:Colors.backgroundColorLight}]} source={require('../Assets/Lottie/91518-blue-abstract-loader (1).json')} autoPlay loop />
            </View> : <View style={{height:16,width:'100%'}} />}
                onEndReached={onEndReached}
                />

                : <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                    <Lottie style={{width:150,height:150}} colorFilters={[{keypath:"Top 2",color:Colors.backgroundColorLight},{keypath:"Bottom 2",color:Colors.backgroundColorLight},{keypath:"Arch 2",color:Colors.backgroundColorLight},{keypath:"Circle 3",color:Colors.backgroundColorLight}]} source={require('../Assets/Lottie/91518-blue-abstract-loader (1).json')} autoPlay loop />
                </View> 

            }
        </>
    )
}

export default BaseImageList