import React from "react";
import {
  UsersIcon,
  EnvelopeIcon,
  KeyIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../Redux/User/userSlice.js";
import OAuth from "../components/OAuth.jsx";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "user",
  });

  console.log(formData);

  const handleChange = (e) => {
    if (e.target.id === "password" || e.target.id === "email") {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
    if (e.target.id === "user" || e.target.id === "admin") {
      setFormData({ ...formData, role: e.target.id });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="max-w-lg mx-auto p-3 bg-white my-7 rounded-lg">
      <h1 className="text-3xl font-semibold text-[#509FEA] text-center  py-7 ">
        Sign in
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-7 px-6">
        <div className="flex  items-center justify-between px-10 ">
          <div className="flex items-center gap-4">
            <input type="radio" className="h-5 w-5" id="admin" checked={formData.role === "admin"} onChange={handleChange} />
            <div>
              <AcademicCapIcon className="h-6 w-6 text-[#A19B9B]" />
              <span className="text-[#A19B9B]">School</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <input type="radio" className="h-5 w-5" id="user" checked={formData.role ==="user"} onChange={handleChange} />
            <div>
              <UsersIcon className="h-6 w-6 text-[#A19B9B]" />
              <span className="text-[#A19B9B]">Student</span>
            </div>
          </div>
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
          disabled={loading}
          className="bg-[#1C83E5] p-3 text-xl text-white font-semibold rounded-lg"
        >
          {loading ? "Loading" : "Sign in"}
        </button>
        {formData.role === "user"?<div> <p className="font-semibold text-[#509FEA] text-center">OR</p>
        <OAuth/></div>: ''}
        
      </form>

      {formData.role === "user"?<p className="text-center text-[#509FEA] my-4">
        Don't have an account?{" "}
        <Link to="/sign-up">
          <span className="font-semibold underline">Sign up</span>
        </Link>
      </p> : ""}

      
      {error && <p className="text-red-500 mt-5 text-center">{error}</p>}
    </div>
  );
}
