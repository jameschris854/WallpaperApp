import { FlatList } from 'react-native';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Colors from '../../constants/colors'
import { AnimatedFlatlistScrollEvent } from '../../types/globalTypes';

export interface CommonState {
  colors: typeof Colors.Theme
  homeScreenScrollEvent: {y: number, velocity: number | undefined}
  shouldShowBottomTabs: boolean
  details: {}
  detailsState: boolean
}

const initialState: CommonState = {
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
    setDarkMode: (state : CommonState,action: PayloadAction<boolean>) => {
      Colors.updateAppTheme(action.payload)
      state.colors = Colors.getAppTheme()
    },
    setHomeScreenScrollEvent:(state: CommonState,action: PayloadAction<{y: number, velocity:  number | undefined}>) => {
      state.homeScreenScrollEvent = action.payload
      console.log(state.homeScreenScrollEvent.y,action.payload.velocity,state.shouldShowBottomTabs)
      if((action.payload.velocity <= 0.2 || state.homeScreenScrollEvent.y < 1 ) && !state.shouldShowBottomTabs){
        state.shouldShowBottomTabs = true
      } else if( action.payload.velocity >= 0.2 && state.shouldShowBottomTabs) {
        state.shouldShowBottomTabs = false
      }
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
export const { setDarkMode ,setHomeScreenScrollEvent ,setDetails ,setDetailsState } = commonSlice.actions

export default commonSlice.reducer