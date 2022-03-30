import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div>
      <h1>Welcome To My Routes</h1>
      <button>
        <CustomLink to="/about">About </CustomLink>{" "}
      </button>
      <button>
        <CustomLink to="/posts">Post </CustomLink>{" "}
      </button>
      <button>
        <CustomLink to="/friends">Friends </CustomLink>{" "}
      </button>
      <button>
        <CustomLink to="/country">Country </CustomLink>{" "}
      </button>
      <button>
        <CustomLink to="/sliders">Sliders </CustomLink>{" "}
      </button>
     
      <button>
        <CustomLink to="/">Home </CustomLink>{" "}
      </button>
    </div>
  );
};

export default Header;
