"use client";

import { useEffect, useState } from "react";

const ToggleLightDarkMode = () => {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const body = document.querySelector("body");

    if (mode === "dark") body?.classList.add("dark");
    else body?.classList.remove("dark");
  }, [mode]);

  return (
    <button
      className="btn"
      onClick={() => setMode(prev => (prev === "light" ? "dark" : "light"))}
    >
      {mode === "dark" ? "light" : "dark"}
    </button>
  );
};

export default ToggleLightDarkMode;
