import React, { useState } from "react";
import Lists from "./lists/Lists";
import Bloks from "./lists/Bloks";
import Cards from "./lists/Cards";
import './pagesStyles/GetStarted.css'
import FormComponent from './FormComponent';

// это страница второго роута, по хорошему, нужно было вынести навбар в компонент, но я немного не успеваю это сделать, поэтому просто копипащу)))

function GetStarted() {
  const [selectedButton, setSelectedButton] = useState(null);
  const [hovered, setHovered] = useState(false);
//добавим 2 хука 
  const linkStyle = {
    color: "white",
    padding: "5px",
  };
  const navbarStyle = {
    backgroundColor: hovered ? "#655" : "#333",
    padding: "10px"
  };
  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const handleClick = (buttonNumber) => {
    setSelectedButton(buttonNumber === selectedButton ? null : buttonNumber);
  };
//а тут я добавил функцию рендеринга, которая при нажатии определенной кнопки , выводит необходимый компонент
  const renderComponent = () => {
    if (selectedButton === 1) {
      return (
        <div>
          <Lists />
        </div>
      );
    } else if (selectedButton === 2) {
      return (
        <div>
          <Bloks />
        </div>
      );
    } else if (selectedButton === 3) {
      return (
        <div>
          <Cards />
        </div>
      );
    } else if (selectedButton === 4) {
      return (
        <div>
          <FormComponent />
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <nav className="navbar" style={navbarStyle}>
        <a
          href="https://github.com/babymama111?tab=repositories"
          style={linkStyle}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          Гитхуууб
        </a>

        <a
          href="https://t.me/ilya_berulava"
          style={linkStyle}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          Телеграф
        </a>
      </nav>
      <button className="buttoncp"
        onClick={() => handleClick(1)}
       
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        Список
      </button>
      <button className="buttoncp"
        onClick={() => handleClick(2)}
   
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        Блок
      </button>
      <button className="buttoncp"
        onClick={() => handleClick(3)}
      
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        Карточки
      </button>
      <button className="buttoncp"
        onClick={() => handleClick(4)}
      
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        Добавить пользователя
      </button>
      {renderComponent()}

    </div>
  );
}

export default GetStarted;
