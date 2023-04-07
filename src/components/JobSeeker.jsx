import React, { useState } from "react";
import { FiTwitter } from "react-icons/fi";
import { BsDiscord } from "react-icons/bs";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const JobSeeker = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");


  const handleChange = (event) => {
    setEmail(event.target.value);
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.trim() === "") {
      setError(true);
      return;
    }

    // Submit the form here
  };

  const handleButtonClick = () => {
    window.open('https://help.optimism.io/hc/en-us/articles/4411903123483-Connecting-your-wallet-to-Optimism', '_blank');
  };

  return (
    <div className="mb-16">
      <div className="grid grid-cols-2 ">
        <div>
          <div className="flex items-center gap-10 mt-28 justify-center">
            <div className="h-[50px] w-[50px] flex flex-col items-center">
              <img
                src="https://sepoliajobcrypt.on.fleek.co/media/jclogo.svg"
                alt=""
              />

              <h1 className=" whitespace-nowrap font-bold text-lg">
                Job Crypt
              </h1>
            </div>

            <div>
              <NavLink to="/search_job" className=" text-white font-bold px-8 py-3 bg-[#1A1A1A] text-lg rounded-full whitespace-nowrap">
                Search Jobs
              </NavLink>
            </div>

            <div className="flex items-center gap-16">
              <div>
                <a href="https://twitter.com/JobCrypt">
                  <FiTwitter />
                </a>
              </div>

              <div>
                <a href="https://www.example.com">
                  <BsDiscord />
                </a>
              </div>

              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-tiktok"
                  viewBox="0 0 16 16"
                >
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"></path>
                </svg>
              </button>
              <button>
                <FaYoutube />
              </button>
            </div>
          </div>
        </div>
        <div className="ml-10 mt-2 flex flex-col gap-4">
          <div className="flex gap-2">
            <button>
              <FaYoutubeSquare size={24} />
            </button>
            <h1 className="text-2xl text-gray-700">How to use JobCrypt</h1>
          </div>

          <div className="flex gap-2">
            <button onClick={handleButtonClick}>
              <FaInfoCircle size={24} className="text-red-500" />
            </button>
            <button onClick={handleButtonClick} className="bg-black text-white rounded-xl font-bold text-lg">
            Click to Connect Metamask
            </button>
          </div>

          <div className="border border-gray-200 h-[220px] w-[450px] rounded flex flex-col gap-8 py-8">
            <h1 className="font-bold text-sm">Select Dashboard</h1>

            <h2 className=" whitespace-nowrap text-xl ">
              Need Crypto?
              <span className="text-red-600">TEST NET USE FAUCET!!</span>
            </h2>

            <div className="flex gap-3 items-center justify-center">
              <button className="text-xl">Employer Dashboard</button>
            </div>
          </div>
        </div>
      </div>

      <div className="m-auto flex flex-col items-center justify-center mt-28">
        <div className="border border-gray-200 w-[1000px] h-[150px] rounded-md flex flex-col gap-4 items-center justify-center">
          <h1 className="text-[38px] font-bold leading-snug">
          Your Latest Job Applications
          </h1>
          <span className=" font-bold">
            Application Date Title Link Other Applicants Status
          </span>
        </div>

       
      </div>

      <div className=" mt-36">
        <h1 className="text-[32px] font-bold leading-snug">Ready to start?</h1>

        <div className="mt-4">
          <span className="">Get the latest jobs direct to your inbox</span>
        </div>

        <form onSubmit={handleSubmit} className="mt-10">
          <div className="mt-4 flex justify-center items-center">
            <label htmlFor="email" className="text-gray-700 mr-[250px]">
              Email Address
              <span className="text-red-400">*</span>
            </label>
            <span className="text-red-400 ml-4">
              *<span className="text-black text-sm">indicates required</span>
            </span>
          </div>
          <input
            type="text"
            id="email"
            placeholder="enter your email here....."
            value={email}
            onChange={handleChange}
            required
            className={`border-2 w-[500px] h-[40px] mt-2 px-4 rounded ${
              error ? "border-red-500" : ""
            }`}
          />
        </form>
      </div>
      {error && (
        <div className="flex justify-start ml-[358px]">
          <p className="text-red-500 text-sm mt-1">This field is required.</p>
        </div>
      )}

      <div className="mt-8">
        <button className="rounded-full text-white font-bold px-32 py-2 bg-[#1A1A1A] text-lg">
          Join Alert List
        </button>
      </div>

      <div className="flex justify-between items-center mt-10 leading-none px-4">
        <div>
          <div className="text-gray-300">© 2022 Job Crypt</div>
          <div className="text-gray-300">
            Framework by
            <div className="text-black ml-1 inline">Uisual</div>
          </div>
          <div className="text-gray-300">
            Powered By
            <div className="text-black ml-1 inline">Open Block EI</div>
          </div>
        </div>

        <div className="flex gap-3 ">
          <button>about</button>
          <span>|</span>
          <button>terms</button>
          <span>|</span>
          <button>privacy policy</button>
          <span>|</span>
          <span>cookie policy</span>
        </div>
      </div>
    </div>
  );
};

export default JobSeeker;
