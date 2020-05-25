import React, { useState, useEffect, Component } from "react";
import { Button, Badge } from "reactstrap";

import StockTable from "./components/StockTable";
import { RefSelector } from "ag-grid-community";

function App(props) {
  var [rdata, setRData] = useState(null);

  return (
    <div className="container">
      <h1>Book Catalogue</h1>
      <br></br>
      <br></br>

      <StockTable onClick={(value) => setRData(value)} />
      <pre className="mt-5">
        <h2>
          <Badge color="success">
            {rdata}
            {" Books published in 2000 in the Drama category"}
          </Badge>
        </h2>
      </pre>

      <Button
        color="info"
        size="sm"
        className=" mt-5"
        href="https://openlibrary.org/developers/api"
        target="_blank"
      >
        Go to Open Library API
      </Button>
    </div>
  );
}

export default App;
