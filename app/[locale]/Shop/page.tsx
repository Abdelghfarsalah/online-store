"use client";

import usePrimaryColor from "@/hooks/usePrimaryColor";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const sampleProducts = [
  {
    id: 1,
    title: "Motorola Moto G54",
    description: "8 GB RAM | 128 GB ROM | 16.51 cm (6.5 inch) HD+ Display | 50MP + 2MP | 16MP Front Camera | 5000 mAh Battery | Snapdragon 695 5G Processor",
    price: "₹13,999",
    image: "https://rukminim2.flixcart.com/image/312/312/ku4ezrk0/mobile/q/a/z/motorola-moto-g54-5g-22021316in-original-imag7fx8epjqhhfx.jpeg",
    label: "Mobile",
  },
  {
    id: 2,
    title: "Men Black Sandal",
    description: "Comfortable slip-on black sandal with soft sole and adjustable strap.",
    price: "₹279",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/sandal/j/p/f/10-mrzbfmcsndblk-urban-sole-original-imagcyfmuasefa24.jpeg",
    label: "Footwear",
  },
  {
    id: 3,
    title: "The Psychology of Money",
    description: "Timeless lessons on wealth, greed, and happiness from Morgan Housel.",
    price: "₹399",
    image: "https://rukminim2.flixcart.com/image/312/312/kh8nvbk0/book/j/p/b/the-psychology-of-money-1st-original-imafwh3dmcvg6cmq.jpeg",
    label: "Book",
  },
  {
    id: 4,
    title: "Premium Noise Cancelling Headphones",
    description: "Wireless over-ear headphones with immersive sound and long battery life.",
    price: "₹3,299",
    image: "https://rukminim2.flixcart.com/image/312/312/l3dcl8w0/headphone/o/b/5/wh-1000xm4-sony-original-imag6pgehtfhqjck.jpeg",
    label: "Accessory",
  },
];

export default function ShopPage() {
  const locale = useLocale() ?? "en";
  const t = useTranslations("HomePage");
  const { PrimaryColor } = usePrimaryColor();

  const labelMap = {
    Mobile: t("categoryMobile"),
    Footwear: t("categoryFootwear"),
    Book: t("categoryBook"),
    Accessory: t("categoryAccessory"),
  };

  return (
    <div style={{ padding: 32, minHeight: "100vh", background: "#f8fafc" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
        <div>
          <h1 style={{ fontSize: 32, fontWeight: 800, margin: 0 }}>{t("shopPageTitle")}</h1>
          <p style={{ margin: "8px 0 0", color: "#6B7280", maxWidth: 760 }}>{t("shopPageDescription")}</p>
        </div>
        <Link href={`/${locale}/Home`}>
          <button style={{ padding: "10px 14px", borderRadius: 10, background: PrimaryColor, color: "#fff", border: "none", cursor: "pointer" }}>
            {t("backButton")}
          </button>
        </Link>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
        {sampleProducts.map((product) => (
          <div key={product.id} style={{ borderRadius: 20, overflow: "hidden", background: "#fff", boxShadow: "0 20px 54px rgba(15, 23, 42, 0.08)", display: "flex", flexDirection: "column" }}>
            <div style={{ position: "relative", minHeight: 220, overflow: "hidden" }}>
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 640px) 100vw, 260px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: 22, display: "grid", gap: 14 }}>
              <span style={{ textTransform: "uppercase", color: "#6b7280", letterSpacing: "0.14em", fontSize: 12 }}>
                {labelMap[product.label as keyof typeof labelMap] ?? product.label}
              </span>
              <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: "#111827" }}>{product.title}</h2>
              <p style={{ margin: 0, color: "#475569", lineHeight: 1.8, minHeight: 72 }}>{product.description}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginTop: 8 }}>
                <strong style={{ color: "#111827", fontSize: 18 }}>{product.price}</strong>
                <button style={{ borderRadius: 14, border: "none", padding: "12px 18px", background: PrimaryColor, color: "#fff", cursor: "pointer" }}>
                  {t("buyNowButton")}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
