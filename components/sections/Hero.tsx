import { Button } from "@/components/ui"
import { cn } from "@/lib/utils"

const TERMINAL_LINES = [
  { text: "$ vela status --all", color: "text-vela-accent" },
  { text: "▶ api-gateway          ✓ 99.98% uptime", color: "text-gray-aa" },
  { text: "▶ auth-service         ✓ 99.99% uptime", color: "text-gray-aa" },
  { text: "▶ data-pipeline        ✓ 100.00% uptime", color: "text-gray-aa" },
  { text: "▶ cdn-edge             ⚠ latency spike", color: "text-vela-warning" },
  { text: "", color: "text-transparent" },
  { text: "Requests/min   4,218   ↑ 12.4%", color: "text-vela-accent" },
  { text: "Error rate     0.02%   ↓ 0.01%", color: "text-vela-accent" },
  { text: "P95 latency    142ms   ✓ within SLA", color: "text-gray-aa" },
  { text: "Active alerts  1       ↗ cdn-edge", color: "text-vela-warning" },
  { text: "", color: "text-transparent" },
  { text: "$ _", color: "text-vela-accent" }
]

const TerminalBlock = () => (
  <div className="w-full bg-dark p-6">
    <div className="mb-3 flex items-center gap-2">
      {[0, 1, 2].map((i) => (
        <div key={i} className="size-2.5 rounded-full bg-gray-44" />
      ))}
      <span className="ml-2 font-mono text-[11px] text-gray-66">vela-dashboard — monitoring</span>
    </div>
    {TERMINAL_LINES.map((line, i) => (
      <div key={i} className={cn("font-mono text-xs leading-[1.7]", line.color)}>
        {line.text || "\u00A0"}
      </div>
    ))}
  </div>
)

export const Hero = () => {
  return (
    <section className="bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col px-6 py-16 lg:flex-row lg:gap-12 lg:px-20">
        <div className="flex flex-col justify-center gap-6 lg:w-1/2">
          <div className="inline-flex w-fit items-center bg-vela-accent px-2 py-0.5">
            <span className="font-sans text-[11px] font-medium text-dark">
              New: Kubernetes monitoring →
            </span>
          </div>
          <h1 className="font-mono text-5xl font-extralight leading-[0.95] text-dark lg:text-7xl">
            MONITOR.
            <br />
            DETECT.
            <br />
            RESOLVE.
          </h1>
          <p className="font-sans text-sm leading-relaxed text-gray-66">
            Real-time infrastructure visibility for developer teams. Catch issues before your users
            do.
          </p>
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              className="border-none bg-vela-accent text-xs font-bold text-dark hover:opacity-90"
            >
              Start Free Trial
            </Button>
            <Button variant="outline" size="sm" className="text-xs">
              View Demo
            </Button>
          </div>
          <p className="font-sans text-xs leading-relaxed text-gray-99">
            Trusted by 2,400+ engineering teams · No credit card required
          </p>
        </div>
        <div className="mt-10 flex flex-1 items-center justify-center lg:mt-0">
          <TerminalBlock />
        </div>
      </div>
    </section>
  )
}
