import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Colors from '../../constants/colors'
import Constants from '../../constants/constants'

export interface CommonState {
  isAppLoaded:boolean
  isSplashAnimationComplete:boolean
  colors: typeof Colors.Theme
  homeScreenScrollEvent: {y: number, velocity: number | undefined}
  shouldShowBottomTabs: boolean
  details: [],
  detailIndex: number,
  detailsState: boolean
}

const initialState: CommonState = {
  isAppLoaded:false,
  isSplashAnimationComplete:false,
  colors: Colors.Theme,
  homeScreenScrollEvent:  {y: 0, velocity: 0},
  shouldShowBottomTabs: true,
  details: [],
  detailIndex: 0,
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
    scrollControlInit:(state:CommonState,action:PayloadAction<{bottomTabState:string}>) => {
      state.shouldShowBottomTabs = action.payload.bottomTabState == Constants.BottomTabStates.SHOW;
      state.homeScreenScrollEvent = {y: 0, velocity: 0};
    },
    setDetails:(state: CommonState,action: PayloadAction<any>) => {
      commonSlice.actions.setDetailsState(true)
      state.details = action.payload
    },
    setDetailIndex:(state: CommonState,action: PayloadAction<number>) => {
      state.detailIndex = action.payload
    },
    setDetailsState:(state: CommonState,action: PayloadAction<boolean>) => {
      state.detailsState = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setDarkMode ,setHomeScreenScrollEvent ,setDetails ,setDetailsState ,setSplashAnimationComplete ,setAppLoaded,scrollControlInit,setDetailIndex} = commonSlice.actions

export default commonSlice.reducer