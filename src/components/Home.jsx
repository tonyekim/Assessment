import React, { useState } from "react";
import { FiTwitter } from "react-icons/fi";
import { BsDiscord } from "react-icons/bs";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(true);

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

  // const handleClick = (event) => {
    
  //   window.open('https://metamask.io/download/', '_blank)
  // };

  const handleButtonClick = () => {
    window.open('https://metamask.io/download', '_blank');
  };


  return (
    <div className="mb-16">
      <div className="grid grid-cols-2 ">
        <div>
          <div className="flex items-center gap-32 mt-28 justify-center">
            <div className="h-[50px] w-[50px] flex flex-col items-center">
              <img
                src="https://sepoliajobcrypt.on.fleek.co/media/jclogo.svg"
                alt=""
              />

              <h1 className=" whitespace-nowrap font-bold text-lg">
                Job Crypt
              </h1>
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
              <FaInfoCircle size={24} />
            </button>
            <button onClick={handleButtonClick} className="bg-black text-white rounded-xl font-bold text-lg">
              Click here to install MetaMask!
            </button>
          </div>

          <div className="border border-gray-200 h-[220px] w-[450px] rounded flex flex-col gap-8 py-8">
            <h1 className="font-bold text-sm">Select Dashboard</h1>

            <h2 className=" whitespace-nowrap text-xl ">
              Need Crypto?
              <span className="text-red-600">TEST NET USE FAUCET!!</span>
            </h2>

            <div className="flex gap-3 items-center justify-center">
              <NavLink to="/employee" className="text-xl">Employer</NavLink>
              <span className="text-xl"> | </span>
              <NavLink to="/jobseeker" className="text-xl">Job Seeker</NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="m-auto flex flex-col items-center justify-center mt-28">
        <div className="border border-gray-200 w-[500px] h-[100px] rounded-md"></div>

        <div className="flex items-center gap-1 mt-2">
          <div className="border border-gray-200 w-[450px] h-[70px] rounded-md flex items-center justify-center">
            <h1 className="font-bold text-lg">About the Role</h1>
          </div>

          <div className="flex flex-col gap-2 mt-1">
            <div className="flex flex-col">
              <div className="border border-gray-200 w-[300px] h-[200px] rounded-md flex flex-col gap-8 items-center justify-center">
                <h1 className="font-bold text-lg">Key Skills</h1>

                <div className="flex gap-2 items-center">
                  <FaYoutubeSquare />
                  <button>How to Apply with JobCrypt</button>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 w-[300px] h-[150px] rounded-md flex  items-center  justify-center">
              <h1 className="font-bold text-lg">Job Categories</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-8 ">
        <button className=" bg-black rounded-full text-white font-bold px-6 py-3">
          BACK
        </button>
      </div>

      <div className=" mt-36">
        <h1 className="text-[32px] font-bold leading-snug">Ready to start?</h1>

        <div className="mt-4">
          <span className="">Get the latest jobs direct to your inbox</span>
        </div>

        <form onSubmit={handleSubmit}>
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

      <div className="flex justify-between items-center mt-10 leading-none">
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

export default Home;
