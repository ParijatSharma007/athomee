import { useAppSelector } from "./redux/useAppSelector";

export const useReservationStatus = useAppSelector(
    (state) => state.globalSlice.changeStatus
  );