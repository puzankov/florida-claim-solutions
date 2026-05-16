import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Search, UserCheck, FileSignature, FolderOpen, Banknote } from "lucide-react";
import { getCountyName } from "@/components/countiesList";

interface Props {
  county?: string;
}

const steps = [
  {
    icon: Search,
    title: "Identifying & Confirming Surplus Funds",
    getDescription: (county?: string) =>
      `After a foreclosure or tax deed sale, we review ${county ? `${getCountyName(county, true)} records` : "county records throughout Florida"} to determine if your property was sold for more than what was owed. If surplus funds exist, we verify that they are currently being held by the county where the sale took place and are available for you to claim.`,
  },
  {
    icon: UserCheck,
    title: "Verifying Your Eligibility",
    getDescription: () =>
      "Using public records, property records, and advanced research tools, we confirm that you are the rightful claimant for the surplus funds. If you are a legal heir, we assist in proving your eligibility.",
  },
  {
    icon: FileSignature,
    title: "Free Consultation & Agreement",
    getDescription: () =>
      "We provide a free consultation to explain the process. Once you're ready, you sign a simple agreement allowing us to handle the claim on your behalf—with no upfront or out-of-pocket costs to you.",
  },
  {
    icon: FolderOpen,
    title: "Filing the Claim with the County",
    getDescription: (county?: string) =>
      `Our team prepares and submits all the necessary paperwork directly to the ${county ? getCountyName(county, true) : "appropriate county"}, ensuring compliance with Florida regulations. We handle all correspondence with county officials and monitor the claim's progress.`,
  },
  {
    icon: Banknote,
    title: "You Receive Your Money",
    getDescription: (county?: string) =>
      `${county ? `After ${getCountyName(county, true)}` : "Once the county"} processes and approves the claim, they release the surplus funds. We ensure that you receive your money via direct deposit or check as quickly as possible.`,
  },
];

const HowItWorks = ({ county }: Props) => {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">

        <div
          className="flex flex-col items-center justify-center space-y-3 text-center mb-12"
          data-animate="fade-up"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our simple process makes recovering your funds easy and stress-free
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="timeline-container space-y-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="group flex gap-6 items-start"
                  data-animate="fade-left"
                  data-animate-delay={`${i * 100}`}
                >
                  <div className="relative flex-shrink-0">
                    {i === 0 && (
                      <span className="absolute inset-0 rounded-full animate-pulse-ring bg-primary/30" />
                    )}
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold z-10">
                      {i + 1}
                    </div>
                  </div>

                  <div className="flex-1 rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-foreground">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.getDescription(county)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center mt-12" data-animate="fade-up">
          <Button asChild size="lg">
            <Link href="#contact">
              Start Your Recovery Process <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
