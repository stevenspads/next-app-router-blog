"use client"

import { useState } from "react"
import Link from "next/link"
import { MenuIcon } from "lucide-react"

import { ThemeSwitcher } from "./theme-switcher"

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen)

  return (
    <nav className="mb-12">
      <div className="container mx-auto">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-3xl font-black">
                {process.env.NEXT_PUBLIC_SITENAME}
              </Link>
            </div>
            <div className="hidden sm:ml-12 sm:flex sm:items-center">
              <div className="space-x-6 text-sm font-medium">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
              </div>
            </div>
          </div>
          <ThemeSwitcher />
        </div>
      </div>

      <div
        className={`sm:hidden ${isMobileOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="flex flex-col pt-2 pb-6 space-y-4 border-b border-gray-200 px-2">
          <Link href="/jobs">Jobs</Link>
        </div>
      </div>
    </nav>
  )
}
