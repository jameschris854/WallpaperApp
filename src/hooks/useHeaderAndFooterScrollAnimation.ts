import { useEffect } from "react"
import { Animated, Easing } from "react-native"
import { useDispatch } from "react-redux"
import Constants from "../constants/constants"
import { setHomeScreenScrollEvent } from "../redux/slice/commonSlice"
import { AnimatedFlatlistScrollEvent } from "../types/globalTypes"

const useHeaderAndFooterScrollAnimation = () => {

    const loopAnim = new Animated.Value(0)
    const scrollOffset = new Animated.Value(0)
    const delay = 0.5
    const HEADER_HEIGHT = Constants.AppHeader.height

    const dispatch = useDispatch()

    useEffect(() => {
        Animated.loop(
            Animated.timing(loopAnim,{
            duration:5000,
            toValue:1,
            easing:Easing.circle,
            useNativeDriver:false
        })).start()
    },[])
    
    const handleScroll = (e: AnimatedFlatlistScrollEvent) => {
        dispatch(setHomeScreenScrollEvent({y:e.nativeEvent.contentOffset.y, velocity: e.nativeEvent.velocity?.y}))
        let scrollOffsetVal = 0
        scrollOffset.addListener((v) => scrollOffsetVal = v.value)
        if(-scrollOffsetVal <= HEADER_HEIGHT)  scrollOffset.setValue(-e.nativeEvent.contentOffset.y * delay)
    }

    let headerBg = scrollOffset.interpolate({
        inputRange:[-HEADER_HEIGHT*delay,0],
        outputRange:['rgba(0, 0, 0, 0.1)','rgba(0, 0, 0, 0)'],
    })

    return {headerBg,scrollOffset,handleScroll}
}

export default useHeaderAndFooterScrollAnimation;
