import Header from "@/components/ui/main/Header";
import Hero from "@/components/ui/main/Hero";
import About from "@/components/ui/main/About";
import HowItWorks from "@/components/ui/main/HowItWorks";
import Founder from "@/components/ui/main/Founder";
import Testimonials from "@/components/ui/main/Testimonials";
import FAQ from "@/components/ui/main/FAQ";
import Contacts from "@/components/ui/main/Contacts";
import Footer from "@/components/ui/main/Footer";
import Counties from "@/components/ui/main/Counties";
import {getCountyName, countiesIds} from "@/components/countiesList";

export async function generateStaticParams() {
  return countiesIds.map((countyId) => ({ countyId }));
}

interface Props {params: Promise<{ countyId: string}>}

export async function generateMetadata({ params }: Props) {
  const {countyId} = await params;

  const countyName = getCountyName(countyId, true);
  return {
    title: `Florida Claim Solutions | Surplus Funds Recovery in ${countyName} of Florida`,
    description: `Florida Claim Solutions helps homeowners recover surplus funds from tax sales and foreclosures in ${countyName} of Florida. No upfront costs. Find out if you're owed money today!`,
    alternates: {
      canonical: `https://floridaclaimsolutions.com/county/${countyId}`,
    },
  }
}

const CountyPage = async ({params}: Props) => {

  const {countyId} = await params;
  const countyName = getCountyName(countyId, true);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://floridaclaimsolutions.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": `${countyName} County Surplus Funds Recovery`,
        "item": `https://floridaclaimsolutions.com/county/${countyId}`
      }
    ]
  };

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header isMainPage={true}/>

      <main className="flex-1">
        <Hero county={countyId}/>

        <About county={countyId}/>

        <HowItWorks county={countyId}/>

        <Founder />

        <Testimonials/>

        <FAQ county={countyId}/>

        <Contacts/>

        <Counties county={countyId}/>
      </main>

      <Footer/>
    </div>
  )
}

export default CountyPage;