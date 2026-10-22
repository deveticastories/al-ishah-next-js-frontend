import { CONTACT_INFO } from "./Constants";

export type ContactLine = { value: string; href?: string };

// Address and hours are still placeholder copy in the Figma design
export const CONTACT_DETAILS: { title: string; lines: ContactLine[] }[] = [
  {
    title: "Address",
    lines: [
      {
        value:
          "Lorem ipsum dolor sit amet consectetur. Consequat quis et consectetur sit. Quam nunc elit ullamcorper ultricies.",
      },
    ],
  },
  {
    title: "Phone",
    lines: CONTACT_INFO.phones.map((phone) => ({ value: phone, href: `tel:${phone.replace(/\s/g, "")}` })),
  },
  { title: "Email", lines: CONTACT_INFO.emails.map((email) => ({ value: email, href: `mailto:${email}` })) },
  { title: "Business Hours", lines: [{ value: "[Working days and hours]" }] },
];
