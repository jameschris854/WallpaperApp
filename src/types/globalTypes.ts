import { NativeScrollEvent } from "react-native";

export interface AnimatedFlatlistScrollEvent {
  nativeEvent: NativeScrollEvent
}

export interface WallpaperListRes {
  results:Array<any>
  total:number
  total_pages:number
  lastAnimatedIndex:number
}