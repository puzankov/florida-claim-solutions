import {CheckCircle, Mail, MapPin, Phone} from "lucide-react";
import {COMPANY_EMAIL, COMPANY_PHONE, COMPANY_PHONE_LINK} from "@/components/ui/constants";
import ContactForm from "@/components/ui/main/ContactForm";

const Contacts = () => {
  return <section id="contact" className="w-full py-12 md:py-24 bg-muted">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get Started Today</h2>
          <p
            className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Take the first step toward recovering your unclaimed funds. Contact us for a free consultation.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold">Contacts</h3>
          <div className="flex items-center gap-2 text-primary">
            <Phone className="h-5 w-5 text-primary"/>
            <a href={COMPANY_PHONE_LINK} className="text-lg font-medium hover:underline">
              {COMPANY_PHONE}
            </a>
          </div>
          <div className="flex items-center gap-2 text-primary">
            <Mail className="h-5 w-5 text-primary"/>
            <a href={`mailto:${COMPANY_EMAIL}`} className="text-lg font-medium hover:underline">
              {COMPANY_EMAIL}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary mt-0.5"/>
            <address className="not-italic text-lg font-medium">
              12632 East Tamiami Trail #1029
              <br/>
              Naples, FL 34113
            </address>
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-bold">Why Contact Us Today?</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5"/>
                <span>Free initial consultation and eligibility check</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5"/>
                <span>No recovery, no fee guarantee</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5"/>
                <span>Expert handling of all legal paperwork</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5"/>
                <span>Personalized service throughout the process</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5"/>
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
  </section>;
};

export default Contacts;