import "./App.css";
import { ButtonGroup, Grid, TableHead, TextField } from "@mui/material";
import axios from "axios";
import React, { Component, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Input } from "@mui/material";
import { Stack } from "@mui/system";

class FoodSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredData: [],
      target: "",
      data: props.data,
      showList: false,
    };

    this.memoSentence = this.memoSentence.bind(this);
    this.filtering = this.filtering.bind(this);
  }

  memoSentence(event) {
    this.setState({
      target: event.target.value,
    });
  }

  filtering() {
    let name = [];
    {
      this.state.data.COOKRCP01.row.map((food) =>
        String(food.RCP_NM).includes(this.state.target)
          ? (name = name.concat(food))
          : console.log("false")
      );
    }

    this.setState({
      filteredData: name,
      showList: true,
    });

    console.log(this.state.filteredData);
  }

  render(props) {
    return (
      <div>
        <Typography variant="h1"> 음식 영양 성분 검색기</Typography>
        <TextField label="음식이름" onChange={this.memoSentence}></TextField>
        <Button variant="contained" onClick={this.filtering}>
          검색
        </Button>
        {this.state.showList
          ? this.state.filteredData.map((food) => (
              <li>
                <Link
                  to="/detail"
                  state={{ data: food, totalData: this.state.data }}
                >
                  {food.RCP_NM}
                </Link>
              </li>
            ))
          : null}
      </div>
    );
  }
}

export default FoodSearch;
