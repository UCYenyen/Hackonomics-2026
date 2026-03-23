import TopBar from "@/components/layout/TopBar";

export default function SettingsPage() {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto">
      <TopBar title="Settings" showSearch={false} />

      <div className="p-6 md:p-10 max-w-3xl mx-auto w-full space-y-6">

        {/* Account Settings */}
        <div className="bg-surface-container rounded-2xl border border-outline-variant/10 overflow-hidden">
          <div className="px-6 py-4 border-b border-outline-variant/10 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">manage_accounts</span>
            <h3 className="font-headline font-bold text-on-surface">Account Settings</h3>
          </div>

          <div className="p-6 space-y-5">
            {/* Username */}
            <div>
              <label className="font-label text-[11px] font-bold text-on-surface-variant uppercase tracking-widest block mb-2">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  defaultValue="CryptoExplorer"
                  className="w-full bg-surface-container-lowest border-none rounded-xl py-3 px-4 text-on-surface focus:ring-2 focus:ring-primary/40 outline-none"
                />
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">edit</span>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="font-label text-[11px] font-bold text-on-surface-variant uppercase tracking-widest block mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  defaultValue="explorer@coinedu.app"
                  className="w-full bg-surface-container-lowest border-none rounded-xl py-3 px-4 text-on-surface focus:ring-2 focus:ring-primary/40 outline-none"
                />
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">edit</span>
              </div>
            </div>

            {/* Avatar */}
            <div>
              <label className="font-label text-[11px] font-bold text-on-surface-variant uppercase tracking-widest block mb-2">
                Avatar
              </label>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-dim to-primary flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-on-primary-fixed text-3xl">person</span>
                </div>
                <button className="px-4 py-2 rounded-xl border border-outline-variant/30 text-sm font-bold text-on-surface-variant hover:text-on-surface hover:border-primary/40 transition-all">
                  Change Avatar
                </button>
              </div>
            </div>

            <button className="w-full py-3 rounded-xl bg-gradient-to-br from-primary-dim to-primary text-on-primary-fixed font-bold shadow-lg hover:shadow-[0_0_15px_rgba(163,166,255,0.4)] active:scale-95 transition-all">
              Save Changes
            </button>
          </div>
        </div>

        {/* Password */}
        <div className="bg-surface-container rounded-2xl border border-outline-variant/10 overflow-hidden">
          <div className="px-6 py-4 border-b border-outline-variant/10 flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary">lock</span>
            <h3 className="font-headline font-bold text-on-surface">Password</h3>
          </div>

          <div className="p-6 space-y-5">
            <div>
              <label className="font-label text-[11px] font-bold text-on-surface-variant uppercase tracking-widest block mb-2">
                Current Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-surface-container-lowest border-none rounded-xl py-3 px-4 text-on-surface focus:ring-2 focus:ring-primary/40 outline-none placeholder:text-outline-variant"
              />
            </div>
            <div>
              <label className="font-label text-[11px] font-bold text-on-surface-variant uppercase tracking-widest block mb-2">
                New Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-surface-container-lowest border-none rounded-xl py-3 px-4 text-on-surface focus:ring-2 focus:ring-primary/40 outline-none placeholder:text-outline-variant"
              />
            </div>
            <div>
              <label className="font-label text-[11px] font-bold text-on-surface-variant uppercase tracking-widest block mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-surface-container-lowest border-none rounded-xl py-3 px-4 text-on-surface focus:ring-2 focus:ring-primary/40 outline-none placeholder:text-outline-variant"
              />
            </div>
            <button className="w-full py-3 rounded-xl border border-outline-variant/30 text-on-surface font-bold hover:border-primary/40 hover:text-primary transition-all">
              Update Password
            </button>
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="bg-surface-container rounded-2xl border border-outline-variant/10 overflow-hidden">
          <div className="px-6 py-4 border-b border-outline-variant/10 flex items-center gap-3">
            <span className="material-symbols-outlined text-tertiary">shield</span>
            <h3 className="font-headline font-bold text-on-surface">Privacy &amp; Security</h3>
          </div>

          <div className="divide-y divide-outline-variant/10">
            {[
              { label: "Public Profile", desc: "Allow others to see your profile and rank", enabled: true },
              { label: "Show on Leaderboard", desc: "Display your username in global rankings", enabled: true },
              { label: "Trade History Visible", desc: "Allow others to view your portfolio activity", enabled: false },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between px-6 py-4">
                <div>
                  <p className="text-sm font-bold text-on-surface">{item.label}</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">{item.desc}</p>
                </div>
                {/* Toggle */}
                <div className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${item.enabled ? "bg-primary" : "bg-surface-container-highest"}`}>
                  <div className={`absolute top-1 w-4 h-4 rounded-full bg-on-primary-fixed shadow transition-transform ${item.enabled ? "translate-x-7" : "translate-x-1"}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-surface-container rounded-2xl border border-error-dim/20 overflow-hidden">
          <div className="px-6 py-4 border-b border-error-dim/20 flex items-center gap-3">
            <span className="material-symbols-outlined text-error-dim">warning</span>
            <h3 className="font-headline font-bold text-error-dim">Danger Zone</h3>
          </div>
          <div className="p-6 space-y-3">
            <p className="text-sm text-on-surface-variant">These actions are irreversible. Please be certain before proceeding.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 py-3 rounded-xl border border-error-dim/30 text-error-dim font-bold text-sm hover:bg-error-dim/10 transition-all">
                Reset Portfolio
              </button>
              <button className="flex-1 py-3 rounded-xl border border-error-dim/30 text-error-dim font-bold text-sm hover:bg-error-dim/10 transition-all">
                Delete Account
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}