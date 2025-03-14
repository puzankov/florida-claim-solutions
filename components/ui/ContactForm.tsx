"use client";

import {useState} from "react";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {SubmitHandler, useForm} from "react-hook-form";
import HCaptcha from '@hcaptcha/react-hcaptcha';

type Inputs = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
  subject: string;
  access_key: string;
  "h-captcha-response": string;
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
              required: "First name is required",
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
              required: "Last name is required",
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
          Email
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
            required: "Phone is required",
            maxLength: 20,
          })}
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Message (Optional)
        </label>
        <Textarea
          id="message"
          placeholder="Tell us more about your situation"
          {...register("message")}
        />
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
