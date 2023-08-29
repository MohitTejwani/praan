import React from "react";
import { Button } from "antd";

function DarkModeButton({ setDarkMode, darkMode }) {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Button type="primary" onClick={() => toggleDarkMode()}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </Button>
  );
}

export default DarkModeButton;

