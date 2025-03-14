"use client";

import {FormEvent, useState} from "react";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const ContactForm = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    const form = event.target as HTMLFormElement
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(form);

    formData.append("access_key", "aeac23d8-3bfa-4d27-b670-bff19c9708fe");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      form.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return <>
    <h3 className="text-xl font-bold mb-4">Request Free Consultation</h3>
    {result && (<div>Your request sent!</div>)}
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="first-name"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            First Name
          </label>
          <Input id="first-name" name="firstname" placeholder="Enter your first name" />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="last-name"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Last Name
          </label>
          <Input id="last-name" name="lastname" placeholder="Enter your last name" />
        </div>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Email
        </label>
        <Input id="email" name="email" type="email" placeholder="Enter your email" />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="phone"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Phone
        </label>
        <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Message (Optional)
        </label>
        <Textarea id="message" name="message" placeholder="Tell us more about your situation" />
      </div>
      <Button type="submit" className="w-full">
        Submit
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to our{" "}
        <Link href="#" className="underline underline-offset-2">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="#" className="underline underline-offset-2">
          Terms of Service
        </Link>
        .
      </p>
    </form>
  </>;
};

export default ContactForm;