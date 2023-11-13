import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto my-12 p-8">
      <h2 className="text-4xl font-bold text-teal-500">Contact</h2>
      <form className="mt-8">
        <div className="mb-4">
          <label className="block text-teal-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="name" type="text" placeholder="Your name" />
        </div>
        <div className="mb-4">
          <label className="block text-teal-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="Your email" />
        </div>
        <div className="mb-4">
          <label className="block text-teal-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="message" placeholder="Your message" rows="4"></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded" type="button">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
