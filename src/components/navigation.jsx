import { useState } from "react";
import {
  AiOutlineMenu,
  AiFillHome,
  AiFillFile,
  AiFillCode,
  AiTwotoneMail,
} from "react-icons/ai";

const Navigation = ({ setCurrPage }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="nav">
      <div className={showMenu ? "nav-links" : "nav-links hidden"}>
        <div onClick={() => setCurrPage("home")}>
          <AiFillHome />
          Home
        </div>
        <div onClick={() => setCurrPage("projects")}>
          <AiFillFile />
          Projects
        </div>
        <div onClick={() => setCurrPage("skills")}>
          <AiFillCode />
          Skills
        </div>
        <div onClick={() => setCurrPage("contact")}>
          <AiTwotoneMail />
          Contact
        </div>
      </div>
      <div className="nav-menu-icon" onClick={() => setShowMenu(!showMenu)}>
        <AiOutlineMenu />
      </div>
    </div>
  );
};

export default Navigation;
