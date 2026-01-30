import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, MapPin, FileCheck } from "lucide-react";

interface CheckCase {
  id: number;
  county: string;
  claims: number;
  amount: string;
  images: string[];
}

const cases: CheckCase[] = [
  {
    id: 1,
    county: "Volusia County",
    claims: 3,
    amount: "$98,754.49",
    images: [],
  },
  {
    id: 2,
    county: "Marion County",
    claims: 2,
    amount: "$30,999.94",
    images: ["/images/check-marion.png"],
  },
  {
    id: 3,
    county: "Hendry County",
    claims: 1,
    amount: "$12,343.32",
    images: ["/images/check-hendry.png"],
  },
  {
    id: 4,
    county: "Coming Soon",
    claims: 0,
    amount: "Your Recovery",
    images: [],
  },
];

const RecoveredChecks = () => {
  return (
    <section id="recovered-checks" className="w-full py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Real Funds Released by Florida Counties
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are a few real examples of checks we recovered from Florida counties for our clients.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
          {cases.map((caseItem, index) => (
            <div
              key={caseItem.id}
              className="flex flex-col rounded-lg border bg-card shadow-sm overflow-hidden transition-shadow hover:shadow-md"
            >
              {/* Check Image - first row aspect 1.5, second row aspect 2 */}
              <div className={`relative bg-muted ${index < 2 ? "aspect-[1.5/1]" : "aspect-[2/1]"}`}>
                {caseItem.images.length > 0 ? (
                  <Image
                    src={caseItem.images[0]}
                    alt={`Check from ${caseItem.county}`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <FileCheck className="h-10 w-10 mx-auto mb-1 opacity-30" />
                      <p className="text-sm">Check image</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Content - single line */}
              <div className="flex items-center justify-between gap-4 p-4">
                <div className="flex items-center gap-4">
                  <div className="text-xl font-bold text-primary">
                    {caseItem.amount}
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm font-medium">{caseItem.county}</span>
                  </div>
                </div>
                {caseItem.claims > 0 && (
                  <div className="text-sm text-muted-foreground whitespace-nowrap">
                    {caseItem.claims} {caseItem.claims === 1 ? "claim" : "claims"}
                  </div>
                )}
                {caseItem.claims === 0 && (
                  <div className="text-sm text-muted-foreground italic whitespace-nowrap">
                    Could be you next
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="w-full rounded-lg bg-blue-50 p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            You May Still Be Owed Funds
          </h3>
          <p className="text-muted-foreground md:text-lg mb-2">
            If your Florida property was sold at a tax deed or foreclosure auction, the county may still be holding surplus funds in your name.
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Free consultation. No upfront fees. You only pay if funds are recovered.
          </p>
          <Button asChild size="lg">
            <Link href="#contact">
              Check My Case for Free <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecoveredChecks;
