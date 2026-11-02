"use client";

import { useState, type FormEvent } from "react";
import { Gradients } from "@/utils/Colors";

const inputClass =
  "w-full rounded-md border border-input bg-white px-5 font-body text-body text-dark placeholder:text-footer-text focus:border-primary focus:outline-none";

type EnquiryFormProps = {
  className?: string;
  messageClassName?: string;
  submitClassName?: string;
};

export default function EnquiryForm({
  className = "gap-x-3 gap-y-[17px]",
  messageClassName = "h-[160px]",
  submitClassName = "",
}: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: send the enquiry to an API route / email service
    event.currentTarget.reset();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className={`grid grid-cols-1 sm:grid-cols-2 ${className}`}>
      <input name="fullName" required placeholder="Full Name" aria-label="Full Name" className={`${inputClass} h-[70px]`} />
      <input name="companyName" placeholder="Company Name" aria-label="Company Name" className={`${inputClass} h-[70px]`} />
      <input name="email" type="email" required placeholder="Email Address" aria-label="Email Address" className={`${inputClass} h-[70px]`} />
      <input name="phone" type="tel" placeholder="Contact Number" aria-label="Contact Number" className={`${inputClass} h-[70px]`} />
      <input
        name="interest"
        placeholder="Product or Brand of Interest"
        aria-label="Product or Brand of Interest"
        className={`${inputClass} h-[70px] sm:col-span-2`}
      />
      <textarea
        name="message"
        required
        placeholder="Message"
        aria-label="Message"
        className={`${inputClass} resize-none py-5 sm:col-span-2 ${messageClassName}`}
      />
      <button
        type="submit"
        className={`h-[70px] rounded font-body text-body font-medium text-white transition-opacity hover:opacity-90 sm:col-span-2 ${submitClassName}`}
        style={{ background: Gradients.sendButton }}
      >
        Send Enquiry
      </button>
      {submitted && (
        <p role="status" className="text-body text-dark sm:col-span-2">
          Thank you! Our team will get back to you shortly.
        </p>
      )}
    </form>
  );
}
