import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CommonState {
    categoryResults: Array<any>
    totalRecords: number
    selectedCategory: Array<any>
}

const initialState: CommonState = {
    categoryResults: [],
    totalRecords: 0,
    selectedCategory:[]
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
        state.totalRecords = action.payload.length
    }
  },
})

// Action creators are generated for each case reducer function
export const { init , setcategoryResults} = slice.actions

export default slice.reducer