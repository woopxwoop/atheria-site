import ContactForm from "@/app/ui/ContactForm";

export default async function Page() {
  return (
    <div className="mt-20 flex-row items-center text-center">
      <h1 className="text-xl font-medium">Contact Us</h1>
      <ContactForm />
    </div>
  );
}
