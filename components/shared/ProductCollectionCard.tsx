"use client";

import usePrimaryColor from "@/hooks/usePrimaryColor";
import { Mobiles, MobilesCollectionCardProps } from "@/types/home";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function ProductCollectionCard({
  title,
  products = [],
  sectionPath = "mobiles",
  tagLabel,
}: MobilesCollectionCardProps) {
  const t = useTranslations("HomePage");
  const locale = useLocale?.() ?? "en";
  const preview: Mobiles[] = Array.isArray(products) ? products : [];
  const { PrimaryColor } = usePrimaryColor();
  return (
    <div
      style={{
        width: "100%",
        padding: "30px",
        background: "#fff",
        borderRadius: "18px",
      }}
    >
      {/* Title + See All */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18, flexWrap: "wrap", gap: 12 }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: "#1F2937", margin: 0 }}>{title}</h2>
        <Link href={`/${locale}/Home/${sectionPath}`} style={{ textDecoration: "none" }}>
          <motion.button  whileHover={{ scale: 1.1,
            textDecoration: "underline",
            }} style={{ color: PrimaryColor, padding: "10px 16px",fontSize:"20px",
            borderRadius: 12, border: "none", cursor: "pointer", minWidth: 120 }}>
            {t("seeAllButton")}
          </motion.button>
        </Link>
      </div>

      {/* Products */}
      <div className="productsGrid">
        {preview.slice(0, 6).map((product, idx: number) => {
          const imageSrc = product.Image ?? product.image ?? "/assets/images/image-removebg-preview (21) 1.png";
          const titleText = product.Description ?? product.description ?? product.Tag ?? product.tag ?? t("productTagFallback");
          const tagText = product.Tag ?? product.tag ?? t("productTagFallback");
          const priceText = product.Price ?? product.price ?? "";
          const keyValue = product.Id ?? product.id ?? `${tagText}-${idx}`;
          const labelText = tagLabel ?? t("productTagLabel");

          return (
            <div key={keyValue} className="productCard">
              <div className="productImage">
                <Image
                  src={imageSrc}
                  alt={titleText}
                  fill
                  sizes="(max-width: 640px) 100vw, 220px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="cardBody">
                <div className="cardHeader">
                  <div>
                    <div className="productLabel">{labelText}</div>
                    <div className="productTitle">{titleText}</div>
                  </div>
                  <span className="priceBadge">{priceText}</span>
                </div>
                <button style={{
                  backgroundColor: PrimaryColor
                }} className="buyButton">{t("buyNowButton")}</button>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .productsGrid {
          display: grid;
          gap: 20px;
          grid-template-columns: repeat(6, minmax(0, 1fr));
        }

        .productCard {
          background: #f8fafc;
          border-radius: 18px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease;
          display: grid;
          grid-template-rows: auto 1fr;
          min-height: 360px;
          border: 1px solid #e2e8f0;
        }

        .productCard:hover {
          transform: translateY(-4px);
          background: #f1f5f9;
        }

        .productImage {
          position: relative;
          min-height: 180px;
          overflow: hidden;
        }

        .productBadge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(17, 24, 39, 0.9);
          color: #fff;
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
        }

        .cardBody {
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .cardHeader {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
        }

        .productLabel {
          font-size: 12px;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .productTitle {
          margin-top: 8px;
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          line-height: 1.25;
        }

        .priceBadge {
          color: #111827;
          font-weight: 700;
          padding: 6px 12px;
          background: #e2e8f0;
          border-radius: 999px;
          font-size: 14px;
          white-space: nowrap;
        }

        .buyButton {
          margin-top: auto;
          width: 100%;
          border: none;
          border-radius: 14px;
          padding: 12px 14px;
          background: #111827;
          color: #fff;
          font-weight: 700;
          cursor: pointer;
        }

        @media (max-width: 1024px) {
          .productsGrid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .productsGrid {
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }
        }
      `}</style>
    </div>
  );
}