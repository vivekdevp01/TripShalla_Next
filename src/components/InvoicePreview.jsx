'use client'
import { forwardRef } from "react";

/* ---------- SHARED STYLES ---------- */

const label = {
  fontSize: 12,
  color: "#64748b",
};

const value = {
  fontSize: 14,
  fontWeight: 600,
  color: "#0f172a",
};

const InvoicePreview = forwardRef(
  (
    {
      trip,
      invoiceNo,
      customer,
      services,
      subtotal,
      total,
      balance,
      discountAmount,
      discountType,
      discountValue,
      paid,
      paymentMode,
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        style={{
          width: "794px",
          minHeight: "1123px",
          backgroundColor: "#ffffff",
          padding: 40,
          fontFamily: "Inter, Arial, sans-serif",
          color: "#0f172a",
          boxSizing: "border-box",
        }}
      >
        {/* ================= HEADER ================= */}
        {/* ================= HEADER ================= */}
        <div style={{ marginBottom: 36 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            {/* BRAND */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <img
                src="/src/assets/logo.png"
                alt="Tripshalla"
                style={{ height: 56, borderRadius: 8 }}
              />

              <div style={{ display: "flex", flexDirection: "column" }}>
                {/* BRAND NAME */}
                <h1
                  style={{
                    margin: 0,
                    fontFamily: "Poppins, Inter, Arial, sans-serif",
                    fontSize: 30,
                    fontWeight: 900,
                    letterSpacing: "0.6px",
                    lineHeight: 1,
                    color: "#0f172a", // slate-900
                    textTransform: "uppercase",
                  }}
                >
                  Tripshalla
                </h1>

                {/* DIVIDER LINE */}
                <div
                  style={{
                    width: 44,
                    height: 3,
                    backgroundColor: "#10b981", // emerald-500
                    margin: "6px 0",
                    borderRadius: 2,
                  }}
                />

                {/* TAGLINE */}
                <div
                  style={{
                    fontFamily: "Inter, Arial, sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#475569", // slate-600
                    letterSpacing: "0.3px",
                  }}
                >
                  Not Just Trips —{" "}
                  <span style={{ color: "#047857" }}>Live Experiences</span>
                </div>
              </div>
            </div>

            {/* INVOICE META */}
            <div
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: 12,
                padding: "12px 16px",
                textAlign: "right",
                minWidth: 220,
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 800,
                  color: "#0f172a",
                }}
              >
                INVOICE
              </div>

              <div style={{ fontSize: 12, color: "#475569", marginTop: 6 }}>
                <div>
                  Invoice No: <strong>{invoiceNo}</strong>
                </div>
                {trip?.startDate && <div>Date: {trip.startDate}</div>}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              marginTop: 24,
              borderBottom: "2px solid #e5e7eb",
            }}
          />
        </div>
        {/* ================= CUSTOMER DETAILS ================= */}
        {customer?.name && (
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: 12,
              padding: 16,
              marginBottom: 28,
              backgroundColor: "#f8fafc",
            }}
          >
            <div
              style={{
                fontWeight: 800,
                marginBottom: 12,
                fontSize: 14,
                color: "#0f172a",
              }}
            >
              Customer Details
            </div>

            <div
              style={{
                display: "flex",
                gap: 32,
                flexWrap: "wrap",
              }}
            >
              {/* NAME */}
              <div>
                <div style={label}>Customer Name</div>
                <div style={value}>{customer.name}</div>
              </div>

              {/* PHONE */}
              {customer.phone && (
                <div>
                  <div style={label}>Mobile</div>
                  <div style={value}>{customer.phone}</div>
                </div>
              )}

              {/* EMAIL */}
              {customer.email && (
                <div>
                  <div style={label}>Email</div>
                  <div style={value}>{customer.email}</div>
                </div>
              )}

              {/* CITY */}
              {customer.city && (
                <div>
                  <div style={label}>City</div>
                  <div style={value}>{customer.city}</div>
                </div>
              )}

              {/* GUEST COUNT */}
              {(customer.adults || customer.children) && (
                <div>
                  <div style={label}>Guests</div>
                  <div style={value}>
                    {customer.adults || 0} Adult
                    {(customer.adults || 0) > 1 ? "s" : ""}
                    {customer.children > 0 && `, ${customer.children} Child`}
                  </div>
                </div>
              )}
            </div>

            {/* NOTES */}
            {customer.notes && (
              <div
                style={{
                  marginTop: 12,
                  fontSize: 12,
                  color: "#475569",
                  lineHeight: 1.5,
                }}
              >
                <strong>Special Notes:</strong> {customer.notes}
              </div>
            )}
          </div>
        )}

        {/* ================= TRIP DETAILS ================= */}
        {(trip.location || trip.startDate || trip.endDate) && (
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: 12,
              padding: 16,
              marginBottom: 28,
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: 12 }}>
              Trip Information
            </div>

            <div style={{ display: "flex", gap: 32 }}>
              {trip.location && (
                <div>
                  <div style={label}>Location</div>
                  <div style={value}>{trip.location}</div>
                </div>
              )}

              {trip.startDate && (
                <div>
                  <div style={label}>Trip Dates</div>
                  <div style={value}>
                    {trip.startDate}
                    {trip.endDate && ` → ${trip.endDate}`}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= SERVICES ================= */}
        <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>
          Activities & Services
        </div>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: 32,
          }}
        >
          <thead>
            <tr>
              {["Activity", "Qty", "Rate", "Amount"].map((h) => (
                <th
                  key={h}
                  style={{
                    textAlign: h === "Activity" ? "left" : "right",
                    fontSize: 12,
                    color: "#64748b",
                    borderBottom: "1px solid #e5e7eb",
                    paddingBottom: 8,
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {services.map(
              (s, i) =>
                s.type && (
                  <tr key={i}>
                    <td style={{ padding: "10px 0" }}>
                      <div style={{ fontWeight: 600 }}>
                        {s.type}
                        {s.variant && ` (${s.variant})`}
                      </div>
                      {s.description && (
                        <div style={{ fontSize: 12, color: "#64748b" }}>
                          {s.description}
                        </div>
                      )}
                    </td>
                    <td style={{ textAlign: "right" }}>{s.qty}</td>
                    <td style={{ textAlign: "right" }}>₹{s.rate}</td>
                    <td style={{ textAlign: "right", fontWeight: 700 }}>
                      ₹{s.qty * s.rate}
                    </td>
                  </tr>
                ),
            )}
          </tbody>
        </table>

        {/* ================= PAYMENT SUMMARY ================= */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ width: 320 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 6,
              }}
            >
              <span style={label}>Subtotal</span>
              <span style={value}>₹{subtotal}</span>
            </div>

            {discountAmount > 0 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 6,
                }}
              >
                <span style={label}>
                  Discount{" "}
                  {discountType === "percent" ? `(${discountValue}%)` : ""}
                </span>
                <span style={{ ...value, color: "#b45309" }}>
                  − ₹{discountAmount}
                </span>
              </div>
            )}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 16,
                fontWeight: 800,
                color: "#047857",
                marginTop: 8,
              }}
            >
              <span>Total Payable</span>
              <span>₹{total}</span>
            </div>

            {paid > 0 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 6,
                }}
              >
                <span style={label}>Paid ({paymentMode})</span>
                <span style={{ ...value, color: "#065f46" }}>₹{paid}</span>
              </div>
            )}

            {balance > 0 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 10,
                  fontWeight: 800,
                  color: "#b91c1c",
                }}
              >
                <span>Balance Due</span>
                <span>₹{balance}</span>
              </div>
            )}
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <div
          style={{
            marginTop: 48,
            paddingTop: 16,
            borderTop: "1px dashed #e5e7eb",
            textAlign: "center",
            fontSize: 12,
            color: "#64748b",
            lineHeight: 1.6,
          }}
        >
          Thank you for choosing <strong>Tripshalla</strong> 🙏
          <br />
          We’re delighted to be part of your adventure.
          <br />
          Wishing you unforgettable memories and a safe journey ahead!
        </div>
      </div>
    );
  },
);

export default InvoicePreview;
