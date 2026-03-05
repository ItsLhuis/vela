import { cn } from "@/lib/utils"

const BULLETS = [
  "Works with Prometheus, Grafana, Datadog",
  "Native Kubernetes & Docker support",
  "Slack, PagerDuty, OpsGenie alerts",
  "50+ pre-built integrations"
]

const TERMINAL_LINES = [
  { text: "# Install Vela agent", color: "text-vela-accent" },
  { text: "$ curl -sSL https://get.vela.sh | sh", color: "text-white" },
  { text: "→ Downloading vela-agent v2.4.1...", color: "text-gray-66" },
  { text: "→ Installing dependencies...", color: "text-gray-66" },
  { text: "→ Agent connected to cluster", color: "text-gray-66" },
  { text: "", color: "text-transparent" },
  { text: "✓ Monitoring 847 metrics", color: "text-vela-accent" },
  { text: "✓ 12 services healthy", color: "text-vela-accent" }
]

export const Integration = () => {
  return (
    <section className="border-t border-surface-border bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col px-6 py-16 lg:flex-row lg:gap-12 lg:px-20">
        <div className="flex flex-1 flex-col justify-center gap-6">
          <span className="font-sans text-[10px] tracking-[3px] text-gray-99">INTEGRATIONS</span>
          <h2 className="font-mono text-3xl font-extralight leading-none text-dark lg:text-[40px]">
            Connect in minutes, not days
          </h2>
          <p className="font-sans text-sm leading-relaxed text-gray-66">
            Vela integrates with your existing stack out of the box. No complex configuration
            required.
          </p>
          <div className="flex flex-col gap-3">
            {BULLETS.map((b) => (
              <div key={b} className="flex items-center gap-3">
                <span className="font-sans text-sm text-vela-accent">→</span>
                <span className="font-sans text-sm text-dark">{b}</span>
              </div>
            ))}
          </div>
          <span className="font-sans text-sm font-bold tracking-[1px] text-dark">
            ↗ View all integrations
          </span>
        </div>
        <div className="mt-10 flex flex-1 flex-col justify-center bg-dark p-8 lg:mt-0">
          <div className="flex flex-col gap-2">
            {TERMINAL_LINES.map((line, i) => (
              <div key={i} className={cn("font-mono text-xs leading-[1.7]", line.color)}>
                {line.text || "\u00A0"}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
