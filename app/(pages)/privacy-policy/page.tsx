import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { GradientBackground } from "@/app/shared";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Pebbleboat's Privacy Policy - Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | Pebbleboat",
    description:
      "Pebbleboat's Privacy Policy - Learn how we collect, use, and protect your personal information.",
    url: "/privacy-policy",
  },
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <section className="py-24 bg-black relative overflow-hidden min-h-screen">
        <GradientBackground variant="services" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[#84a7b1] to-white bg-clip-text text-transparent">
              Privacy Policy
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
                1. Introduction
              </h2>
              <p className="text-white/80 leading-relaxed">
                Welcome to Pebbleboat. We are committed to protecting your
                privacy and ensuring you have a positive experience on our
                website and in using our services. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information
                when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                2. Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    2.1 Information You Provide
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    We collect information that you voluntarily provide to us
                    when you:
                  </p>
                  <ul className="list-disc list-inside text-white/80 ml-4 mt-2 space-y-1">
                    <li>Contact us through our website forms</li>
                    <li>Request information about our services</li>
                    <li>Subscribe to our newsletter or communications</li>
                    <li>Engage with us on social media platforms</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    2.2 Automatically Collected Information
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    When you visit our website, we may automatically collect
                    certain information about your device, including:
                  </p>
                  <ul className="list-disc list-inside text-white/80 ml-4 mt-2 space-y-1">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages you visit and time spent on pages</li>
                    <li>Referring website addresses</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                3. How We Use Your Information
              </h2>
              <p className="text-white/80 leading-relaxed mb-2">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-white/80 ml-4 space-y-1">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Analyze website usage and trends</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-white/80 leading-relaxed mb-2">
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information only in the
                following circumstances:
              </p>
              <ul className="list-disc list-inside text-white/80 ml-4 space-y-1">
                <li>
                  With service providers who assist us in operating our website
                  and conducting our business
                </li>
                <li>When required by law or to respond to legal process</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                5. Data Security
              </h2>
              <p className="text-white/80 leading-relaxed">
                We implement appropriate technical and organizational security
                measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
                However, no method of transmission over the Internet or
                electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                6. Your Rights
              </h2>
              <p className="text-white/80 leading-relaxed mb-2">
                Depending on your location, you may have certain rights
                regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside text-white/80 ml-4 space-y-1">
                <li>The right to access your personal information</li>
                <li>The right to rectify inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to object to processing of your information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="text-white/80 leading-relaxed">
                We use cookies and similar tracking technologies to track
                activity on our website and hold certain information. You can
                instruct your browser to refuse all cookies or to indicate when
                a cookie is being sent. However, if you do not accept cookies,
                you may not be able to use some portions of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                8. Third-Party Links
              </h2>
              <p className="text-white/80 leading-relaxed">
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices or content of these
                third-party sites. We encourage you to review the privacy
                policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                9. Children's Privacy
              </h2>
              <p className="text-white/80 leading-relaxed">
                Our services are not directed to individuals under the age of
                18. We do not knowingly collect personal information from
                children. If you become aware that a child has provided us with
                personal information, please contact us, and we will take steps
                to delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-white/80 leading-relaxed">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date. You are advised
                to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                11. Contact Us
              </h2>
              <p className="text-white/80 leading-relaxed">
                If you have any questions about this Privacy Policy, please
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
