import type { Metadata } from "next";
import Footer from "@/components/ui/main/Footer";
import Header from "@/components/ui/main/Header";
import Counties from "@/components/ui/main/Counties";
import Hero from "@/components/ui/main/Hero";
import About from "@/components/ui/main/About";
import HowItWorks from "@/components/ui/main/HowItWorks";
import Founder from "@/components/ui/main/Founder";
import Testimonials from "@/components/ui/main/Testimonials";
import RecoveredChecks from "@/components/ui/main/RecoveredChecks";
import FAQ from "@/components/ui/main/FAQ";
import Contacts from "@/components/ui/main/Contacts";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://floridaclaimsolutions.com",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I know if I'm owed money?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If your property in Florida was sold at a foreclosure auction for more than what was owed on the mortgage and other liens, you may be entitled to the surplus funds. We can conduct a free search to determine if you have unclaimed funds."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the recovery process take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The timeline depends on your case and the county's court or clerk schedule — most claims are resolved in 60–120 days."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a fee for your services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work on a contingency basis, which means we only get paid if we successfully recover your funds. Our typical fee is 20% to 25%, depending on the complexity of your case. If you found us by yourself (through our website or gave us a call), it may even be lower. You never pay anything upfront."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We currently specialize in surplus funds recovery throughout the state of Florida. Our team is familiar with the specific laws and procedures in all Florida counties."
      }
    },
    {
      "@type": "Question",
      "name": "What documents will I need to provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We'll guide you step-by-step. Generally, you'll need: a signed authorization form from us, a copy of your ID, and proof of property ownership (we can help you find this). We handle everything else and help collect missing documents if needed."
      }
    }
  ]
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header isMainPage={true}/>

      <main className="flex-1">
        <Hero/>

        <About/>

        <HowItWorks/>

        <Founder/>

        <Testimonials/>

        <RecoveredChecks/>

        <FAQ/>

        <Contacts/>
      </main>

      <Counties/>

      <Footer/>
    </div>
  )
}

