import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

export function Input(
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
) {
  return <input {...props} className={`p-2 text-black ${props.className}`} />;
}

export function TextArea(
  props: DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
) {
  return (
    <textarea {...props} className={`p-2 text-black ${props.className}`} />
  );
}
const button = cva(["text-center border border-white center hover:bg-white hover:text-black transition-colors"], {
  variants: {
    size: {
      small: "p-2 py-1.5",
      medium: "px-3 py-2.5",
      large: "p-3 text-lg",
    }
  },
  defaultVariants: {
    size: "medium",
  },
});

export function Button({
  children,
  href,
  type,
  onClick,
  targetBlank,
  size,
  ...props
}: {
  children: React.ReactNode;
  href?: string;
  type?: "submit";
  className?: string;
  onClick?: () => void;
  targetBlank?: boolean;
} & VariantProps<typeof button>) {
  const className = cn(button({ size }), props.className);

  if (href) {
    return (
      <a
        href={href}
        className={className}
        {...(targetBlank
          ? {
            target: "blank",
            rel: "noreferrer noopener",
          }
          : null)}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export function ExternalLink(
  props: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >,
) {
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}
