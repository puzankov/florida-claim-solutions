import Logo from "@/components/ui/Logo";
import Link from "next/link";
import {Phone} from "lucide-react";
import {Button} from "@/components/ui/button";
import {COMPANY_PHONE_LINK,COMPANY_PHONE} from "@/components/ui/constants";

interface Props {
  isMainPage?: boolean;
}

const Header = ({isMainPage}: Props) => {
  return <>
    {/* Header/Navigation */}
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-10 w-10 sm:w-8 sm:h-8 flex items-center justify-center text-primary">
            <Logo/>
          </div>
          <span className="text-xl font-bold whitespace-nowrap">Florida Claim Solutions</span>
        </Link>
        {isMainPage && (<nav className="hidden lg:flex gap-6">
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
        </nav>)}
        <div className="flex items-center gap-2 text-primary">
          <Phone className="h-4 w-4 hidden md:inline-flex" />
          <a href={COMPANY_PHONE_LINK} className="text-sm font-medium hover:underline whitespace-nowrap">
            {COMPANY_PHONE}
          </a>
        </div>
        <Button asChild className="hidden md:inline-flex">
          <Link href="#contact">Free Consultation</Link>
        </Button>
      </div>
    </header>
  </>;
};

export default Header;