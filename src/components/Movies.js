import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectMovies } from "../feature/MovieSlice";
import { Link } from "react-router-dom";

function Movies() {
  const movies = [
    { name: "Bao",src:"bao.jpg"},
    { name: "Bao",src:"bao.jpg"},
    { name: "Bao",src:"bao.jpg"},
    { name: "Bao",src:"bao.jpg"},
    { name: "Bao",src:"bao.jpg"},
    { name: "Bao",src:"bao.jpg"},
    { name: "Bao",src:"bao.jpg"},
    { name: "Bao",src:"bao.jpg"},
    { name: "Bao",src:"bao.jpg"},
    { name: "Bao",src:"bao.jpg"},
    { name: "Bao",src:"bao.jpg"},
    { name: "Bao",src:"bao.jpg"},
    { name: "Bao",src:"bao.jpg"},
    { name: "Bao",src:"bao.jpg"},
    { name: "Bao",src:"bao.jpg"},
    { name: "Bao",src:"bao.jpg"},
  ];

  return (
    <Container>
      <h4>Recommened for you</h4>
      <Content>
          {movies.map((movie) => (
            <Wrap>
              <Link to="/details/1">
                <img src="/images/bao.jpg" />
              </Link>
            </Wrap>
          ))}      
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  box-sizing: border-box;
  h4 {
    margin-top: 50px;
    margin-bottom: 20px;
    font-size: 20px;
  }
`;
const Content = styled.div`
  display: flex;

  flex-wrap: wrap;
  justify-content: space-between;
`;

const Wrap = styled.div`
  width:23%;
  img {
    width:100%;
    height: auto;
    border: 4px solid transparent;
    border-radius: 8px;
    transition: all 0.3s;
    box-shadow: 0px 26px 30px -10px rgb(0 0 0/69%),
      0px 16px 10px -10px rgb(0 0 0/69%);
    margin-bottom: 35px;

    &:hover {
      transform: scale(1.05);
      border: 4px solid white;
    }
  }
`;
