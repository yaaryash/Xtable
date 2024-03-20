import React, { useState } from "react";

const XTable = () => {
  // Initial table data
  const initialData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];

  // State for table data and sort type
  const [tableData, setTableData] = useState(initialData);
  const [sortType, setSortType] = useState("");

  // Function to handle sorting
  const handleSort = (type) => {
    let sortedData = [...tableData];
    if (type === "date") {
      sortedData.sort((a, b) => {
        if (a.date === b.date) {
          return b.views - a.views;
        }
        return new Date(b.date) - new Date(a.date);
      });
    } else if (type === "views") {
      sortedData.sort((a, b) => {
        if (a.views === b.views) {
          return new Date(b.date) - new Date(a.date);
        }
        return b.views - a.views;
      });
    }
    setTableData(sortedData);
    setSortType(type);
  };

  return (
    <div>
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={() => handleSort("date")}>Sort by Date</button>
        <button onClick={() => handleSort("views")}>Sort by Views</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.views}</td>
              <td>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default XTable;
