import React, { Component, useEffect } from "react";

import "./instaJjuho";
import "./App.css";
import { Avatar } from "@mui/material";
import JjuhoInsta from "./instaJjuho";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Grid } from "@mui/material";

function App() {
  const information = {
    name: "juhojang",
    age: "23",
    school: "충북대학교 COSMIC",
    follower: 300,
    following: 1000,
    image:
      "https://www.hollywoodreporter.com/wp-content/uploads/2017/03/some_like_it_hot_-_h_-_1959.jpg",
  };

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={8}>
          <Stack spacing={6}>
            <Typography variant="h1">{information.name}</Typography>
            <Stack>
              <Stack direction="row" spacing={2}>
                <Typography variant="h6">팔로워</Typography>
                <Typography variant="h6">{information.follower}</Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Typography variant="h6">팔로잉</Typography>
                <Typography variant="h6">{information.following}</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Avatar
            alt="juhojang"
            src={information.image}
            sx={{ width: 300, height: 300 }}
          />
        </Grid>
      </Grid>

      <div className="Component">
        <JjuhoInsta></JjuhoInsta>
      </div>
    </div>
  );
}

export default App;
