"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const mobileNavItems = [
  { href: "/", label: "Dash", icon: "dashboard" },
  { href: "/learn", label: "Learn", icon: "school" },
  { href: "/portfolio", label: "Wallet", icon: "account_balance_wallet" },
  { href: "/leaderboard", label: "Ranks", icon: "leaderboard" },
  { href: "/ai", label: "AI", icon: "smart_toy" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 glass-card border-t border-outline-variant/20 flex justify-around items-center h-16 px-4 z-50">
      {mobileNavItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center gap-0.5 ${
              isActive ? "text-primary" : "text-on-surface-variant"
            }`}
          >
            <span
              className="material-symbols-outlined"
              style={
                isActive
                  ? { fontVariationSettings: "'FILL' 1" }
                  : undefined
              }
            >
              {item.icon}
            </span>
            <span className={`text-[10px] ${isActive ? "font-bold" : ""}`}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}