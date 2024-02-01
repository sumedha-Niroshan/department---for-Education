import React from "react";
import { UserIcon, EnvelopeIcon, KeyIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-3 bg-white my-7">
      <h1 className="text-3xl font-semibold text-[#509FEA] text-center  py-7 ">
        Sign up
      </h1>
      <form className="flex flex-col gap-7 px-6">
        <div className="flex gap-3 items-center border border-[#509FEA] rounded-lg p-3 px-4">
          <UserIcon className="h-6 w-6 text-[#A19B9B]" />

          <input
            type="text"
            placeholder="User name"
            className="focus:outline-none"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-3 items-center border border-[#509FEA] rounded-lg p-3 px-4">
          <EnvelopeIcon className="h-6 w-6 text-[#A19B9B]" />

          <input
            type="text"
            placeholder="Email"
            className="focus:outline-none"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-3 items-center border border-[#509FEA] rounded-lg p-3 px-4">
          <KeyIcon className="h-6 w-6 text-[#A19B9B]" />

          <input
            type="password"
            placeholder="Password"
            className="focus:outline-none"
            id="password"
            onChange={handleChange}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-[#1C83E5] p-3 text-xl text-white font-semibold rounded-lg"
        >
          Sign up
        </button>
        <p className="font-semibold text-[#509FEA] text-center">OR</p>
      </form>

      <p className="text-center text-[#509FEA] my-4">
        Already have an account?{" "}
        <Link to="/sign-in">
          <span className="font-semibold underline">Login</span>
        </Link>
      </p>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}
