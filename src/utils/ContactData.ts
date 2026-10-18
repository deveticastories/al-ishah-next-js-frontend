import { CONTACT_INFO } from "./Constants";

// Address and hours are still placeholder copy in the Figma design
export const CONTACT_DETAILS = [
  {
    title: "Address",
    value:
      "Lorem ipsum dolor sit amet consectetur. Consequat quis et consectetur sit. Quam nunc elit ullamcorper ultricies.",
  },
  { title: "Phone", value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}` },
  { title: "Email", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
  { title: "Business Hours", value: "[Working days and hours]" },
];
