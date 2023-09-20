import React from "react";

export default function Button({ text = "Register" }) {
  return <button className="btn primary-bg">{text}</button>;
}
