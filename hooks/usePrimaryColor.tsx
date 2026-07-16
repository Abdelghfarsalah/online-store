
"use client";

import { SeetingBarType } from "@/types/redux";
import { useSelector } from "react-redux";

export default function usePrimaryColor(){
            const PrimaryColor = useSelector(
            (state: SeetingBarType) => state.SeetingBar.PrimaryColor
        );
        return  {
        PrimaryColor
    }
}