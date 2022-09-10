import React from "react";
import { ActivityIndicator, Image, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

const ProgressiveImage = ({lowResImage,HighResImage,...props}) => {
    const commonReducer = useSelector((state: RootState) => state.commonReducer)
    const Colors = commonReducer.colors
    const highResImageStyle = props.style? {...props.style,zIndex:1,position:'absolute'} : {}

    console.log(highResImageStyle)
    return(
        <>
            <View style={{justifyContent:'center',alignSelf:'center',height:'100%',width:'100%'}}>
                <Image source={{uri:lowResImage}}  {...props} />
                <ActivityIndicator size={"large"} color={Colors.primary} style={{position:'absolute',alignSelf:'center'}} />
            </View>
            <Image source={{uri:HighResImage}} {...props} style={highResImageStyle} />
        </>
    )
}

export default ProgressiveImage