"use client";

import floridaCounties from "@/components/countiesList"
import {useState} from "react";
import {Input} from "@/components/ui/input";


const Counties = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter counties based on search term
  const filteredCounties: string[] = floridaCounties.filter((county) => county.toLowerCase().includes(searchTerm.toLowerCase()));

  return <>
    {/* Florida Counties Section */}
    <section id="counties" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Florida Counties We Serve
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We provide surplus fund recovery services across all 67 counties in Florida. Search for your county
              below to learn more about our services in your area.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl pt-12">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Search for your county..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-12 py-3 text-lg transition-all duration-300 focus:scale-105 focus:shadow-lg"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Clear search"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                  >
                    <path
                      d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              )}
            </div>
            {searchTerm && (
              <p className="text-center mt-2 text-sm text-muted-foreground">
                {filteredCounties.length} counties found
              </p>
            )}
          </div>

          {/* Counties Grid - Scrollable on mobile */}
          <div className="max-h-[400px] overflow-y-auto pr-1 pb-2 md:max-h-none md:overflow-visible">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {filteredCounties.map((county, index) => (
                <a
                  key={county}
                  className="group relative p-2 rounded-lg border bg-card hover:bg-primary/5 border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg text-left"
                  href="#"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-sm">
                    {county}
                  </h3>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  </>;
};

export default Counties;