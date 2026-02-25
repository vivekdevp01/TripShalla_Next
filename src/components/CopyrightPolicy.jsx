import React from "react";
import LegalTabs from "./LegalTabs";

const CopyrightPolicy = () => {
  return (
    <>
      {/* Top Legal Navigation */}
      <LegalTabs />

      {/* Page Wrapper */}
      <div className="bg-white min-h-screen">
        {/* Header */}
        <header className="border-b border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-14">
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight">
              Copyright Policy
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Last updated: Feb 25, 2026
            </p>

            <div className="mt-6 max-w-4xl rounded-lg border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-900">
              This Copyright Policy governs ownership, usage, and protection of
              content published on TripShalla.
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-6xl mx-auto px-6 py-16 space-y-20 text-slate-700 leading-relaxed">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Introduction
            </h2>
            <p>
              This Copyright Policy governs the ownership, use, submission, and
              enforcement of copyright-protected material used in connection
              with tours, travel products, and services operated or sold by{" "}
              <strong>TripShalla</strong>.
            </p>
            <p className="mt-4">
              For the purpose of this policy, “TripShalla”, “we”, “us”, or “our”
              refers to TripShalla Adventure Tours Pvt. Ltd.
            </p>
          </section>

          {/* Ownership */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Ownership of TripShalla Content
            </h2>
            <p>
              All content displayed on TripShalla’s website, applications, and
              associated platforms is protected under applicable copyright and
              intellectual property laws.
            </p>
            <p className="mt-4">
              No visitor or third party may copy, reproduce, distribute, modify,
              republish, upload, transmit, perform, or create derivative works
              from any content without prior written consent from TripShalla.
            </p>
            <p className="mt-4">
              Content may be downloaded only where explicitly permitted, solely
              for personal, non-commercial use, and only if all copyright
              notices remain intact.
            </p>
          </section>

          {/* Partner Content */}
          <section className="rounded-xl border border-slate-200 bg-slate-50 p-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Content Supplied by Hotels, Activity Providers & Partners
            </h2>
            <p>
              This section applies to hotels, homestays, activity providers,
              guides, transport operators, and other local service partners who
              contribute content to TripShalla.
            </p>
          </section>

          {/* Original Content */}
          <section>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Original Content Requirement
            </h3>
            <p>All content provided to TripShalla must be:</p>
            <ul className="mt-4 list-disc ml-6 space-y-2">
              <li>100% original</li>
              <li>Owned outright by the submitting partner</li>
              <li>Free from copyright infringement</li>
              <li>Not copied from third-party websites or platforms</li>
            </ul>
          </section>

          {/* License */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              License Granted to TripShalla
            </h2>
            <p>
              By submitting content, partners grant TripShalla a worldwide,
              royalty-free, perpetual license to use, display, reproduce,
              distribute, modify, and promote such content across its platforms
              for marketing and operational purposes.
            </p>
          </section>

          {/* Infringement */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Copyright Infringement
            </h2>
            <p>
              TripShalla respects intellectual property rights and expects users
              and partners to do the same. If you believe that your copyrighted
              work has been used without authorization, please notify us with
              sufficient details to investigate the claim.
            </p>
          </section>

          {/* Footer */}
          <section className="border-t border-slate-200 pt-12">
            <p className="text-sm text-slate-500">
              TripShalla reserves the right to remove any content that violates
              copyright or intellectual property laws without prior notice.
            </p>
            <p className="mt-6 text-xs text-slate-400">
              © 2026 TripShalla. All rights reserved.
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default CopyrightPolicy;
