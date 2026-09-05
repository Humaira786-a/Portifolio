"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-20 border-r border-white/10 bg-[#0b0c0f]/90 backdrop-blur-xl md:block">
      {/* Logo */}
      <div className="flex h-20 items-center justify-center border-b border-white/10">
        <Link
          href="/"
          className="font-display text-xl font-bold text-white"
        >
          H<span className="text-[var(--primary)]">A</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col items-center gap-3 py-8">
        {navigation.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));

          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              title={item.name}
              className={`group relative flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-[var(--primary)]/15 text-[var(--primary)]"
                  : "text-white/40 hover:bg-white/5 hover:text-white"
              }`}
            >
              {/* Active indicator */}
              {isActive && (
                <span className="absolute -left-4 h-7 w-0.5 rounded-full bg-[var(--primary)]" />
              )}

              <Icon
                size={18}
                strokeWidth={1.8}
              />

              {/* Tooltip */}
              <span className="pointer-events-none absolute left-16 hidden whitespace-nowrap rounded-md border border-white/10 bg-[#111318] px-3 py-1.5 text-xs text-white shadow-xl group-hover:block">
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}