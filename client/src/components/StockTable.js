import React, { useState, useEffect, Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";
import { Button, Badge } from "reactstrap";
import { PropertyKeys } from "ag-grid-community";
import "../stylecomp.css";

function StockTable(props) {
  const [rowData, setRowData] = useState([]);

  window.onload = function () {
    var butt = document.getElementById("btn");
    setInterval(function () {
      butt.click();
    }, 5);
  };

  const columns = [
    { headerName: "Title", field: "title" },
    { headerName: "Author", field: "author" },
    { headerName: "Edition Count", field: "editionCount" },
    { headerName: "Book ID", field: "id" },
  ];

  useEffect(() => {
    fetch("http://openlibrary.org/subjects/drama.json?published_in=2000")
      .then((res) => res.json())
      .then((data) => data.works)
      .then((works) =>
        works.map((book) => {
          return {
            title: book.title,
            author: book.authors[0].name,
            editionCount: book.edition_count,
            id: book.cover_id,
          };
        })
      )
      .then((books) => setRowData(books));
  }, []);

  return (
    <div
      className="container ag-theme-balham-dark"
      style={{
        height: "400px",
        width: "800px",
      }}
    >
      <AgGridReact
        columnDefs={columns}
        rowData={rowData}
        pagination={true}
        paginationPageSize={7}
      />
      <button
        id="btn"
        value={rowData.length}
        onClick={(event) => props.onClick(event.target.value)}
      >
        Total number of books
      </button>
    </div>
  );
}

export default StockTable;
