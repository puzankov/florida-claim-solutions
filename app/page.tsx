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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">

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

