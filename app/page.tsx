import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  CheckCircle,
  Phone,
  Mail,
  ArrowRight,
  DollarSign,
  MapPin
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ContactForm from "@/components/ui/ContactForm";

const COMPANY_EMAIL = 'info@moneyclaimsolutions.com';
const COMPANY_PHONE = '(239) 314-7687';
const COMPANY_PHONE_LINK = 'tel:+12393147687';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <DollarSign className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold">Money Claim Solutions</span>
          </div>
          <nav className="hidden lg:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About Us
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2 text-primary">
            <Phone className="h-4 w-4" />
            <a href={COMPANY_PHONE_LINK} className="text-sm font-medium hover:underline">
              {COMPANY_PHONE}
            </a>
          </div>
          <Button asChild className="hidden md:inline-flex">
            <Link href="#contact">Free Consultation</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/94e182ce-c91f-4936-9522-290a02549e98-Lc3S05A63tAgDoepeLeXDCqCF2lvuM.webp"
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

        {/* About Us */}
        <section id="about" className="w-full pb-12 md:pb-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl py-12">
              <h2 className="text-3xl font-bold text-center tracking-tighter sm:text-4xl md:text-5xl mb-6">Why Choose Us?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-lg">
                    <span className="font-semibold">Expertise & Experience</span> – We understand the legal system and
                    work efficiently to recover your funds.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-lg">
                    <span className="font-semibold">No Upfront Costs</span> – You only pay when we win your case.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-lg">
                    <span className="font-semibold">Hassle-Free Process</span> – We handle all the paperwork and legal
                    details for you.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
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
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Money Claim Solutions, we specialize in helping individuals reclaim surplus funds that are
                  rightfully theirs. Every year, millions of dollars go unclaimed after property sales, foreclosures,
                  and tax overpayments—money that should be in the hands of those who deserve it.
                </p>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  With years of experience in surplus fund recovery, our team is dedicated to navigating the complex
                  legal process on your behalf, ensuring a smooth and stress-free experience. We work on a no-win,
                  no-fee basis, meaning you don&#39;t pay anything unless we successfully recover your funds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our simple process makes recovering your funds easy and stress-free.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold flex-shrink-0 mx-auto md:mx-0">
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
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold flex-shrink-0 mx-auto md:mx-0">
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
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold flex-shrink-0 mx-auto md:mx-0">
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
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold flex-shrink-0 mx-auto md:mx-0">
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
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold flex-shrink-0 mx-auto md:mx-0">
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
                  Start Your Recovery Process <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how we&#39;ve helped clients recover their rightful funds.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-between rounded-lg border bg-card p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    &laquo;I had no idea I was owed money from my foreclosure. Money Claim Solutions found over $45,000 in
                    surplus funds and handled everything. The process was smooth and professional.&raquo;
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <div className="rounded-full bg-muted p-1">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Client"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground">Miami, FL</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-card p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    &laquo;After my property was sold at auction, I thought that was the end of it. Money Claim Solutions
                    contacted me and recovered over $30,000 in surplus funds I didn&#39;t know existed.&raquo;
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <div className="rounded-full bg-muted p-1">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Client"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Robert Martinez</p>
                    <p className="text-xs text-muted-foreground">Orlando, FL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get answers to common questions about surplus funds recovery.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I know if I&#39;m owed money?</AccordionTrigger>
                  <AccordionContent>
                    If your property was sold at a foreclosure auction for more than what was owed on the mortgage and
                    other liens, you may be entitled to the surplus funds. We can conduct a free search to determine if
                    you have unclaimed funds.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How long does the recovery process take?</AccordionTrigger>
                  <AccordionContent>
                    The timeline varies depending on the complexity of your case and the court&#39;s schedule. Typically,
                    the process takes between 60-120 days from start to finish.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is there a fee for your services?</AccordionTrigger>
                  <AccordionContent>
                    We work on a contingency basis, which means we only get paid if we successfully recover your funds.
                    Our fee is a percentage of the recovered amount, and there are no upfront costs to you.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What areas do you serve?</AccordionTrigger>
                  <AccordionContent>
                    We currently specialize in surplus funds recovery throughout the state of Florida. Our team is
                    familiar with the specific laws and procedures in all Florida counties.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>What documents will I need to provide?</AccordionTrigger>
                  <AccordionContent>
                    You&#39;ll need to provide identification, proof of ownership of the foreclosed property, and sign our
                    authorization forms. We&#39;ll guide you through exactly what&#39;s needed and help you gather any necessary
                    documentation.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact / Get Started */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get Started Today</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take the first step toward recovering your unclaimed funds. Contact us for a free consultation.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Contacts</h3>
                <div className="flex items-center gap-2 text-primary">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href={COMPANY_PHONE_LINK} className="text-lg font-medium hover:underline">
                    {COMPANY_PHONE}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href={`mailto:${COMPANY_EMAIL}`} className="text-lg font-medium hover:underline">
                    {COMPANY_EMAIL}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <address className="not-italic text-lg font-medium">
                    12632 East Tamiami Trail #1029
                    <br />
                    Naples, FL 34113
                  </address>
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-bold">Why Contact Us Today?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>Free initial consultation and eligibility check</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>No recovery, no fee guarantee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>Expert handling of all legal paperwork</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>Personalized service throughout the process</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>Potentially recover thousands of dollars in unclaimed funds</span>
                    </li>
                  </ul>
                </div>

              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <ContactForm/>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex flex-col items-center gap-2 md:items-start md:gap-1">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <DollarSign className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold">Money Claim Solutions</span>
            </div>
            <p className="text-xs text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Money Claim Solutions. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4 text-primary">
            <Phone className="h-4 w-4" />
            <a href={COMPANY_PHONE_LINK} className="text-lg font-medium hover:underline">
              {COMPANY_PHONE}
            </a>
          </div>
          {/*<div className="flex gap-4">*/}
          {/*  <Link href="#" className="text-muted-foreground hover:text-foreground">*/}
          {/*    <Facebook className="h-5 w-5" />*/}
          {/*    <span className="sr-only">Facebook</span>*/}
          {/*  </Link>*/}
          {/*  <Link href="#" className="text-muted-foreground hover:text-foreground">*/}
          {/*    <Twitter className="h-5 w-5" />*/}
          {/*    <span className="sr-only">Twitter</span>*/}
          {/*  </Link>*/}
          {/*  <Link href="#" className="text-muted-foreground hover:text-foreground">*/}
          {/*    <Instagram className="h-5 w-5" />*/}
          {/*    <span className="sr-only">Instagram</span>*/}
          {/*  </Link>*/}
          {/*  <Link href="#" className="text-muted-foreground hover:text-foreground">*/}
          {/*    <Linkedin className="h-5 w-5" />*/}
          {/*    <span className="sr-only">LinkedIn</span>*/}
          {/*  </Link>*/}
          {/*</div>*/}
          <nav className="flex gap-4 md:gap-6">
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

