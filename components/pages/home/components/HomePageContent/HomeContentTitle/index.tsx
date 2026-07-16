"use client";

import usePrimaryColor from "@/hooks/usePrimaryColor";
import { useTranslations } from "next-intl";

export default function HomeContenTitle() {
  const { PrimaryColor } = usePrimaryColor();
  const t = useTranslations("HomePage");
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        margin: "30px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <h2
          style={{
            fontSize: "38px",
            fontWeight: 700,
            color: "#1F2937",
            letterSpacing: "1px",
            textTransform: "capitalize",
          }}
        >
          {t("categoryTitle")}
        </h2>

        <div
          style={{
            width: "80px",
            height: "4px",
            borderRadius: "999px",
            // background:
            //   `linear-gradient(90deg, #${PrimaryColor}, #60A5FA)`,
            backgroundColor:PrimaryColor
          }}
        />

        <p
          style={{
            color: "#6B7280",
            fontSize: "15px",
            marginTop: "5px",
          }}
        >
          {t("categorySubtitle")}
        </p>
      </div>
    </div>
  );
}