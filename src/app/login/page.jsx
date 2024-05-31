"use client";

import React, { useState, memo } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.scss";

function Login() {
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (res.ok) {
      const data = await res.json();
      if (data.token) {
        toast.success("Successful!");
        router.push("/admin");
      } else {
        toast.error("Login failed");
      }
    } else {
      toast.error("Parol yoki login xato");
    }
  };

  return (
    <div>
      <div className="login_nav">
        <h2>Home</h2>
        <p>/</p>
        <h3>Login</h3>
      </div>
      <div className="login container">
        <form className="fr" onSubmit={handleSubmit}>
          <label className="label">Username</label>
          <div className="ikki">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
            />
          </div>
          <label className="label">Password</label>
          <div className="ikki">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <button type="submit">Login</button>
          <button
            className="sub_btn"
            type="button"
            onClick={() => router.back()}
          >
            Back
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default memo(Login);
