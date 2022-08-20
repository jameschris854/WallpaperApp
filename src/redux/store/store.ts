import searchReducer from '../slice/searchSlice';
import categoryReducer from '../slice/categorySlice';
import { configureStore } from '@reduxjs/toolkit'
import commonReducer  from '../slice/commonSlice'


const reducer = {
  commonReducer,
  searchReducer,
  categoryReducer
}

export const store = configureStore({ 
  reducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch