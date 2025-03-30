import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "Testimony", // Default subject
    phoneNumber: "",
    message: "",
    testimonyService: "", // New field for service selection
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
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
        setFormData({
          fullName: "",
          email: "",
          subject: "Testimony",
          phoneNumber: "",
          message: "",
          testimonyService: "",
        });
      } else {
        setResponseMessage("❌ Failed to send message. Please try again later.");
      }
    } catch (error) {
      setResponseMessage("❌ An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-gray-100 my-14 to-white min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
            CONTACT US
          </h2>
          <p className="text-sm md:text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Have a question, testimony, or need assistance? Reach out to us, and we’ll get back to you as soon as possible.
          </p>

          <div className="flex flex-col md:flex-row gap-12 mt-10">
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

            <div className="md:w-1/2 bg-white shadow-lg p-6 md:p-10 rounded-lg border">
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Full Name" className="w-full p-3 border rounded-lg" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email Address" className="w-full p-3 border rounded-lg" />
                
                <label className="block text-gray-700 font-medium">Subject</label>
                <select name="subject" value={formData.subject} onChange={handleChange} className="w-full p-3 border rounded-lg">
                  <option value="Testimony">Testimony</option>
                  <option value="Counselling">Counselling</option>
                  <option value="Need a Bus to Church">Need a Bus to Church</option>
                  <option value="Baby Dedication">Baby Dedication</option>
                  <option value="Baby Naming">Baby Naming</option>
                </select>

                {/* ✅ Phone Number Field (Hidden for Testimony) */}
                {formData.subject !== "Testimony" && (
                  <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required placeholder="Phone Number" className="w-full p-3 border rounded-lg" />
                )}

                {/* ✅ Testimony Service Selection (Only for "Testimony" Subject) */}
                {formData.subject === "Testimony" && (
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Which Service will you be attending?</label>
                    <div className="flex space-x-4">
                      <label>
                        <input type="radio" name="testimonyService" value="First Service" onChange={handleChange} required />
                        First Service
                      </label>
                      <label>
                        <input type="radio" name="testimonyService" value="Second Service" onChange={handleChange} required />
                        Second Service
                      </label>
                    </div>
                  </div>
                )}

                <textarea name="message" rows={5} value={formData.message} onChange={handleChange} required placeholder="Leave a message..." className="w-full p-3 border rounded-lg"></textarea>

                <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg" disabled={loading}>
                  {loading ? "Sending..." : "Submit"}
                </button>

                {responseMessage && (
                  <p className={`text-center ${responseMessage.startsWith("✅") ? "text-green-600" : "text-red-600"}`}>
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
