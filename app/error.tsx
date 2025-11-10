"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container-custom text-center"
      >
        <h1 className="text-5xl font-bold mb-6">Terjadi Kesalahan 😥</h1>

        <p className="text-lg text-foreground-secondary mb-10 max-w-lg mx-auto">
          Maaf, ada masalah saat memproses permintaan Anda. Silakan coba lagi.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Coba Lagi
          </button>

          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-gray-700 text-white hover:bg-gray-800 transition"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
