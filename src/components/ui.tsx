import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

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

export function Button({
  children,
  href,
  type,
  onClick,
  targetBlank,
  ...props
}: {
  children: React.ReactNode;
  href?: string;
  type?: "submit";
  className?: string;
  onClick?: () => void;
  targetBlank?: boolean;
}) {
  const className = `border border-white p-4 text-center hover:bg-white hover:text-black transition-colors ${props.className}`;

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
