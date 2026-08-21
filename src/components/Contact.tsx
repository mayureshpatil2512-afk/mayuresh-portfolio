"use client";

import { useState } from "react";

export default function Contact() {
  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Submit Handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("========== CONTACT FORM ==========");

    console.log({
      name,
      email,
      phone,
      subject,
      message,
    });

    alert("Thank you! Your message has been submitted successfully.");

    // Clear Form
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            Contact Me
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Let us discuss your next project.
          </p>

        </div>

        {/* Content */}

        <div className="mt-16 grid gap-16 lg:grid-cols-2">

          {/* Left Side */}

          <div>

            <h3 className="text-3xl font-bold text-blue-600">
              Get in Touch
            </h3>

            <p className="mt-4 text-gray-600">
              Feel free to contact me for freelance work,
              internships, collaborations or full-time opportunities.
            </p>

            <div className="mt-10 space-y-8">

              <div>

                <h4 className="text-lg font-semibold text-gray-900">
                  📧 Email
                </h4>

                <p className="mt-1 text-gray-700">
                  mayureshpatil0310@gmail.com
                </p>

              </div>

              <div>

                <h4 className="text-lg font-semibold text-gray-900">
                  📞 Phone
                </h4>

                <p className="mt-1 text-gray-700">
                  +91 9876543210
                </p>

              </div>

              <div>

                <h4 className="text-lg font-semibold text-gray-900">
                  📍 Location
                </h4>

                <p className="mt-1 text-gray-700">
                  Pune, Maharashtra, India
                </p>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Name */}

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 bg-white p-4 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />

            {/* Email */}

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 bg-white p-4 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />

            {/* Phone */}

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white p-4 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />

            {/* Subject */}

            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 bg-white p-4 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />

            {/* Message */}

            <textarea
              rows={6}
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 bg-white p-4 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />

            {/* Button */}

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:bg-blue-700"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}