import React from "react";
import LegalTabs from "./LegalTabs";

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Last updated: Feb 25, 2026
            </p>

            <div className="mt-6 max-w-4xl rounded-lg border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-900">
              This Privacy Policy explains how TripShalla collects, uses,
              stores, and protects your personal information.
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
              This privacy policy applies to <strong>www.TripShalla.com</strong>
              and is operated by TripShalla Tours and Adventure Pvt. Ltd.
            </p>
            <p className="mt-4">
              It explains how user privacy is handled, the responsibilities of
              users and the website, and how personal information is processed,
              stored, and protected.
            </p>
          </section>

          {/* The Website */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              The Website
            </h2>
            <p>
              TripShalla takes a proactive approach to user privacy and ensures
              appropriate measures are in place to safeguard user data. The
              website complies with applicable Indian laws governing data
              protection and privacy.
            </p>
          </section>

          {/* Cookies */}
          <section className="rounded-xl border border-slate-200 bg-slate-50 p-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Use of Cookies
            </h2>
            <p>
              This website uses cookies to enhance user experience. Cookies are
              small files stored on your device that help analyze website usage
              and personalize content.
            </p>
            <p className="mt-4">
              Users may control or disable cookies through browser settings.
              Disabling cookies may impact certain functionalities of the
              website.
            </p>
            <p className="mt-4">
              We use Google Analytics to understand visitor behavior. This tool
              does not collect personal information and is used solely for
              performance analysis.
            </p>
          </section>

          {/* Email Communication */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Email Communication
            </h2>
            <p>
              Users who subscribe to our communications may receive emails
              regarding updates, offers, or service-related notifications. You
              may opt out of such communications at any time.
            </p>
          </section>

          {/* External Links */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              External Links
            </h2>
            <p>
              This website may contain links to external websites. While we
              strive to link only to quality and relevant resources, we are not
              responsible for the privacy practices or content of external
              sites.
            </p>
          </section>

          {/* Advertising */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Adverts and Sponsored Links
            </h2>
            <p>
              Sponsored links and advertisements may appear on the website.
              These are served by advertising partners who may use cookies to
              track referral data.
            </p>
            <p className="mt-4">
              Clicking on sponsored links is done at your own discretion, and
              TripShalla is not responsible for any consequences arising from
              visiting third-party websites.
            </p>
          </section>

          {/* Social Media */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Social Media Platforms
            </h2>
            <p>
              Interactions on social media platforms are governed by the
              respective platform’s privacy policies. TripShalla is not
              responsible for user actions taken on third-party social networks.
            </p>
          </section>

          {/* Footer */}
          <section className="border-t border-slate-200 pt-12">
            <p className="text-sm text-slate-500">
              If you have questions regarding this Privacy Policy, please
              contact TripShalla through official communication channels.
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

export default PrivacyPolicy;
