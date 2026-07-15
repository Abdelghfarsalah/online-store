"use client"
import MousePointer from "@/components/shared/MousePointer";
import SettingBar from "@/components/shared/SettingBar";
import SettingButton from "@/components/shared/SettingButton";
import { useLocale } from "next-intl";
export default function AppContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
   const locale=useLocale()
  return <div style={{
    direction:locale=="ar"? "rtl":"ltr",
  }}>
    <MousePointer></MousePointer>
              <SettingButton></SettingButton>
              <SettingBar></SettingBar>
              {children}
  </div>
}