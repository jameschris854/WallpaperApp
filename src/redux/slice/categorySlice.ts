import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { WallpaperListRes } from '../../types/globalTypes'

export interface CommonState {
    categoryResults: Array<any>
    totalRecords: number
    selectedCategoryResults: Array<any>
    totalPages: number
    lastAnimatedIndex: number
}

const initialState: CommonState = {
    categoryResults: [],
    selectedCategoryResults:[],
    totalRecords: 0,
    totalPages: 0,
}

export const slice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    init: (state : CommonState) => {
        state.categoryResults = []
        state.totalRecords = 0
    },
    setcategoryResults:(state : CommonState,action: PayloadAction<Array<any>>) => {
        state.categoryResults = action.payload
    },
    setSelectedCategoryItems:(state:CommonState,action:PayloadAction<WallpaperListRes>) => {
      state.selectedCategoryResults = action.payload.results
      state.totalRecords = action.payload.total
      state.totalPages = action.payload.total_pages
      state.lastAnimatedIndex = action.payload.lastAnimatedIndex
    }
  },
})

// Action creators are generated for each case reducer function
export const { init , setcategoryResults ,setSelectedCategoryItems} = slice.actions

export default slice.reducer