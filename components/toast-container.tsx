"use client"

import { useToast } from "@/hooks/use-toast"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, AlertCircle, Info } from "lucide-react"

export function ToastContainer() {
  const { toasts } = useToast()

  const getIcon = (type?: string) => {
    switch (type) {
      case "error":
        return <AlertCircle size={20} className="text-error" />
      case "success":
        return <CheckCircle size={20} className="text-success" />
      default:
        return <Info size={20} className="text-accent" />
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-3 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, x: 100 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20, x: 100 }}
            transition={{ duration: 0.3 }}
            className={`card-base flex items-start gap-4 max-w-sm pointer-events-auto ${
              toast.type === "error"
                ? "border-error/50 bg-error/5"
                : toast.type === "success"
                  ? "border-success/50 bg-success/5"
                  : "border-accent/50 bg-accent/5"
            }`}
          >
            <div className="flex-shrink-0 mt-0.5">{getIcon(toast.type)}</div>
            <div className="flex-1">
              <p className="font-semibold">{toast.title}</p>
              {toast.description && <p className="text-sm text-foreground-secondary mt-1">{toast.description}</p>}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
