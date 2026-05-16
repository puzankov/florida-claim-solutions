"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Miami, FL",
    avatar: "/images/avatar2.jpg",
    text: "I had no idea I was owed money from my foreclosure. Florida Claim Solutions found over $45,000 in surplus funds and handled everything. The process was smooth and professional.",
  },
  {
    name: "Robert Martinez",
    location: "Orlando, FL",
    avatar: "/images/avatar1.jpg",
    text: "After my property was sold at auction, I thought that was the end of it. Florida Claim Solutions contacted me and recovered $31,252 in surplus funds I didn't know existed.",
  },
  {
    name: "Linda Perez",
    location: "Tampa, FL",
    avatar: "/images/avatar3.jpg",
    text: "I received a letter from Florida Claim Solutions and honestly thought it was too good to be true. But they walked me through the entire process and helped recover over $18,000 that I never knew was waiting for me.",
  },
  {
    name: "Michael Thompson",
    location: "Jacksonville, FL",
    avatar: "/images/avatar4.jpg",
    text: "Florida Claim Solutions made everything simple and stress-free. They kept me updated the whole time and successfully recovered $67,400 from my foreclosure surplus funds.",
  },
  {
    name: "Angela Brooks",
    location: "Fort Lauderdale, FL",
    avatar: "/images/avatar5.jpg",
    text: "After losing my property, I thought everything was gone. I was shocked to learn there was still money owed to me. Florida Claim Solutions handled everything professionally and recovered $24,860 for me.",
  },
  {
    name: "David Wilson",
    location: "Naples, FL",
    avatar: "/images/avatar6.jpg",
    text: "I ignored several letters from other companies, but Florida Claim Solutions took the time to explain the process clearly. In the end, they helped me recover $52,130 in surplus funds.",
  },
];

const Stars = () => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">

        <div className="flex flex-col items-center justify-center space-y-4 text-center" data-animate="fade-up">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See how we&apos;ve helped clients recover their rightful funds
            </p>
          </div>
        </div>

        <div className="relative mt-12 mx-auto max-w-2xl" data-animate="fade-up" data-animate-delay="100">
          {/* Track */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="min-w-full">
                  <div className="flex flex-col justify-between rounded-xl border bg-card p-8 shadow-sm h-full min-h-[280px]">
                    <div className="space-y-4">
                      <Stars />
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        &laquo;{t.text}&raquo;
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-4">
                      {t.avatar ? (
                        <div className="rounded-full bg-muted p-1">
                          <Image src={t.avatar} alt={t.name} width={44} height={44} className="rounded-full" />
                        </div>
                      ) : (
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                          {t.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-semibold">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-sm hover:bg-muted transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-sm hover:bg-muted transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
