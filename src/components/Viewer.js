import React from "react";
import styled from "styled-components";

function Viewer() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" />
        <video autoPlay muted loop>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" />
        <video autoPlay muted loop>
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" />
        <video autoPlay muted loop>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" />
        <video autoPlay muted loop>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" />
        <video autoPlay muted loop>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
}

export default Viewer;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  position: relative;
`;

const Wrap = styled.div`
  width: 16.5%;
  height: 10vw ;
  position: relative;
  box-sizing: content-box;

  img {
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 4px solid rgb(249, 249, 249, 0.1);
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0px 26px 30px -10px rgb(0 0 0/69%),
      0px 16px 10px -10px rgb(0 0 0/69%);
    transition: all 0.3s;
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    object-fit: cover;
    visibility: hidden;
  }

  &:hover {
    img {
      border: 4px solid white;
      transform: scale(1.038);
    }
    video {
      visibility: visible;
    }
  }
`;
