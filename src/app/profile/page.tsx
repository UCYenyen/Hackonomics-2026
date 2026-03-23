import TopBar from "@/components/layout/TopBar";

const badges = [
  { icon: "military_tech", label: "First Trade", color: "text-tertiary" },
  { icon: "local_fire_department", label: "7-Day Streak", color: "text-orange-400" },
  { icon: "school", label: "Module 1 Done", color: "text-secondary" },
  { icon: "leaderboard", label: "Top 1000", color: "text-primary" },
];

export default function ProfilePage() {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto">
      <TopBar title="Profile" showSearch={false} />

      <div className="p-6 md:p-10 max-w-4xl mx-auto w-full space-y-8">

        {/* Hero Card */}
        <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">

            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-dim to-primary flex items-center justify-center shadow-lg shadow-primary/20 border-4 border-surface">
                <span className="material-symbols-outlined text-on-primary-fixed text-5xl">person</span>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-tertiary text-on-tertiary-fixed text-[10px] font-black px-2 py-0.5 rounded-full">
                LVL 14
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1 text-center sm:text-left">
              <h2 className="font-headline text-3xl font-black text-on-surface">CryptoExplorer</h2>
              <p className="text-on-surface-variant text-sm mt-1">Member since March 2026</p>
              <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-2">
                <span className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/30">
                  Level 14 Adept
                </span>
                <span className="bg-secondary/20 text-secondary text-xs font-bold px-3 py-1 rounded-full border border-secondary/30">
                  🔥 7-Day Streak
                </span>
              </div>
            </div>

            {/* Edit Button */}
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-outline-variant/30 text-on-surface-variant hover:text-on-surface hover:border-primary/40 transition-all text-sm font-bold">
              <span className="material-symbols-outlined text-sm">edit</span>
              Edit Profile
            </button>
          </div>
        </div>

        {/* XP & Streak Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          {/* XP */}
          <div className="glass-card p-6 rounded-xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-5xl">bolt</span>
            </div>
            <p className="text-xs font-bold tracking-widest text-on-surface-variant uppercase mb-2">Total XP</p>
            <div className="flex items-end gap-2">
              <h3 className="text-4xl font-headline font-black text-on-surface">2,450</h3>
              <span className="text-primary font-bold mb-1">XP</span>
            </div>
            <div className="mt-4 h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary-dim to-primary w-[65%] rounded-full shadow-[0_0_8px_rgba(163,166,255,0.5)]" />
            </div>
            <p className="text-[11px] text-on-surface-variant mt-2 italic">550 XP to Level 15</p>
          </div>

          {/* Streak */}
          <div className="glass-card p-6 rounded-xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-5xl">local_fire_department</span>
            </div>
            <p className="text-xs font-bold tracking-widest text-on-surface-variant uppercase mb-2">Current Streak</p>
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
          </div>

          {/* Global Rank */}
          <div className="glass-card p-6 rounded-xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-5xl">leaderboard</span>
            </div>
            <p className="text-xs font-bold tracking-widest text-on-surface-variant uppercase mb-2">Global Rank</p>
            <div className="flex items-end gap-2 text-tertiary">
              <h3 className="text-4xl font-headline font-black">#1,248</h3>
            </div>
            <p className="text-[11px] text-on-surface-variant mt-6 italic">Top 12% of all users</p>
          </div>
        </div>

        {/* Badges */}
        <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/10">
          <h3 className="font-headline text-lg font-bold text-on-surface mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-tertiary">workspace_premium</span>
            Badges Earned
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {badges.map((badge) => (
              <div key={badge.label} className="flex flex-col items-center gap-2 p-4 bg-surface-container-high rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all">
                <span className={`material-symbols-outlined text-3xl ${badge.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                  {badge.icon}
                </span>
                <span className="text-xs font-bold text-on-surface-variant text-center">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Overview */}
        <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/10">
          <h3 className="font-headline text-lg font-bold text-on-surface mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">track_changes</span>
            Learning Progress
          </h3>
          <div className="space-y-5">
            {[
              { label: "Market Cap", pct: 65, done: true },
              { label: "Volatility", pct: 0, done: false },
              { label: "Risk Management", pct: 0, done: false },
              { label: "Diversification", pct: 0, done: false },
            ].map((topic) => (
              <div key={topic.label}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-on-surface">{topic.label}</span>
                  <span className={`text-xs font-bold ${topic.done ? "text-secondary" : "text-on-surface-variant"}`}>
                    {topic.pct > 0 ? `${topic.pct}%` : "Not started"}
                  </span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary-dim to-primary shadow-[0_0_8px_rgba(163,166,255,0.4)] transition-all duration-500"
                    style={{ width: `${topic.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}