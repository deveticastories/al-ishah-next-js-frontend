"use client";

import { startTransition, useActionState, useEffect, useRef, type FormEvent } from "react";
import { sendEnquiry, type EnquiryState } from "@/actions/sendEnquiry";
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
  const [state, formAction, pending] = useActionState<EnquiryState, FormData>(sendEnquiry, {
    status: "idle",
  });
  const formRef = useRef<HTMLFormElement>(null);

  // Submit via onSubmit instead of action={...} so React doesn't auto-reset the form on errors
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => formAction(formData));
  };

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={`grid grid-cols-1 sm:grid-cols-2 ${className}`}>
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
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
        disabled={pending}
        className={`h-[70px] rounded disabled:cursor-not-allowed disabled:opacity-70 font-body text-body font-medium text-white transition-opacity hover:opacity-90 sm:col-span-2 ${submitClassName}`}
        style={{ background: Gradients.sendButton }}
      >
        {pending ? "Sending..." : "Send Enquiry"}
      </button>
      {state.status === "success" && (
        <p role="status" className="text-body text-dark sm:col-span-2">
          Thank you! Our team will get back to you shortly.
        </p>
      )}
      {state.status === "error" && (
        <p role="alert" className="text-body text-red-600 sm:col-span-2">
          {state.message}
        </p>
      )}
    </form>
  );
}
