import React from "react";

export default function Message() {
  return (
    <div id="message" className="mt-10 text-white flex flex-col items-center md:mt-40 md:mb-20">
      <h1 className="text-center font-extrabold text-3xl md:text-5xl text-blue-500">
        Get In Touch
      </h1>
      <div className="w-full max-w-lg p-8">
        <form method="post" action={'mailto:prajapati.suraj3434@gmail.com'} encType="text/plain" className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white"
          />
          <textarea
            placeholder="Your Message"
            required
            rows={5}
            className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
