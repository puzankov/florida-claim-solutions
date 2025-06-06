import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ArrowRight} from "lucide-react";

interface Props {
}

const HowItWorks = ({}: Props) => {
  return <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
          <p
            className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our simple process makes recovering your funds easy and stress-free.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-5xl py-12">
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold flex-shrink-0 mx-auto md:mx-0">
              1
            </div>
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl font-bold">Identifying & Confirming Surplus Funds</h3>
              <p className="text-muted-foreground">
                After a foreclosure or tax deed sale, we review county records to determine if your property was
                sold for more than what was owed. If surplus funds exist, we verify that they are currently being
                held by the county where the sale took place and are available for you to claim.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold flex-shrink-0 mx-auto md:mx-0">
              2
            </div>
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl font-bold">Verifying Your Eligibility</h3>
              <p className="text-muted-foreground">
                Using public records, property records, and advanced research tools, we confirm that you are the
                rightful claimant for the surplus funds. If you are a legal heir, we assist in proving your
                eligibility.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold flex-shrink-0 mx-auto md:mx-0">
              3
            </div>
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl font-bold">Free Consultation & Agreement</h3>
              <p className="text-muted-foreground">
                We provide a free consultation to explain the process. Once you&#39;re ready, you sign a simple
                agreement allowing us to handle the claim on your behalf—with no upfront or out-of-pocket costs to
                you.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold flex-shrink-0 mx-auto md:mx-0">
              4
            </div>
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl font-bold">Filing the Claim with the County</h3>
              <p className="text-muted-foreground">
                Our team prepares and submits all the necessary paperwork to the appropriate county agency,
                ensuring compliance with Florida regulations. We handle all correspondence with county officials
                and monitor the claim&#39;s progress.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold flex-shrink-0 mx-auto md:mx-0">
              5
            </div>
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl font-bold">You Receive Your Money</h3>
              <p className="text-muted-foreground">
                Once the county processes and approves the claim, they release the surplus funds. We ensure that
                you receive your money via direct deposit or check as quickly as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button asChild size="lg">
          <Link href="#contact">
            Start Your Recovery Process <ArrowRight className="ml-2 h-4 w-4"/>
          </Link>
        </Button>
      </div>
    </div>
  </section>;
};

export default HowItWorks;