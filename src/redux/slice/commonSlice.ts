import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Colors from '../../constants/colors'

export interface CommonState {
  isAppLoaded:boolean
  isSplashAnimationComplete:boolean
  colors: typeof Colors.Theme
  homeScreenScrollEvent: {y: number, velocity: number | undefined}
  shouldShowBottomTabs: boolean
  details: {}
  detailsState: boolean
}

const initialState: CommonState = {
  isAppLoaded:false,
  isSplashAnimationComplete:false,
  colors: Colors.Theme,
  homeScreenScrollEvent:  {y: 0, velocity: 0},
  shouldShowBottomTabs: true,
  details: {},
  detailsState:false
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setAppLoaded:(state : CommonState,action: PayloadAction<void>) => {
      state.isAppLoaded = true
    },
    setSplashAnimationComplete:(state : CommonState,action: PayloadAction<void>) => {
      state.isSplashAnimationComplete = true
    },
    setDarkMode: (state : CommonState,action: PayloadAction<boolean>) => {
      Colors.updateAppTheme(action.payload)
      state.colors = Colors.getAppTheme()
    },
    setHomeScreenScrollEvent:(state: CommonState,action: PayloadAction<{y: number, velocity:  number | undefined}>) => {
      if((action.payload.velocity <= 0 || action.payload.y == 0 ) && !state.shouldShowBottomTabs){
        state.shouldShowBottomTabs = true
      } else if( action.payload.velocity >= 0.8 && state.shouldShowBottomTabs) {
        state.shouldShowBottomTabs = false
      }
    },
    scrollControlInit:(state:CommonState,action:PayloadAction<void>) => {
      state.shouldShowBottomTabs = true;
      state.homeScreenScrollEvent = {y: 0, velocity: 0};
    },
    setDetails:(state: CommonState,action: PayloadAction<any>) => {
      console.log('setdet')
      commonSlice.actions.setDetailsState(true)
      state.details = action.payload
    },
    setDetailsState:(state: CommonState,action: PayloadAction<boolean>) => {
      state.detailsState = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setDarkMode ,setHomeScreenScrollEvent ,setDetails ,setDetailsState ,setSplashAnimationComplete ,setAppLoaded,scrollControlInit} = commonSlice.actions

export default commonSlice.reducer