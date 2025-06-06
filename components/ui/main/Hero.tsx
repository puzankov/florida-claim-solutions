import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return <>
    {/* Hero Section */}
    <section className="relative w-full py-12 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Recover Your Unclaimed Surplus Funds<br/>Fast & Hassle-Free
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                We help homeowners and individuals claim the money that rightfully belongs to them.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#contact">Get a Free Consultation</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/hero.webp"
              alt="Money and house model representing surplus funds recovery"
              width={800}
              height={533}
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  </>;
};


export default Hero;