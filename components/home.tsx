"use client"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LogIn, UserPlus } from "lucide-react"
import { useEffect, useState } from "react"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
  darkGradient = "from-white/[0.08]",
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
  darkGradient?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            "backdrop-blur-[2px] border-2",
            "border-black/[0.15] dark:border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_70%)] dark:after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
            gradient,
            `dark:${darkGradient}`,
          )}
        />
      </motion.div>
    </motion.div>
  )
}

export default function HeroGeometric({
  title1 = "Ark",
  title2 = "Controle Financeiro",
}: {
  title1?: string
  title2?: string
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-[#030303]">
      {/* Header controls */}
      <div className="absolute top-4 left-4 right-4 z-20 flex justify-between">
        <div className="flex gap-2">
          <Button size="sm" className="gap-1">
            <LogIn className="h-4 w-4" />
            <Link href={"/login"}>Entrar</Link>
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <UserPlus className="h-4 w-4" />
            <Link href={"/register"}>Criar conta</Link>
          </Button>
        </div>
        <ModeToggle />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.08] via-transparent to-rose-500/[0.08] blur-3xl dark:from-indigo-500/[0.05] dark:to-rose-500/[0.05]" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.2]"
          darkGradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.2]"
          darkGradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.2]"
          darkGradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.2]"
          darkGradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.2]"
          darkGradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {mounted && (
            <>
              <motion.div
                custom={0}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-8 md:mb-12 bg-black/[0.03] border-black/[0.1] dark:bg-white/[0.03] dark:border-white/[0.08]"
              >
                {/* Logo */}
                <span className="text-sm tracking-wide text-black/70 dark:text-white/60">Logo aqui</span>
              </motion.div>

              <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-black to-black/80 dark:from-white dark:to-white/80">
                    {title1}
                  </span>
                  <br />
                  <span
                    className={cn(
                      "bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-black/90 to-rose-500 dark:from-indigo-300 dark:via-white/90 dark:to-rose-300",
                      pacifico.className,
                    )}
                  >
                    {title2}
                  </span>
                </h1>
              </motion.div>

              <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
                <p className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4 text-black/70 dark:text-white/40">
                  Faça a gestão dos seus gastos de uma forma nunca vista antes.
                </p>
              </motion.div>
            </>
          )}
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-50 via-transparent to-gray-50/80 dark:from-[#030303] dark:to-[#030303]/80" />
    </div>
  )
}

