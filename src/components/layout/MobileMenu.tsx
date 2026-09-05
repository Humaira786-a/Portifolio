"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { navigation } from "@/data/navigation";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed left-0 top-0 z-[9999] flex h-16 w-full items-center justify-between border-b border-white/10 bg-[#0b0c0f]/95 px-5 backdrop-blur-xl md:hidden">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="font-display text-4xl font-bold text-white"
        >
          H<span className="text-[var(--primary)]">A</span>
        </Link>

        <button
  type="button"
  aria-label={isOpen ? "Close navigation" : "Open navigation"}
  aria-expanded={isOpen}
  onClick={() => setIsOpen((prev) => !prev)}
  className="relative z-[10000] flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/10 text-white"
>
  {isOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
</button>
      </header>

      {/* Mobile Navigation */}
      <div
  className={`fixed inset-0 z-[9990] bg-[#08090b] transition-all duration-300 md:hidden ${
    isOpen
      ? "visible opacity-100"
      : "invisible pointer-events-none opacity-0"
  }`}
>
        <nav className="flex h-full flex-col items-center justify-center gap-4">
          {navigation.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex w-52 items-center gap-4 rounded-xl px-6 py-4 text-sm ${
                  isActive
                    ? "bg-[var(--primary)]/15 text-[var(--primary)]"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}