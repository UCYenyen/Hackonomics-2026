import TopBar from "@/components/layout/TopBar";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const coins = [
  { name: "Bitcoin", symbol: "BTC", icon: "currency_bitcoin", iconColor: "text-orange-400", price: "$64,321.45", change: "+2.45%", up: true, marketCap: "$1.26 Trillion" },
  { name: "Ethereum", symbol: "ETH", icon: "diamond", iconColor: "text-primary-dim", price: "$3,450.12", change: "+1.12%", up: true, marketCap: "$414.2 Billion" },
  { name: "Solana", symbol: "SOL", icon: "waves", iconColor: "text-cyan-400", price: "$145.89", change: "-0.84%", up: false, marketCap: "$64.8 Billion" },
  { name: "Cardano", symbol: "ADA", icon: "hub", iconColor: "text-blue-400", price: "$0.458", change: "+3.21%", up: true, marketCap: "$16.2 Billion" },
  { name: "Ripple", symbol: "XRP", icon: "token", iconColor: "text-slate-300", price: "$0.612", change: "-1.56%", up: false, marketCap: "$33.7 Billion" },
];

export default function DashboardPage() {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto">
      <TopBar title="Dashboard" />

      <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="glass-card relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 cursor-default border-none">
            <CardContent className="p-6">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl">military_tech</span>
              </div>
              <p className="text-xs font-bold tracking-widest text-on-surface-variant uppercase mb-2">Total Experience</p>
              <div className="flex items-end gap-2">
                <h3 className="text-4xl font-headline font-black text-on-surface">2,450</h3>
                <span className="text-primary font-bold mb-1">XP</span>
              </div>
              <Progress value={65} className="mt-4 h-1.5 w-full bg-surface-container-lowest [&>div]:bg-gradient-to-r [&>div]:from-primary-dim [&>div]:to-primary [&>div]:shadow-[0_0_8px_rgba(163,166,255,0.5)]" />
              <p className="text-[11px] text-on-surface-variant mt-2 italic">Level 14 · 550 XP to Next Level</p>
            </CardContent>
          </Card>

          <Card className="glass-card relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 cursor-default border-none">
            <CardContent className="p-6">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl">local_fire_department</span>
              </div>
              <p className="text-xs font-bold tracking-widest text-on-surface-variant uppercase mb-2">Learning Streak</p>
              <div className="flex items-end gap-2 text-secondary">
                <h3 className="text-4xl font-headline font-black">7</h3>
                <span className="font-bold mb-1">Days</span>
              </div>
              <div className="mt-4 flex gap-1.5">
                {["M","T","W","T","F","S"].map((d, i) => (
                  <div key={i} className="h-6 w-full bg-secondary/20 rounded border border-secondary/30 flex items-center justify-center text-[10px] text-secondary font-bold">{d}</div>
                ))}
                <div className="h-6 w-full bg-secondary rounded flex items-center justify-center text-[10px] text-on-secondary font-bold">S</div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card flex items-center justify-between hover:scale-[1.02] transition-transform duration-300 cursor-default border-none">
            <CardContent className="p-6 flex items-center justify-between w-full">
              <div>
                <p className="text-xs font-bold tracking-widest text-on-surface-variant uppercase mb-1">Daily Goal</p>
                <h3 className="text-2xl font-headline font-bold text-on-surface">3/5 Quests</h3>
                <p className="text-sm text-on-surface-variant mt-1">Keep it up, explorer!</p>
                <Button variant="link" className="px-0 mt-4 text-xs font-bold text-primary flex items-center gap-1 h-auto">
                  View Daily Quests
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Button>
              </div>
              <div className="relative w-20 h-20">
                <svg className="w-full h-full -rotate-90">
                  <circle className="text-surface-container-lowest" cx="40" cy="40" r="34" fill="transparent" stroke="currentColor" strokeWidth="6" />
                  <circle className="text-tertiary" cx="40" cy="40" r="34" fill="transparent" stroke="currentColor" strokeWidth="6" strokeDasharray="213.6" strokeDashoffset="85.4" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-black font-headline text-tertiary">60%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <section className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-xl font-headline font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">trending_up</span>
              Market Overview
            </h2>
            <a href="#" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
              Full Market <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>

          <Card className="glass-card overflow-hidden border-none rounded-2xl">
            <Table>
              <TableHeader className="bg-surface-container-highest/30">
                <TableRow className="border-none hover:bg-transparent">
                  <TableHead className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant">Name/Symbol</TableHead>
                  <TableHead className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant">Current Price</TableHead>
                  <TableHead className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant">24h Change</TableHead>
                  <TableHead className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant hidden lg:table-cell">Market Cap</TableHead>
                  <TableHead className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="divide-y divide-outline-variant/10">
                {coins.map((coin) => (
                  <TableRow key={coin.symbol} className="border-none hover:bg-primary/5 transition-colors cursor-pointer group">
                    <TableCell className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center border border-outline-variant/20 group-hover:border-primary/40 transition-colors">
                          <span className={`material-symbols-outlined ${coin.iconColor} text-lg`} style={{ fontVariationSettings: "'FILL' 1" }}>
                            {coin.icon}
                          </span>
                        </div>
                        <div>
                          <div className="font-bold text-on-surface">{coin.name}</div>
                          <div className="text-[10px] font-medium text-on-surface-variant tracking-widest uppercase">{coin.symbol}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-4 font-headline font-medium">{coin.price}</TableCell>
                    <TableCell className="px-6 py-4">
                      <div className={`flex items-center gap-1 font-bold text-sm ${coin.up ? "text-secondary" : "text-error-dim"}`}>
                        <span className="material-symbols-outlined text-sm">{coin.up ? "arrow_drop_up" : "arrow_drop_down"}</span>
                        {coin.change}
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-4 text-on-surface-variant text-sm font-medium hidden lg:table-cell">{coin.marketCap}</TableCell>
                    <TableCell className="px-6 py-4 text-right">
                      <Button variant="outline" size="sm" className="px-4 py-1.5 rounded-lg text-xs font-bold border-outline-variant/30 hover:border-primary hover:text-primary transition-all bg-transparent">
                        Trade
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="md:col-span-2 glass-card rounded-2xl border-l-4 border-l-primary border-t-0 border-r-0 border-b-0 bg-[rgba(25,37,64,0.6)]">
            <CardContent className="p-6 flex items-start justify-between h-full">
              <div>
                <h4 className="font-headline font-bold text-lg mb-2">Recommended Quest</h4>
                <p className="text-sm text-on-surface-variant">The Ethereum Merge: Understanding the shift from PoW to PoS and what it means for the ecosystem.</p>
                <div className="mt-4 flex items-center gap-3">
                  <Badge variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30 rounded text-[10px] font-bold px-2 py-0.5">INTERMEDIATE</Badge>
                  <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-tighter flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">timer</span> 15 MIN
                  </span>
                </div>
              </div>
              <Button size="icon" className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary-fixed hover:bg-primary hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">play_arrow</span>
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-card rounded-2xl flex flex-col justify-between group cursor-pointer overflow-hidden relative border-none">
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="material-symbols-outlined text-secondary text-3xl mb-4 relative z-10">military_tech</span>
              <div className="relative z-10">
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Global Rank</p>
                <h4 className="text-2xl font-headline font-black">#1,248</h4>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card rounded-2xl flex flex-col justify-between group cursor-pointer overflow-hidden relative border-none">
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="material-symbols-outlined text-tertiary text-3xl mb-4 relative z-10">wallet</span>
              <div className="relative z-10">
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Rewards Claimable</p>
                <h4 className="text-2xl font-headline font-black">12.5 MATIC</h4>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}