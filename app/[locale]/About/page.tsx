"use client";

import usePrimaryColor from "@/hooks/usePrimaryColor";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function AboutPage() {
  const locale = useLocale?.() ?? "en";
  const t = useTranslations("HomePage");
  const { PrimaryColor } = usePrimaryColor();

  return (
    <div style={{ padding: 32, minHeight: "100vh", background: "#f8fafc" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
        <div>
          <h1 style={{ fontSize: 32, fontWeight: 800, margin: 0 }}>{t("aboutTitle")}</h1>
          <p style={{ margin: "8px 0 0", color: "#6B7280", maxWidth: 760 }}>{t("aboutDescription")}</p>
        </div>
        <Link href={`/${locale}/Home`}>
          <button style={{ padding: "10px 14px", borderRadius: 10, background: PrimaryColor, color: "#fff", border: "none", cursor: "pointer" }}>
            {t("backButton")}
          </button>
        </Link>
      </div>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: 28, borderRadius: 24, background: "#ffffff", boxShadow: "0 24px 68px rgba(15, 23, 42, 0.08)", display: "grid", gap: 20 }}>
        <p style={{ margin: 0, color: "#475569", lineHeight: 1.9, fontSize: 16 }}>{t("aboutSection1")}</p>
        <p style={{ margin: 0, color: "#475569", lineHeight: 1.9, fontSize: 16 }}>{t("aboutSection2")}</p>
      </div>
    </div>
  );
}
