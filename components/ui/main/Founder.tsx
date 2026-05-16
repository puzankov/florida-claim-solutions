import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Quote } from "lucide-react";

const Founder = () => {
  return (
    <section id="founder" className="w-full py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">

        <div
          className="flex flex-col items-center justify-center space-y-3 text-center mb-12"
          data-animate="fade-up"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Meet Sergi Puzankov
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            Founder of Florida Claim Solutions
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">

            {/* Image column */}
            <div
              className="relative flex items-center justify-center order-2 lg:order-1"
              data-animate="fade-right"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-border/60 to-transparent blur-xl scale-105 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-muted blur-2xl pointer-events-none" />
              <Image
                src="/images/sergi2.png"
                alt="Sergi Puzankov, Founder of Florida Claim Solutions"
                width={350}
                height={377}
                className="relative rounded-2xl shadow-2xl border-4 border-white object-cover"
              />
            </div>

            {/* Text column */}
            <div
              className="flex flex-col gap-6 order-1 lg:order-2"
              data-animate="fade-left"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <Quote className="h-5 w-5 text-foreground" />
              </div>

              <blockquote className="border-l-4 border-primary pl-5 space-y-4">
                <p className="text-lg leading-relaxed text-foreground">
                  I&apos;m Sergi Puzankov, the founder of Florida Claim Solutions.
                  I started this company with one goal in mind: to make surplus fund recovery simple, transparent, and
                  stress-free. I&apos;ve built a trusted network of legal and financial professionals to ensure every
                  claim is handled efficiently, giving my clients the best chance to recover their funds.
                </p>
                <p className="text-lg leading-relaxed text-foreground">
                  At Florida Claim Solutions, we believe in honesty, integrity, and results. If you think you may be
                  owed money, I&apos;d love to help. Let&apos;s get started today!
                </p>
                <footer className="text-sm font-semibold text-muted-foreground pt-2">
                  — Sergi Puzankov, Founder
                </footer>
              </blockquote>

              <Button asChild size="lg" className="w-fit shadow-lg">
                <Link href="#contact">Get a Free Consultation</Link>
              </Button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Founder;
