import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {COMPANY_EMAIL} from "@/components/ui/constants";

const Privacy = () => {
  return <>
    <Header/>

    <main className="flex-1 py-12 md:py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
            Privacy Policy
          </h1>

          <div className="prose prose-blue max-w-none">
            <p className="text-lg">
              Marco Concept LLC d/b/a Money Claim Solutions respects your privacy. By opting into our SMS messaging service, you agree to the
              following terms regarding how we handle your data.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Data Collection</h2>
            <p>
              We collect your name, email address, and mobile phone number when you agree to receive SMS
              notifications. This information is collected via our website form.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Data Usage</h2>
            <p>
              We use your data solely to communicate via SMS about customer care messages related to Money Claim
              Solutions services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
            <p>
              We implement secure storage measures to protect your personal data from unauthorized access, disclosure,
              or misuse.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Data Retention</h2>
            <p>
              We retain your information as long as you are subscribed to our SMS service. You may request deletion at
              any time by contacting us.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Message and Data Rates</h2>
            <p>
              Message and data rates may apply. Your mobile carrier may charge fees for sending or receiving text
              messages, particularly if you do not have an unlimited texting or data plan. Message frequency varies.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Information</h2>
            <p>
              For assistance, contact Money Claim Solutions at{" "}
              <a href={`mailto:${COMPANY_EMAIL}`} className="text-primary hover:underline">
                {COMPANY_EMAIL}
              </a>
              .
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Opt-Out Policy</h2>
            <p>
              You can opt out of receiving SMS messages at any time by replying STOP or CANCEL to our phone number or
              by emailing us at{" "}
              <a href={`mailto:${COMPANY_EMAIL}`} className="text-primary hover:underline">
                {COMPANY_EMAIL}
              </a>
              . After unsubscribing, you will receive a final SMS confirming your removal from our messaging list. We
              will remove your number from our list within 24 hours.
            </p>
            <p>
              If you need additional assistance, you can reply HELP to receive a message with our contact details,
              including our phone number, email, and website.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Non-Sharing Clause</h2>
            <p>
              We do not sell, rent, or share collected mobile numbers or any personal data with third parties for
              marketing or promotional purposes.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on our website.
              Continued use of our services after updates means you accept the revised policy.
            </p>

            <p className="mt-8">
              For any questions regarding our privacy practices, please contact us at{" "}
              <a href={`mailto:${COMPANY_EMAIL}`} className="text-primary hover:underline">
                {COMPANY_EMAIL}
              </a>
              .
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

export default Privacy;