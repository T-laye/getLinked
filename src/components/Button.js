import { useRouter } from "next/router";
import React from "react";

export default function Button({regPage}) {
  const router = useRouter();

  const goToRegister = () => {
    router.push("/register");
  };

  return (
    <button onClick={goToRegister} className={`btn ${regPage ? ' primary-border' : 'primary-bg'}`}>
      Register
    </button>
  );
}
