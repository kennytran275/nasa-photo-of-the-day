import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BASE_URL, API_KEY } from "./constants/index";
import Photos from "./components/Photos/Photos";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // console.log(`${BASE_URL}?api_key=DEMO_KEY`);
    axios
      .get(`${BASE_URL}?api_key=DEMO_KEY`)
      .then((res) => {
        console.log(res);
        setData([res.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
      <Photos photos={data} />
    </div>
  );
}

export default App;
