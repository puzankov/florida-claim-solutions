import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, MapPin, FileCheck, DollarSign, Scale } from "lucide-react";

interface CheckCase {
  id: number;
  county: string;
  claims: number;
  amount: string;
  images: string[];
  isPlaceholder?: boolean;
}

const cases: CheckCase[] = [
  {
    id: 1,
    county: "Volusia County",
    claims: 3,
    amount: "$98,754.49",
    images: ["/images/check-volusia.png"],
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
    county: "Your County",
    claims: 0,
    amount: "Your Recovery",
    images: [],
    isPlaceholder: true,
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
          {cases.map((caseItem, index) => {
            const CardWrapper = caseItem.isPlaceholder ? "a" : "div";
            const cardProps = caseItem.isPlaceholder 
              ? { href: "#contact", className: "flex flex-col rounded-lg border bg-card shadow-sm overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer group" }
              : { className: "flex flex-col rounded-lg border bg-card shadow-sm overflow-hidden transition-shadow hover:shadow-md" };
            
            return (
              <CardWrapper key={caseItem.id} {...cardProps}>
                {/* Check Image - first row aspect 3/2, second row aspect 2/1 */}
                <div 
                  className="relative bg-muted"
                  style={{ aspectRatio: index < 2 ? "3/2" : "2/1" }}
                >
                  {caseItem.images.length > 0 ? (
                    <Image
                      src={caseItem.images[0]}
                      alt={`Check from ${caseItem.county}`}
                      fill
                      className="object-cover"
                    />
                  ) : caseItem.isPlaceholder ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 flex items-center justify-center">
                      <div className="relative w-[85%] h-[75%] bg-white rounded-sm shadow-md border border-blue-200 p-4 flex flex-col justify-between">
                        {/* Check header line */}
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                              <Scale className="w-4 h-4 text-blue-400" />
                            </div>
                            <div className="space-y-0.5">
                              <div className="text-[10px] font-semibold text-blue-600">Clerk of Circuit Court</div>
                              <div className="h-1.5 w-16 bg-blue-50 rounded" />
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="h-1.5 w-12 bg-blue-50 rounded mb-1" />
                            <div className="flex items-center gap-1 text-blue-400">
                              <DollarSign className="w-4 h-4" />
                              <span className="text-sm font-bold group-hover:text-primary transition-colors">$$$$$</span>
                            </div>
                          </div>
                        </div>
                        {/* Check amount line */}
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-full bg-blue-50 rounded" />
                        </div>
                        {/* Pay to line */}
                        <div className="space-y-1.5">
                          <div className="text-[10px] text-blue-300 uppercase tracking-wide">Pay to the order of</div>
                          <div className="text-sm font-semibold text-blue-600 group-hover:text-primary transition-colors">Your Name Here</div>
                          <div className="h-1.5 w-32 bg-blue-50 rounded" />
                        </div>
                      </div>
                    </div>
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
                    <div className={`text-xl font-bold ${caseItem.isPlaceholder ? "text-blue-600 group-hover:text-primary transition-colors" : "text-primary"}`}>
                      {caseItem.amount}
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span className="text-sm font-medium">{caseItem.county}</span>
                    </div>
                  </div>
                  {caseItem.claims > 0 && (
                    <div className="text-sm text-muted-foreground whitespace-nowrap">
                      1 client, {caseItem.claims} {caseItem.claims === 1 ? "claim" : "claims"}
                    </div>
                  )}
                  {caseItem.isPlaceholder && (
                    <div className="text-sm font-medium text-primary whitespace-nowrap flex items-center gap-1 group-hover:underline">
                      Contact Now <ArrowRight className="w-3 h-3" />
                    </div>
                  )}
                </div>
              </CardWrapper>
            );
          })}
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
