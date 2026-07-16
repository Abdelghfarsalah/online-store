"use client"
import { Button } from "@/components/ui/button";
import { buttontextType } from "@/types/Auth";
import { SeetingBarType } from "@/types/redux";
import { useSelector } from "react-redux";

export function ButtonLink({text,onclick}:buttontextType) {
        const state = useSelector(
              (state: SeetingBarType) => state.SeetingBar.PrimaryColor
          );
  return <Button variant="link"><p style={{
    color:state,
    textDecoration:"underline",
    cursor:"pointer"
  }}
  onClick={onclick}
  >{text}</p></Button>
}
