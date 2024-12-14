import React, { useState } from "react";
import translations from "../constants/translations";
import users from "../assets/data/userCredentials.json";
import { useNavigate } from "react-router-dom";
import localStorageUtil from "../utils/LocalStorageUtil";
import hashPassword from "../utils/Encrypt";

export const Login = () => {
  const [language, setLanguage] = useState("en");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const t = translations[language];

  const navigate = useNavigate();

  const login = async () => {
    if (
      users.find((user) => user.email === email && user.password === password)
    ) {
      alert("Succefully logged in.");
      const securedPassword = await hashPassword(password);
      localStorageUtil.setLocalStorage("email", email);
      localStorageUtil.setLocalStorage("password", securedPassword);
      email.toString().includes("admin")
        ? navigate("/admin")
        : navigate("/user");
    } else {
      alert("User not found.");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="hidden md:flex w-[30%] bg-[#18476c] text-white flex-col justify-center items-center p-8 relative">
        <div>
          <div className="rounded-full flex items-center justify-center top-28 left-12 absolute">
            <img
              alt="name"
              src="https://img.jobsnepal.com/big/BFJkgpx1vYB33hHCh7mRnduivlFiY1DzNDl67VKt.png"
              className="w-48 rounded-full"
            />
          </div>
          <div className="text-start">
            <h1 className="text-l  mb-4 ">{t.heading}</h1>
            <p className="text-4xl font-bold">{t.subheading}</p>
          </div>
        </div>

        <div className="absolute bottom-8 text-xs start-8">
          &copy; 2024 Resimator. All rights reserved.
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-center items-center relative">
        {/* Language Selector */}
        <div className="absolute top-6 right-6">
          <div className="relative">
            <select
              value={language}
              onChange={handleLanguageChange}
              className="appearance-none border border-gray-300 rounded pl-10 pr-4 py-1 text-sm bg-white cursor-pointer"
              style={{
                backgroundImage: `url("${
                  language === "en"
                    ? "https://flagcdn.com/w40/gb.png"
                    : language === "sv"
                    ? "https://flagcdn.com/w40/se.png"
                    : "https://flagcdn.com/w40/fi.png"
                }")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left 8px center",
                backgroundSize: "20px",
              }}
            >
              <option value="en">English</option>
              <option value="sv">Swedish</option>
              <option value="fi">Finnish</option>
            </select>
          </div>
        </div>

        <div className="w-full max-w-md p-8 bg-white ">
          <div className="text-2xl text-center mb-4">
            {t.signin} <span className="font-semibold">{t.app}</span>
          </div>
          <p className="text-sm text-gray-600 text-center mb-8">
            {t.instruction}
          </p>

          <form className="space-y-6" onSubmit={login}>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.email}
              </label>
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                value={email}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.password}
              </label>
              <input
                type="password"
                placeholder={t.password}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex justify-between items-center">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2" />
                {t.rememberMe}
              </label>
              <a
                href="#"
                className="text-[#1b5d88] text-sm hover:underline focus:outline-none"
              >
                {t.forgotPassword}
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#1b5d88] text-white py-2 rounded-md hover:bg-[#357299] transition font-medium"
            >
              {t.signInButton}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
