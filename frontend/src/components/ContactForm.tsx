"use client";

import { useState } from "react";
import { submitContactMessage } from "@/lib/api";
import { FormField, controlClassName } from "./FormField";
import fieldStyles from "./FormField.module.css";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const EMPTY: FormState = { name: "", email: "", phone: "", message: "" };

function validate(form: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.email.trim()) errors.email = "Please enter your email.";
  else if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = "Enter a valid email address.";
  if (!form.message.trim()) errors.message = "Please enter a message.";
  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const setField = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((s) => ({ ...s, [key]: e.target.value }));

  async function handleSubmit() {
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    setSubmitError(null);
    try {
      await submitContactMessage(form);
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong sending your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function resetForm() {
    setSubmitted(false);
    setErrors({});
    setForm(EMPTY);
  }

  if (submitted) {
    return (
      <div className={fieldStyles.successPanel} style={{ padding: "40px 10px" }}>
        <svg className={fieldStyles.successIcon} width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#7a8a5e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <h2 className={fieldStyles.successTitle} style={{ fontSize: 22 }}>Message Sent!</h2>
        <p className={fieldStyles.successText} style={{ fontSize: 14.5 }}>
          Thanks for reaching out — we&rsquo;ll get back to you soon.
        </p>
        <button type="button" className={fieldStyles.resetBtn} onClick={resetForm}>
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ fontSize: 24, margin: "0 0 22px" }}>Send a Message</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <FormField label="Name" required error={errors.name}>
          <input
            value={form.name}
            onChange={setField("name")}
            placeholder="Your full name"
            className={controlClassName(errors.name)}
          />
        </FormField>
        <FormField label="Email" required error={errors.email}>
          <input
            value={form.email}
            onChange={setField("email")}
            placeholder="you@email.com"
            className={controlClassName(errors.email)}
          />
        </FormField>
        <FormField label="Phone">
          <input
            value={form.phone}
            onChange={setField("phone")}
            placeholder="(727) 555-0100"
            className={controlClassName()}
          />
        </FormField>
        <FormField label="Message" required error={errors.message}>
          <textarea
            value={form.message}
            onChange={setField("message")}
            placeholder="How can we help?"
            rows={5}
            className={`${controlClassName(errors.message)} ${fieldStyles.textarea}`}
          />
        </FormField>
        {submitError && <div className={fieldStyles.errorText}>{submitError}</div>}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={submitting}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: 15,
            border: "none",
            cursor: submitting ? "not-allowed" : "pointer",
            background: "var(--color-accent)",
            color: "var(--color-bg)",
            padding: "14px 24px",
            borderRadius: 999,
            opacity: submitting ? 0.7 : 1,
          }}
        >
          {submitting ? "Sending…" : "Send Message"}
        </button>
      </div>
    </div>
  );
}
