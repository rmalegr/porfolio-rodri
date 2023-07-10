import { useEffect, useState } from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full h-full  ">
        <form action="" className="flex flex-col max-w-[600] w-full">
          <div className="pb-0">
            <p className="text-4xl text-center font-bold inline border-b-4 border-pink-600">
              Contacts
            </p>
            <p className="text-gray-300 py-4">
              Submit the form below me an email - bestsoport@gmail.com{" "}
            </p>
          </div>
          <input className="bg-[#ccd6f6] p-2 text-gray-700" type="text" placeholder="Name" name="name" />
          <input className="my-4 p-2 bg-[#ccd6f6] text-gray-700 " type="email" placeholder="yourEmail@gmail.com" name="email" />
          <textarea className="bg-[#ccd6f6] p-2 text-gray-700"  name="message" rows="10" placeholder="Message"></textarea>
          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
