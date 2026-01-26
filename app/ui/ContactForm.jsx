"use client";

import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "63efb476-b7a8-46e8-8fd3-ffee731d1ac7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 w-full max-w-md mx-auto p-6 text-left"
    >
      <div>
        <span className="uppercase text-sm text-base-content/80 font-bold">
          name
        </span>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full mt-1 p-3 rounded-lg focus:outline-none border"
        />
      </div>
      <div>
        <span className="uppercase text-sm text-base-content/80 font-bold">
          email
        </span>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full mt-1 p-3 rounded-lg focus:outline-none border"
        />
      </div>
      <div>
        <span className="uppercase text-sm text-base-content/80 font-bold">
          message
        </span>
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full mt-1 p-3 rounded-lg focus:outline-none border"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="uppercase text-sm font-bold tracking-wide   p-3 cursor-pointer rounded-lg w-full focus:outline-none
       bg-(--foreground-color) text-(--background-color) "
        >
          Submit
        </button>
      </div>
      {result && <p className="text-center">{result}</p>}
    </form>
  );
}
