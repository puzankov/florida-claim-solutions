"use client";

import {useState} from "react";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {SubmitHandler, useForm} from "react-hook-form";
import HCaptcha from '@hcaptcha/react-hcaptcha';
import Link from "next/link";

type Inputs = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
  subject: string;
  access_key: string;
  "h-captcha-response": string;
  "opt-in": boolean;
  "opt-in2": boolean;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
  } = useForm<Inputs>();

  const [result, setResult] = useState('');
  const onHCaptchaChange = (token: string) => {
    setValue("h-captcha-response", token);
  };

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    setResult("Sending....");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData, null, 2),
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return <>
    <h3 className="text-xl font-bold mb-4">Request Free Consultation</h3>
    {result && (<div>{result}</div>)}
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Input type="hidden" {...register("subject")} value="New Form Submission"/>
      <Input type="hidden" {...register("access_key")} value="aeac23d8-3bfa-4d27-b670-bff19c9708fe"/>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="first-name"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            First Name
          </label>
          <Input
            id="first-name"
            placeholder="Enter your first name"
            {...register("firstname", {
              maxLength: 40,
            })}
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="last-name"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Last Name
          </label>
          <Input
            id="last-name"
            placeholder="Enter your last name"
            {...register("lastname", {
              maxLength: 40,
            })}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Email *
        </label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          {...register("email", {
            required: "Enter your email",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Please enter a valid email",
            },
          })}
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="phone"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Phone
        </label>
        <Input
          id="phone"
          type="tel"
          placeholder="Enter your phone number"
          {...register("phone", {
            maxLength: 20,
          })}
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Tell us more about your situation"
          {...register("message")}
        />
      </div>
      {/* Add the opt-in checkbox here */}
      <div className="flex items-start gap-2 mt-4 mb-2">
        <input
          type="checkbox"
          id="opt-in"
          {...register("opt-in")}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
        />
        <label htmlFor="opt-in" className="text-sm text-muted-foreground">
          {/*Opt-in for Messages and Email Communication*/}
          <p className="text-xs mt-1">
            I consent to receive marketing text messages from Money&nbsp;Claim&nbsp;Solutions at the phone number provided.
            Frequency may vary. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out.
          </p>
        </label>
      </div>

      <div className="flex items-start gap-2 mt-4 mb-2">
        <input
          type="checkbox"
          id="opt-in2"
          {...register("opt-in2")}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
        />
        <label htmlFor="opt-in2" className="text-sm text-muted-foreground">
          {/*Opt-in for Messages and Email Communication*/}
          <p className="text-xs mt-1">
            I consent to receive non-marketing text messages from Money&nbsp;Claim&nbsp;Solutions about my request updates, meeting reminders etc. Message & data rates may apply.
          </p>
        </label>
      </div>

      <div className="flex items-start gap-2 mt-4 mb-2 text-sm">
        <Link href="/privacy/" target="_blank" className="text-primary hover:underline">
          Privacy Policy
        </Link> |
        <Link href="/terms-and-conditions/" target="_blank" className="text-primary hover:underline">
          Terms of Service
        </Link>
      </div>

      <div className="space-y-2">
        <HCaptcha
          sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
          reCaptchaCompat={false}
          onVerify={onHCaptchaChange}
        />
      </div>
      <Button type="submit" className="w-full">
        Submit
      </Button>
      {/*<p className="text-xs text-muted-foreground text-center">*/}
      {/*  By submitting this form, you agree to our{" "}*/}
      {/*  <Link href="#" className="underline underline-offset-2">*/}
      {/*    Privacy Policy*/}
      {/*  </Link>{" "}*/}
      {/*  and{" "}*/}
      {/*  <Link href="#" className="underline underline-offset-2">*/}
      {/*    Terms of Service*/}
      {/*  </Link>*/}
      {/*  .*/}
      {/*</p>*/}
    </form>
  </>;
};

export default ContactForm;
