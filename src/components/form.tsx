import React from 'react'

function Form1() {
  return (


    <form>
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
            Company Name*
          </label>
          <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder="Tutsplus"/>
          <div>
            <span className="text-red-500 text-xs italic">
              Please fill out this field.
            </span>
          </div>
        </div>
        <div className="md:w-1/2 px-3">
          <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
            Title*
          </label>
          <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" placeholder="Software Engineer"/>
        </div>
      </div>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-full px-3">
          <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
            Application Link*
          </label>
          <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="application-link" type="text" placeholder="http://...."/>
        </div>
      </div>
      <div className="-mx-3 md:flex mb-2">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
            Location*
          </label>
          <div>
            <select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="location">
              <option>Abuja</option>
              <option>Enugu</option>
              <option>Lagos</option>
            </select>
          </div>
        </div>
        <div className="md:w-1/2 px-3">
          <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
            Job Type*
          </label>
          <div>
            <select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="job-type">
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Internship</option>
            </select>
          </div>
        </div>
        <div className="md:w-1/2 px-3">
          <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
            Department*
          </label>
          <div>
            <select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="department">
              <option>Engineering</option>
              <option>Design</option>
              <option>Customer Support</option>
            </select>
          </div>
        </div>
      </div>
      <div className="-mx-3 md:flex mt-2">
        <div className="md:w-full px-3">
          <button className="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
            Button
          </button>
        </div>
      </div>
    </div>
  </form>
  )
}

export default Form1