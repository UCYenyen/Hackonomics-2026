"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Dashboard", icon: "dashboard" },
  { href: "/learn", label: "Learn", icon: "school" },
  { href: "/portfolio", label: "Portfolio", icon: "account_balance_wallet" },
  { href: "/leaderboard", label: "Leaderboard", icon: "leaderboard" },
  { href: "/ai", label: "AI Assistant", icon: "smart_toy" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col h-screen w-64 border-r border-outline-variant/15 bg-surface-container-low shadow-[20px_0_40px_rgba(99,102,241,0.08)] sticky top-0 p-4 space-y-2 font-headline antialiased tracking-tight z-50">
      {/* Logo */}
      <div className="flex items-center gap-3 px-2 mb-8 mt-2">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-dim to-primary flex items-center justify-center shadow-lg shadow-primary/20">
          <span
            className="material-symbols-outlined text-on-primary-fixed"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            bolt
          </span>
        </div>
        <div>
          <h1 className="text-xl font-bold bg-gradient-to-br from-primary-dim to-primary bg-clip-text text-transparent">
            CoinEdu
          </h1>
          <p className="text-[10px] text-on-surface-variant tracking-[0.2em] uppercase">
            Learn it. Trade it.
          </p>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                isActive
                  ? "flex items-center gap-3 px-4 py-3 text-on-surface bg-surface-variant/60 backdrop-blur-xl rounded-lg border-t border-primary/30 shadow-inner"
                  : "flex items-center gap-3 px-4 py-3 text-on-surface/60 hover:text-on-surface hover:bg-surface-container transition-all hover:scale-[1.02] duration-200 rounded-lg"
              }
            >
              <span
                className={`material-symbols-outlined ${isActive ? "text-primary" : ""}`}
                style={
                  isActive
                    ? { fontVariationSettings: "'FILL' 1" }
                    : undefined
                }
              >
                {item.icon}
              </span>
              <span className={isActive ? "font-semibold" : ""}>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom links */}
      <div className="pt-4 border-t border-outline-variant/15 space-y-1">
        <Link
          href="/profile"
          className="flex items-center gap-3 px-4 py-3 text-on-surface/60 hover:text-on-surface transition-all rounded-lg"
        >
          <span className="material-symbols-outlined">account_circle</span>
          <span>Profile</span>
        </Link>
        <Link
          href="/settings"
          className="flex items-center gap-3 px-4 py-3 text-on-surface/60 hover:text-on-surface transition-all rounded-lg"
        >
          <span className="material-symbols-outlined">settings</span>
          <span>Settings</span>
        </Link>
      </div>

      <button className="w-full py-3 px-4 rounded-lg bg-gradient-to-br from-primary-dim to-primary text-on-primary-fixed font-bold text-sm shadow-lg hover:shadow-[0_0_15px_rgba(163,166,255,0.4)] active:scale-95 transition-all">
        Start Quest
      </button>
    </aside>
  );
}