import React from "react";
import "./Login.scss";
function Login() {
  return (
    <div>
      <div className="login_nav">
        <h2>Home</h2>
        <p>/</p>
        <h3>Login</h3>
      </div>
      <div className="login container">
        <div className="contact_text">
          <form action="">
            <label className="lebel">Username</label>
            <div className="bir">
              <input type="text" />
            </div>
            <label className="lebel">Passeord</label>
            <div className="bir">
              <input type="text" />
            </div>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
