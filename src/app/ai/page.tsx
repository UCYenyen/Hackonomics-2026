import TopBar from "@/components/layout/TopBar";

export default function AIPage() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <TopBar title="AI Assistant" searchPlaceholder="Search lessons..." />

      {/* Chat Canvas */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-12 flex flex-col items-center">
        <div className="w-full max-w-3xl space-y-8">

          {/* AI Welcome */}
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-surface-container border border-outline-variant/20 flex items-center justify-center flex-shrink-0 shadow-lg">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
            </div>
            <div className="flex flex-col gap-2 max-w-[85%]">
              <div className="glass-card p-5 rounded-2xl rounded-tl-none border border-primary/10 shadow-xl">
                <p className="text-on-surface leading-relaxed">
                  Hello! I can help you understand complex crypto concepts. What would you like to learn about today?
                </p>
              </div>
              <span className="text-[10px] text-on-surface-variant px-1 font-medium tracking-wider uppercase">CoinEdu AI · Just now</span>
            </div>
          </div>

          {/* User Message */}
          <div className="flex gap-4 items-start flex-row-reverse">
            <div className="w-10 h-10 rounded-full bg-primary-dim flex items-center justify-center flex-shrink-0 border-2 border-surface shadow-lg">
              <span className="material-symbols-outlined text-on-primary-fixed text-sm">person</span>
            </div>
            <div className="flex flex-col items-end gap-2 max-w-[85%]">
              <div className="bg-primary text-on-primary-fixed p-5 rounded-2xl rounded-tr-none shadow-lg shadow-primary/10">
                <p className="font-medium">What is the difference between a hot wallet and a cold wallet?</p>
              </div>
              <span className="text-[10px] text-on-surface-variant px-1 font-medium tracking-wider uppercase">You · 1 min ago</span>
            </div>
          </div>

          {/* AI Response */}
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-surface-container border border-outline-variant/20 flex items-center justify-center flex-shrink-0 shadow-lg">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
            </div>
            <div className="flex flex-col gap-2 max-w-[85%]">
              <div className="glass-card p-6 rounded-2xl rounded-tl-none border border-primary/10 shadow-2xl space-y-4">
                <p className="text-on-surface leading-relaxed font-medium">
                  That&apos;s a fundamental question in crypto security! Think of it like the difference between a{" "}
                  <span className="text-primary font-bold">checking account</span> and a{" "}
                  <span className="text-secondary font-bold">bank vault</span>.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-surface-container/50 rounded-xl border-l-4 border-primary">
                    <h4 className="font-headline font-bold text-primary mb-1">Hot Wallet (Always On)</h4>
                    <p className="text-sm text-on-surface-variant mb-2">Connected to the internet via your phone, browser, or desktop.</p>
                    <ul className="list-disc list-inside text-sm space-y-1 text-on-surface/90">
                      <li>Fast for <span className="text-primary-fixed">active trading</span> and transactions.</li>
                      <li>Easy to set up and accessible anywhere.</li>
                      <li>Higher risk of <span className="text-error-dim">online hacks</span> or phishing.</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-surface-container/50 rounded-xl border-l-4 border-secondary">
                    <h4 className="font-headline font-bold text-secondary mb-1">Cold Wallet (Air-Gapped)</h4>
                    <p className="text-sm text-on-surface-variant mb-2">Physical hardware kept offline, like a Ledger or Trezor device.</p>
                    <ul className="list-disc list-inside text-sm space-y-1 text-on-surface/90">
                      <li>Supreme security for <span className="text-secondary-fixed">long-term holding</span>.</li>
                      <li>Immune to online hacking attempts.</li>
                      <li>Less convenient for frequent daily use.</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm border-t border-outline-variant/20 pt-4 text-on-surface-variant italic">
                  Pro-tip: Most seasoned investors keep their &quot;walking around money&quot; in a hot wallet and their life savings in cold storage.
                </p>
              </div>
              <div className="flex gap-2 px-1">
                <button className="text-[10px] text-on-surface-variant hover:text-primary uppercase font-bold tracking-widest transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">thumb_up</span> Helpful
                </button>
                <button className="text-[10px] text-on-surface-variant hover:text-error uppercase font-bold tracking-widest transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">thumb_down</span> Not quite
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Input Area */}
      <footer className="p-6 md:px-12 md:pb-8 bg-gradient-to-t from-surface to-transparent">
        <div className="max-w-3xl mx-auto relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur opacity-30 group-focus-within:opacity-100 transition duration-500" />
          <div className="relative bg-surface-container-low rounded-2xl border border-outline-variant/20 shadow-2xl flex items-end p-2 transition-all group-focus-within:border-primary/40">
            <button className="p-3 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">add_circle</span>
            </button>
            <textarea
              rows={1}
              placeholder="Ask a question..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-on-surface py-3 resize-none custom-scrollbar max-h-32 placeholder:text-on-surface-variant/50 outline-none"
            />
            <div className="flex items-center gap-1 p-1">
              <button className="p-3 text-on-surface-variant hover:text-secondary transition-colors">
                <span className="material-symbols-outlined">mic</span>
              </button>
              <button className="bg-gradient-to-br from-primary-dim to-primary p-3 rounded-xl text-on-primary-fixed shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
              </button>
            </div>
          </div>
          <p className="text-center mt-3 text-[10px] text-on-surface-variant/60 tracking-tight">
            AI can make mistakes. Verify important financial details.
          </p>
        </div>
      </footer>
    </div>
  );
}