import React from "react";
import LegalTabs from "./LegalTabs";

const Terms = () => {
  return (
    <>
      {/* Top Legal Navigation (Terms | Privacy | Copyright) */}
      <LegalTabs />

      {/* Page Wrapper */}
      <div className="min-h-screen bg-white">
        {/* Page Header */}
        <header className="border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6 py-14">
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight">
              Terms & Conditions
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Last updated: Feb 25, 2026
            </p>

            <div className="mt-6 max-w-4xl rounded-lg border border-amber-200 bg-amber-50 px-6 py-4 text-sm text-amber-900">
              By accessing or using our platform, you agree to be legally bound
              by these Terms & Conditions.
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-6 py-16">
          {/* Introduction */}
          <Section title="Introduction">
            <p>
              These Terms and Conditions (“T&C”) govern your access to and use
              of the services provided by <strong>TripShalla</strong>, including
              its website, mobile applications, and related services.
            </p>

            <p>
              By browsing, registering, or making a booking through our
              platform, you acknowledge that you have read, understood, and
              agreed to be bound by these Terms.
            </p>
          </Section>

          {/* Scope */}
          <Section title="Scope">
            <p>
              These Terms apply to all services offered through the platform,
              including but not limited to tours, activities, accommodations,
              flights, transportation, and visa assistance.
            </p>

            <p>
              Additional terms may apply to specific services and will be
              communicated at the time of booking.
            </p>
          </Section>

          {/* User Accounts */}
          <Section title="User Accounts">
            <p>
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities that occur under your
              account.
            </p>

            <p>
              Thrillophilia reserves the right to suspend or terminate accounts
              that violate these Terms or applicable laws.
            </p>
          </Section>

          {/* Activities */}
          <Section title="Activities & Experiences" highlight>
            <ul className="list-disc ml-5 space-y-3">
              <li>
                Participation is subject to eligibility and safety criteria
              </li>
              <li>No refunds for late arrival, early exit, or no-shows</li>
              <li>
                Certain activities may involve inherent risks and physical
                exertion
              </li>
              <li>
                You agree to follow instructions provided by guides and
                operators
              </li>
            </ul>
          </Section>

          {/* Governing Law */}
          <Section title="Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of India.
            </p>

            <p>
              Courts located in Jaipur shall have exclusive jurisdiction over
              any disputes arising under these Terms.
            </p>

            <p className="mt-10 text-xs text-slate-400">
              © 2026 TripShalla. All rights reserved.
            </p>
          </Section>
        </main>
      </div>
    </>
  );
};

/* --------------------------------
   Reusable Section Component
--------------------------------- */
const Section = ({ title, children, highlight }) => (
  <section
    className={`mb-20 ${
      highlight ? "rounded-xl bg-orange-50 border border-orange-100 p-10" : ""
    }`}
  >
    <h2 className="text-2xl font-semibold text-slate-900 mb-4">{title}</h2>

    <div className="space-y-4 text-slate-700 leading-relaxed text-[15.5px]">
      {children}
    </div>
  </section>
);

export default Terms;
