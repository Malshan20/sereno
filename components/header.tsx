"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, MessageCircle, User, Settings, Users } from "lucide-react"

const menuItems = [
  { name: "Chat", href: "/", icon: MessageCircle },
  { name: "Profile", href: "/profile", icon: User },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Contacts", href: "/contacts", icon: Users },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          SERENO
        </Link>
        <nav className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-1 hover:text-gray-200 transition-colors ${
                pathname === item.href ? "border-b-2 border-white" : ""
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
        <button className="md:hidden text-white focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-2 px-4 rounded transition-colors ${
                  pathname === item.href
                    ? "bg-white bg-opacity-20 text-white"
                    : "text-gray-200 hover:bg-white hover:bg-opacity-10"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center space-x-2">
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

