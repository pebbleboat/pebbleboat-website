"use client";

import useHook from "./useHook";
import {
  Button,
  Input,
  Textarea,
  SectionHeader,
  GradientBackground,
  AnimatedSection,
} from "../../shared";

export default function Contact() {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
    status,
  } = useHook();

  return (
    <section
      id="contact"
      className="py-24 bg-black text-white relative overflow-hidden"
    >
      <GradientBackground variant="contact" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <AnimatedSection animationType="fade-up" delay={0}>
          <SectionHeader
            title="Let's Build Something Amazing"
            subtitle="Ready to transform your idea into reality? Get in touch and let's discuss your project."
            className="mb-12"
          />
        </AnimatedSection>

        <AnimatedSection
          animationType="scale"
          delay={200}
          className="bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl p-8 md:p-12 border-2 border-[#2a2a2a] hover:border-[#84a7b1]/50 transition-all duration-500"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <AnimatedSection animationType="slide-left" delay={400}>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  label="Your Name *"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="John Doe"
                  error={errors.name}
                  touched={touched.name}
                />
              </AnimatedSection>
              <AnimatedSection animationType="slide-right" delay={500}>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  label="Email Address *"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="john@example.com"
                  error={errors.email}
                  touched={touched.email}
                />
              </AnimatedSection>
            </div>

            <AnimatedSection animationType="fade-up" delay={600}>
              <Input
                type="text"
                id="company"
                name="company"
                label="Company Name"
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your Company"
              />
            </AnimatedSection>

            <AnimatedSection animationType="fade-up" delay={700}>
              <Textarea
                id="message"
                name="message"
                label="Project Details *"
                rows={5}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Tell us about your project, timeline, and goals..."
                error={errors.message}
                touched={touched.message}
              />
            </AnimatedSection>

            {status === "success" && (
              <div className="bg-green-500/20 border border-green-400 text-green-100 px-4 py-3 rounded-lg">
                Thank you! We'll get back to you within 24 hours.
              </div>
            )}

            {status === "error" && (
              <div className="bg-red-500/20 border border-red-400 text-red-100 px-4 py-3 rounded-lg">
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            <AnimatedSection animationType="fade-up" delay={800}>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={isSubmitting}
                className="w-full"
              >
                Send Message
              </Button>
            </AnimatedSection>
          </form>

          <AnimatedSection
            animationType="fade-up"
            delay={900}
            className="mt-8 pt-8 border-t border-[#2a2a2a] text-center"
          >
            <p className="text-white/80 mb-4">Or reach us directly:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@pebbleboat.com"
                className="text-white/90 hover:text-[#84a7b1] transition-colors font-medium hover:scale-105 inline-block"
              >
                📧 contact@pebbleboat.com
              </a>
              <span className="hidden sm:inline text-white/40">•</span>
              <a
                href="tel:+917376190196"
                className="text-white/90 hover:text-[#84a7b1] transition-colors font-medium hover:scale-105 inline-block"
              >
                📞 +91 7376190196
              </a>
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </div>
    </section>
  );
}
