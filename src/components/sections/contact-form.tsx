"use client"

import { useUserIdentity } from "../google-analytics";
import { Button, Input, TextArea } from "../ui";

export function ContactForm({
  title,
  subtitle,
  token,
}: {
  title?: string;
  subtitle?: string;
  token: string;
}) {
  const identity = useUserIdentity();

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl">{title ?? "BOOKING"}</h2>

      {subtitle && <h3 className="text-xl">{subtitle}</h3>}

      <form
        action={`https://formsubmit.co/${token}`}
        method="POST"
        className="flex flex-col gap-1"
      >
        <input type="text" name="user_id" className="hidden" value={identity ?? ""} readOnly />

        <input type="text" name="_honey" className="hidden" />

        <label htmlFor="name">name</label>
        <Input id="name" type="text" name="name" required />

        <br />
        <label htmlFor="email">email</label>
        <Input id="email" type="email" name="email" required />

        <br />
        <label htmlFor="message">message</label>
        <TextArea id="message" name="message" required />

        <br />
        <Button type="submit">submit</Button>
      </form>
    </div>
  );
}
