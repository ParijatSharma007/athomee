import { UserData } from "@/typescript/interfaces";
import { createSlice } from "@reduxjs/toolkit";
import { destroyCookie } from "nookies";

const initialState: {
  userData: UserData | null;
} = {
  userData: null,
};

const userSlice = createSlice({
  name: "userSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUserData: (state, { payload }: { payload: UserData }) => {
      state.userData = payload;
      
    },
    userLogout : (state) => {
      state.userData = null
      destroyCookie(null, "atHomee_token", {path : "/"})
      destroyCookie(null, "role", {path : "/"})
      if(window){
        window.localStorage.clear()
        if('caches' in window){
          caches.keys().then((names) => {
         names.forEach(name => {
             caches.delete(name);
         })
        })
      }
    }
  },
  //   extraReducers: {}
}});

export const { setUserData, userLogout } = userSlice.actions;

export default userSlice.reducer;
