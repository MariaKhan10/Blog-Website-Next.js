import React from 'react';

const Contact = () => {
  return (
    <div>
      <section className="text-gray-600 body-font relative bg-black/60">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          {/* Map Section */}
          <div className="lg:w-2/3 md:w-1/2 bg-gray-800 rounded-lg overflow-hidden sm:mr-10 p-6 relative">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924237.7101196521!2d66.49593501614461!3d25.192983602435174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1735647692458!5m2!1sen!2s"
    className="w-full h-full rounded-lg"
    style={{ border: 0 }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>


          {/* Contact Information Section */}
          <div className="lg:w-1/3 md:w-1/2 bg-gray-800 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-lg shadow-lg p-6">
            <h2 className="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
            <p className="leading-relaxed mb-5 text-gray-300">
              
"Share your thoughts and ideas with us—we value your feedback and creativity."
            </p>

            {/* Name Input */}
            <form   action="https://formspree.io/f/mldenjvj"
  method="POST">
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-700 text-gray-300 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            {/* Email Input */}
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-700 text-gray-300 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            {/* Message Textarea */}
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-700 text-gray-300 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>

            {/* Submit Button */}
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Submit
            </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
            "Stay connected with us for the latest updates and creative insights."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
