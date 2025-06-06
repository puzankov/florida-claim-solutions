import {CheckCircle} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";

interface Props {
}

const About = ({}: Props) => {
  return <section id="about" className="w-full pb-12 md:pb-24">
    <div className="container px-4 md:px-6">
      <div className="mx-auto max-w-3xl py-12">
        <h2 className="text-3xl font-bold text-center tracking-tighter sm:text-4xl md:text-5xl mb-6">Why Choose
          Us?</h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0"/>
            <span className="text-lg">
                    <span className="font-semibold">Expertise & Experience</span> – We understand the legal system and
                    work efficiently with county to recover your funds.
                  </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0"/>
            <span className="text-lg">
                    <span className="font-semibold">No Upfront Costs</span> – You only pay when we win your case.
                  </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0"/>
            <span className="text-lg">
                    <span className="font-semibold">Hassle-Free Process</span> – We handle all the paperwork and legal
                    details for you.
                  </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0"/>
            <span className="text-lg">
                    <span className="font-semibold">Trust & Transparency</span> – We keep you informed every step of the
                    way.
                  </span>
          </li>
        </ul>
        <div className="text-center mt-8">
          <p className="text-lg font-medium mb-4">
            Let us help you claim what&#39;s rightfully yours. Check if you&#39;re owed money today!
          </p>
          <Button asChild size="lg">
            <Link href="#contact">Check for Unclaimed Funds</Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4 text-center mt-8">
        <h3 className="text-2xl font-bold text-center mb-6">About Us</h3>
        <div className="space-y-2">
          <p
            className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            At Florida Claim Solutions, we specialize in helping individuals reclaim surplus funds that are
            rightfully theirs. Every year, millions of dollars go unclaimed after property sales, foreclosures,
            and tax overpayments—money that should be in the hands of those who deserve it.
          </p>
          <p
            className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            With years of experience in surplus fund recovery, our team is dedicated to navigating the complex
            legal process on your behalf, ensuring a smooth and stress-free experience. We work on a no-win,
            no-fee basis, meaning you don&#39;t pay anything unless we successfully recover your funds.
          </p>
        </div>
      </div>
    </div>
  </section>;
};

export default About;