import React, { memo } from "react";
import Link from "next/link";
import "./admin.scss";
function Admin() {
  return (
    <div>
      <div className="nav_admin">
        <h1>Home</h1>
        <p>/</p>
        <h3>Admin</h3>
      </div>
      <div className="admin container">
        <h1>Admin panel</h1>
        <div className="admin_text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur cupiditate inventore, deserunt magnam provident dolores
            blanditiis ullam <br /> iusto! Assumenda dolor quis itaque commodi
            tempore laudantium quam deleniti id consequatur. Minus delectus
            officia unde quam nulla ut. Odit <br /> quibusdam quis aut enim
            delectus blanditiis quisquam quidem maiores suscipit. Dignissimos,
            ut repudiandae!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur cupiditate inventore, deserunt magnam provident dolores
            blanditiis ullam <br /> iusto! Assumenda dolor quis itaque commodi
            tempore laudantium quam deleniti id consequatur. Minus delectus
            officia unde quam nulla ut. Odit <br /> quibusdam quis aut enim
            delectus blanditiis quisquam quidem maiores suscipit. Dignissimos,
            ut repudiandae!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur cupiditate inventore, deserunt magnam provident dolores
            blanditiis ullam <br /> iusto! Assumenda dolor quis itaque commodi
            tempore laudantium quam deleniti id consequatur. Minus delectus
            officia unde quam nulla ut. Odit <br /> quibusdam quis aut enim
            delectus blanditiis quisquam quidem maiores suscipit. Dignissimos,
            ut repudiandae!
          </p>
          <Link href={"/pages/Login"}>
            <button className="login_btn">Log out</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default memo(Admin);
