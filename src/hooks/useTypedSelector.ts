import { TypedUseSelectorHook, useSelector } from "react-redux"; 
import { RootState } from "../store/Index";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector