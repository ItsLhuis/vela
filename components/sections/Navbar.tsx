import { Button } from "@/components/ui"

export const Navbar = () => {
  return (
    <nav className="border-b border-surface-border bg-surface">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-20">
        <span className="font-mono text-sm font-extralight tracking-[2px] text-dark">VELA</span>
        <div className="hidden items-center gap-8 md:flex">
          {["Product", "Pricing", "Docs", "Blog"].map((link) => (
            <span
              key={link}
              className="cursor-pointer font-sans text-xs tracking-[1px] text-gray-66"
            >
              {link}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="text-xs">
            Log in
          </Button>
          <Button
            size="sm"
            className="border-none bg-vela-accent text-xs font-medium text-dark hover:opacity-90"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  )
}
