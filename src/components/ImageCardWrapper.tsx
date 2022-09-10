import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableHighlight } from "react-native";
import { useDispatch } from "react-redux";
import { setDetails, setDetailsState } from "../redux/slice/commonSlice";

type Props = {
    children?: React.ReactNode;
    item: any
}
const ImageCardWrapper = ({children,item}:Props) => {

    const dispatch = useDispatch()
    const navigation = useNavigation()

    return (
        <TouchableHighlight onPress={() =>{
            dispatch(setDetails(item))
            navigation.navigate({name:'Details'})
        }}>
            {children}
        </TouchableHighlight>
    )
}

export default ImageCardWrapper