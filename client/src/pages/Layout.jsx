import React, { useState } from "react";
import Home from "./Home";

function Layout() {
  const [hovered, setHovered] = useState(false);
//здесь использую хук для записи состояния, после прописываю функции, который меняют цвет новбара при событии
  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const navbarStyle = {
    backgroundColor: hovered ? "#655" : "#333",
    padding: "10px"
  };

  const linkStyle = {
    color: "white",
    padding: "20px"
  };

  return (
    <div >
          <nav className="navbar" style={navbarStyle}>
      <a href="https://github.com/babymama111?tab=repositories" style={linkStyle} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        Гитхуууб
      </a>

      <a href="https://t.me/ilya_berulava" style={linkStyle} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        Телеграф
      </a>
          </nav>
        
          <Home />  
          {/* тут добавляю компонент в компонент */}
    </div>
    
  );
}

export default Layout;
