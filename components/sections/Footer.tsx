const FOOTER_COLS = [
  {
    header: "PRODUCT",
    links: ["Features", "Pricing", "Changelog", "Roadmap", "Status"]
  },
  {
    header: "DEVELOPERS",
    links: ["Documentation", "API Reference", "SDKs & Libraries", "Integrations", "Community"]
  },
  {
    header: "COMPANY",
    links: ["About", "Blog", "Careers", "Privacy Policy", "Terms of Service"]
  }
]

export const Footer = () => {
  return (
    <footer className="bg-surface">
      <div className="h-px bg-surface-border" />
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 lg:px-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-0">
          <div className="flex flex-1 flex-col gap-4">
            <span className="font-mono text-base font-extralight tracking-[2px] text-dark">
              VELA
            </span>
            <p className="max-w-50 font-sans text-[13px] leading-relaxed text-gray-66">
              Infrastructure monitoring
              <br />
              for developer teams.
            </p>
            <div className="flex items-center gap-1.5">
              <div className="size-1.5 rounded-full bg-vela-accent" />
              <span className="font-sans text-[11px] text-gray-99">All systems operational</span>
            </div>
          </div>
          <div className="grid flex-3 grid-cols-2 gap-8 md:grid-cols-3">
            {FOOTER_COLS.map((col) => (
              <div key={col.header} className="flex flex-col gap-3">
                <span className="font-sans text-[10px] font-semibold tracking-[2px] text-dark">
                  {col.header}
                </span>
                {col.links.map((link) => (
                  <span key={link} className="cursor-pointer font-sans text-[13px] text-gray-66">
                    {link}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-px bg-surface-border" />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 sm:flex-row lg:px-20">
        <span className="font-sans text-xs text-gray-99">
          © {new Date().getFullYear()} Vela, Inc. All rights reserved.
        </span>
        <span className="font-mono text-xs font-extralight text-gray-99">
          Built for the teams that keep the internet running.
        </span>
      </div>
    </footer>
  )
}
