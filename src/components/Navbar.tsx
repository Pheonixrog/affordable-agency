"use client"

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu } from 'lucide-react'
import { Button } from './ui/button'
import { useEffect, useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4
sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-foreground">Affordable Agency</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="border-transparent text-foreground hover:border-border hover:text-foreground/80 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="/terms-and-conditions" className="border-transparent text-foreground hover:border-border hover:text-foreground/80 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="transition-transform hover:scale-110"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <div className="sm:hidden ml-3">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col space-y-4 mt-4">
                    <Link href="/" className="text-foreground hover:text-foreground/80 text-sm font-medium transition-colors">
                      Home
                    </Link>
                    <Link href="/terms-and-conditions" className="text-foreground hover:text-foreground/80 text-sm font-medium transition-colors">
                      Terms & Conditions
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

