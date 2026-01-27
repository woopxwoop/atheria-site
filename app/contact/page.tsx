import ContactForm from "@/app/ui/ContactForm";

export default async function Page() {
  return (
    <main className="w-[70%] flex-row items-center text-center">
      <h1 className="text-xl font-medium">Contact Us</h1>
      <ContactForm />
    </main>
  );
}
