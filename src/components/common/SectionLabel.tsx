type SectionLabelProps = {
  children: string;
  className?: string;
};

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p className={`font-body text-body uppercase leading-6 text-primary ${className}`}>
      {children}
    </p>
  );
}
