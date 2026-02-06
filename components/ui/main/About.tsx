import {Award, DollarSign, FileCheck, ShieldCheck} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {getCountyName} from "@/components/countiesList";

interface Props {
  county?: string;
}

const benefits = [
  {
    icon: Award,
    title: "Expertise & Experience",
    getDescription: (county?: string) =>
      county
        ? `We know how the ${getCountyName(county, true)} system works and partner with legal professionals to recover your surplus funds fast.`
        : "We understand Florida\u2019s legal system and work efficiently with counties across the state to recover your funds.",
  },
  {
    icon: DollarSign,
    title: "No Upfront Costs",
    getDescription: () =>
      "You only pay when we win your case. There are zero out-of-pocket expenses to get started.",
  },
  {
    icon: FileCheck,
    title: "Hassle-Free Process",
    getDescription: () =>
      "We handle all the paperwork, legal filings, and county correspondence so you don\u2019t have to.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    getDescription: () =>
      "We keep you informed every step of the way with clear communication and honest guidance.",
  },
];

const About = ({county}: Props) => {
  return (
    <section id="about" className="w-full pb-12 md:pb-24">
      <div className="container px-4 md:px-6">
        <div className="py-12">
          <h2 className="text-3xl font-bold text-center tracking-tighter sm:text-4xl md:text-5xl mb-4 text-balance">
            Why Choose Us?
          </h2>
          <p className="text-center text-muted-foreground md:text-lg max-w-2xl mx-auto mb-10">
            We make surplus fund recovery simple, transparent, and risk-free{county ? ` for ${getCountyName(county, true)} residents` : " for homeowners across Florida"}.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="flex flex-col items-center text-center rounded-lg border border-border bg-card p-6 md:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.getDescription(county)}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <p className="text-lg font-medium mb-4">
              Let us help you claim what&#39;s rightfully yours{county && ` in ${getCountyName(county, true)}`}.<br />
              Check if you&#39;re owed money today!
            </p>
            <Button asChild size="lg">
              <Link href="#contact">Check for Unclaimed Funds</Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 text-center mt-8">
          <h3 className="text-2xl font-bold text-center mb-6">About Us</h3>
          <div className="space-y-2">
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At Florida Claim Solutions, we specialize in helping individuals{" "}
              {county ? `in ${getCountyName(county, true)}` : "across Florida"} reclaim surplus funds that are
              rightfully theirs. Every year, millions of dollars go unclaimed after property sales, foreclosures,
              and tax overpayments — money that should be in the hands of those who deserve it.
            </p>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              With years of experience in surplus fund recovery, our team is dedicated to navigating the complex
              legal process on your behalf{county && ` in ${getCountyName(county, true)}`}, ensuring a smooth and stress-free experience. We work on a no-win,
              no-fee basis, meaning you don&#39;t pay anything unless we successfully recover your funds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
