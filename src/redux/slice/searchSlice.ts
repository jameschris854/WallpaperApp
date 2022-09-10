import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { commonSlice } from './commonSlice'
import { WallpaperListRes } from '../../types/globalTypes'

export interface CommonState {
    searchText : string
    searchResults: Array<any>
    totalRecords: number
    totalPages: number
    lastAnimatedIndex:number
}

const initialState: CommonState = {
    searchText:'',
    searchResults: [],
    totalRecords: 0,
    totalPages: 0,
}

export const slice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    init: (state : CommonState) => {
        state.searchText = ''
        state.searchResults = []
        state.totalRecords = 0
        state.totalPages = 0
        state.lastAnimatedIndex = 0
    },
    setSearchText:(state : CommonState,action:PayloadAction<string>) => {
        state.searchText = action.payload
    },
    setSearchResults:(state : CommonState,action: PayloadAction<WallpaperListRes>) => {
        state.searchResults = action.payload.results
        state.totalRecords = action.payload.total
        state.totalPages = action.payload.total_pages
        state.lastAnimatedIndex = action.payload.lastAnimatedIndex
    }
  },
})

// Action creators are generated for each case reducer function
export const { init , setSearchResults ,setSearchText} = slice.actions

export default slice.reducer