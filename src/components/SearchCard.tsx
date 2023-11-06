import React, { useEffect, useState } from "react";
import Card from "./Card";
import { GetDocument } from "../api/auth";
import  magnifying  from "../assets/magnifying_glass.svg";

const SearchCard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [documents, setDocuments] = useState<string[]>([]);

  const fetchDocuments = async () => {
    try {
        const response = await GetDocument(searchTerm);
        setDocuments(response.data);
    } catch (error) {
        console.error("Error fetching documents:", error);
    }
};



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //console.log(`Searching for: ${searchTerm}`);
    fetchDocuments();
    //console.log(documents)

  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="w-full h-full p-4">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

            <img className="w-4 h-4" src= {magnifying}/>

            {/* <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg> */}
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-600 rounded-lg"
            placeholder="Busca un documento"
            value={searchTerm}
            onChange={handleInputChange}
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Search
          </button>
        </div>
      </form>

      <Card documents={documents} />

    </div>
  );
};

export default SearchCard;
