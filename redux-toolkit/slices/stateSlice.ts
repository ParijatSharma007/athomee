import { createSlice } from "@reduxjs/toolkit";


const initialState: any = {
  changeStatus: "Requested"
};

const globalSlice = createSlice({
  name: "globalSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    reservationStatusChange: (state, { payload }: { payload : string}) => {
      state.changeStatus = payload;
    },
   
  },
//   extraReducers: {}
});

export const { reservationStatusChange } = globalSlice.actions;

export default globalSlice.reducer;
