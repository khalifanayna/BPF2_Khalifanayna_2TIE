import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import { ImSpinner2 } from "react-icons/im";
import { BsFillExclamationDiamondFill } from "react-icons/bs";

export default function Login() {
  /* navigate, state & handleChange*/
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  /* process form */
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(""); // Mengosongkan error lama sebelum request baru

    axios
      .post("https://dummyjson.com/user/login", {
        username: dataForm.email, // API DummyJSON menggunakan username, kita mapping dari input email
        password: dataForm.password,
      })
      .then((response) => {
        if (response.status !== 200) {
          setError(response.data.message);
          return;
        }
        // Redirect ke dashboard jika login sukses
        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message || "An error occurred");
        } else {
          setError(err.message || "An unknown error occurred");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  /* error & loading status */
  const errorInfo = error ? (
    <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
      <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
      {error}
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="bg-gray-200 mb-5 p-5 text-sm rounded flex items-center">
      <ImSpinner2 className="me-2 animate-spin" />
      Mohon Tunggu...
    </div>
  ) : null;
  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Welcome Back 👋
      </h2>

      {errorInfo}

      {loadingInfo}

      {/* 1. PASANGKAN onSubmit KE FORM */}
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address / Username
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="emilys" // Contoh username bawaan dari DummyJSON untuk testing
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={dataForm.password}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="emilyspass" // Contoh password bawaan dari DummyJSON untuk testing
            required
          />
        </div>

        {/* 2. ATUR BUTTON SAAT LOADING */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ${
            loading
              ? "bg-green-300 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {loading ? "Processing..." : "Login"}
        </button>
      </form>
    </div>
  );
}
