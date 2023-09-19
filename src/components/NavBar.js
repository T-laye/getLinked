import React from "react";

export default function NavBar() {
  return (
    <nav className="flex b-slate-500 items-center justify-between space-x-16 w-7/12">
      <ul className="flex text-base space-x-14  bg-bue-500">
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
      </ul>
      <button className="btn primary-bg">Register</button>
    </nav>
  );
}
