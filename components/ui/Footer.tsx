import Logo from "@/components/ui/Logo";
import {Phone} from "lucide-react";
import Link from "next/link";
import {COMPANY_PHONE_LINK,COMPANY_PHONE} from "@/components/ui/constants";

const Footer = () => {
  return <>
    {/* Footer */}
    <footer className="w-full border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
        <div className="flex flex-col items-center gap-2 md:items-start md:gap-1">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 flex items-center justify-center text-primary">
              <Logo/>
            </div>
            <span className="text-lg font-bold">Florida Claim Solutions</span>
          </div>
          <p className="text-xs text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Marco Concept LLC <br/>d/b/a Florida Claim Solutions. All rights reserved.
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
          <Link href="/privacy/" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions/" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  </>;
};

export default Footer;