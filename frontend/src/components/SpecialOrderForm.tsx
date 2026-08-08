"use client";

import { useState } from "react";
import { submitSpecialOrder } from "@/lib/api";
import { FormField, controlClassName } from "./FormField";
import fieldStyles from "./FormField.module.css";

type FormState = {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  orderType: string;
  guests: string;
  flavor: string;
  message: string;
};

const EMPTY: FormState = {
  name: "",
  email: "",
  phone: "",
  eventDate: "",
  orderType: "",
  guests: "",
  flavor: "",
  message: "",
};

function validate(form: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.email.trim()) errors.email = "Please enter your email.";
  else if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = "Enter a valid email address.";
  if (!form.phone.trim()) errors.phone = "Please enter a phone number.";
  if (!form.eventDate) errors.eventDate = "Please select an event date.";
  if (!form.orderType) errors.orderType = "Please select an order type.";
  if (!form.message.trim()) errors.message = "Tell us a bit about the order.";
  return errors;
}

export function SpecialOrderForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const setField =
    (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((s) => ({ ...s, [key]: e.target.value }));

  async function handleSubmit() {
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    setSubmitError(null);
    try {
      await submitSpecialOrder(form);
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong sending your inquiry. Please try again.");
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
      <div
        className={fieldStyles.successPanel}
        style={{ background: "var(--color-bg)", borderRadius: 24, padding: "56px 40px", boxShadow: "var(--shadow-md)" }}
      >
        <svg className={fieldStyles.successIcon} width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#7a8a5e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <h2 className={fieldStyles.successTitle} style={{ fontSize: 26 }}>Inquiry Sent!</h2>
        <p className={fieldStyles.successText} style={{ fontSize: 15 }}>
          Thank you — we&rsquo;ll be in touch within 1–2 business days to talk through the details.
        </p>
        <button type="button" className={fieldStyles.resetBtn} onClick={resetForm}>
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ fontSize: 28, margin: "0 0 8px", textAlign: "center" }}>Tell Us About Your Order</h2>
      <p style={{ fontSize: 14.5, textAlign: "center", color: "color-mix(in srgb, var(--color-text) 65%, transparent)", margin: "0 0 32px" }}>
        Fields marked * are required.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18 }}>
        <FormField label="Name" required error={errors.name}>
          <input value={form.name} onChange={setField("name")} placeholder="Your full name" className={controlClassName(errors.name)} />
        </FormField>
        <FormField label="Email" required error={errors.email}>
          <input value={form.email} onChange={setField("email")} placeholder="you@email.com" className={controlClassName(errors.email)} />
        </FormField>
        <FormField label="Phone" required error={errors.phone}>
          <input value={form.phone} onChange={setField("phone")} placeholder="(727) 555-0100" className={controlClassName(errors.phone)} />
        </FormField>
        <FormField label="Event Date" required error={errors.eventDate}>
          <input type="date" value={form.eventDate} onChange={setField("eventDate")} className={controlClassName(errors.eventDate)} />
        </FormField>
        <FormField label="Order Type" required error={errors.orderType}>
          <select value={form.orderType} onChange={setField("orderType")} className={controlClassName(errors.orderType)}>
            <option value="">Select an order type</option>
            <option value="Custom Cake">Custom Cake</option>
            <option value="Birthday">Birthday</option>
            <option value="Event">Event</option>
            <option value="Catering">Catering</option>
            <option value="Other">Other</option>
          </select>
        </FormField>
        <FormField label="Number of Guests">
          <input type="number" min={1} value={form.guests} onChange={setField("guests")} placeholder="e.g. 40" className={controlClassName()} />
        </FormField>
        <FormField label="Preferred Flavor" fullWidth>
          <input
            value={form.flavor}
            onChange={setField("flavor")}
            placeholder="e.g. Lemon elderflower, chocolate fudge"
            className={controlClassName()}
          />
        </FormField>
        <FormField label="Message" required error={errors.message} fullWidth>
          <textarea
            value={form.message}
            onChange={setField("message")}
            placeholder="Tell us more about the occasion and what you have in mind"
            rows={4}
            className={`${controlClassName(errors.message)} ${fieldStyles.textarea}`}
          />
        </FormField>
        <div style={{ gridColumn: "1 / -1" }}>
          <label className={fieldStyles.label}>Reference Image</label>
          <div className={fieldStyles.upload}>
            <svg className={fieldStyles.uploadIcon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            Drop an inspiration photo here, or click to upload
          </div>
        </div>
      </div>
      {submitError && <div className={fieldStyles.errorText} style={{ marginTop: 14 }}>{submitError}</div>}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={submitting}
        style={{
          marginTop: 26,
          width: "100%",
          fontFamily: "var(--font-heading)",
          fontSize: 15,
          border: "none",
          cursor: submitting ? "not-allowed" : "pointer",
          background: "var(--color-accent)",
          color: "var(--color-bg)",
          padding: "15px 24px",
          borderRadius: 999,
          opacity: submitting ? 0.7 : 1,
        }}
      >
        {submitting ? "Submitting…" : "Submit Inquiry"}
      </button>
    </div>
  );
}
