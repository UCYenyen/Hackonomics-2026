"use client";

interface TopBarProps {
  title: string;
  showSearch?: boolean;
  searchPlaceholder?: string;
}

export default function TopBar({
  title,
  showSearch = true,
  searchPlaceholder = "Search markets...",
}: TopBarProps) {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between px-6 w-full h-16 border-b border-outline-variant/15 bg-surface/60 backdrop-blur-xl font-headline font-medium">
      {/* Left: Title */}
      <div className="flex items-center gap-4">
        <h2 className="hidden md:block text-lg font-black text-on-surface">
          {title}
        </h2>
        <div className="md:hidden w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-sm">
            bolt
          </span>
        </div>
      </div>

      {/* Right: Search + Actions */}
      <div className="flex items-center gap-4">
        {showSearch && (
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder={searchPlaceholder}
              className="w-64 bg-surface-container-lowest border-none rounded-full py-1.5 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary/40 placeholder:text-on-surface-variant/50 outline-none"
            />
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50 text-lg">
              search
            </span>
          </div>
        )}

        <div className="flex items-center gap-3 text-on-surface/70">
          <button className="hover:text-secondary transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="hover:text-secondary transition-colors flex items-center gap-1 bg-surface-container px-3 py-1 rounded-full text-xs font-bold">
            <span
              className="material-symbols-outlined text-sm text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              bolt
            </span>
            2,450 XP
          </button>
          <div className="w-8 h-8 rounded-full bg-surface-container-highest border border-primary/20 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-primary-dim to-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary-fixed text-sm">
                person
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}