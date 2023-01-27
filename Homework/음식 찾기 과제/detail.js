import React, { Component, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Route, Link } from "react-router-dom";
import { ButtonGroup, Grid, TableHead, TextField } from "@mui/material";
import { PieChart } from "react-minimal-pie-chart";
import { useLocation } from "react-router-dom";
import "./App.css";
import "./styles.css";

const Detail = (props) => {
  const [foodNM, setFoodNM] = useState("");
  const [showList, setShowList] = useState(false);
  const [filteredFood, setFilteredFood] = useState([]);
  const { state } = useLocation();
  const [storeInform, setInform] = useState(state.data);

  const [isHovering, setIsHovering] = useState([]);

  let hover = [];

  filteredFood.map(() => (hover = hover.concat(false)));
  console.log(isHovering);

  const data01 = [
    { name: "탄수화물", value: storeInform.INFO_CAR, color: "#0088FE" },
    { name: "단백질", value: storeInform.INFO_PRO, color: "#00C49F" },
    { name: "지방", value: storeInform.INFO_FAT, color: "#FFBB28" },
  ];

  function showFoodList() {
    let name = [];
    let hover = [];
    {
      state.totalData.COOKRCP01.row.map((food) =>
        String(food.RCP_NM).includes(foodNM)
          ? (name = name.concat(food))
          : console.log("false")
      );
    }
    setFilteredFood(name);
    name.map(() => (hover = hover.concat(false)));
    setIsHovering(hover);
    console.log(isHovering);
    setShowList(true);
  }

  function foodName(name) {
    setFoodNM(name.target.value);
    console.log(foodNM);
  }

  return (
    <div>
      <Typography variant="h1"> 음식 영양 성분 검색기</Typography>
      <TextField label="음식이름" onChange={foodName}></TextField>
      <Button variant="contained" onClick={showFoodList}>
        검색
      </Button>
      {showList
        ? filteredFood.map((food, index) => (
            <div
              key={index}
              className={isHovering[index] ? "change" : ""}
              onMouseOver={() => (
                (hover[index] = true), console.log(hover), setIsHovering(hover)
              )}
              onMouseOut={() => ((hover[index] = false), setIsHovering(hover))}
            >
              <li onClick={() => setInform(food)}>{food.RCP_NM}</li>
            </div>
          ))
        : null}
      <h1>{storeInform.RCP_NM}</h1>
      <h1>
        1회 섭취량 당 칼로리{" "}
        {Number(storeInform.INFO_CAR) * 4 +
          Number(storeInform.INFO_PRO) * 4 +
          Number(storeInform.INFO_FAT) * 9}
      </h1>
      <h2>{storeInform.INFO_CAR}</h2>
      <h2>{storeInform.INFO_FAT}</h2>
      <h2>{storeInform.INFO_PRO}</h2>
      <PieChart
        data={[
          {
            title: "탄수화물",
            value: Number(storeInform.INFO_CAR),
            color: "#0088FE",
          },
          {
            title: "단백질",
            value: Number(storeInform.INFO_PRO),
            color: "#00C49F",
          },
          {
            title: "지방",
            value: Number(storeInform.INFO_FAT),
            color: "#FFBB28",
          },
        ]}
      />
    </div>
  );
};

export default Detail;
