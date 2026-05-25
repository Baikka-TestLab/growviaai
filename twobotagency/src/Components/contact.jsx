import { useState, useEffect } from "react";
import { CheckCircle, Mail, MapPin } from "lucide-react";

const N8N_URL = import.meta.env.VITE_N8N_WEBHOOK_URL;

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetch(`${import.meta.env.VITE_API_URL}/api/contact`)
      .then((r) => r.json())
      .then((res) => {
        if (res.success) setPageData(res.data);
      })
      .catch(() => {});
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
    interestedIn: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCheckbox = (value) => {
    setForm((prev) => ({
      ...prev,
      interestedIn: prev.interestedIn.includes(value)
        ? prev.interestedIn.filter((v) => v !== value)
        : [...prev.interestedIn, value],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.message) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(N8N_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          businessType: form.businessType,
          services: form.interestedIn.join(", "),
          message: form.message,
        }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setSubmitted(true);
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const businessTypes = pageData?.businessTypes ?? [
    "Plumber", "Electrician", "HVAC", "Roofer", "Painter",
    "Builder", "Auto Mechanic", "E-Commerce", "Dentist", "Other",
  ];

  const services = pageData?.services ?? ["AI Booking", "AI Voice Agent", "Both"];
  const whyUs = pageData?.whyUs ?? ["Free AI audit", "Live demo", "Save time & money", "No pressure"];
  const contactInfo = pageData?.contactInfo ?? { email: "admin@growviaaii.com", location: "Remote" };
  const heading = pageData?.heading ?? "Let's Talk";
  const subheading = pageData?.subheading ?? "Tell us about your business and we'll help automate it.";

  return (
    <div className="min-h-screen bg-brand-navy">
      <section className="pt-28 pb-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
              {heading} <span className="gradient-text">Automation</span>
            </h1>
            <p className="text-brand-muted max-w-md mx-auto">
              {subheading}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Why Contact Us?
              </h2>
              <ul className="space-y-3 text-brand-muted">
                {whyUs.map((item, i) => (
                  <li key={i} className="flex gap-2"><CheckCircle size={18} /> {item}</li>
                ))}
              </ul>
              <div className="mt-8 space-y-3 text-brand-muted">
                <div className="flex gap-2"><Mail size={18} /> {contactInfo.email}</div>
                <div className="flex gap-2"><MapPin size={18} /> {contactInfo.location}</div>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="card-dark p-8 text-center">
                  <CheckCircle size={40} className="mx-auto mb-4 text-brand-purple" />
                  <h3 className="text-xl font-bold text-foreground">Message Sent!</h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card-dark p-6 space-y-4">
                  <input
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full input"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      name="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleChange}
                      className="input"
                    />
                    <input
                      name="phone"
                      placeholder="Phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>
                  <select
                    name="businessType"
                    value={form.businessType}
                    onChange={handleChange}
                    className="input"
                  >
                    <option value="">Business Type</option>
                    {businessTypes.map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                  <div>
                    <p className="text-sm text-brand-muted mb-1">Interested In</p>
                    <div className="flex gap-3 flex-wrap">
                      {services.map((s) => (
                        <label key={s} className="flex items-center gap-1">
                          <input type="checkbox" onChange={() => handleCheckbox(s)} />
                          {s}
                        </label>
                      ))}
                    </div>
                  </div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full input"
                    rows={4}
                  />
                  <button className="w-full btn-gradient py-3 cursor-pointer" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
