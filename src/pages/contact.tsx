import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "Counselling", // Default subject
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setResponseMessage("✅ Your message has been sent successfully!");
        setFormData({ fullName: "", email: "", subject: "Counselling", message: "" });
      } else {
        setResponseMessage("❌ Failed to send message. Please try again later.");
      }
    } catch (error) {
      setResponseMessage("❌ An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  // set timer for error message or success message
  setTimeout(() => {
    setResponseMessage("");
  }, 8000); 

  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-gray-100 my-14 to-white min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
            CONTACT US
          </h2>
          
          <p className="text-sm md:text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Have a question, testimony, or need assistance? Reach out to us, and we’ll get back to you as soon as possible.
          </p>

          <div className="flex flex-col md:flex-row gap-12 mt-10">
            {/* Contact Info */}
            <div className="md:w-1/2 bg-white shadow-lg p-6 md:p-8 rounded-lg border">
              <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-4">
                GLORY CENTRE, RCCG CHAPEL OF HIS GLORY.
              </h3>
              <p className="text-sm md:text-base text-gray-600 mb-4">
                📍 <strong>Address:</strong> 50 Nelson Street, Bradford, United Kingdom, BD50DD
              </p>
              <p className="text-sm md:text-base text-gray-600 mb-2">
                📞 <strong>Phone:</strong> +44 7984 678266, 01274032678
              </p>
              <p className="text-sm md:text-base text-gray-600 mb-4">
                📧 <strong>Email:</strong> info@rccgbradford.org.uk
              </p>
            </div>

            {/* Contact Form */}
            <div className="md:w-1/2 bg-white shadow-lg p-6 md:p-10 rounded-lg border">
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                {/* Full Name */}
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary text-sm md:text-base"
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary text-sm md:text-base"
                />

                {/* Subject (Radio Buttons) */}
                <div>
                  <label className="block text-sm md:text-base text-gray-700 font-medium mb-2">Subject</label>
                  <div className="flex flex-wrap gap-4">
                    {["Counselling", "Need a Bus to Church", "Testimony"].map((option) => (
                      <label key={option} className="flex items-center space-x-2 text-gray-700 text-sm md:text-base">
                        <input
                          type="radio"
                          name="subject"
                          value={option}
                          checked={formData.subject === option}
                          onChange={handleChange}
                          className="text-primary"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Leave a message..."
                  className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary resize-none text-sm md:text-base"
                ></textarea>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white p-3 rounded-lg font-bold hover:opacity-90 transition text-sm md:text-base"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit"}
                </button>

                {/* Response Message */}
                {responseMessage && (
                  <p className={`text-center mt-2 ${responseMessage.includes("✅") ? "text-green-500" : "text-red-500"} text-sm md:text-base`}>
                    {responseMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
