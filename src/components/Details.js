/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();

  const movies = [
    {
      backgroundImg: "/images/bao.jpg",
      titleImg: "/images/bao_logo.png",
      subTitle: "2018 . 7m . family, fantasy, kids, animation",
      description: `An ageing Chinese mother, feeling alone when her child moves out,
       gets a second chance at motherhood when one of her dumplings comes to life.`,
      id: 1,
    },
    {
      backgroundImg: "/images/vivo.jpg",
      titleImg: "/images/vivo_logo.png",
      subTitle: "2018 . 7m . family, fantasy, kids, animation",
      description: `To fulfil his owner's last wish, Vivo, a pet kinkajou, ventures out on
      a musical adventure where he makes new friends and rediscovers a new meaning to life.`,
      id: 2,
    },
    {
      backgroundImg: "/images/rio.jpg",
      titleImg: "/images/rio_logo.png",
      subTitle: "2018 . 7m . family, fantasy, kids, animation",
      description: `Captured by smugglers when he was just a hatchling, a macaw named Blu 
      (Jesse Eisenberg) never learned to fly and lives a happily domesticated life in Minnesota
      with his human friend, Linda.`,
      id: 3,
    },
    {
      backgroundImg: "/images/trans.jpg",
      titleImg: "/images/trans_logo.png",
      subTitle: "2018 . 7m . family, fantasy, kids, animation",
      description: `Van Helsing's mysterious new invention transforms Drac and his pals into humans, and
      Johnny into a monster. With their new mismatched bodies, Drac and the pack must find a way to switch
      themselves back before their transformations become permanent..`,
      id: 4,
    },
    {
      backgroundImg: "/images/spiderman.jpg",
      titleImg: "/images/spiderman.png",
      subTitle: "2018 . 7m . family, fantasy, kids, animation",
      description: `After gaining superpowers from a spider bite, Miles Morales protects the city as Spider-Man.
      Soon, he meets alternate versions of himself and gets embroiled in an epic battle to save the multiverse.`,
      id: 5,
    },
    {
      backgroundImg: "/images/12.jpg",
      titleImg: "/images/42.png",
      subTitle: "2018 . 7m . family, fantasy, kids, animation",
      description: `In a magical realm where technological advances have taken over, Ian and Barley, two elven brothers,
      set out on an epic adventure to resurrect their late father for a day.`,
      id: 6,
    },
    {
      backgroundImg: "/images/1.jpg",
      titleImg: "/images/31.png",
      subTitle: "2018 . 7m . family, fantasy, kids, animation",
      description: `In a magical realm where technological advances have taken over, Ian and Barley, two elven brothers,
      set out on an epic adventure to resurrect their late father for a day.`,
      id: 7,
    },
    {
      backgroundImg: "/images/2.jpg",
      titleImg: "/images/32.png",
      subTitle: "2018 . 7m . family, fantasy, kids, animation",
      description: `In a magical realm where technological advances have taken over, Ian and Barley, two elven brothers,
      set out on an epic adventure to resurrect their late father for a day.`,
      id: 8,
    },
    {
      backgroundImg: "/images/3.jpg",
      titleImg: "/images/33.png",
      subTitle: "2018 . 7m . family, fantasy, kids, animation",
      description: `In a magical realm where technological advances have taken over, Ian and Barley, two elven brothers,
      set out on an epic adventure to resurrect their late father for a day.`,
      id: 9,
    },
    {
      backgroundImg: "/images/4.jpg",
      titleImg: "/images/34.png",
      subTitle: "2018 . 7m . family, fantasy, kids, animation",
      description: `In a magical realm where technological advances have taken over, Ian and Barley, two elven brothers,
      set out on an epic adventure to resurrect their late father for a day.`,
      id: 10,
    },
    {
      backgroundImg: "/images/5.jpg",
      titleImg: "/images/35.png",
      subTitle: "2018 . 7m . family, fantasy, kids, animation",
      description: `In a magical realm where technological advances have taken over, Ian and Barley, two elven brothers,
      set out on an epic adventure to resurrect their late father for a day.`,
      id: 11,
    },
    {
      backgroundImg: "/images/6.jpg",
      titleImg: "/images/36.png",
      subTitle: "2018 . 7m . family, fantasy, kids, animation",
      description: `In a magical realm where technological advances have taken over, Ian and Barley, two elven brothers,
      set out on an epic adventure to resurrect their late father for a day.`,
      id: 12,
    },
    {
      backgroundImg: "/images/7.jpg",
      titleImg: "/images/37.png",
      subTitle: "2018 . 7m . family, fantasy, kids, animation",
      description: `In a magical realm where technological advances have taken over, Ian and Barley, two elven brothers,
      set out on an epic adventure to resurrect their late father for a day.`,
      id: 13,
    },
    {
      backgroundImg: "/images/8.jpg",
      titleImg: "/images/38.png",
      subTitle: "2018 . 7m . family, fantasy, kids, animation",
      description: `In a magical realm where technological advances have taken over, Ian and Barley, two elven brothers,
      set out on an epic adventure to resurrect their late father for a day.`,
      id: 14,
    },
    {
      backgroundImg: "/images/9.jpg",
      titleImg: "/images/39.png",
      subTitle: "2018 . 7m . family, fantasy, kids, animation",
      description: `In a magical realm where technological advances have taken over, Ian and Barley, two elven brothers,
      set out on an epic adventure to resurrect their late father for a day.`,
      id: 15,
    },
    {
      backgroundImg: "/images/10.jpg",
      titleImg: "/images/40.png",
      subTitle: "2018 . 7m . family, fantasy, kids, animation",
      description: `In a magical realm where technological advances have taken over, Ian and Barley, two elven brothers,
      set out on an epic adventure to resurrect their late father for a day.`,
      id: 16,
    },
  ];

  const movie = movies.filter((movie) => movie.id == id)[0];

  return (
    <Container>
      <Background>
        <img src={movie.backgroundImg}></img>
      </Background>
      <Background2>
        <div>sss</div>
      </Background2>
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
    </Container>
  );
}

export default Details;

const Container = styled.div`
  padding: 0 calc(3.5vw + 5px);
  height: calc(100vh - 70px);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content:center;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: -10;
  opacity: 0.9;
  object-fit: contain;
  img {
    width: 100%;
    height: 110%;
  }
`;

const Background2 = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: -2;
  opacity: 0.7;
  object-fit: contain;
  div{
    width:100vw;
    height: 110%;
    backrgound-color:black;
  }
`;

const MovieTitle = styled.div`
  img {
    width: 400px;
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
