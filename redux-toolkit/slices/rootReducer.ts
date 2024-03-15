import globalSlice from "./stateSlice";
import userSlice from "./userSlice";

const rootReducer = {
  globalSlice,
  userSlice: userSlice,
};

export default rootReducer;
