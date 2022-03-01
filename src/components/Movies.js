/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Movies() {
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
    
  ];
  const movies1 = [
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
  ];

  const movies2 = [
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
  ];
  const movies3 = [
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

  return (
    <Container>
      <h2>Recommened for you</h2>
      <Content>
        {movies.map((movie) => (
          <Wrap>
            <Link to={`/details/${movie.id}`}>
              <img src={movie.backgroundImg} />
            </Link>
          </Wrap>
        ))}
      </Content>
      <h2>Trending</h2>
      <Content>
        {movies1.map((movie) => (
          <Wrap>
            <Link to={`/details/${movie.id}`}>
              <img src={movie.backgroundImg} />
            </Link>
          </Wrap>
        ))}
      </Content>
      <h2>New Released</h2>
      <Content>
        {movies2.map((movie) => (
          <Wrap>
            <Link to={`/details/${movie.id}`}>
              <img src={movie.backgroundImg} />
            </Link>
          </Wrap>
        ))}
      </Content>
      <h2>Top Rated</h2>
      <Content>
        {movies3.map((movie) => (
          <Wrap>
            <Link to={`/details/${movie.id}`}>
              <img src={movie.backgroundImg} />
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
  h2 {
    margin-bottom: 20px;
    font-size: 25px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Wrap = styled.div`
  width: 23%;
  img {
    width: 100%;
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
