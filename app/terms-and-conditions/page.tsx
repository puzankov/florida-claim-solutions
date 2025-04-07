import {CheckCircle, Mail, XCircle} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {COMPANY_EMAIL} from "@/components/ui/constants";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const TermsAndConditions = () => {
  return <>
    <Header/>

    <main className="flex-1 py-12 md:py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
            Terms and Conditions
          </h1>

          <div className="prose prose-blue max-w-none">
            <p className="text-lg">
              Welcome to Florida Claim Solutions (Marco Concept LLC). These Terms and Conditions outline the rules and regulations for using
              our services. By accessing our website and utilizing our services, you agree to the following terms. If
              you do not agree with any part of these terms, please refrain from using our services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Services Provided</h2>
            <p>
              Florida Claim Solutions assists homeowners in recovering surplus funds resulting from foreclosure sales.
              Our services operate on a contingency basis, meaning clients do not pay upfront fees—our fee is only
              deducted from successfully recovered funds.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Client Responsibilities</h2>
            <p>By engaging with our services, you agree to:</p>
            <ul className="space-y-2 my-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Provide accurate and complete information regarding your foreclosure case.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Cooperate with our team by signing necessary documents and providing requested details.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>
                    Understand that fund recovery is subject to legal processes and timeframes set by relevant
                    authorities.
                  </span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. No Guarantee of Recovery</h2>
            <p>
              While we strive to recover funds on your behalf, Florida Claim Solutions does not guarantee the success of
              any claim. Recovery is subject to legal procedures, agency decisions, and case-specific circumstances.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Privacy & Data Protection</h2>
            <p>
              Your privacy is important to us. We do not sell, share, or distribute your personal information to third
              parties. All data provided is used solely for the purpose of surplus fund recovery and is handled in
              compliance with applicable privacy laws.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Limitation of Liability</h2>
            <p>
              Florida Claim Solutions is not liable for any losses, damages, or delays resulting from external factors,
              including court decisions, government processing times, or incorrect information provided by the client.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Termination of Services</h2>
            <p>We reserve the right to terminate services if:</p>
            <ul className="space-y-2 my-4">
              <li className="flex items-start gap-2">
                <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <span>A client provides false or misleading information.</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <span>A client refuses to cooperate in the claims process.</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <span>We determine that a case is not eligible for recovery.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Modifications to Terms</h2>
            <p>
              Florida Claim Solutions may update these Terms and Conditions at any time. Any changes will be reflected
              on this page, and continued use of our services constitutes acceptance of the updated terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Contact Us</h2>
            <p>For any questions regarding these Terms and Conditions, please contact us at:</p>
            <p className="flex items-center gap-2 my-4">
              <Mail className="h-5 w-5 text-primary" />
              <a href={`mailto:${COMPANY_EMAIL}`} className="text-primary hover:underline">
                {COMPANY_EMAIL}
              </a>
            </p>

            <p className="mt-8 font-medium">
              By using our services, you acknowledge that you have read, understood, and agreed to these terms.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>

    <Footer/>
  </>;
};

export default TermsAndConditions;