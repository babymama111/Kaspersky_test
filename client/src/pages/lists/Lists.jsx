import React, { useState, useEffect } from "react";
import axios from "axios";
import './listsStyles/Lists.css'

const Lists = () => {
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
      <button className="buttoncp" onClick={() => setShowTable(true)}>
        Показать данные списком
      </button>
      {showTable && (
        <>
          <input className="input" 
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <table className="table">
            <thead>
              <tr>
                <th>
                  <button className="buttoncp" onClick={() => handleSort("name")}>
                    Отсортировать по имени
                  </button>
                </th>
                <th>
                  <button className="buttoncp" onClick={() => handleSort("mail")}>
                    отсортировать по Mail
                  </button>
                </th>
                <th>
                  <button className="buttoncp" onClick={() => handleSort("group")}>
                    отсортировать по группе
                  </button>
                </th>
                <th>
                  <button className="buttoncp" onClick={() => handleSort("number")}>
                    отсортировать по номеру
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td className="small-text">{item.name}</td>
                  <td className="small-text">{item.mail}</td>
                  <td className="small-text">{item.group}</td>
                  <td className="small-text">{item.number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Lists;
