import TopBar from "@/components/layout/TopBar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-headline text-2xl font-bold text-on-surface">Curriculum</h2>
              <Badge variant="outline" className="text-xs font-label bg-surface-container-highest px-2 py-1 rounded text-primary-fixed border-primary/20">
                4 MODULES
              </Badge>
            </div>

            {modules.map((mod, i) => (
              i === 0 ? (
                <Card key={mod.title} className="glass-card rounded-xl border-l-4 border-l-primary active-glow relative overflow-hidden group cursor-pointer border-t-0 border-r-0 border-b-0">
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-headline text-lg font-bold text-on-surface">{mod.title}</h3>
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </div>
                    <p className="text-on-surface-variant text-sm line-clamp-2 mb-4 leading-relaxed">{mod.desc}</p>
                    <div className="flex items-center justify-between">
                      <div className="h-1.5 w-24 bg-surface-container-lowest rounded-full overflow-hidden">
                        <div className="h-full w-[65%] bg-primary shadow-[0_0_8px_rgba(163,166,255,0.6)]" />
                      </div>
                      <Button variant="link" className="px-0 text-xs font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all h-auto">
                        RESUME MODULE <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card key={mod.title} className="bg-surface-container rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer group">
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-headline text-lg font-bold text-on-surface">{mod.title}</h3>
                      <span className="material-symbols-outlined text-outline-variant">{mod.icon}</span>
                    </div>
                    <p className="text-on-surface-variant text-sm line-clamp-2 mb-4 leading-relaxed">{mod.desc}</p>
                    <Button variant="secondary" className="w-full py-4 bg-surface-container-highest text-on-surface-variant text-xs font-bold rounded-lg hover:bg-primary-dim hover:text-on-primary transition-colors">
                      START MODULE
                    </Button>
                  </CardContent>
                </Card>
              )
            ))}
          </div>

          <div className="lg:col-span-7 space-y-6">
            <Card className="glass-card rounded-2xl relative overflow-hidden border-none">
              <CardContent className="p-8">
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

                  <div className="mt-8 p-6 bg-surface-container-lowest rounded-xl border-l-2 border-l-secondary/40 relative group">
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
              </CardContent>
            </Card>

            <Card className="bg-surface-container rounded-2xl border border-outline-variant/10 shadow-xl">
              <CardContent className="p-8">
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
                    <Button
                      key={i}
                      variant="outline"
                      className="h-auto p-4 rounded-xl border border-outline-variant/20 hover:border-primary/60 hover:bg-primary/5 text-left text-sm font-medium transition-all flex items-center justify-start gap-3 group bg-transparent text-on-surface"
                    >
                      <div className="w-6 h-6 rounded-full border border-outline-variant group-hover:border-primary flex items-center justify-center text-[10px] text-outline group-hover:text-primary">
                        {String.fromCharCode(65 + i)}
                      </div>
                      {option}
                    </Button>
                  ))}
                </div>

                <Button className="w-full py-6 bg-gradient-to-br from-primary-dim to-primary text-on-primary font-bold rounded-xl shadow-[0_8px_20px_rgba(99,102,241,0.25)] hover:shadow-[0_12px_25px_rgba(99,102,241,0.35)] transition-all active:scale-[0.98]">
                  Check Answer
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}