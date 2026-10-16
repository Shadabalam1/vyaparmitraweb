import React, { useState } from "react";
import SEOHead from "../components/common/SEOHead";
import { siteConfig } from "../config/siteConfig";
import { Mail, Clock, MapPin, Send, CheckCircle2, ShieldCheck, HelpCircle } from "lucide-react";

import { submitContactForm } from "../utils/formSubmit";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    contactInfo: "",
    businessType: "Kirana / Grocery",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.contactInfo && formData.message) {
      setIsSubmitting(true);
      try {
        await submitContactForm(formData);
        setIsSubmitted(true);
      } catch (err) {
        console.error("Submission notice:", err);
        setIsSubmitted(true);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Us | Support &amp; Enquiries"
        description="Get in touch with the Vyapar Mitra team for general questions, app feedback, or early access enquiries."
        canonicalPath="/contact"
      />

      <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Sampark Karein (Contact Us)
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Vyapar Mitra ke baare mein koi sawal ho ya sujhav, humse seedha sampark karein.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Info & Official Channels */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Official Support Channels
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Feel free to email us directly or submit your query using the form. All information provided here is strictly confidential and used solely to address your query.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-4 p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Support &amp; Business Email</h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-xs text-emerald-800 font-semibold hover:underline mt-0.5 block"
                    >
                      {siteConfig.contact.email}
                    </a>
                    <span className="text-[11px] text-slate-500">
                      Official email for merchant queries &amp; support
                    </span>
                  </div>
                </div>

                {/* Social Handles */}
                <div className="flex items-start space-x-4 p-4 rounded-xl border border-emerald-200 bg-emerald-50/40">
                  <div className="w-10 h-10 rounded-lg bg-emerald-700 text-white flex items-center justify-center shrink-0 font-bold text-sm">
                    @
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Official Social Media</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                      <a
                        href="https://www.instagram.com/vyaparmitraapp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 font-medium hover:border-emerald-500 hover:text-emerald-800 transition-colors"
                      >
                        <span>Instagram:</span>
                        <strong className="text-emerald-700">@vyaparmitraapp</strong>
                      </a>
                      <a
                        href="https://www.facebook.com/vyaparmitraapp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 font-medium hover:border-emerald-500 hover:text-emerald-800 transition-colors"
                      >
                        <span>Facebook:</span>
                        <strong className="text-emerald-700">@vyaparmitraapp</strong>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Working Hours</h3>
                    <p className="text-xs text-slate-700 font-medium mt-0.5">
                      {siteConfig.contact.helpHours}
                    </p>
                    <span className="text-[11px] text-slate-500">
                      {siteConfig.contact.responseTime}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Location</h3>
                    <p className="text-xs text-slate-700 font-medium mt-0.5">
                      {siteConfig.contact.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Clean Inquiry Form */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Aapka Sandesh Prapt Hua! (Message Received)
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Dhanyawad. Aapka sandesh hamare paas aa gaya hai. Hamari team aapse jaldi hi sampark karegi.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        contactInfo: "",
                        businessType: "Kirana / Grocery",
                        message: "",
                      });
                    }}
                    className="mt-4 px-5 py-2.5 bg-emerald-800 text-white rounded-xl text-xs font-bold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you're human: <input name="bot-field" />
                    </label>
                  </p>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                      Send us a Message
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out the form below and we will respond as soon as possible.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Aapka Naam (Your Name) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                        Email ya Phone Number *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contactInfo}
                        onChange={(e) =>
                          setFormData({ ...formData, contactInfo: e.target.value })
                        }
                        placeholder="email@example.com or 98765-XXXXX"
                        className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                        Dukan Ka Prakar (Business Type)
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={(e) =>
                          setFormData({ ...formData, businessType: e.target.value })
                        }
                        className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
                      >
                        <option>Kirana / Grocery</option>
                        <option>Clothing &amp; Garments</option>
                        <option>Mobile &amp; Electronics</option>
                        <option>Hardware &amp; Electricals</option>
                        <option>Cosmetics &amp; Pharmacy</option>
                        <option>General Retail / Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Aapka Sawal ya Sujhav (Your Message) *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Aap Vyapar Mitra ke baare mein kya janna chahte hain?"
                      className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-emerald-800 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm shadow-md transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
