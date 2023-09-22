import { useRouter } from "next/router";
import React from "react";

export default function Button() {
  const router = useRouter();

  const goToRegister = () => {
    router.push("/register");
  };

  return (
    <button onClick={goToRegister} className="btn primary-bg">
      Register
    </button>
  );
}
