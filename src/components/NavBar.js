import React from "react";
import Button from "./Button";

export default function NavBar() {
  return (
    <nav className="flex bg-slate500 items-center w-6/12 ">
      <ul className="flex text-base b-slate-900  justify-between w-full items-center  bg-bue-500">
        <li>
          <a href="">Timeline</a>
        </li>
        <li>
          <a href="">Overview</a>
        </li>
        <li>
          <a href="">FAQs</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <Button />
      </ul>
    </nav>
  );
}
