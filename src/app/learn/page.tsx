import TopBar from "@/components/layout/TopBar";

const modules = [
  {
    title: "Market Cap",
    icon: "monitoring",
    desc: "Discover how the total value of digital assets is measured and why it matters more than price.",
    completed: true,
    progress: 65,
  },
  {
    title: "Volatility",
    icon: "trending_up",
    desc: "Analyze price swings and learn strategies to navigate the high-energy crypto markets safely.",
    completed: false,
    progress: 0,
  },
  {
    title: "Risk Management",
    icon: "shield",
    desc: "The cornerstone of survival. Learn about stop-losses, position sizing, and capital preservation.",
    completed: false,
    progress: 0,
  },
  {
    title: "Diversification",
    icon: "pie_chart",
    desc: "Don't put all your sats in one basket. Master the art of the multi-asset portfolio.",
    completed: false,
    progress: 0,
  },
];

export default function LearnPage() {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto">
      <TopBar title="Learning Center" searchPlaceholder="Search modules..." />

      <div className="p-6 lg:p-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Module List */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-headline text-2xl font-bold text-on-surface">Curriculum</h2>
              <span className="text-xs font-label bg-surface-container-highest px-2 py-1 rounded text-primary-fixed border border-primary/20">
                4 MODULES
              </span>
            </div>

            {modules.map((mod, i) => (
              i === 0 ? (
                // Active/selected module
                <div key={mod.title} className="glass-card p-5 rounded-xl border-l-4 border-l-primary active-glow relative overflow-hidden group cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline text-lg font-bold text-on-surface">{mod.title}</h3>
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                  <p className="text-on-surface-variant text-sm line-clamp-2 mb-4 leading-relaxed">{mod.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="h-1.5 w-24 bg-surface-container-lowest rounded-full overflow-hidden">
                      <div className="h-full w-[65%] bg-primary shadow-[0_0_8px_rgba(163,166,255,0.6)]" />
                    </div>
                    <button className="text-xs font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                      RESUME MODULE <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              ) : (
                // Locked module
                <div key={mod.title} className="bg-surface-container p-5 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer group">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline text-lg font-bold text-on-surface">{mod.title}</h3>
                    <span className="material-symbols-outlined text-outline-variant">{mod.icon}</span>
                  </div>
                  <p className="text-on-surface-variant text-sm line-clamp-2 mb-4 leading-relaxed">{mod.desc}</p>
                  <button className="w-full py-2 bg-surface-container-highest text-on-surface-variant text-xs font-bold rounded-lg hover:bg-primary-dim hover:text-on-primary transition-colors">
                    START MODULE
                  </button>
                </div>
              )
            ))}
          </div>

          {/* Right: Content Panel */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
              <div className="relative z-10">
                <nav className="flex items-center gap-2 mb-4 text-xs font-label text-outline uppercase tracking-widest">
                  <span>Fundamental Analysis</span>
                  <span className="material-symbols-outlined text-[10px]">chevron_right</span>
                  <span className="text-primary-fixed">Market Cap</span>
                </nav>
                <h1 className="font-headline text-4xl font-black text-on-surface mb-6 leading-tight">
                  Understanding Market Cap
                </h1>
                <div className="space-y-4 text-on-surface-variant leading-relaxed text-lg">
                  <p>
                    Market capitalization is the total value of all the coins that have been mined. It&apos;s calculated by multiplying the current market price of a single coin by the total number of coins in circulation.
                  </p>
                  <p>
                    While beginners often look at the individual price of a coin, seasoned investors use market cap to understand the relative size of a cryptocurrency compared to others.
                  </p>
                </div>

                {/* Example Box */}
                <div className="mt-8 p-6 bg-surface-container-lowest rounded-xl border-l-2 border-secondary/40 relative group">
                  <div className="absolute top-4 right-4 text-secondary/20">
                    <span className="material-symbols-outlined text-4xl">calculate</span>
                  </div>
                  <h4 className="text-secondary font-bold text-sm uppercase tracking-tighter mb-2">Example Calculation</h4>
                  <p className="text-on-surface font-medium">
                    If Coin X has <span className="text-secondary-fixed">1 million coins</span> in circulation and is worth{" "}
                    <span className="text-secondary-fixed">$5 each</span>, its market cap is{" "}
                    <span className="text-secondary-fixed">$5 million</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Quiz Section */}
            <div className="bg-surface-container rounded-2xl p-8 border border-outline-variant/10 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined">quiz</span>
                </div>
                <div>
                  <h3 className="font-headline text-xl font-bold text-on-surface">Knowledge Check</h3>
                  <p className="text-xs text-on-surface-variant font-label uppercase tracking-widest">100 XP REWARD</p>
                </div>
              </div>

              <p className="text-on-surface text-lg font-medium mb-6">How is Market Cap calculated?</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {["Price x Circulation", "Price / Supply", "Volume x Price", "Total Nodes / Price"].map((option, i) => (
                  <button
                    key={i}
                    className="p-4 rounded-xl border border-outline-variant/20 hover:border-primary/60 hover:bg-primary/5 text-left text-sm font-medium transition-all flex items-center gap-3 group"
                  >
                    <div className="w-6 h-6 rounded-full border border-outline-variant group-hover:border-primary flex items-center justify-center text-[10px] text-outline group-hover:text-primary">
                      {String.fromCharCode(65 + i)}
                    </div>
                    {option}
                  </button>
                ))}
              </div>

              <button className="w-full py-4 bg-gradient-to-br from-primary-dim to-primary text-on-primary font-bold rounded-xl shadow-[0_8px_20px_rgba(99,102,241,0.25)] hover:shadow-[0_12px_25px_rgba(99,102,241,0.35)] transition-all active:scale-[0.98]">
                Check Answer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}