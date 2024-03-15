import { AppDispatch } from "@/redux-toolkit/store/Store";
import { useDispatch } from "react-redux";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
