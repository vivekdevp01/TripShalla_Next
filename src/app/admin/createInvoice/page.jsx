'use client'
import { Plus, Trash2 } from "lucide-react";
import { useState, useMemo, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import InvoicePreview from "../../../components/InvoicePreview";

/* ---------- MASTER DATA ---------- */

const LOCATIONS = ["Rishikesh", "Shivpuri", "Kaudiyala", "Auli"];

const ACTIVITY_TYPES = [
  "River Rafting",
  "Camping",
  "Bungee Jumping",
  "Trekking",
  "Hotel Stay",
  "Scooty Rental",
  "Bike Rental",
  "Combo Package",
];

const ACTIVITY_VARIANTS = {
  "River Rafting": ["16 KM", "24 KM"],
  Camping: ["Swiss Tent", "Alpine Tent"],
  "Bungee Jumping": ["Standard Jump"],
  Trekking: ["Easy", "Moderate", "Difficult"],
  "Hotel Stay": ["Standard Room", "Deluxe Room"],
  "Scooty Rental": ["Activa", "Access"],
  "Bike Rental": ["Royal Enfield", "Pulsar"],
  "Combo Package": ["Rafting + Camping", "Rafting + Camping + Bungee"],
};

const PRICING_UNITS = ["Per Person", "Per Night", "Per Day", "Fixed Package"];
const PAYMENT_MODES = ["Cash", "UPI", "Card", "Bank Transfer"];

/* ---------- COMPONENT ---------- */

export default function CreateInvoice() {
  const previewRef = useRef(null);
  const [showPreview, setShowPreview] = useState(false);

  const [services, setServices] = useState([
    {
      type: "",
      variant: "",
      pricingUnit: "Per Person",
      qty: 1,
      rate: 0,
      description: "",
    },
  ]);

  const [trip, setTrip] = useState({
    location: "",
    startDate: "",
    endDate: "",
  });
  const [payment, setPayment] = useState({
    discountType: "amount", // "amount" | "percent"
    discountValue: 0,
    paid: 0,
    mode: "Cash",
    reference: "",
  });
  const [invoiceNo] = useState(() => {
    const year = new Date().getFullYear();
    const random = Math.floor(1000 + Math.random() * 9000);
    return `TS-${year}-${random}`;
  });
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    adults: 1,
    children: 0,
    notes: "",
  });

  //   const [payment, setPayment] = useState({
  //     discount: 0,
  //     paid: 0,
  //     mode: "Cash",
  //     reference: "",
  //   });

  /* ---------- CALCULATIONS ---------- */

  const requiresStay = useMemo(
    () =>
      services.some((s) =>
        ["Camping", "Hotel Stay", "Combo Package"].includes(s.type),
      ),
    [services],
  );

  const subtotal = useMemo(
    () => services.reduce((sum, s) => sum + s.qty * s.rate, 0),
    [services],
  );
  const discountAmount =
    payment.discountType === "percent"
      ? Math.round((subtotal * payment.discountValue) / 100)
      : payment.discountValue;

  const total = Math.max(subtotal - discountAmount, 0);
  const balance = Math.max(total - payment.paid, 0);
  //   const total = Math.max(subtotal - discountAmount, 0);
  //   const balance = Math.max(total - Number(payment.paid || 0), 0);

  /* ---------- HELPERS ---------- */

  const updateService = (i, key, value) => {
    const copy = [...services];
    copy[i][key] = value;
    setServices(copy);
  };

  const addService = () =>
    setServices([
      ...services,
      {
        type: "",
        variant: "",
        pricingUnit: "Per Person",
        qty: 1,
        rate: 0,
        description: "",
      },
    ]);

  const removeService = (i) =>
    setServices(services.filter((_, idx) => idx !== i));

  const qtyLabel = (unit) => {
    if (unit === "Per Person") return "Persons";
    if (unit === "Per Night") return "Nights";
    if (unit === "Per Day") return "Days";
    return "Qty";
  };
  useEffect(() => {
    const preventScroll = (e) => {
      if (document.activeElement?.type === "number") {
        document.activeElement.blur();
      }
    };

    window.addEventListener("wheel", preventScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", preventScroll);
    };
  }, []);

  const handleDownloadPdf = async () => {
    console.log("➡️ Download clicked");

    const element = previewRef.current;
    if (!element) {
      alert("Preview not ready");
      return;
    }

    try {
      // 1️⃣ Render HTML → Canvas
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        scrollX: 0,
        scrollY: -window.scrollY,
      });

      const imgData = canvas.toDataURL("image/png");

      // 2️⃣ Create PDF
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth(); // 210mm
      const pdfHeight = pdf.internal.pageSize.getHeight(); // 297mm

      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      // 3️⃣ First page
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      // 4️⃣ Extra pages if content is long
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      // 5️⃣ Dynamic filename (VERY IMPORTANT)
      const today = new Date().toISOString().split("T")[0];
      const fileName = `Tripshalla_Invoice_${invoiceNo}_${today}.pdf`;

      pdf.save(fileName);

      console.log("✅ PDF saved:", fileName);
    } catch (error) {
      console.error("❌ PDF generation failed:", error);
      alert("Failed to generate PDF. Please try again.");
    }
  };

  useEffect(() => {
    if (showPreview) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPreview]);

  /* ---------- UI ---------- */

  return (
    <div className="bg-white rounded-3xl p-10 shadow-lg border space-y-12">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-3xl font-black tracking-tight">
            🧾 Tripshalla Invoice
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Create a booking invoice step by step
          </p>
        </div>

        <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-slate-600">
          <span className="px-3 py-1 rounded-full bg-slate-100">Customer</span>→
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
            Trip
          </span>
          →
          <span className="px-3 py-1 rounded-full bg-slate-100">
            Activities
          </span>
          →<span className="px-3 py-1 rounded-full bg-slate-100">Payment</span>
        </div>
      </div>

      {/* TRIP CONTEXT */}
      <section className="bg-white border border-slate-200 rounded-3xl p-8">
        <div className="mb-6">
          <h3 className="text-xl font-black tracking-tight">📍 Trip Context</h3>
          <p className="text-sm text-slate-500 mt-1">
            Where and when this booking takes place
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* LOCATION */}
          <div>
            <label className="field-label">Location</label>
            <select
              className="input"
              value={trip.location}
              onChange={(e) => setTrip({ ...trip, location: e.target.value })}
            >
              <option value="">Select Location</option>
              {LOCATIONS.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </div>

          {/* START DATE */}
          <div>
            <label className="field-label">Start Date</label>
            <input
              type="date"
              className="input"
              value={trip.startDate}
              onChange={(e) => setTrip({ ...trip, startDate: e.target.value })}
            />
          </div>

          {/* END DATE (CONDITIONAL) */}
          {requiresStay && (
            <div>
              <label className="field-label">End Date</label>
              <input
                type="date"
                className="input"
                value={trip.endDate}
                onChange={(e) => setTrip({ ...trip, endDate: e.target.value })}
              />
            </div>
          )}
        </div>

        {!requiresStay && trip.startDate && (
          <div className="mt-4 text-sm text-slate-500">
            📅 Single-day activity selected
          </div>
        )}
      </section>
      {/* ================= CUSTOMER DETAILS ================= */}
      <section className="bg-white border border-slate-200 rounded-3xl p-8">
        <div className="mb-6">
          <h3 className="text-xl font-black tracking-tight">
            👤 Customer Details
          </h3>
          <p className="text-sm text-slate-500 mt-1">Who is this booking for</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* NAME */}
          <div>
            <label className="field-label">Customer Name *</label>
            <input
              className="input"
              placeholder="Full name"
              value={customer.name}
              onChange={(e) =>
                setCustomer({ ...customer, name: e.target.value })
              }
            />
          </div>

          {/* MOBILE */}
          <div>
            <label className="field-label">Mobile Number *</label>
            <input
              className="input"
              placeholder="10-digit mobile"
              value={customer.phone}
              onChange={(e) =>
                setCustomer({ ...customer, phone: e.target.value })
              }
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="field-label">Email</label>
            <input
              className="input"
              placeholder="Optional"
              value={customer.email}
              onChange={(e) =>
                setCustomer({ ...customer, email: e.target.value })
              }
            />
          </div>

          {/* CITY */}
          <div>
            <label className="field-label">City</label>
            <input
              className="input"
              placeholder="Customer city"
              value={customer.city}
              onChange={(e) =>
                setCustomer({ ...customer, city: e.target.value })
              }
            />
          </div>

          {/* ADULTS */}
          <div>
            <label className="field-label">Adults</label>
            <input
              type="number"
              min="1"
              className="input text-center"
              value={customer.adults}
              onChange={(e) =>
                setCustomer({ ...customer, adults: +e.target.value })
              }
            />
          </div>

          {/* CHILDREN */}
          <div>
            <label className="field-label">Children</label>
            <input
              type="number"
              min="0"
              className="input text-center"
              value={customer.children}
              onChange={(e) =>
                setCustomer({ ...customer, children: +e.target.value })
              }
            />
          </div>

          {/* NOTES */}
          <div className="md:col-span-3">
            <label className="field-label">Special Notes</label>
            <textarea
              rows={2}
              className="input"
              placeholder="Pickup point, arrival time, food preference, etc."
              value={customer.notes}
              onChange={(e) =>
                setCustomer({ ...customer, notes: e.target.value })
              }
            />
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-black tracking-tight">
              🧗 Activities & Services
            </h3>
            <p className="text-sm text-slate-500">
              Add all activities included in this booking
            </p>
          </div>

          <button
            onClick={addService}
            className="flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-emerald-700 transition"
          >
            <Plus size={18} />
            Add Activity
          </button>
        </div>

        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-5"
          >
            {/* ROW HEADER */}
            <div className="flex justify-between items-center">
              <p className="font-bold text-slate-700">Activity #{i + 1}</p>
              <button
                onClick={() => removeService(i)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 />
              </button>
            </div>

            {/* MAIN GRID */}
            <div className="grid md:grid-cols-6 gap-4">
              {/* ACTIVITY */}
              <div>
                <label className="field-label">Activity</label>
                <select
                  className="input"
                  value={s.type}
                  onChange={(e) => updateService(i, "type", e.target.value)}
                >
                  <option value="">Select Activity</option>
                  {ACTIVITY_TYPES.map((a) => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
              </div>

              {/* VARIANT */}
              <div>
                <label className="field-label">Variant</label>
                <select
                  className="input"
                  value={s.variant}
                  onChange={(e) => updateService(i, "variant", e.target.value)}
                >
                  <option value="">Select Variant</option>
                  {(ACTIVITY_VARIANTS[s.type] || []).map((v) => (
                    <option key={v}>{v}</option>
                  ))}
                </select>
              </div>

              {/* PRICING */}
              <div>
                <label className="field-label">Pricing Unit</label>
                <select
                  className="input"
                  value={s.pricingUnit}
                  onChange={(e) =>
                    updateService(i, "pricingUnit", e.target.value)
                  }
                >
                  {PRICING_UNITS.map((u) => (
                    <option key={u}>{u}</option>
                  ))}
                </select>
              </div>

              {/* QTY */}
              <div>
                <label className="field-label">{qtyLabel(s.pricingUnit)}</label>
                <input
                  type="number"
                  min="1"
                  className="input text-center"
                  value={s.qty}
                  onChange={(e) => updateService(i, "qty", +e.target.value)}
                />
              </div>

              {/* RATE */}
              <div>
                <label className="field-label">Rate (₹)</label>
                <input
                  type="number"
                  className="input text-right font-semibold"
                  value={s.rate}
                  onChange={(e) => updateService(i, "rate", +e.target.value)}
                />
              </div>

              {/* TOTAL */}
              <div className="flex flex-col justify-end">
                <label className="field-label">Total</label>
                <div className="text-xl font-black text-emerald-700">
                  ₹{s.qty * s.rate}
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="field-label">Description</label>
              <textarea
                rows={1}
                className="input"
                placeholder="Auto-filled for combo packages"
                value={s.description}
                onChange={(e) =>
                  updateService(i, "description", e.target.value)
                }
              />
            </div>
          </div>
        ))}
      </section>

      {/* PAYMENT */}
      <section className="bg-white border rounded-3xl p-8">
        {/* <h3 className="section-title mb-6">Payment Summary</h3> */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-black tracking-tight">
            💳 Payment Summary
          </h3>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
            Final Step
          </span>
        </div>

        {/* INPUT CARD */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 mb-8">
          <p className="text-sm font-semibold text-slate-600 mb-4">
            Payment Controls
          </p>

          <div className="grid md:grid-cols-5 gap-5">
            {/* DISCOUNT TYPE */}
            <div>
              <label className="field-label">Discount Type</label>
              <select
                className="input focus:ring-emerald-500"
                value={payment.discountType}
                onChange={(e) =>
                  setPayment({ ...payment, discountType: e.target.value })
                }
              >
                <option value="amount">₹ Flat</option>
                <option value="percent">% Percentage</option>
              </select>
            </div>

            {/* DISCOUNT VALUE */}
            <div>
              <label className="field-label">
                {payment.discountType === "percent"
                  ? "Discount (%)"
                  : "Discount Amount (₹)"}
              </label>
              <input
                type="number"
                className="input text-right font-semibold"
                value={payment.discountValue}
                onChange={(e) =>
                  setPayment({
                    ...payment,
                    discountValue: +e.target.value,
                  })
                }
              />
            </div>

            {/* PAID */}
            <div>
              <label className="field-label">Paid Amount (₹)</label>
              <input
                type="number"
                className="input text-right font-semibold"
                value={payment.paid}
                onChange={(e) =>
                  setPayment({ ...payment, paid: +e.target.value })
                }
              />
            </div>

            {/* MODE */}
            <div>
              <label className="field-label">Payment Mode</label>
              <select
                className="input"
                value={payment.mode}
                onChange={(e) =>
                  setPayment({ ...payment, mode: e.target.value })
                }
              >
                {PAYMENT_MODES.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </div>

            {/* REF */}
            <div>
              <label className="field-label">UTR / Reference</label>
              <input
                className="input"
                placeholder="Optional"
                value={payment.reference}
                onChange={(e) =>
                  setPayment({ ...payment, reference: e.target.value })
                }
              />
            </div>
          </div>
        </div>

        {/* TOTALS CARD */}
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 space-y-3">
          <div className="flex justify-between text-slate-600 font-semibold">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          {discountAmount > 0 && (
            <div className="flex justify-between text-slate-600 font-semibold">
              <span>
                Discount{" "}
                {payment.discountType === "percent"
                  ? `(${payment.discountValue}%)`
                  : ""}
              </span>
              <span>- ₹{discountAmount}</span>
            </div>
          )}

          <div className="border-t border-emerald-200 my-2" />

          <div className="flex justify-between text-2xl font-black text-emerald-700">
            <span>Total Amount</span>
            <span>₹{total}</span>
          </div>
        </div>

        {/* BALANCE */}
        <div className="mt-6 flex justify-between items-center bg-red-50 border border-red-200 rounded-2xl p-5">
          <span className="font-black text-red-600 text-lg">Balance Due</span>
          <span className="font-black text-2xl text-red-700">₹{balance}</span>
        </div>
      </section>
      {showPreview && (
        // <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center overscroll-contain">
          <div className="bg-white rounded-2xl">
            <div className="max-h-[90vh] overflow-auto">
              <InvoicePreview
                ref={previewRef}
                invoiceNo={invoiceNo}
                customer={customer}
                trip={trip}
                services={services}
                subtotal={subtotal}
                total={total}
                balance={balance}
                discountAmount={discountAmount}
                discountType={payment.discountType}
                discountValue={payment.discountValue}
                paid={payment.paid}
                paymentMode={payment.mode}
              />

              <div className="flex justify-end gap-4 p-6 border-t">
                <button
                  className="btn-outline"
                  onClick={() => setShowPreview(false)}
                >
                  Close
                </button>

                <button className="btn-primary" onClick={handleDownloadPdf}>
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ACTIONS */}
      <div className="flex justify-end gap-4">
        <button className="btn-outline" onClick={() => setShowPreview(true)}>
          Preview Invoice
        </button>
        <button
          className="btn-primary"
          onClick={async () => {
            setShowPreview(true);

            // wait for DOM + layout
            await new Promise((r) => setTimeout(r, 800));

            handleDownloadPdf();
          }}
        >
          Generate PDF
        </button>
      </div>
    </div>
  );
}
