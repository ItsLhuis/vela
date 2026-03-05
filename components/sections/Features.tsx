import type { LucideIcon } from "lucide-react"
import { Bell, FileText, GitBranch, Layers, Monitor, Zap } from "lucide-react"

interface FeatureCardData {
  icon: LucideIcon
  title: string
  description: string
}

const FEATURES: FeatureCardData[] = [
  {
    icon: Monitor,
    title: "Real-time Metrics",
    description:
      "Track CPU, memory, network and disk I/O across your entire infrastructure in real time."
  },
  {
    icon: Bell,
    title: "Intelligent Alerts",
    description: "Smart thresholds that adapt to your traffic patterns. No more alert fatigue."
  },
  {
    icon: GitBranch,
    title: "Distributed Tracing",
    description: "Follow requests across microservices. Pinpoint bottlenecks in milliseconds."
  },
  {
    icon: FileText,
    title: "Log Aggregation",
    description: "Centralize logs from every service. Search, filter, and correlate in one place."
  },
  {
    icon: Zap,
    title: "Incident Response",
    description: "Automated runbooks and escalation policies keep your team coordinated."
  },
  {
    icon: Layers,
    title: "Kubernetes Native",
    description: "Deep k8s integration. Monitor pods, nodes, and namespaces out of the box."
  }
]

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardData) => (
  <div className="flex flex-1 flex-col gap-3 bg-dark px-6 py-6 lg:px-8">
    <Icon size={20} className="text-vela-accent" />
    <h3 className="font-mono text-xl font-extralight text-white">{title}</h3>
    <p className="font-sans text-sm leading-relaxed text-gray-99">{description}</p>
  </div>
)

export const Features = () => {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-20">
        <div className="mb-12 flex flex-col items-center gap-4">
          <span className="font-sans text-[10px] tracking-[3px] text-gray-99">FEATURES</span>
          <h2 className="text-center font-mono text-3xl font-extralight leading-none text-dark lg:text-5xl">
            Everything you need to stay ahead of outages
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}
