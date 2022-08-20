import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { commonSlice } from './commonSlice'

export interface CommonState {
    searchText : string
    searchResults: Array<any>
    totalRecords: number
    totalPages: number
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
    },
    setSearchText:(state : CommonState,action:PayloadAction<string>) => {
        state.searchText = action.payload
    },
    setSearchResults:(state : CommonState,action: PayloadAction<{results:Array<any>,total:number,total_pages:number}>) => {
        state.searchResults = action.payload.results
        state.totalRecords = action.payload.total
        state.totalPages = action.payload.total_pages
    }
  },
})

// Action creators are generated for each case reducer function
export const { init , setSearchResults ,setSearchText} = slice.actions

export default slice.reducer