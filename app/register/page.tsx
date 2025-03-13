"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GeometricBackgroundRegister } from "../../components/geometric-background-register";
import { ModeToggle } from "@/components/mode-toggle";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left side - Login Form */}
      <div className="flex w-full flex-col justify-center px-4 py-12 md:w-1/2 md:px-8 lg:px-12 xl:px-20">
        <div className="absolute top-4 left-4">
          <ModeToggle />
        </div>
        <div className="mx-auto w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight">Arc</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Digite seu email e senha para criar sua conta
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Nome</Label>
              <div className="relative">
                <Input id="name" type="text" placeholder="Nome" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Senha</Label>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <Eye className="h-5 w-5 text-muted-foreground" />
                  )}
                  <span className="sr-only">
                    {showPassword ? "Hide password" : "Show password"}
                  </span>
                </Button>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Criar conta
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <div className="relative flex items-center">
              <div className="flex-grow border-t border-muted"></div>
              <span className="mx-4 flex-shrink text-xs text-muted-foreground">
                Ou
              </span>
              <div className="flex-grow border-t border-muted"></div>
            </div>

            <Button variant="outline" className="w-full">
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
              Criar com o Google
            </Button>

            <div className="text-center text-sm">
              Já possui conta?{" "}
              <Link href="/login" className="text-primary underline">
                Entrar
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden w-1/2 bg-primary md:block">
        <GeometricBackgroundRegister />
      </div>

      <div className="mt-8 block h-48 md:hidden">
        <GeometricBackgroundRegister isMobile={true} />
      </div>
    </div>
  );
}
