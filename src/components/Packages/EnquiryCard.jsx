'use client'
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../../lib/supabase";

export default function EnquiryCard({ onSuccess, packageId = null }) {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const form = e.target;

      const payload = {
        name: form.name.value,
        email: form.email.value,
        phone: `+91${form.phone.value}`,
        package_id: packageId,
        travel_date: form.travel_date.value || null,
        traveller_count: form.travellers.value
          ? Number(form.travellers.value)
          : null,
        message: form.message.value || null,
      };

      const { error } = await supabase.from("enquiries").insert([payload]);

      if (error) throw error;

      setShowSuccess(true);
      form.reset();
    } catch (err) {
      console.error("❌ Enquiry error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="relative bg-white rounded-3xl p-6
                shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                overflow-hidden isolate"
      >
        {/* Header */}
        <div className="mb-5">
          <h3 className="text-lg font-bold text-slate-800">Get a Callback</h3>
          <p className="text-sm text-slate-500 mt-1">
            Get exclusive offers & expert assistance
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl border border-slate-200
                       text-slate-800 placeholder:text-slate-400
                       focus:ring-2 focus:ring-orange-400 outline-none"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl border border-slate-200
                       text-slate-800 placeholder:text-slate-400
                       focus:ring-2 focus:ring-orange-400 outline-none"
          />

          {/* PHONE */}
          <div className="flex gap-3">
            <input
              value="+91"
              disabled
              className="w-[70px] px-3 py-3 rounded-xl border border-slate-200
              bg-slate-50 text-center outline-none text-slate-500"
            />
            <input
              name="phone"
              required
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-xl border border-slate-200
                       text-slate-800 placeholder:text-slate-400
                       focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

        <input
  name="travel_date"
  type="date"
  required
  /* Use 'before' to show the placeholder text when the value is empty */
  className="w-full px-4 py-3 rounded-xl border border-slate-200
             text-slate-800 placeholder:text-slate-400
             focus:ring-2 focus:ring-[#F7A325] outline-none
             
             /* This part handles the mobile display */
             before:content-[attr(placeholder)] before:text-slate-400 before:mr-4
             invalid:before:block valid:before:hidden
             focus:before:content-none"
  placeholder="Travel Date"
/>

          <input
            name="travellers"
            type="number"
            min="1"
            placeholder="Traveller Count"
            className="w-full px-4 py-3 rounded-xl border border-slate-200
                       text-slate-800 placeholder:text-slate-400
                       focus:ring-2 focus:ring-orange-400 outline-none"
          />

          <textarea
            name="message"
            rows="2.5"
            placeholder="Message (Optional)"
            className="w-full px-4 py-3 rounded-xl border border-slate-200
                       text-slate-800 placeholder:text-slate-400
                       focus:ring-2 focus:ring-orange-400 outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600
                       text-white py-4 rounded-xl font-bold text-lg
                       disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Enquiry"}
          </button>
        </form>
      </div>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed inset-0 z-[10000] bg-black/40 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-2xl p-8 max-w-sm text-center"
            >
              <CheckCircle2
                size={48}
                className="text-emerald-500 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">Thank you!</h3>
              <p className="text-sm text-slate-600 mb-6">
                Our expert will reach out shortly.
              </p>
              <button
                onClick={() => {
                  setShowSuccess(false);
                  onSuccess?.();
                }}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold"
              >
                OK
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
