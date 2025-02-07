"use client";

import { useState } from "react";
import { CiTrophy } from "react-icons/ci";
import { FaClock, FaPhoneAlt, FaRegCheckCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Get In Touch With Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          For More Information About Our Product & Services, Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <FaLocationDot className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Address</h3>
              <p className="text-gray-600">
                236 5th St Avenue, New <br /> York NY10000, United <br />
                States
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <FaPhoneAlt className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Phone</h3>
              <p className="text-gray-600">Mobile: +(84) 546-6789</p>
              <p className="text-gray-600">Hotline: +(84) 456-6789</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <FaClock className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Working Time</h3>
              <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
              <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-5 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm border border-black"
                placeholder="Abc"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-5 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm border border-black"
                placeholder="Abc@def.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="p-5 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm border border-black"
                placeholder="This is an optional"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="p-5 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm border border-black"
                placeholder="Hi! I'd like to ask about"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <span className="text-5xl">
              <CiTrophy />
            </span>
          </div>
          <h3 className="text-lg font-semibold mb-2">High Quality</h3>
          <p className="text-gray-600">Crafted from top materials</p>
        </div>

        <div className="text-center">
          <div className="flex justify-center mb-4">
            <span className="text-5xl">
              <FaRegCheckCircle />
            </span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Warranty Protection</h3>
          <p className="text-gray-600">Over 2 years</p>
        </div>

        <div className="text-center">
          <div className="flex justify-center mb-4">
            <span className="text-5xl">
              <RiCustomerService2Fill />
            </span>
          </div>
          <h3 className="text-lg font-semibold mb-2">24 / 7 Support</h3>
          <p className="text-gray-600">Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
