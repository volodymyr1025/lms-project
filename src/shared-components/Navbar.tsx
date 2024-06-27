import React, { useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar: React.FC = () => {
  const [selected, setSelected] = useState<string>("Sākums");

  const menuItems = [
    { name: "Sākums", href: "#home" },
    { name: "Par mums", href: "#about" },
    { name: "Cenas", href: "#pricing" },
    { name: "Skolotāji", href: "#teachers" },
    { name: "Kredīti", href: "#credits" },
  ];

  return (
    <AppBar position="static" className="!bg-theme-blue">
      <Toolbar className="flex justify-between pt-8 pb-5 px-44 container mx-auto">
        <Typography variant="h6" className="text-base">LOGO</Typography>
        <nav className="flex justify-around items-center bg-white px-2 py-1 rounded-full">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setSelected(item.name)}
              className={`px-4 py-2 rounded-full font-mali text-base ${
                selected === item.name
                  ? "bg-theme-orange text-white"
                  : "bg-white text-black"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>
        <button className="bg-theme-orange font-mali text-white px-6 py-3 text-base rounded-full">
          Pieslēgties
        </button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
