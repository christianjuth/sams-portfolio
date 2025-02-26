import { Button, Input, TextArea } from "../ui";

export function ContactForm({
  title,
  email,
}: {
  title?: string,
  email: string,
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl">{title ?? "BOOKING"}</h2>

      <form action={`https://formsubmit.co/${email}`} method="POST" className="flex flex-col gap-1">
        <label>Name</label>
        <Input type="text" name="name" required />

        <br />
        <label>Email</label>
        <Input type="email" name="email" required />

        <br />
        <label>Message</label>
        <TextArea name="message" />

        <br />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )

}
