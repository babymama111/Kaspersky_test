import React, { useState, useEffect } from "react";
import axios from "axios";
import './listsStyles/Cards.css'

const Cards = () => {
  const [data, setData] = useState([]);
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3001/list").then((response) => {
      setData(response.data);
    });
  }, []);

  const sortedData = [...data].sort((a, b) => {
    if (!sortField) return 0;
    if (a[sortField] < b[sortField]) return sortDirection === "asc" ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const filteredData = sortedData.filter((item) =>
    Object.values(item).some(
      (value) => typeof value === "string" && value.includes(searchTerm)
    )
  );

  const handleSort = (field) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  return (
    <div>
      <button className = "buttoncp" onClick={() => setShowTable(true)}>Показать данные карточками</button>
      {showTable && (
        <>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div style={{ marginTop: "20px" }}>
            <button className = "buttoncp" onClick={() => handleSort("name")}>
              Отсортировать по имени
            </button>
            <button className = "buttoncp" onClick={() => handleSort("mail")}>
              Отсортировать по Mail
            </button>
            <button  className = "buttoncp" onClick={() => handleSort("group")}>
              Отсортировать по группе
            </button>
            <button  className = "buttoncp" onClick={() => handleSort("number")}>
              Отсортировать по номеру
            </button>
          </div>
          <div  style={{ display: "flex", flexWrap: "wrap" }}>
            {filteredData.map((item) => (
              <div className = "card"
                key={item.id}
                style={{
                  border: "1px solid black",
                  margin: "10px",
                  padding: "10px",

                }}
              >
                <img  className="image_kas"
                  src="https://content.kaspersky-labs.com/se/com/content/en-global/images/b2c/product-icon-kisa/product-icon-kisa.png"
                  alt="User"
                  style={{ marginBottom: "10px" }}
                />
                <div
                  style={{
                    flexDirection: 'row',
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div  className = "buttoncp">{item.name}</div>
                  
                </div>
                <div>
                <div className = "buttoncp">{item.mail}</div>
                </div>
                <div className = "buttoncp">{item.group}</div>
                <div className = "buttoncp">{item.number}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Cards;
