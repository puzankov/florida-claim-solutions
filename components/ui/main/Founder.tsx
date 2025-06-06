import Image from "next/image";

const Founder = () => {
  return <section id="founder" className="w-full py-12 md:py-24">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Sergio Puzankov</h2>
          <p
            className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Founder of Florida Claim Solutions
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-5xl py-12">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-4 text-center lg:text-left">
            <p className="text-lg">
              I&#39;m Sergio Puzankov, the founder of Florida Claim Solutions.
              I started this company with one goal in mind: to make surplus fund recovery simple, transparent, and
              stress-free. I&#39;ve built a trusted network of legal and financial professionals to ensure every
              claim
              is handled efficiently, giving my clients the best chance to recover their funds.
            </p>
            <p className="text-lg">
              At Florida Claim Solutions, we believe in honesty, integrity, and results. If you think you may be
              owed money, I&#39;d love to help. Let&#39;s get started today!
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/images/sergi2.png"
              alt="Sergio Puzankov, Founder of Florida Claim Solutions"
              width={350}
              height={377}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default Founder;