import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { supabase } from "../lib/supabase";
import { Link } from "react-router-dom";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitError, setSubmitError] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitError("");

    if (!smsConsent) {
      setSubmitStatus("error");
      setSubmitError(
        "Please agree to receive SMS messages from WFK Enterprise, LLC before submitting the form.",
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const { error } = await supabase.from("contact_submissions").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSmsConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSmsConsent(e.target.checked);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-blue-100">
              We'd love to hear from you. Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <ContactInfoCard
              icon={<MapPin className="w-8 h-8" />}
              title="Address"
              content="30505 Bainbridge Rd
Suite 101
Solon, OH 44139"
              delay="200"
              isVisible={isVisible}
            />
            <ContactInfoCard
              icon={<Phone className="w-8 h-8" />}
              title="Phone"
              content="(440) 266-7901"
              delay="400"
              isVisible={isVisible}
            />
            <ContactInfoCard
              icon={<Mail className="w-8 h-8" />}
              title="Email"
              content="info@wfkenterprise.com"
              delay="600"
              isVisible={isVisible}
            />
          </div>

          <div
            className={`max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8 transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800">
                  Thank you for your message! We'll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800">
                  {submitError ||
                    "There was an error submitting your message. Please try again."}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="services">Services Information</option>
                    <option value="careers">Career Opportunities</option>
                    <option value="support">Customer Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  id="smsConsent"
                  name="smsConsent"
                  type="checkbox"
                  checked={smsConsent}
                  onChange={handleSmsConsentChange}
                  required
                  className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="smsConsent" className="text-sm text-gray-700">
                  I agree to receive SMS messages from WFK Enterprise, LLC.
                  Message frequency may vary. Message and data rates may apply.
                  Reply STOP to opt out, HELP for help.
                </label>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-white py-4 px-6 rounded-lg hover:bg-blue-600 transition-colors font-semibold text-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <Send className="w-5 h-5" />
              </button>
              <p className="mt-4 text-center text-sm text-gray-500">
                By submitting this form, you agree to our{" "}
                <Link
                  to="/privacy-policy"
                  className="text-blue-600 hover:underline"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link to="/sms-terms" className="text-blue-600 hover:underline">
                  SMS Terms & Conditions
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-gray-600 mb-8">
              Stop by our headquarters to meet our team and learn more about our
              services.
            </p>
            <div className="bg-gray-300 rounded-lg overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.7304656373367!2d-81.4646079240767!3d41.40165949510991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88311c579ed07621%3A0xfc648ded0332ad02!2s30505%20Bainbridge%20Rd%2C%20Solon%2C%20OH%2044139%2C%20USA!5e0!3m2!1sen!2s!4v1774200462279!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactInfoCard({
  icon,
  title,
  content,
  delay,
  isVisible,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  delay: string;
  isVisible: boolean;
}) {
  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-1000 delay-${delay} hover:shadow-xl ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex justify-center mb-4 text-blue-500">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}
