import React, { useState, useEffect } from "react";
import styled from "styled-components";
import db from "../Firebase";
import { useParams } from "react-router-dom";

function Details() {
  const movies = [
    {
      backgroundImg: "/images/bao.jpg",
      titleImg: "/images/bao_logo.png",
      subTitle: "2018 . 7m . family, fantasy, kids, animation",
      description:`An ageing Chinese mother, feeling alone when her child moves out,
       gets a second chance at motherhood when one of her dumplings comes to life.`,
      id: 1,
    },
    {
      backgroundImg: "/images/vivo.jpg",
      titleImg: "/images/vivo_logo.png",
      subTitle: "2018 . 7m . family, fantasy, kids, animation",
      description:`To fulfil his owner's last wish, Vivo, a pet kinkajou, ventures out on
      a musical adventure where he makes new friends and rediscovers a new meaning to life.`,
      id: 2,
    },
    {
      backgroundImg: "/images/rio.jpg",
      titleImg: "/images/rio_logo.png",
      subTitle: "2018 . 7m . family, fantasy, kids, animation",
      description:`Captured by smugglers when he was just a hatchling, a macaw named Blu 
      (Jesse Eisenberg) never learned to fly and lives a happily domesticated life in Minnesota
      with his human friend, Linda.`,
      id: 3,
    },
    {
      backgroundImg: "/images/trans.jpg",
      titleImg: "/images/trans_logo.png",
      subTitle: "2018 . 7m . family, fantasy, kids, animation",
      description:`Van Helsing's mysterious new invention transforms Drac and his pals into humans, and
      Johnny into a monster. With their new mismatched bodies, Drac and the pack must find a way to switch
      themselves back before their transformations become permanent..`,
      id: 4,
    },
    {
      backgroundImg: "/images/spiderman.jpg",
      titleImg: "/images/spiderman.png",
      subTitle: "2018 . 7m . family, fantasy, kids, animation",
      description:`After gaining superpowers from a spider bite, Miles Morales protects the city as Spider-Man.
      Soon, he meets alternate versions of himself and gets embroiled in an epic battle to save the multiverse.`,
      id: 5,
    },
    {
      backgroundImg: "/images/onward.jpg",
      titleImg: "/images/onward_logo.png",
      subTitle: "2018 . 7m . family, fantasy, kids, animation",
      description:`In a magical realm where technological advances have taken over, Ian and Barley, two elven brothers,
      set out on an epic adventure to resurrect their late father for a day.`,
      id: 6,
    },
    {
      backgroundImg: "/images/onward.jpg",
      titleImg: "/images/onward_logo.png",
      subTitle: "2018 . 7m . family, fantasy, kids, animation",
      description:`In a magical realm where technological advances have taken over, Ian and Barley, two elven brothers,
      set out on an epic adventure to resurrect their late father for a day.`,
      id: 6,
    },
    {
      backgroundImg: "/images/onward.jpg",
      titleImg: "/images/onward_logo.png",
      subTitle: "2018 . 7m . family, fantasy, kids, animation",
      description:`In a magical realm where technological advances have taken over, Ian and Barley, two elven brothers,
      set out on an epic adventure to resurrect their late father for a day.`,
      id: 6,
    },
  ];

  const movie = movies.filter((movie) => movie.id == 4)[0];

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg}></img>
          </Background>
          <MovieTitle>
            <img src={movie.titleImg} />
          </MovieTitle>
          <Buttons>
            <PlayBtn>
              <img src="/images/play-icon-black.png" />
              <span>PLAY</span>
            </PlayBtn>
            <TrailerBtn>
              <img src="/images/play-icon-white.png" />
              <span>TRAILER</span>
            </TrailerBtn>
            <AddToPlayListBtn>+</AddToPlayListBtn>
            <GroupBtn>
              <img src="/images/group-icon.png" />
            </GroupBtn>
          </Buttons>
          <SubTitle>{movie.subTitle}</SubTitle>
          <Description>{movie.description}</Description>
        </>
      )}
    </Container>
  );
}

export default Details;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom:0;
  z-index: -1;
  opacity:.9;
  object-fit: contain;
  img {
    width: 100%;
    height: 110%;
  }
`;

const MovieTitle = styled.div`
  img {
    margin-top: 50px;
    width: 300px;
    height: auto;
  }
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 40px;
  button {
    cursor: pointer;
  }
`;
const PlayBtn = styled.button`
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 0 15px;
  background-color: white;
  height: 50px;
  margin-right: 22px;
  border: 2px solid rgb(249, 249, 249, 0.8);

  span {
    letter-spacing: 3px;
  }

  &:hover {
    background-color: rgb(99, 99, 99);
  }
`;
const TrailerBtn = styled(PlayBtn)`
  background-color: rgb(0 0 0/50%);
  color: white;
`;
const GroupBtn = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgb(249, 249, 249, 0.8);
  background-color: rgb(0 0 0/80%);
  margin-right: 16px;

  &:hover {
    background-color: rgb(99, 99, 99);
  }
`;
const AddToPlayListBtn = styled(GroupBtn)`
  color: white;
  font-size: 30px;
  background-color: rgb(0 0 0/60%);
`;

const SubTitle = styled.div`
  margin: 20px 0px;
  font-size: 15px;
  opacity: 0.9;
`;

const Description = styled.div`
  width: 700px;
  font-size: 20px;
  opacity: 0.9;
`;
