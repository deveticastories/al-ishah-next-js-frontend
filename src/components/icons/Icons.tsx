type IconProps = { className?: string };

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M2 5h20v14H2V5Zm2 2.2V17h16V7.2l-8 5.6-8-5.6ZM5.4 7l6.6 4.6L18.6 7H5.4Z" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z" />
    </svg>
  );
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.9 6h-2.9a15.6 15.6 0 0 0-1.4-3.6A8 8 0 0 1 18.9 8ZM12 4c.8 1.2 1.5 2.5 1.9 4h-3.8c.4-1.5 1.1-2.8 1.9-4ZM4.3 14a8.2 8.2 0 0 1 0-4h3.4a16.5 16.5 0 0 0 0 4H4.3Zm.8 2h2.9c.3 1.3.8 2.5 1.4 3.6A8 8 0 0 1 5.1 16Zm2.9-8H5.1a8 8 0 0 1 4.3-3.6C8.8 5.5 8.3 6.7 8 8Zm4 12c-.8-1.2-1.5-2.5-1.9-4h3.8c-.4 1.5-1.1 2.8-1.9 4Zm2.3-6H9.7a14.7 14.7 0 0 1 0-4h4.6a14.7 14.7 0 0 1 0 4Zm.3 5.6c.6-1.1 1.1-2.3 1.4-3.6h2.9a8 8 0 0 1-4.3 3.6Zm1.7-5.6a16.5 16.5 0 0 0 0-4h3.4a8.2 8.2 0 0 1 0 4h-3.4Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4 9h3.6v11H4V9Zm1.8-5.5a2 2 0 1 1 0 4.1 2 2 0 0 1 0-4.1ZM9.8 9h3.4v1.5h.1c.5-.9 1.6-1.8 3.3-1.8 3.6 0 4.2 2.3 4.2 5.3v6h-3.6v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V20H9.8V9Z" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.5 1.6-1.5h1.7V3.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.6V13h2.8v8h3.1Z" />
    </svg>
  );
}

export function TwitterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 5.9c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5 0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.9.1.5 1.6 2 2.8 3.8 2.9A8.2 8.2 0 0 1 2 18.4 11.6 11.6 0 0 0 8.3 20.2c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1Z" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M5 9l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ShieldCheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M12 2.5 4 5.5v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10v-6l-8-3Z" strokeLinejoin="round" />
      <path d="m8.5 12 2.5 2.5 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HandshakeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M1 6h4l1 10H1zM31 6h-4l-1 10h5z" fill="currentColor" stroke="none" />
      <path d="M6 7.5c2.5 0 4.5-1.5 7-1.5 1.5 0 2.5.6 3.5 1.5L12 11.5c-.8.8-.5 2 .6 2.2 1 .2 2-.4 2.8-1.1l2.6-2.4 6.5 5.8M26 7.5c-1.8 0-3.4-.9-5.3-1.4M6 15.5l4.5 4c.8.7 2 .6 2.6-.2M14 18.5l1.5 1.3c.8.7 2 .6 2.6-.2M17.5 16.5l1.8 1.5c.8.7 2 .6 2.6-.2l1.7-1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GlobeFilledIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22Zm-1.2 2.6c.3.8-.2 1.6-1 2-.9.5-1.1 1.4-.6 2.2.6.9.1 2-1 2.2-1.3.2-2 1.2-1.6 2.4.3 1 .1 1.9-.6 2.5-.4-1-.6-2-.6-3 0-4.4 3.1-8.1 7.3-8.9-.7.2-1.4.4-1.9.6Zm6.6 14.6c-.6-.8-.5-2 .2-2.8.8-.9.6-2.3-.4-2.9-1-.6-2.3-.3-3 .6-.6.8-1.8.9-2.5.1-.7-.8-.5-2 .4-2.6 1.2-.8 1.3-2.4.2-3.3-.4-.3-.6-.8-.6-1.3 3.5.9 6.1 4.1 6.1 7.9 0 1.6-.5 3.1-1.3 4.3Z" />
    </svg>
  );
}

export function UserIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <circle cx="12" cy="7.5" r="4.5" />
      <path d="M3.5 22c0-4.7 3.8-8 8.5-8s8.5 3.3 8.5 8" strokeLinecap="round" />
    </svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 54 40" fill="currentColor" className={className} aria-hidden="true">
      <circle cx="27" cy="11" r="7" />
      <circle cx="11" cy="15" r="5" />
      <circle cx="43" cy="15" r="5" />
      <path d="M14 40c0-8 5.8-14 13-14s13 6 13 14H14ZM0 40c0-6 3.8-10.5 9-10.5 2 0 3.8.6 5.3 1.7A17 17 0 0 0 11 40H0Zm54 0c0-6-3.8-10.5-9-10.5-2 0-3.8.6-5.3 1.7A17 17 0 0 1 43 40h11Z" />
    </svg>
  );
}

export function ArrowBulletIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
      <path d="M1 1.5 19 10 1 18.5l4.5-8.5L1 1.5Z" fill="#e9232b" />
      <path d="M5.5 10 1 18.5 19 10H5.5Z" fill="#a3141a" />
    </svg>
  );
}

export function BoxIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="2.6" className={className} aria-hidden="true">
      <path d="m30 4 18 9.5v13L30 36l-9-4.6" strokeLinejoin="round" />
      <path d="M21 13.5 30 18.5l18-5M30 18.5V27" strokeLinejoin="round" />
      <path d="M22 18 4 27.5v14L22 51l18-9.5v-14L22 18Z" strokeLinejoin="round" />
      <path d="m4 27.5 18 9.5 18-9.5M22 37v14" strokeLinejoin="round" />
    </svg>
  );
}

export function DocumentIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 52 40" fill="none" stroke="currentColor" strokeWidth="2.6" className={className} aria-hidden="true">
      <rect x="2" y="2" width="48" height="36" rx="2" />
      <path d="M2 10h48M10 18h32M10 25h32M10 32h20" strokeLinecap="round" />
    </svg>
  );
}

export function ChatIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 52 46" fill="none" stroke="currentColor" strokeWidth="2.6" className={className} aria-hidden="true">
      <path d="M4 2h44a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H18l-9 10v-10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
      <path d="M12 12h28" strokeLinecap="round" />
      <path d="m26 15 5 5-5 5-5-5 5-5Z" strokeLinejoin="round" />
    </svg>
  );
}
