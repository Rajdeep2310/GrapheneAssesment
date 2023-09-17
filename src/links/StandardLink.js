import React from "react";
import { NavLink } from "react-router-dom";

function StandardLink({ path, name }) {
  return (
    <NavLink
      to={path}
      className="font-semibold  text-xl text-blue-900 hover:underline transition-all ease-in-out underline"
    >
      {name}
    </NavLink>
  );
}
export default StandardLink;
