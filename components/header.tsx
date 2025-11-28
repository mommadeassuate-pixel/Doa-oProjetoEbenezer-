"use client"

import { Menu, Search, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/images/image.png" alt="Vakinha" width={32} height={32} className="h-8 w-auto" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-1 cursor-pointer hover:text-green-500 transition">
            <span className="text-sm">Como ajudar</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-green-500 transition">
            <span className="text-sm">Descubra</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-green-500 transition">
            <span className="text-sm">Como funciona</span>
          </div>
        </nav>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-6">
          <Search className="w-5 h-5 cursor-pointer text-gray-600 hover:text-green-500 transition" />
          <button className="text-sm text-gray-700 hover:text-green-500 transition">Minha conta</button>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition">
            Criar vaquinha
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden">
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-gray-50 p-4">
          <div className="space-y-3">
            <button className="block w-full text-left py-2 text-sm hover:text-green-500">Como ajudar</button>
            <button className="block w-full text-left py-2 text-sm hover:text-green-500">Descubra</button>
            <button className="block w-full text-left py-2 text-sm hover:text-green-500">Como funciona</button>
            <button className="w-full bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold mt-4">
              Criar vaquinha
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
