"use client";

import { motion } from "framer-motion";

/**
 * Wraps page content in a smooth fade + slide-up animation.
 * Placed inside app/template.tsx so it re-runs on every route change.
 */
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
