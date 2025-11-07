"use client"

import { useEffect, useRef, useState } from "react"

export default function Preloader() {
  const [visible, setVisible] = useState(true)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const overlayRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const seen = sessionStorage.getItem("mdk_preloader_seen_v3")
      if (seen) {
        setVisible(false)
        return
      } else {
        sessionStorage.setItem("mdk_preloader_seen_v3", "1")
      }
    }
  }, [])

  useEffect(() => {
    if (!visible) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)
    const fontSize = 14
    const cols = Math.floor(w / fontSize) + 1
    const ypos = new Array(cols).fill(0)

    const chars =
      "01<>[]{}()\\/|@#$%^&*-+=;:.,:;abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    const randChar = () => chars[Math.floor(Math.random() * chars.length)]

    ctx.textBaseline = "top"
    let raf = 0

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.15)" // slower trail
      ctx.fillRect(0, 0, w, h)
      ctx.fillStyle = "#4ee1a1"
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < ypos.length; i++) {
        const text = randChar()
        const x = i * fontSize
        ctx.fillText(text, x, ypos[i] * fontSize)
        if (ypos[i] * fontSize > h && Math.random() > 0.975) ypos[i] = 0
        ypos[i] += 0.6 // slower drop speed
      }
      raf = requestAnimationFrame(draw)
    }

    draw()

    const revealTimeout = setTimeout(() => {
      cancelAnimationFrame(raf)
      ctx.clearRect(0, 0, w, h)

      if (overlayRef.current) overlayRef.current.classList.add("preloader--reveal")

      setTimeout(() => {
        if (overlayRef.current) overlayRef.current.classList.add("preloader--hide")
        setTimeout(() => setVisible(false), 600)
      }, 1200)
    }, 3000) // << 3 detik total animasi sebelum reveal

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(revealTimeout)
    }
  }, [visible])

  if (!visible) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black preloader-container"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-20 flex flex-col items-center gap-4 px-6">
        <div
          className="rounded-full overflow-hidden flex items-center justify-center bg-black"
          style={{ width: 110, height: 110 }}
        >
          <img
            src="/logo-mdk.png"
            alt="MDK logo"
            width={110}
            height={110}
            className="rounded-full preloader-logo"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="mt-2 text-center">
          <div className="preloader-text monospace text-2xl font-extrabold text-white">
            <span className="preloader-type">MDK HARDWARE</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .preloader-container {
          transition: opacity 450ms ease;
        }
        .preloader-logo {
          opacity: 0;
          transform: scale(0.86);
          transition: all 700ms;
        }
        .preloader-text {
          opacity: 0;
          transform: translateY(8px);
          transition: all 700ms;
        }
        .preloader--reveal .preloader-logo {
          opacity: 1;
          transform: scale(1);
        }
        .preloader--reveal .preloader-text {
          opacity: 1;
          transform: translateY(0);
        }
        .preloader--hide {
          opacity: 0;
          pointer-events: none;
        }
        .preloader-type {
          display: inline-block;
          color: white;
        }
      `}</style>
    </div>
  )
}
