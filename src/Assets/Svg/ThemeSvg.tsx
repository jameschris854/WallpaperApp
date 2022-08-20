import * as React from "react"
import { Animated, Easing } from "react-native"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store/store"
import Lottie from 'lottie-react-native'

const ThemeSvg = () => {
    const Colors = useSelector((state: RootState) => state.commonReducer.colors)
    const [animVal] = React.useState(new Animated.Value(0))

    React.useEffect(() => {
        if(Colors.isDarkMode){
            Animated.timing(animVal,{
                duration:500,
                toValue:1,
                easing: Easing.linear,
                useNativeDriver:false
            }).start()
        }else {
            Animated.timing(animVal,{
                duration:500,
                toValue:0,
                easing: Easing.linear,
                useNativeDriver:false
            }).start()
        }
    },[Colors.isDarkMode])

    return (
      <Lottie style={{height:70,marginRight:-20}} progress={animVal} source={require('../Lottie/53164-light-dark-mode-button (1).json')} loop={false} autoPlay={false}/>
    )
}

export default ThemeSvg
