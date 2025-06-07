import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {getCountyName} from "@/components/countiesList";

interface Props {
  county?: string;
}

const Faq = ({county}: Props) => {
  return <section id="faq" className="w-full py-12 md:py-24">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p
            className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Get answers to common questions about surplus funds recovery.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl py-12 text-lg">
        <Accordion type="single" collapsible className="w-full text-lg">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I know if I&#39;m owed money?</AccordionTrigger>
            <AccordionContent>
              If your property {county ? `in ${getCountyName(county, true)}` : 'in Florida '} was sold at a
              foreclosure auction for more than what was owed on the mortgage and other liens, you may be entitled
              to the surplus funds. We can conduct a <strong>free search</strong> to determine if you have unclaimed funds.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How long does the recovery process take?</AccordionTrigger>
            <AccordionContent>
              The timeline depends on your case and {county ? `${getCountyName(county)} County's` : `county's`} court or clerc schedule —
              most claims are resolved in <strong>60–120 days</strong>.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is there a fee for your services?</AccordionTrigger>
            <AccordionContent className="space-y-2">
              <p>We work on a contingency basis, which means we only get paid if we successfully recover your funds.</p>
              <p>Our typical fee is <strong>20% to 25%</strong>, depending on the complexity of your case.</p>
              <p>If you found us by yourself (through our website or gave us a call), it may even be lower.</p>
              <p>You never pay anything upfront.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>{county ? `Do you serve ${getCountyName(county)} County?` : `What areas do you serve?`}</AccordionTrigger>
            <AccordionContent>
              {county ?
                `Yes — we specialize in surplus recovery across Florida, including ${getCountyName(county, true)}. ` :
                `We currently specialize in surplus funds recovery throughout the state of Florida. `}
              Our team is familiar with the specific laws and procedures in <strong>all Florida counties</strong>.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>What documents will I need to provide?</AccordionTrigger>
            <AccordionContent>
              We’ll guide you step-by-step. Generally, you’ll need:
              <ul className="list-disc list-inside py-5">
                <li>A signed authorization form from us;</li>
                <li>A copy of your ID;</li>
                <li>Proof of property ownership (we can help you find this).</li>
              </ul>

              We handle everything else and help collect missing documents if needed.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </section>;
};

export default Faq;