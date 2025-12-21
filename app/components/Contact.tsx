"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In a real app, you would send this to your backend
    console.log("Form submitted:", formData);
    
    setSubmitStatus("success");
    setIsSubmitting(false);
    setFormData({ name: "", email: "", company: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[#84a7b1] to-white bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to transform your idea into reality? Get in touch and let's
            discuss your project.
          </p>
        </div>

        <div className="bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl p-8 md:p-12 border-2 border-[#2a2a2a] hover:border-[#84a7b1]/50 transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-white/90"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a]/70 border-2 border-[#404040] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#84a7b1] focus:border-[#84a7b1] transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-white/90"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a]/70 border-2 border-[#404040] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#84a7b1] focus:border-[#84a7b1] transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium mb-2 text-white/90"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a]/70 border-2 border-[#404040] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#84a7b1] focus:border-[#84a7b1] transition-all"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-white/90"
              >
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a]/70 border-2 border-[#404040] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#84a7b1] focus:border-[#84a7b1] transition-all resize-none"
                placeholder="Tell us about your project, timeline, and goals..."
              />
            </div>

            {submitStatus === "success" && (
              <div className="bg-green-500/20 border border-green-400 text-green-100 px-4 py-3 rounded-lg">
                Thank you! We'll get back to you within 24 hours.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-500/20 border border-red-400 text-red-100 px-4 py-3 rounded-lg">
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#84a7b1] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#6d8a94] hover:shadow-lg hover:shadow-[#84a7b1]/30 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-[#2a2a2a] text-center">
            <p className="text-white/80 mb-4">Or reach us directly:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@pebbleboat.com"
                className="text-white/90 hover:text-[#84a7b1] transition-colors font-medium"
              >
                📧 hello@pebbleboat.com
              </a>
              <span className="hidden sm:inline text-white/40">•</span>
              <a
                href="tel:+1234567890"
                className="text-white/90 hover:text-[#84a7b1] transition-colors font-medium"
              >
                📞 +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
  