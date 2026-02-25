'use client'
import React, { useState } from "react";
import { supabase } from "../lib/supabase";

/* ------------------ helpers ------------------ */
const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const inputClass = (error) =>
  `w-full px-4 py-3 rounded-xl border ${
    error ? "border-red-400" : "border-slate-300"
  } focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white`;

export default function ContactFormCard() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  /* ------------------ validation ------------------ */
  const validate = () => {
    const e = {};

    if (form.name.trim().length < 2)
      e.name = "Name must be at least 2 characters";

    if (!/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Enter a valid email address";

    if (!/^[0-9]{10}$/.test(form.phone))
      e.phone = "Enter a valid 10-digit phone number";

    if (!form.subject) e.subject = "Please select a subject";

    if (form.message.trim().length < 10)
      e.message = "Message must be at least 10 characters";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ------------------ handlers ------------------ */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setForm({ ...form, phone: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setStatus(null);

    if (!validate()) return;

    setLoading(true);

    const { error } = await supabase.from("contact_messages").insert(form);

    setLoading(false);

    if (error) {
      setStatus({ type: "error", message: error.message });
    } else {
      setStatus({
        type: "success",
        message: "Thank you! We will contact you shortly.",
      });
      setForm(initialForm);
      setErrors({});
      setSubmitted(false);
    }
  };

  /* ------------------ UI ------------------ */
  return (
    <div className="bg-[#FFF9EE] rounded-3xl p-6 md:p-10 shadow-md w-full max-w-xl">
      <h2 className="text-2xl font-semibold text-emerald-700">
        <span className="text-amber-500">Reach</span> & Get in Touch With Us!
      </h2>

      <p className="text-slate-600 text-sm mt-1">
        We love to hear from you. Our friendly team is always here to chat.
      </p>

      <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
        {/* NAME */}
        <div>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={inputClass(submitted && errors.name)}
          />
          {submitted && errors.name && (
            <p className="text-xs text-red-500 mt-1">{errors.name}</p>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className={inputClass(submitted && errors.email)}
          />
          {submitted && errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        {/* PHONE */}
        <div>
          <div className="flex gap-3">
            <span className="px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-600">
              +91
            </span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handlePhoneChange}
              placeholder="Phone Number"
              inputMode="numeric"
              className={`flex-1 ${inputClass(submitted && errors.phone)}`}
            />
          </div>
          {submitted && errors.phone && (
            <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
          )}
        </div>

        {/* SUBJECT */}
        <div className="relative">
          <select
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={`${inputClass(submitted && errors.subject)} appearance-none cursor-pointer`}
          >
            <option value="" disabled>
              Select Subject
            </option>
            <option value="General Enquiry">General Enquiry</option>
            <option value="Booking">Booking</option>
            <option value="Support">Support</option>
          </select>

          {/* dropdown arrow */}
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
            ▼
          </span>

          {submitted && errors.subject && (
            <p className="text-xs text-red-500 mt-1">{errors.subject}</p>
          )}
        </div>

        {/* MESSAGE */}
        <div>
          <textarea
            rows="4"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className={inputClass(submitted && errors.message)}
          />
          {submitted && errors.message && (
            <p className="text-xs text-red-500 mt-1">{errors.message}</p>
          )}
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-emerald-600 text-white py-3 rounded-full font-medium hover:bg-emerald-700 transition disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* STATUS */}
        {status && (
          <p
            className={`text-sm mt-3 text-center ${
              status.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
