import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableHighlight } from "react-native";
import { useDispatch } from "react-redux";
import { setDetailIndex } from "../redux/slice/commonSlice";

type Props = {
    children?: React.ReactNode;
    item: any
    index: number
}
const ImageCardWrapper = ({children,item,index}:Props) => {

    const navigation = useNavigation()
    const dispatch = useDispatch()
    return (
        <TouchableHighlight onPress={() =>{
            dispatch(setDetailIndex(index))
            navigation.navigate({name:'Details'})
        }}>
            {children}
        </TouchableHighlight>
    )
}

export default ImageCardWrapper