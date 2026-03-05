import { Button } from "@/components/ui"
import { cn } from "@/lib/utils"

interface PricingCardProps {
  tier: string
  price: string
  priceSuffix?: string
  description: string
  features: string[]
  ctaLabel: string
  highlighted?: boolean
}

const PRICING_CARDS: PricingCardProps[] = [
  {
    tier: "FREE",
    price: "$0",
    priceSuffix: "/mo",
    description: "For individuals and small teams getting started with monitoring.",
    features: [
      "Up to 5 hosts",
      "14-day data retention",
      "Core metrics & dashboards",
      "Email alerts"
    ],
    ctaLabel: "Get Started Free"
  },
  {
    tier: "PRO",
    price: "$49",
    priceSuffix: "/mo",
    description: "For growing teams that need advanced monitoring and collaboration.",
    features: [
      "Unlimited hosts",
      "90-day data retention",
      "Distributed tracing & logs",
      "PagerDuty & Slack alerts",
      "Kubernetes monitoring"
    ],
    ctaLabel: "Start Free Trial",
    highlighted: true
  },
  {
    tier: "ENTERPRISE",
    price: "Custom",
    description:
      "For large organizations with custom security, compliance, and scale requirements.",
    features: [
      "Unlimited everything",
      "Custom data retention",
      "SSO / SAML & audit logs",
      "Dedicated SRE support",
      "SLA guarantee & private cloud"
    ],
    ctaLabel: "Contact Sales"
  }
]

const PricingCard = ({
  tier,
  price,
  priceSuffix,
  description,
  features,
  ctaLabel,
  highlighted = false
}: PricingCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-1 flex-col justify-between",
        highlighted
          ? "border-2 border-vela-accent bg-dark"
          : "border border-surface-border bg-white"
      )}
    >
      <div className="flex flex-col gap-2 px-6 pt-8 pb-6 lg:px-8">
        <div className="flex items-center justify-between">
          <span
            className={cn(
              "font-mono text-[10px] tracking-[3px]",
              highlighted ? "text-vela-accent" : "text-gray-99"
            )}
          >
            {tier}
          </span>
          {highlighted && (
            <span className="bg-vela-accent px-2 py-0.5 font-sans text-[9px] font-semibold tracking-[1px] text-dark">
              MOST POPULAR
            </span>
          )}
        </div>
        <div className="flex items-end gap-1">
          <span
            className={cn(
              "font-mono text-5xl font-extralight leading-none",
              highlighted ? "text-white" : "text-dark"
            )}
          >
            {price}
          </span>
          {priceSuffix && (
            <span
              className={cn(
                "mb-1 font-sans text-sm leading-[2.8]",
                highlighted ? "text-gray-66" : "text-gray-99"
              )}
            >
              {priceSuffix}
            </span>
          )}
        </div>
        <p
          className={cn(
            "font-sans text-[13px] leading-relaxed",
            highlighted ? "text-gray-99" : "text-gray-66"
          )}
        >
          {description}
        </p>
      </div>
      <div className={cn("h-px w-full", highlighted ? "bg-gray-33" : "bg-surface-border")} />
      <div className="flex flex-1 flex-col gap-3 px-6 py-6 lg:px-8">
        {features.map((f) => (
          <div key={f} className="flex items-center gap-2">
            <span className="font-mono text-[13px] text-vela-accent">→</span>
            <span
              className={cn(
                "font-sans text-[13px] leading-normal",
                highlighted ? "text-white" : "text-dark"
              )}
            >
              {f}
            </span>
          </div>
        ))}
      </div>
      <div className="px-6 pt-4 pb-8 lg:px-8">
        {highlighted ? (
          <Button className="w-full border-none bg-vela-accent text-sm font-medium text-dark hover:opacity-90">
            {ctaLabel}
          </Button>
        ) : (
          <Button variant="outline" className="w-full text-sm font-medium">
            {ctaLabel}
          </Button>
        )}
      </div>
    </div>
  )
}

export const Pricing = () => {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-16 lg:px-20">
        <div className="mb-8 flex flex-col items-center gap-4">
          <span className="font-mono text-[10px] tracking-[3px] text-gray-99">PRICING</span>
          <h2 className="max-w-3xl text-center font-mono text-3xl font-extralight leading-none text-dark lg:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="max-w-lg text-center font-sans text-sm leading-relaxed text-gray-66">
            Start free. Scale as you grow. No hidden fees.
          </p>

          <div className="flex items-center bg-dark">
            <div className="flex h-9 w-24 items-center justify-center font-sans text-[11px] font-medium tracking-[1px] text-vela-accent">
              MONTHLY
            </div>
            <div className="flex h-9 w-28 items-center justify-center bg-surface font-sans text-[11px] font-medium tracking-[1px] text-dark">
              ANNUAL –20%
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {PRICING_CARDS.map((card) => (
            <PricingCard key={card.tier} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
