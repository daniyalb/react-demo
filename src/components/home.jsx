import React from "react";
import { useState } from "react";

const Home = () => {
    const [name, setName] = useState("Daniyal");

  return (
    <div className="home">
      <div className="home left">
        <h1>Hi, I'm {name} Bokhari</h1>
        <p>
          I'm a student at the University of Toronto studying X. I'm passionate
          about software development and I'm always looking for new
          opportunities to learn and grow.
        </p>
        <input
            type="text"
            placeholder="name"
            className="home-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="home right">
        <img
          src="https://via.placeholder.com/300"
          alt="Daniyal Bokhari"
          className="home-image"
        />
      </div>
    </div>
  );
};

export default Home;
