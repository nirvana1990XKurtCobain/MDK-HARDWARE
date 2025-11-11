"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Tentang <span className="gradient-text">MDK HARDWARE</span>
          </h1>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            Kami adalah distributor terpercaya untuk solusi teknologi berkualitas tinggi di Indonesia
          </p>
        </motion.div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Kisah Kami</h2>
            <p className="text-lg text-foreground-secondary mb-4">
              MDK HARDWARE didirikan dengan visi untuk menyediakan produk teknologi berkualitas tinggi dengan harga yang
              kompetitif. Kami percaya bahwa setiap orang berhak mendapatkan akses ke teknologi terbaik.
            </p>
            <p className="text-lg text-foreground-secondary mb-4">
              Dengan pengalaman lebih dari 10 tahun di industri teknologi, kami telah melayani ribuan pelanggan yang
              puas di seluruh Indonesia.
            </p>
            <p className="text-lg text-foreground-secondary">
              Komitmen kami adalah memberikan layanan terbaik, produk original, dan dukungan teknis yang profesional.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-background-secondary rounded-xl p-8 border border-border"
          >
            <h3 className="text-2xl font-bold mb-6">Nilai-Nilai Kami</h3>
            <div className="space-y-4">
              {[
                "Kualitas produk terjamin",
                "Harga kompetitif dan transparan",
                "Layanan pelanggan 24/7",
                "Pengiriman cepat ke seluruh Indonesia",
                "Garansi resmi dari manufacturer",
                "Tim support yang profesional",
              ].map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-accent flex-shrink-0" size={24} />
                  <span className="text-lg">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-12">Tim Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Marchel Chris Tiofan", role: "Founder & CEO" },
              { name: "Satria Aulya Ramadhan", role: "Head of Operations" },
              { name: "Dani Cahyadi", role: "Marketing Specialist" },
              { name: "Radian Mandala Putra", role: "Technical Support" },
              { name: "Raffi Sukirman", role: "Network Engginer" },
              { name: "Yusuf Riyana", role: "Project Manager" },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-base text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-accent to-accent-hover rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-foreground-secondary">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
