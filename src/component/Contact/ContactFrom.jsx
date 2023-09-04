import React from 'react'

const ContactFrom = () => {
  return (
    <div className="text-white w-[90%] sm:w-[70%] lg:w-[100%] lg:p-16 m-auto border-4 border-indigo-950 p-7 rounded-md ">
      <h1 className="text-xl mb-2 lg:mb-5 lg:text-2xl text-center font-CustomFont2 tracking-widest">
        Contact me :
      </h1>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="mb-4 ">
          <label htmlFor="name" className=" text-lg ">
            Name:
          </label>
          <input
            id="name"
            type="text"
            className=" bg-transparent border border-indigo-500 w-full rounded-md outline-green-600  p-2 pl-4"
          />
        </div>
        <div className="mb-4 ">
          <label htmlFor="email" className=" text-lg ">
            Email:
          </label>
          <input
            id="email"
            type="email"
            className=" bg-transparent border w-full rounded-md  outline-green-600 p-2 pl-4 border-indigo-500"
          />
        </div>
        <div className="mb-4 ">
          <label htmlFor="ph number" className=" text-lg">
            Number:
          </label>
          <input
            id="ph number"
            type="number"
            className=" bg-transparent border w-full rounded-md  outline-green-600 p-2 pl-4 border-indigo-500 "
          />
        </div>
        <div className="mb-4 flex flex-col ">
          <label htmlFor="message" className=" text-lg">
            Message:
          </label>
          <textarea
            name="message"
            id="message"
            className=" bg-transparent border  rounded-md  outline-green-600 border-indigo-500 pl-4"
          ></textarea>
        </div>
        <button
          type="submit"
          className=" w-full rounded-3xl bg-indigo-700 mt-4 hover:opacity-50 py-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactFrom