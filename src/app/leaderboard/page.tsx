import TopBar from "@/components/layout/TopBar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const topThree = [
  { rank: 2, name: "EtherWiz", xp: "14,800 XP", ret: "+18.4%", medal: "metal-silver", icon: "military_tech", order: "order-2 md:order-1" },
  { rank: 1, name: "BlockMaster", xp: "19,420 XP", ret: "+24.2%", medal: "metal-gold", icon: "workspace_premium", order: "order-1 md:order-2" },
  { rank: 3, name: "SatoshiNaka", xp: "12,100 XP", ret: "+15.9%", medal: "metal-bronze", icon: "stars", order: "order-3 md:order-3" },
];

const others = [
  { rank: 4, name: "NodesRunner", xp: "9,850 XP", ret: "+11.4%", up: true, isMe: false },
  { rank: 5, name: "CryptoExplorer (You)", xp: "8,420 XP", ret: "+8.7%", up: true, isMe: true },
  { rank: 6, name: "LunaTick", xp: "7,200 XP", ret: "+6.2%", up: true, isMe: false },
  { rank: 7, name: "HodlHustle", xp: "6,950 XP", ret: "-2.1%", up: false, isMe: false },
  { rank: 8, name: "DefiDreamer", xp: "5,800 XP", ret: "+4.8%", up: true, isMe: false },
];

export default function LeaderboardPage() {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto">
      <TopBar title="Leaderboard" showSearch={false} />

      <div className="flex-1 p-6 md:p-12 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter text-on-surface mb-2">
              Global Rankings
            </h2>
            <p className="text-on-surface-variant text-lg max-w-md">
              Compete with the world&apos;s most luminous traders and earn your place on the ledger.
            </p>
          </div>
          <div className="flex p-1 bg-surface-container rounded-xl border border-outline-variant/15">
            <Button variant="secondary" className="px-6 py-2 rounded-lg bg-surface-variant text-primary font-semibold shadow-inner transition-all hover:bg-surface-variant h-auto">Weekly</Button>
            <Button variant="ghost" className="px-6 py-2 rounded-lg text-on-surface/60 hover:text-on-surface transition-all h-auto">All-Time</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-end">
          {topThree.map((p) => (
            <Card
              key={p.rank}
              className={`${p.order} glass-card rounded-${p.rank === 1 ? "3xl" : "2xl"} physics-transition hover:translate-y-[-4px] ${p.rank === 1 ? "border-primary/30 ring-4 ring-primary/5 relative luminous-glow" : "group border-none"}`}
            >
              <CardContent className={`p-${p.rank === 1 ? "8" : "6"}`}>
                {p.rank === 1 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-on-primary text-xs font-black uppercase tracking-widest rounded-full shadow-lg shadow-primary/40">
                    Current Leader
                  </div>
                )}
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-${p.rank === 1 ? "16 h-16" : "12 h-12"} rounded-full ${p.medal} flex items-center justify-center shadow-xl`}>
                    <span
                      className="material-symbols-outlined text-surface font-bold"
                      style={p.rank === 1 ? { fontVariationSettings: "'FILL' 1" } : undefined}
                    >
                      {p.icon}
                    </span>
                  </div>
                  <span className={`font-headline font-black text-on-surface/10 ${p.rank === 1 ? "text-5xl" : "text-3xl"}`}>
                    #{String(p.rank).padStart(2, "0")}
                  </span>
                </div>
                <div className={`w-${p.rank === 1 ? "20 h-20" : "16 h-16"} rounded-2xl mb-4 bg-surface-container-high flex items-center justify-center ${p.rank === 1 ? "border-2 border-tertiary/40" : ""}`}>
                  <span className="material-symbols-outlined text-primary text-3xl">person</span>
                </div>
                <h3 className={`font-headline font-bold mb-1 ${p.rank === 1 ? "text-2xl" : "text-xl"}`}>{p.name}</h3>
                <p className="text-secondary-fixed font-bold text-sm mb-4">{p.ret} Return</p>
                <div className="flex items-center justify-between text-on-surface-variant border-t border-outline-variant/10 pt-4">
                  <span className="text-xs font-label tracking-widest uppercase">Experience</span>
                  <span className={`font-mono ${p.rank === 1 ? "text-tertiary text-xl" : "text-on-surface"}`}>{p.xp}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-12 px-8 py-4 text-on-surface-variant text-xs font-label tracking-widest uppercase">
            <div className="col-span-1">Rank</div>
            <div className="col-span-5">Navigator</div>
            <div className="col-span-3 text-right">Experience</div>
            <div className="col-span-3 text-right">Return</div>
          </div>

          {others.map((user) => (
            user.isMe ? (
              <Card key={user.rank} className="border-none shadow-xl shadow-primary/5 relative overflow-hidden bg-surface-variant/60 rounded-2xl border-l-4 border-l-primary rounded-l-none">
                <CardContent className="grid grid-cols-12 items-center px-8 py-6 p-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
                  <div className="col-span-1 font-headline font-bold text-primary">{String(user.rank).padStart(2, "0")}</div>
                  <div className="col-span-5 flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">person</span>
                    </div>
                    <div>
                      <span className="font-bold text-on-surface flex items-center gap-2">
                        {user.name}
                        <span className="bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded-full uppercase tracking-tighter">You</span>
                      </span>
                      <span className="text-xs text-on-surface-variant">Level 14 Adept</span>
                    </div>
                  </div>
                  <div className="col-span-3 text-right font-mono text-primary font-bold relative z-10">{user.xp}</div>
                  <div className="col-span-3 text-right font-bold text-secondary-fixed relative z-10">{user.ret}</div>
                </CardContent>
              </Card>
            ) : (
              <Card key={user.rank} className="bg-surface-container rounded-2xl hover:bg-surface-variant/40 transition-colors physics-transition group border-none">
                <CardContent className="grid grid-cols-12 items-center px-8 py-5 p-0">
                  <div className="col-span-1 font-headline font-bold text-on-surface/40 group-hover:text-on-surface">{String(user.rank).padStart(2, "0")}</div>
                  <div className="col-span-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-surface-variant text-sm">person</span>
                    </div>
                    <span className="font-medium text-on-surface">{user.name}</span>
                  </div>
                  <div className="col-span-3 text-right font-mono text-on-surface-variant">{user.xp}</div>
                  <div className={`col-span-3 text-right font-bold ${user.up ? "text-secondary-fixed" : "text-error-dim"}`}>{user.ret}</div>
                </CardContent>
              </Card>
            )
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-surface-container-highest px-8 py-6 h-auto rounded-full text-primary font-bold border border-primary/20 hover:bg-primary hover:text-on-primary transition-all physics-transition">
            View Full Rankings
          </Button>
        </div>
      </div>
    </div>
  );
}