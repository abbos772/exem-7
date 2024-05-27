"use client";
import React, { useState } from "react";
import "./contact.scss";
const bot_Token = "6714877771:AAHjhYSI1QCXr74V76owsIhEJN-FA_pjvhE";
const chatId = "1976708153";

const initialState = {
  fname: "",
  lname: "",
  other: "",
};
function Contact() {
  const [data, setData] = useState(initialState);
  const [messageStatus, setMessageStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fname, lname, order, other } = data;

    if (!fname || !lname) {
      alert("Please fill out first name and last name.");
      return;
    }

    const text = `First Name: ${fname}\nLast Name: ${lname}\nOrder: ${order}\nOther: ${other}`;
    const url = `https://api.telegram.org/bot${bot_Token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
      text
    )}`;

    fetch(url)
      .then((response) => {
        if (response.ok) {
          setMessageStatus("success");
          console.log(setMessageStatus("success"));
          setData(initialState);
        } else {
          setMessageStatus("error");
          console.log(setMessageStatus("error"));
        }
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        setMessageStatus("error");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="nav_bottom">
        <h3>Home</h3>
        <p>/</p>
        <h4>Contact Us</h4>
      </div>
      <div className="container">
        <div className="contact">
          <div className="contact_img">
            <h1>get in touch</h1>
            <p>contact@e-comm.ng</p>
            <p>+234 4556 6665 34</p>
            <p>
              20 Prince Hakerem Lekki <br />
              Phase 1, Lagos.
            </p>
          </div>
          <div className="contact_text">
            <form onSubmit={handleSubmit} action="">
              <div className="bir">
                <input
                  name="fname"
                  value={data.fname}
                  onChange={handleChange}
                  type="text"
                  placeholder="Name..."
                />
              </div>
              <div className="bir">
                <input
                  value={data.lname}
                  onChange={handleChange}
                  type="text"
                  name="lname"
                  id=""
                  placeholder="Email..."
                />
              </div>
              <textarea
                value={data.other}
                onChange={handleChange}
                name="other"
                id=""
                placeholder="Type your massage"
              ></textarea>
              <button className="all" type="submit">
                Send!
              </button>
            </form>
          </div>
        </div>
        <div className="last_search">
          <input type="text" placeholder="Search query..." />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
