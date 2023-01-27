import React, { Component, useEffect, useState } from "react";
import "./instaJjuho";
import "./searchFood";
import "./App.css";
import { Avatar } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Detail from "./detail";
import JjuhoInsta from "./instaJjuho";
import axios from "axios";

import { Stack } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Grid } from "@mui/material";
import FoodSearch from "./searchFood";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setError(null);
      setData(null);
      setLoading(true);

      const response = await axios.get(
        "http://openapi.foodsafetykorea.go.kr/api/b82c84d607e44d77bb97/COOKRCP01/json/1/1000"
      );

      setData(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  if (!data) return null;

  console.log(data.COOKRCP01.row[596].RCP_NM);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={<FoodSearch data={data}></FoodSearch>}
          />
          <Route path="/detail" element={<Detail />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
