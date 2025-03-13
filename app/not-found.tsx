"use client"

import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>

      <div className="container flex flex-col items-center justify-center px-5 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-zinc-900 dark:text-white sm:text-2xl">Página não encontrada</h2>
        <p className="mt-4 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
          Não foi possível encontrar o recurso solicitado
        </p>
        <Link
          href="/"
          className="mt-8 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  )
}