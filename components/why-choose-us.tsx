"use client"
import { motion } from "framer-motion"
import { MonitorSmartphone, Cpu, Wifi } from "lucide-react"

const items = [
  {
    title: "PC Ready",
    description: "Siap Pakai & Performa Optimal",
    icon: MonitorSmartphone,
    rotate: -5,
  },
  {
    title: "Hardware PC",
    description: "Komponen Resmi & Bergaransi",
    icon: Cpu,
    rotate: 3,
  },
  {
    title: "Hardware Jaringan",
    description: "Jaringan Stabil & Aman",
    icon: Wifi,
    rotate: -3,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Temukan solusi lengkap untuk kebutuhan komputasi dan jaringan Anda.
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-12 mt-14">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="
                rounded-3xl p-10 w-60 h-60
                flex flex-col items-center justify-center gap-4
                transform transition-all duration-500 shadow-xl

                /* LIGHT MODE */
                bg-white text-black
                shadow-[0_20px_40px_rgba(0,0,0,0.12)]

                /* DARK MODE */
                dark:bg-[#000000] dark:text-white
                dark:shadow-[0_25px_50px_rgba(0,0,0,0.4)]
              "
              style={{ rotate: item.rotate }}
            >
              <item.icon size={46} className="opacity-85" />
              <h3 className="text-2xl font-bold leading-tight">{item.title}</h3>
              <p className="text-sm opacity-75 leading-snug">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
