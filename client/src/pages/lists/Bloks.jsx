import React, { useState, useEffect } from "react";
import axios from "axios";
import "./listsStyles/Bloks.css";

const Bloks = () => {
  const [data, setData] = useState([]);
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [showTable, setShowTable] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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

  const groupedData = {};

  filteredData.forEach((item) => {
    if (!groupedData[item.group]) groupedData[item.group] = [];
    groupedData[item.group].push(item);
  });

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
      <button className="buttoncp" onClick={() => setShowTable(true)}>
        Показать данные в блоках
      </button>
      {showTable && (
        <>
          <input
            className="input"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <table>
            <thead>
              <tr>
                <th>
                  <button
                    className="buttoncp"
                    onClick={() => handleSort("name")}
                  >
                    Отсортировать по имени
                  </button>
                </th>
                <th>
                  <button
                    className="buttoncp"
                    onClick={() => handleSort("mail")}
                  >
                    Отсортировать по Mail
                  </button>
                </th>
                <th>
                  <button
                    className="buttoncp"
                    onClick={() => handleSort("number")}
                  >
                    Отсортировать по номеру
                  </button>
                </th>
              </tr>
            </thead>
          </table>
          <div className="containerbl">
            {Object.keys(groupedData).map((group) => (
              <div key={group}>
                <h3>{group}</h3>
                <table className="containerbl">
                  <tbody>
                    {groupedData[group].map((item) => (
                      <tr key={item.id}>
                        <td className="small-text">{item.name}</td>
                        <td className="small-text">{item.mail}</td>
                        <td className="small-text">{item.number}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Bloks;
