import * as React from "react"
import { useEffect, useRef } from "react"
import { Animated } from "react-native"
import Svg, { Path } from "react-native-svg"

type Props = {
    color?: any
    width: number | string
    height: number | string
}

const AnimatedPath = Animated.createAnimatedComponent(Path);

const LogoSvg = (data: Props) => {
        const color = useRef(new Animated.Value(0)).current;

        useEffect(() => {
            Animated.loop(
            Animated.sequence([
                Animated.timing(color, {
                duration: 1000,
                toValue: 1,
                useNativeDriver: true,
                }),
                Animated.timing(color, {
                duration: 1000,
                toValue: 0,
                useNativeDriver: true,
                }),
            ])
            ).start();
        }, []);
        
        const {width,height,...props} = data

        const animatedColor = color.interpolate({
            inputRange: [0, 0.2, 0.4, 0.8, 1],
            outputRange: [
              "rgb(147, 189, 186)",
              "rgb(235, 154, 64)",
              "rgb(226, 117, 58)",
              "rgb(220, 85, 52)",
              "rgb(220, 85, 52)",
            ],
          })

        const textColor = data.color || animatedColor 
        return(
            <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 1271.000000 1100.000000"
            >
            <AnimatedPath
                d="M2735 9065c-95-17-242-58-345-95-115-42-232-91-247-102-9-7 1-26 37-71 28-34 48-67 46-73-3-7 16-36 41-65 175-204 392-650 554-1139 307-927 500-2012 550-3085 15-317 6-892-15-1065-25-197-66-410-102-532-5-16 2-18 49-18 29 0 56-3 59-6s-1-30-8-60c-8-30-12-59-8-65 12-21 333 10 494 48 179 41 395 127 555 220 169 99 372 266 508 418 344 386 884 1271 1248 2047 41 87 78 158 82 158s5-44 2-97c-17-296-25-822-15-1001 34-639 137-1012 385-1386 131-199 252-312 420-392 382-182 871-120 1295 163 492 329 919 914 1386 1896 242 509 423 982 549 1439 209 754 259 1532 125 1928-30 88-145 299-200 368-52 65-143 130-227 163-72 27-273 38-380 20-96-17-255-72-361-125-107-54-362-222-362-239 0-4 19-16 43-28 23-12 54-30 69-41l28-19-28-24c-15-13-25-25-22-28 3-2 31-18 63-36 95-54 172-133 213-217 105-218 148-604 125-1110-24-524-78-910-187-1348-88-350-203-663-360-982-290-590-623-887-993-886-157 0-271 48-367 155-55 61-68 86-105 195-103 304-137 765-109 1452 20 469 61 880 126 1270 25 146 69 409 99 585 94 561 97 619 42 722-12 23-39 73-59 112-84 157-195 211-436 211-160 0-313-30-545-108l-172-57-1-170c-2-180-18-310-61-505-155-700-679-1808-1286-2720-167-251-405-585-412-578-2 2-8 73-15 158-128 1750-385 3120-730 3892-101 227-262 498-366 620-101 116-210 193-323 228-75 24-234 26-346 5z"
                transform="matrix(.1 0 0 -.1 0 1100)"
                fill={textColor}
            />
            </Svg>
        )
}


export default LogoSvg
