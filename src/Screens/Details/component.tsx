import React, { useEffect } from "react";
import {  FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import GradientBackground from "../../components/GradientBackground";
import { RootState } from "../../redux/store/store";
import { scrollControlInit } from "../../redux/slice/commonSlice";
import Constants from "../../constants/constants";
import DetailCard from "./DetailCard";
import useDimensions from "../../hooks/useDimensions";

const Component = () => {
    const {height} = useDimensions("window");
    const commonReducer = useSelector((state: RootState) => state.commonReducer)
    const Colors = commonReducer.colors
    const dispatch = useDispatch()

    useEffect(() => {
    dispatch(scrollControlInit({bottomTabState:Constants.BottomTabStates.HIDE}))
    }, [])
    
    return(
        <>  
            <GradientBackground fromColor={Colors.backgroundColorDark} toColor={Colors.backgroundColorLight}>
                {commonReducer.details && <FlatList
                data={commonReducer.details}
                renderItem={({item}) => <DetailCard item={item} />}
                snapToAlignment={"start"}
                snapToInterval={height}
                decelerationRate={"normal"}
                initialScrollIndex={commonReducer.detailIndex}
                />}
            </GradientBackground>
        </>
    )
}

export default Component
