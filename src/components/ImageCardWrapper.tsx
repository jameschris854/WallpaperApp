import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableHighlight } from "react-native";

type Props = {
    children?: React.ReactNode;
    item: any
}
const ImageCardWrapper = ({children}:Props) => {

    const navigation = useNavigation()

    return (
        <TouchableHighlight onPress={() =>{
            navigation.navigate({name:'Details'})
        }}>
            {children}
        </TouchableHighlight>
    )
}

export default ImageCardWrapper