import React from "react";
import { useForm, ValidationError } from "@statickit/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("contactForm");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div className="bg-red-400">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
