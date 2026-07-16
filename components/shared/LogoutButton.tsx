"use client";

import { motion } from "framer-motion";
import { LogOut } from "lucide-react";
import Link from "next/link";

export default function LogoutButton() {
  return (<Link href={`/login`}>
  
    <motion.button
      whileHover={{ scale: 1.04, x: 4 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2 }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent:"center",
        gap: "12px",
        padding: "12px 18px",
       
        borderRadius: "14px",
        background: "rgb(255,0,0,0.3)",
        color: "#fff",
        border:"1px red solid ",
        cursor: "pointer",
        fontSize: "15px",
        fontWeight: 600,
        transition: ".3s",
        width:"100%"

      }}
    >
      <motion.div
        whileHover={{ rotate: -15 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <LogOut size={20} />
      </motion.div>

      Logout
    </motion.button>
  </Link>
  );
}