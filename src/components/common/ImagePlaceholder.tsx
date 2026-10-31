import Image, { type StaticImageData } from "next/image";

type ImagePlaceholderProps = {
  className?: string;
  image?: StaticImageData;
  alt?: string;
  fit?: "cover" | "contain";
};

// Gray image slot from the Figma design. Pass `image` once the real photo is available.
export default function ImagePlaceholder({ className = "", image, alt = "", fit = "cover" }: ImagePlaceholderProps) {
  if (image) {
    return (
      <Image src={image} alt={alt} placeholder="blur" className={`rounded ${fit === "contain" ? "object-contain" : "object-cover"} ${className}`} />
    );
  }

  return <div className={`rounded bg-placeholder ${className}`} aria-hidden="true" />;
}
