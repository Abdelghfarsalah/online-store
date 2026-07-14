"use client"
import { Button } from "@/components/ui/button"
import { buttontextType } from "@/types/login"

export function ButtonLink({text,onclick}:buttontextType) {
  return <Button variant="link"><p style={{
    color:"#1C4532",
    textDecoration:"underline",
    cursor:"pointer"
  }}
  onClick={onclick}
  >{text}</p></Button>
}
