"use client";

import usePrimaryColor from "@/hooks/usePrimaryColor";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function ContactPage() {
  const locale = useLocale?.() ?? "en";
  const t = useTranslations("HomePage");
  const { PrimaryColor } = usePrimaryColor();

  return (
    <div style={{ padding: 32, minHeight: "100vh", background: "#f8fafc" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
        <div>
          <h1 style={{ fontSize: 32, fontWeight: 800, margin: 0 }}>{t("contactTitle")}</h1>
          <p style={{ margin: "8px 0 0", color: "#6B7280", maxWidth: 760 }}>{t("contactDescription")}</p>
        </div>
        <Link href={`/${locale}/Home`}>
          <button style={{ padding: "10px 14px", borderRadius: 10, background: PrimaryColor, color: "#fff", border: "none", cursor: "pointer" }}>
            {t("backButton")}
          </button>
        </Link>
      </div>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: 28, borderRadius: 24, background: "#ffffff", boxShadow: "0 24px 68px rgba(15, 23, 42, 0.08)", display: "grid", gap: 20 }}>
        <div style={{ display: "grid", gap: 16 }}>
          <div>
            <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>Email</h2>
            <p style={{ margin: 8, color: "#475569" }}>support@furniro.com</p>
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>Phone</h2>
            <p style={{ margin: 8, color: "#475569" }}>+1 (555) 123-4567</p>
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>{t("visitUs")}</h2>
            <p style={{ margin: 8, color: "#475569" }}>{t("contactAddress")}</p>
          </div>
        </div>

        <div style={{ display: "grid", gap: 14 }}>
          <label style={{ fontWeight: 700, color: "#111827" }}>{t("contactFormName")}</label>
          <input style={{ padding: 14, borderRadius: 14, border: "1px solid #E5E7EB", background: "#F8FAFC" }} placeholder={t("contactFormNamePlaceholder")} />
          <label style={{ fontWeight: 700, color: "#111827" }}>{t("contactFormEmail")}</label>
          <input style={{ padding: 14, borderRadius: 14, border: "1px solid #E5E7EB", background: "#F8FAFC" }} placeholder={t("contactFormEmailPlaceholder")} />
          <label style={{ fontWeight: 700, color: "#111827" }}>{t("contactFormMessage")}</label>
          <textarea style={{ minHeight: 160, padding: 14, borderRadius: 14, border: "1px solid #E5E7EB", background: "#F8FAFC" }} placeholder={t("contactFormMessagePlaceholder")} />
          <button style={{ width: "fit-content", padding: "12px 18px", border: "none", borderRadius: 14, background: PrimaryColor, color: "#fff", cursor: "pointer" }}>
            {t("contactSubmit")}
          </button>
        </div>
      </div>
    </div>
  );
}
