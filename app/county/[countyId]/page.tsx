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
import {getCountyName} from "@/components/countiesList";

interface Props {params: Promise<{ countyId: string}>}

export async function generateMetadata({ params }: Props) {
  const {countyId} = await params;

  const countyName = getCountyName(countyId, true);
  return {
    title: `Florida Claim Solutions | Surplus Funds Recovery in ${countyName} of Florida`,
    description: `Florida Claim Solutions helps homeowners recover surplus funds from tax sales and foreclosures in ${countyName} of Florida. No upfront costs. Find out if you're owed money today!`,
  }
}

const CountyPage = async ({params}: Props) => {

  const {countyId} = await params;

  return (
    <div className="flex min-h-screen flex-col">

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