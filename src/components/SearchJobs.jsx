import React, { useState } from "react";
import { FiTwitter } from "react-icons/fi";
import { BsDiscord } from "react-icons/bs";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { ethers } from "ethers";

const SearchJob = () => {
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

  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log("MetaMask Here!");

      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
          setConnButtonText("Wallet Connected");
          getAccountBalance(result[0]);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  // update account, will cause component re-render
  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getAccountBalance(newAccount);
  };

  const getAccountBalance = (account) => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [String(account), "latest"],
      })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const chainChangedHandler = () => {
    // reload the page to avoid any errors with chain change mid use of application
    window.location.reload();
  };

  // listen for account changes
  window.ethereum.on("accountsChanged", accountChangedHandler);

  window.ethereum.on("chainChanged", chainChangedHandler);

  return (
    <div className="mb-10">
      <div>
        <div>
          <div className=" flex flex-col gap-4 ml-52 mt-12">
            <div className="flex gap-2">
              <button className="">
                <FaYoutubeSquare size={24} />
              </button>
              <h1 className="text-2xl text-gray-700 ">How to use JobCrypt</h1>
            </div>

            <div className="flex flex-col gap-10 items-center justify-center">
              <div className="flex items-center">
                <button>
                  <FaInfoCircle size={24} />
                </button>
                <button
                  onClick={connectWalletHandler}
                  className="bg-black text-white rounded-xl font-bold text-lg ml-2"
                >
                  Click to Connect Metamask
                </button>
              </div>

              <div className="">
            <div className="accountDisplay">
              <h3 className="font-bold">Account: <span className="text-base font-normal">{defaultAccount}</span></h3>
            </div>
            {/* <div className="balanceDisplay">
              <h3>Balance: {userBalance}</h3>
            </div>
            {errorMessage} */}
          </div>

              <div>
                <h2 className=" whitespace-nowrap text-xl inline">
                  Need Crypto?
                  <span className="text-red-600 ml-2">
                    TEST NET USE FAUCET!!
                  </span>
                </h2>
              </div>
            </div>
          </div>

          <div className="flex items-center  mt-10 justify-between px-20">
            <div className="h-[50px] w-[50px] flex flex-col items-center">
              <img
                src="https://sepoliajobcrypt.on.fleek.co/media/jclogo.svg"
                alt=""
              />

              <h1 className=" whitespace-nowrap font-bold text-lg">
                Job Crypt
              </h1>

              <div className="pl-[90px]">
                <h1 className="text-xl font-medium whitespace-nowrap">
                  Employer | Job Seeker
                </h1>
              </div>
            </div>

            <div>
              <button className=" text-white font-bold px-8 py-3 bg-[#1A1A1A] text-lg rounded-full whitespace-nowrap">
                Post a Job
              </button>
            </div>

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
      <div className="flex justify-start mt-28 ml-14">
        <h1 className="font-bold text-xl leading-snug">
          Connect Web 3 to view the latest jobs!!
        </h1>
      </div>

      <div className="flex gap-3 mt-28 ml-14 ">
        <button className="font-bold text-xl leading-snug flex text-left">
          Winner Browsers <br /> 3000 - Filecoin <br />
          Prize
        </button>

        <img
          src="https://sepoliajobcrypt.on.fleek.co/assets/images/logo/browsers3000logo.PNG"
          alt=""
          className="h-20 w-32"
        />

        <button className="font-bold text-xl leading-snug flex text-left">
          Filecoin Next Steps <br />
          Micro Grant - <br />
          Awardee 2021
        </button>

        <img
          src="https://filecoin.io/images/filecoin-logo.svg"
          alt=""
          className="h-[90px] w-32"
        />
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

      <div className="flex justify-between items-center mt-10 leading-none px-10">
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

export default SearchJob;
