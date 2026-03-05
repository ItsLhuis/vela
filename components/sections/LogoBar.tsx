const LOGOS = ["Stripe", "Vercel", "Linear", "Notion", "Figma", "GitHub"]

export const LogoBar = () => {
  return (
    <section className="border-y border-surface-border bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-6 py-8 lg:px-20">
        <span className="font-sans text-[10px] tracking-[3px] text-gray-99">
          TRUSTED BY TEAMS AT
        </span>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {LOGOS.map((logo) => (
            <span key={logo} className="font-mono text-sm font-extralight text-gray-66">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
