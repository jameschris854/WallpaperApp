import * as React from "react"
import { Animated } from "react-native"
import Svg, { Path } from "react-native-svg"
import { useSelector } from "react-redux"
import colors from "../../constants/colors"
import { RootState } from "../../redux/store/store"
const AnimatedPath = Animated.createAnimatedComponent(Path);

export function MoonSvg(props) {
  console.log(props.color)
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    style={{
      width: 24,
      height: 24
    }}
  >
    <AnimatedPath fill={props.color} d="M504.929 323.637a24.15 24.15 0 00-26.489-5.16c-26.922 11.403-55.471 17.185-84.859 17.185-58.032 0-112.586-22.597-153.618-63.63-62.92-62.918-81.149-156.525-46.442-238.474a24.142 24.142 0 00-31.649-31.644c-31.495 13.343-59.788 32.433-84.093 56.74C27.616 108.815-.006 175.506 0 246.443c.006 70.927 27.63 137.61 77.785 187.767C127.948 484.374 194.643 512 265.58 512c70.926 0 137.61-27.622 187.767-77.779 24.308-24.308 43.397-52.6 56.74-84.093a24.148 24.148 0 00-5.158-26.491z" />
  </Svg>
  )
}


export function SunSvg(props) {
  const color = props.color
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 200.322 200.322"
      xmlSpace="preserve"
      enableBackground="new 0 0 200.322 200.322"
      width={props.width}
      height={props.height}
    >
      <AnimatedPath
        d="M101.677 40.71L93.661 0 85.645 40.71 93.661 40.71z"
        fill={color}
      />
      <AnimatedPath
        d="M67.185 47.804L74.127 43.796 46.83 12.548 60.243 51.812z"
        fill={color}
      />
      <AnimatedPath
        d="M47.804 67.186L51.811 60.243 12.548 46.83 43.795 74.128z"
        fill={color}
      />
      <AnimatedPath
        d="M40.709 93.66L40.71 85.646 0 93.66 40.709 101.677z"
        fill={color}
      />
      <AnimatedPath
        d="M47.803 120.137L43.796 113.194 12.548 140.491 51.81 127.079z"
        fill={color}
      />
      <AnimatedPath
        d="M60.244 135.511L46.83 174.774 74.127 143.527 67.184 139.519z"
        fill={color}
      />
      <AnimatedPath
        d="M85.645 146.611L93.661 187.322 101.677 146.613 93.661 146.613z"
        fill={color}
      />
      <AnimatedPath
        d="M120.137 139.519L113.195 143.525 140.491 174.774 127.079 135.511z"
        fill={color}
      />
      <AnimatedPath
        d="M139.519 120.137L135.51 127.077 174.773 140.491 143.525 113.194z"
        fill={color}
      />
      <AnimatedPath
        d="M187.322 93.66L146.612 85.645 146.613 93.66 146.612 101.676z"
        fill={color}
      />
      <AnimatedPath
        d="M139.518 67.184L143.525 74.126 174.773 46.83 135.509 60.243z"
        fill={color}
      />
      <AnimatedPath
        d="M127.078 51.812L140.491 12.548 113.193 43.796 120.136 47.804z"
        fill={color}
      />
      <AnimatedPath
        d="M93.661 45.265v96.793c26.729 0 48.397-21.668 48.397-48.397S120.39 45.265 93.661 45.265z"
        fill={color}
      />
      <AnimatedPath
        d="M45.265 93.661c0 26.729 21.668 48.397 48.396 48.397V45.265c-26.728 0-48.396 21.668-48.396 48.396z"
        fill={color}
      />
    </Svg>
  )
}

const ThemeSvg = () => {
    const Colors = useSelector((state: RootState) => state.commonReducer.colors)
    const [svgType,setSvgType] = React.useState(Colors.isDarkMode ? 'Moon' : 'Sun')
    const [animVal] = React.useState(new Animated.Value(0))

    React.useEffect(() => {
      console.log('theme changed')
        animVal.setValue(0)
        if(Colors.isDarkMode){
            Animated.timing(animVal,{
                duration:1000,
                toValue:1,
                useNativeDriver:false
            }).start(() => {
                setSvgType('Sun')
            })
        }else {
            Animated.timing(animVal,{
                duration:1000,
                toValue:1,
                useNativeDriver:false
            }).start(() => {
                setSvgType('Moon')
            })
        }
    },[Colors.isDarkMode])


    const rotation = animVal.interpolate({
        inputRange:[0,1],
        outputRange:['0deg','360deg'], 
    })

    const sunColor = animVal.interpolate({
      inputRange:[0,1],
      outputRange:["rgb(235, 154, 64)","rgb(235, 154, 64)"], 
    })
    
    const moonColor = animVal.interpolate({
      inputRange:[0,1],
      outputRange:["rgb(235, 154, 64)","grey"], 
    })

    return (
        <Animated.View style={{transform:[{rotateZ:rotation}]}}>
            {
                svgType =='Moon' ? <MoonSvg color={moonColor} width={30} height={30}/> :  <SunSvg color={sunColor} width={30} height={30} />
            }
        </Animated.View>
    )
}

export default ThemeSvg
