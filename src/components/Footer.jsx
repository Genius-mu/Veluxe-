export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-black">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="grid grid-cols-1 items-center gap-6 py-10 sm:grid-cols-3">
          <p className="font-mono text-[11px] uppercase tracking-wider2 text-ink/50">
            Privacy Policy
          </p>

          <div className="flex flex-col items-center">
            <span className="font-display text-2xl font-medium tracking-wider2 text-velvet">
              VELUXE
            </span>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-wider2 text-ink/50">
              Beauty Industry — Est. 2025
            </span>
          </div>

          <p className="text-right font-mono text-[11px] uppercase tracking-wider2 text-ink/50">
            Shopping Info
          </p>
        </div>
      </div>
    </footer>
  );
}
