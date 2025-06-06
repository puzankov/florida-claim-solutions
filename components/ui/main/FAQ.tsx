import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

interface Props {
}

const Faq = ({}: Props) => {
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
              If your property was sold at a foreclosure auction for more than what was owed on the mortgage and
              other liens, you may be entitled to the surplus funds. We can conduct a free search to determine if
              you have unclaimed funds.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How long does the recovery process take?</AccordionTrigger>
            <AccordionContent>
              The timeline varies depending on the complexity of your case and the court&#39;s schedule.
              Typically,
              the process takes between 60-120 days from start to finish.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is there a fee for your services?</AccordionTrigger>
            <AccordionContent>
              We work on a contingency basis, which means we only get paid if we successfully recover your funds.
              Our fee is a percentage of the recovered amount, and there are no upfront costs to you.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>What areas do you serve?</AccordionTrigger>
            <AccordionContent>
              We currently specialize in surplus funds recovery throughout the state of Florida. Our team is
              familiar with the specific laws and procedures in all Florida counties.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>What documents will I need to provide?</AccordionTrigger>
            <AccordionContent>
              You&#39;ll need to provide identification, proof of ownership of the foreclosed property, and sign
              our
              authorization forms. We&#39;ll guide you through exactly what&#39;s needed and help you gather any
              necessary
              documentation.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </section>;
};

export default Faq;