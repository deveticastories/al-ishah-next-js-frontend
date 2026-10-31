import Image from "next/image";
import Link from "next/link";
import {
  FacebookIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from "@/components/icons/Icons";
import { Gradients } from "@/utils/Colors";
import { COMPANY_NAME, CONTACT_INFO, COPYRIGHT_YEAR, FOOTER_LINKS, NAV_LINKS } from "@/utils/Constants";
import { Images } from "@/utils/Images";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "LinkedIn", href: "#", Icon: LinkedInIcon },
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "Twitter", href: "#", Icon: TwitterIcon },
];

type FooterProps = {
  // Page being viewed; it is left out of "Quick Links"
  currentHref: string;
  className?: string;
};

export default function Footer({ currentHref, className = "border-t border-footer-divider" }: FooterProps) {
  const columns = [
    {
      title: "Quick Links",
      links: NAV_LINKS.filter((link) => link.href !== currentHref).map(({ label, href }) => ({ label, href })),
    },
    ...FOOTER_LINKS,
  ];
  const contactItems = [
    ...CONTACT_INFO.emails.map((email) => ({ Icon: MailIcon, label: email, href: `mailto:${email}` })),
    ...CONTACT_INFO.phones.map((phone) => ({ Icon: PhoneIcon, label: phone, href: `tel:${phone.replace(/\s/g, "")}` })),
    { Icon: GlobeIcon, label: CONTACT_INFO.website, href: `https://${CONTACT_INFO.website}` },
  ];

  return (
    <footer className={className}>
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-4 pb-11 pt-12 sm:px-8 lg:flex-row lg:justify-between lg:pl-[141px] lg:pr-[120px]">
        <div>
          <Image src={Images.logo} alt={COMPANY_NAME} className="h-[75px] w-auto" />

          <ul className="mt-9 space-y-[17px]">
            {contactItems.map(({ Icon, label, href }) => (
              <li key={label}>
                <a href={href} className="flex items-center gap-2 text-body text-footer-text hover:text-primary">
                  <Icon className="size-[14px] text-maroon" />
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-[34px] flex gap-[18px]">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex size-[34px] items-center justify-center bg-white text-social transition-colors hover:text-primary"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 pt-11 sm:grid-cols-3 lg:flex lg:gap-0">
          {columns.map((column, index) => (
            <div
              key={column.title}
              className={index === 1 ? "lg:ml-[187px]" : index === 2 ? "lg:ml-[144px]" : ""}
            >
              <h3 className="font-heading text-[22px] font-medium tracking-[-0.02em] text-black">
                {column.title}
              </h3>
              <ul className="mt-6 space-y-[14px]">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-small text-footer-text hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex min-h-8 items-center justify-center px-4 py-1.5 text-center text-small text-white"
        style={{ background: Gradients.copyright }}
      >
        © {COPYRIGHT_YEAR} {COMPANY_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
