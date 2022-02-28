import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import Viewer from "./Viewer";
import db from "../Firebase";
import { useDispatch } from "react-redux";
import { setMovies } from "../feature/MovieSlice";
import LogIn from "./LogIn";

function Home() {
  const dispatch = useDispatch();
  let count = 0;

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let temp = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      dispatch(setMovies(temp));
    });
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewer />
      <Movies />
      <LogIn/>
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    content: "";
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
`;
