import { Button } from "@/components/ui"

export const ClosingCta = () => {
  return (
    <section className="bg-dark">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-20 lg:px-20">
        <span className="font-mono text-[10px] tracking-[3px] text-vela-accent">GET STARTED</span>
        <h2 className="max-w-3xl text-center font-mono text-4xl font-extralight leading-none text-white lg:text-[56px]">
          Zero to full observability
          <br />
          in under 5 minutes.
        </h2>
        <p className="max-w-xl text-center font-sans text-sm leading-relaxed text-gray-99">
          Join thousands of engineering teams who trust Vela to keep their infrastructure healthy.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="border-none bg-vela-accent font-medium text-dark hover:opacity-90"
          >
            Start Free — No Credit Card
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gray-33 bg-transparent font-medium text-white"
          >
            Schedule a Demo
          </Button>
        </div>
        <p className="text-center font-sans text-xs text-gray-66">
          Free 14-day trial · No setup fees · Cancel anytime
        </p>
      </div>
    </section>
  )
}
