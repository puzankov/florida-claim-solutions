import Image from "next/image";

const Testimonials = () => {
  return <section id="testimonials" className="w-full py-12 md:py-24 bg-muted">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
          <p
            className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            See how we&#39;ve helped clients recover their rightful funds.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-between rounded-lg border bg-card p-6 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <p className="text-muted-foreground">
              &laquo;I had no idea I was owed money from my foreclosure. Florida Claim Solutions found over
              $45,000 in
              surplus funds and handled everything. The process was smooth and professional.&raquo;
            </p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="rounded-full bg-muted p-1">
              <Image
                src="/images/avatar2.png"
                alt="Client"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div>
              <p className="text-sm font-medium">Sarah Johnson</p>
              <p className="text-xs text-muted-foreground">Miami, FL</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between rounded-lg border bg-card p-6 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <p className="text-muted-foreground">
              &laquo;After my property was sold at auction, I thought that was the end of it. Florida Claim
              Solutions
              contacted me and recovered $31,252 in surplus funds I didn&#39;t know existed.&raquo;
            </p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="rounded-full bg-muted p-1">
              <Image
                src="/images/avatar1.png"
                alt="Client"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div>
              <p className="text-sm font-medium">Robert Martinez</p>
              <p className="text-xs text-muted-foreground">Orlando, FL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default Testimonials;