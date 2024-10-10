import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [senderName, setSenderName] = useState("");
  function handleSubmit(e){
    e.preventDefault();
    setMessage(`Hi ${senderName}, thanks for reaching out. We will get back to you as soon as we can.`);
  }
  return (
    <div id="contact" className="w-full max-w-[1440px] m-auto px-4 mt-12 mb-40 flex flex-wrap flex-col 4cols:flex-row 4cols:items-start 4cols:justify-center 3cols:justify-start 3cols:gap-x-28 3cols:gap-y-6 gap-y-12 4cols:px-8 items-start">
      <h1 className="w-full text-left 4cols:my-24 4cols:text-center text-2xl xs:text-3xl 4cols:text-4xl 4cols:uppercase 4cols:font-medium font-kanit font-bold text-gray-700">
        Drop us a message
      </h1>
      <div className="contact-form-block w-full 3cols:w-[90%] 4cols:w-[40%]">
      <div className="contact-form w-full">
        <form 
        action="" 
        className="w-full flex flex-col gap-8"
        onSubmit={handleSubmit}
        >
          <input
            className="p-2 outline-none border-b border-gray-700 bg-transparent font-roboto  text-lg text-gray-700"
            type="text"
            placeholder="Your name"
            required={true}
            onChange={e => setSenderName(e.target.value)}
          />
          <input
            className="p-2 outline-none border-b border-gray-700 bg-transparent font-roboto  text-lg text-gray-700"
            type="email"
            placeholder="Your email address"
            required={true}
          />
          <textarea
            className="p-2 min-h-[250px] outline-none resize-none border-b border-gray-700 bg-transparent font-roboto  text-lg text-gray-700"
            name="message"
            id="message"
            placeholder="Your message"
          />
          {message && (<p className="font-roboto  text-lg text-gray-700">{message}</p>)}
          <input
            className="bg-gray-700 py-2 border border-gray-700 font-kanit text-white cursor-pointer"
            type="submit"
            value="Send"
          />
        </form>
      </div>
      </div>
      <div className="contact-detail flex flex-col gap-6 items-start">
        <div className="email-block w-full">
          <h3 className="tracking-wide uppercase font-bold outline-none bg-transparent font-kanit text-xl text-gray-600">For general inquiries</h3>
          <p className="text-md font-roboto  text-gray-500">hello@apexxstudio.com</p>
        </div>
        <div className="email-block w-full">
          <h3 className="tracking-wide uppercase font-bold outline-none bg-transparent font-kanit text-xl text-gray-600">For job applications</h3>
          <p className="text-md font-roboto  text-gray-500">hr@apexxstudio.com</p>
        </div>
        <div className="email-block w-full">
          <h3 className="tracking-wide uppercase font-bold outline-none bg-transparent font-kanit text-xl text-gray-600">For marketing and PR</h3>
          <p className="text-md font-roboto  text-gray-500">marketing@apexxstudio.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
