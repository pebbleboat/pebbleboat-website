import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { GradientBackground } from "@/app/shared";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Pebbleboat's Terms of Service - Read our terms and conditions for using our services and website.",
  openGraph: {
    title: "Terms of Service | Pebbleboat",
    description:
      "Pebbleboat's Terms of Service - Read our terms and conditions for using our services and website.",
    url: "/terms-of-service",
  },
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <section className="py-24 bg-black relative overflow-hidden min-h-screen">
        <GradientBackground variant="services" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[#84a7b1] to-white bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-white/80">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl p-8 md:p-12 border-2 border-[#2a2a2a] space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                1. Acceptance of Terms
              </h2>
              <p className="text-white/80 leading-relaxed">
                By accessing and using the Pebbleboat website and services, you
                accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do
                not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                2. Use License
              </h2>
              <p className="text-white/80 leading-relaxed mb-2">
                Permission is granted to temporarily access the materials on
                Pebbleboat's website for personal, non-commercial transitory
                viewing only. This is the grant of a license, not a transfer of
                title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-white/80 ml-4 space-y-1">
                <li>Modify or copy the materials</li>
                <li>
                  Use the materials for any commercial purpose or for any public
                  display
                </li>
                <li>
                  Attempt to reverse engineer any software contained on the
                  website
                </li>
                <li>
                  Remove any copyright or other proprietary notations from the
                  materials
                </li>
                <li>
                  Transfer the materials to another person or "mirror" the
                  materials on any other server
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                3. Services
              </h2>
              <p className="text-white/80 leading-relaxed mb-2">
                Pebbleboat provides software development services including but
                not limited to:
              </p>
              <ul className="list-disc list-inside text-white/80 ml-4 space-y-1">
                <li>Web application development</li>
                <li>Mobile application development</li>
                <li>MVP (Minimum Viable Product) development</li>
                <li>Full-stack development services</li>
                <li>Software consulting and technical support</li>
              </ul>
              <p className="text-white/80 leading-relaxed mt-4">
                All services are provided subject to separate service agreements
                that will be executed between Pebbleboat and the client.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                4. Intellectual Property Rights
              </h2>
              <p className="text-white/80 leading-relaxed">
                The website and its original content, features, and
                functionality are owned by Pebbleboat and are protected by
                international copyright, trademark, patent, trade secret, and
                other intellectual property laws. All work product created by
                Pebbleboat for clients will be subject to the terms of the
                specific service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                5. User Accounts
              </h2>
              <p className="text-white/80 leading-relaxed">
                When you create an account with us, you must provide information
                that is accurate, complete, and current at all times. You are
                responsible for safeguarding the password and for all activities
                that occur under your account. You agree not to disclose your
                password to any third party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                6. Prohibited Uses
              </h2>
              <p className="text-white/80 leading-relaxed mb-2">
                You may not use our website or services:
              </p>
              <ul className="list-disc list-inside text-white/80 ml-4 space-y-1">
                <li>
                  In any way that violates any applicable national or
                  international law or regulation
                </li>
                <li>
                  To transmit, or procure the sending of, any advertising or
                  promotional material without our prior written consent
                </li>
                <li>
                  To impersonate or attempt to impersonate the company, a
                  company employee, another user, or any other person or entity
                </li>
                <li>
                  In any way that infringes upon the rights of others, or in any
                  way is illegal, threatening, fraudulent, or harmful
                </li>
                <li>
                  To engage in any other conduct that restricts or inhibits
                  anyone's use or enjoyment of the website
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                7. Disclaimer
              </h2>
              <p className="text-white/80 leading-relaxed">
                The materials on Pebbleboat's website are provided on an 'as is'
                basis. Pebbleboat makes no warranties, expressed or implied, and
                hereby disclaims and negates all other warranties including,
                without limitation, implied warranties or conditions of
                merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of
                rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                8. Limitations
              </h2>
              <p className="text-white/80 leading-relaxed">
                In no event shall Pebbleboat or its suppliers be liable for any
                damages (including, without limitation, damages for loss of data
                or profit, or due to business interruption) arising out of the
                use or inability to use the materials on Pebbleboat's website,
                even if Pebbleboat or a Pebbleboat authorized representative has
                been notified orally or in writing of the possibility of such
                damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                9. Accuracy of Materials
              </h2>
              <p className="text-white/80 leading-relaxed">
                The materials appearing on Pebbleboat's website could include
                technical, typographical, or photographic errors. Pebbleboat
                does not warrant that any of the materials on its website are
                accurate, complete, or current. Pebbleboat may make changes to
                the materials contained on its website at any time without
                notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">10. Links</h2>
              <p className="text-white/80 leading-relaxed">
                Pebbleboat has not reviewed all of the sites linked to its
                website and is not responsible for the contents of any such
                linked site. The inclusion of any link does not imply
                endorsement by Pebbleboat of the site. Use of any such linked
                website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                11. Modifications
              </h2>
              <p className="text-white/80 leading-relaxed">
                Pebbleboat may revise these terms of service for its website at
                any time without notice. By using this website you are agreeing
                to be bound by the then current version of these terms of
                service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                12. Governing Law
              </h2>
              <p className="text-white/80 leading-relaxed">
                These terms and conditions are governed by and construed in
                accordance with applicable laws, and you irrevocably submit to
                the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                13. Contact Information
              </h2>
              <p className="text-white/80 leading-relaxed">
                If you have any questions about these Terms of Service, please
                contact us through our contact form or at the contact
                information provided on our website.
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
