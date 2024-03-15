import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../slices/rootReducer";

// ...

//Middlewares
const config = {
  // Overwrite existing state with incoming state
  receiveState: (prevState: any, nextState: any) => nextState
};

export const store = configureStore({
  reducer: rootReducer
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
