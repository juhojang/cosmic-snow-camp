import "./App.css";
import { ButtonGroup, Grid } from "@mui/material";
import React, { Component, useEffect } from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Stack } from "@mui/system";

class JjuhoInsta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInsta: false,
    };

    this.instaButton = this.instaButton.bind(this);
    this.introduceButton = this.introduceButton.bind(this);
  }

  instaButton(event) {
    this.setState({
      showInsta: true,
    });
  }

  introduceButton(event) {
    this.setState({
      showInsta: false,
    });
  }

  render(props) {
    const imagestyle = {
      height: "25vh",
      width: "15vw",
    }; //사진의 크기

    const recentPicture = [
      "jjuhoInsta/picture.1.jpg",
      "jjuhoInsta/picture.2.jpg",
      "jjuhoInsta/picture.3.jpg",
    ]; //최근 사진 목록

    const introduceJuho = "안녕하세요 충북대학교 3학년 되는 박주호입니다!";

    const introduceDetail =
      "지금은 코스믹 멤버이고, 이 블로그는 테스트용입니다.";

    return (
      <div>
        <div>
          <ButtonGroup variant="text" aria-label="text button group">
            <Button variant="text" onClick={this.introduceButton}>
              {" "}
              자기소개{" "}
            </Button>
            <Button variant="text" onClick={this.instaButton}>
              {" "}
              인스타그램{" "}
            </Button>
          </ButtonGroup>
        </div>
        {this.state.showInsta === true ? (
          <Typography variant="h6">jjuho_book의 최근 게시물</Typography>
        ) : null}
        {this.state.showInsta === true ? ( //showInsta가 false라면 자기소개를, true라면 인스타그램 사진을 보여준다.
          <Stack spacing={2}>
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              spacing={0.1}
            >
              <img style={imagestyle} src={recentPicture[0]} alt="1"></img>
              <img style={imagestyle} src={recentPicture[1]} alt="1"></img>
              <img style={imagestyle} src={recentPicture[2]} alt="1"></img>
            </Grid>
            <div>
              <Button
                href="https://www.instagram.com/jjuho_book/?hl=ko"
                variant="text"
              >
                {" "}
                인스타 구경가기{" "}
              </Button>
            </div>
          </Stack>
        ) : (
          <Stack>
            <Typography variant="h6">{introduceJuho}</Typography>
            <Typography variant="subtitle1">{introduceDetail}</Typography>
          </Stack>
        )}
      </div>
    );
  }
}

export default JjuhoInsta;
