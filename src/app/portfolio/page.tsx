import TopBar from "@/components/layout/TopBar";

const holdings = [
  { name: "Bitcoin", symbol: "BTC", amount: "0.15 BTC", value: "$9,500.00", pl: "+$240.00", plPct: "+2.5%", up: true },
  { name: "Ethereum", symbol: "ETH", amount: "0.82 ETH", value: "$1,920.00", pl: "+$124.50", plPct: "+6.1%", up: true },
  { name: "Solana", symbol: "SOL", amount: "12.5 SOL", value: "$1,030.00", pl: "-$14.30", plPct: "-1.2%", up: false },
];

export default function PortfolioPage() {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto">
      <TopBar title="Portfolio Simulation" />

      <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto w-full">

        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 relative overflow-hidden glass-panel rounded-2xl p-8 glow-primary">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div>
                <label className="font-label text-xs font-bold tracking-[0.15em] text-on-surface-variant uppercase mb-2 block">Total Portfolio Value</label>
                <div className="flex items-baseline gap-4 flex-wrap">
                  <h2 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-on-surface">$12,450.00</h2>
                  <div className="flex items-center gap-1 text-secondary font-bold text-lg mb-1">
                    <span className="material-symbols-outlined text-sm">trending_up</span>
                    <span>+$450.20 (3.75%)</span>
                  </div>
                </div>
                <div className="mt-8 flex gap-8">
                  <div>
                    <label className="font-label text-[10px] font-bold tracking-widest text-on-surface-variant uppercase block mb-1">Available Cash</label>
                    <p className="font-headline text-2xl font-semibold text-on-surface">$2,550.00</p>
                  </div>
                  <div>
                    <label className="font-label text-[10px] font-bold tracking-widest text-on-surface-variant uppercase block mb-1">Active Quests</label>
                    <p className="font-headline text-2xl font-semibold text-on-surface">3</p>
                  </div>
                </div>
              </div>
              <button className="bg-gradient-to-br from-primary-dim to-primary text-on-primary-fixed px-8 py-4 rounded-xl font-bold font-headline tracking-tight hover:shadow-[0_0_20px_rgba(163,166,255,0.4)] transition-all active:scale-95 group whitespace-nowrap">
                <span className="flex items-center gap-2">
                  Trade Now
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </span>
              </button>
            </div>
          </div>

          {/* Market Pulse */}
          <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-headline font-bold text-on-surface">Market Pulse</h3>
                <span className="text-[10px] bg-secondary-container/30 text-secondary-fixed px-2 py-0.5 rounded uppercase font-bold tracking-widest">Bullish</span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-on-surface-variant">BTC Dominance</span>
                  <span className="font-bold text-on-surface">52.4%</span>
                </div>
                <div className="w-full bg-surface-container-lowest h-1.5 rounded-full">
                  <div className="bg-primary h-full rounded-full" style={{ width: "52.4%" }} />
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-on-surface-variant">Fear &amp; Greed</span>
                  <span className="font-bold text-tertiary">74 (Greed)</span>
                </div>
                <div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-error via-tertiary to-secondary h-full" style={{ width: "74%" }} />
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-outline-variant/10 text-center">
              <p className="text-xs text-on-surface-variant">Next rebalance in <span className="text-on-surface font-mono">14h 22m</span></p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

          {/* Holdings */}
          <section className="xl:col-span-2 space-y-4">
            <div className="flex items-center justify-between px-2">
              <h3 className="font-headline text-xl font-bold text-on-surface">Holdings</h3>
              <button className="text-sm font-label text-primary hover:underline transition-colors">View All Assets</button>
            </div>
            <div className="bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/5">
              <table className="w-full text-left border-collapse">
                <thead className="bg-surface-container-highest/50">
                  <tr>
                    {["Coin", "Amount", "Value", "P/L (24h)", ""].map((h, i) => (
                      <th key={i} className="px-6 py-4 font-label text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  {holdings.map((h) => (
                    <tr key={h.symbol} className="hover:bg-surface-container/50 transition-colors group">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant/20">
                            <span className="font-headline font-black text-sm text-primary">{h.symbol[0]}</span>
                          </div>
                          <div>
                            <div className="font-bold text-on-surface">{h.name}</div>
                            <div className="text-[10px] text-on-surface-variant">{h.symbol}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 font-mono text-sm">{h.amount}</td>
                      <td className="px-6 py-5 font-bold">{h.value}</td>
                      <td className="px-6 py-5">
                        <div className={`text-sm font-bold ${h.up ? "text-secondary" : "text-error-dim"}`}>{h.pl}</div>
                        <div className={`text-[10px] ${h.up ? "text-secondary/70" : "text-error-dim/70"}`}>{h.plPct}</div>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button className="opacity-0 group-hover:opacity-100 material-symbols-outlined text-on-surface-variant hover:text-on-surface transition-all">more_vert</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Quick Trade */}
          <aside className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <h3 className="font-headline text-xl font-bold text-on-surface">Quick Trade</h3>
            </div>
            <div className="bg-surface-container-high rounded-2xl p-6 border-t border-primary/20 shadow-xl relative overflow-hidden">
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-[40px]" />

              <div className="flex p-1 bg-surface-container-lowest rounded-lg mb-6 relative z-10">
                <button className="flex-1 py-2 text-sm font-bold bg-surface-variant text-on-surface rounded-md shadow-sm">Buy</button>
                <button className="flex-1 py-2 text-sm font-bold text-on-surface-variant hover:text-on-surface transition-all">Sell</button>
              </div>

              <div className="space-y-4 relative z-10">
                <div>
                  <label className="font-label text-[10px] font-bold text-on-surface-variant uppercase tracking-widest block mb-2">Select Asset</label>
                  <div className="relative">
                    <select className="w-full bg-surface-container-lowest border-none rounded-xl py-3 px-4 text-on-surface appearance-none focus:ring-2 focus:ring-primary/40 outline-none">
                      <option>Bitcoin (BTC)</option>
                      <option>Ethereum (ETH)</option>
                      <option>Solana (SOL)</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="font-label text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Amount</label>
                    <span className="text-[10px] text-primary cursor-pointer hover:underline">Max: 0.045 BTC</span>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="0.00"
                      className="w-full bg-surface-container-lowest border-none rounded-xl py-4 px-4 text-xl font-headline font-bold text-on-surface focus:ring-2 focus:ring-primary/40 placeholder:text-outline-variant outline-none"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-on-surface-variant">BTC</span>
                  </div>
                </div>

                <div className="bg-surface-container-lowest/50 rounded-xl p-4 space-y-2 border border-outline-variant/10">
                  <div className="flex justify-between text-xs">
                    <span className="text-on-surface-variant">Current Price</span>
                    <span className="text-on-surface font-mono">$64,320.15</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-on-surface-variant">Transaction Fee</span>
                    <span className="text-on-surface font-mono">$2.40</span>
                  </div>
                  <div className="pt-2 border-t border-outline-variant/10 flex justify-between items-end">
                    <span className="text-xs font-bold text-on-surface">Total Cost</span>
                    <span className="text-xl font-headline font-bold text-secondary">$0.00</span>
                  </div>
                </div>

                <button className="w-full py-4 rounded-xl bg-primary text-on-primary-fixed font-bold font-headline tracking-tight shadow-lg shadow-primary/10 hover:brightness-110 active:scale-95 transition-all mt-4">
                  Confirm Transaction
                </button>
                <p className="text-[10px] text-center text-on-surface-variant/60 italic">Quotes are updated every 5 seconds</p>
              </div>
            </div>

            {/* Tip */}
            <div className="bg-surface-container rounded-xl p-4 flex gap-3 items-start border border-outline-variant/10">
              <span className="material-symbols-outlined text-tertiary">lightbulb</span>
              <div>
                <p className="text-xs font-bold text-on-surface mb-1">Quest Tip: Dollar Cost Averaging</p>
                <p className="text-[10px] text-on-surface-variant leading-relaxed">Consider buying in small amounts daily to reduce the impact of volatility. +10 XP for setting up recurring trade.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}