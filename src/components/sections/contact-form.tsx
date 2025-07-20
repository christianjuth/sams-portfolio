import { Button, Input, TextArea } from "../ui";

export function ContactForm({
  title,
  subtitle,
  email,
}: {
  title?: string;
  subtitle?: string;
  email: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl">{title ?? "BOOKING"}</h2>

      {subtitle && <h3 className="text-xl">{subtitle}</h3>}

      <form
        action={`https://formsubmit.co/${email}`}
        method="POST"
        className="flex flex-col gap-1"
      >
        <label>name</label>
        <Input type="text" name="name" required />

        <br />
        <label>email</label>
        <Input type="email" name="email" required />

        <br />
        <label>message</label>
        <TextArea name="message" />

        <br />
        <Button type="submit">submit</Button>
      </form>
    </div>
  );
}
