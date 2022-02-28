import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUserName,
  selectUserPhoto,
  setUserlogin,
  setUserSignOut,
} from "../feature/userSlice";
import { auth, provider } from "../Firebase";
import { useHistory } from "react-router-dom";

function Header() {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserlogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      }
    });
  }, []);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch(
        setUserlogin({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        })
      );
      history.push("./home");
      console.log(userPhoto);
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setUserSignOut());
      history.push("./");
    });
  };
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <Link to="/">
            <img src="/images/home-icon.svg" />
            <span>HOME</span>
          </Link>
        </a>
        <a>
          <img src="/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" />
          <span>ORIGINAL</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" />
          <span>MOVIE</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="./images/sakib.jpg" />
    </Nav>
  );
}

export default Header;

const Nav = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 25px;
    cursor: pointer;
    text-decoration: none;

    img {
      height: 20px;
      margin-right: 8px;
    }

    span {
      letter-spacing: 1.42px;
      font-size: 13px !important;
      position: relative;
      color: white !important;

      &:after {
        content: "";
        height: 1.5px;
        position: absolute;
        bottom: -6px;
        left: 0;
        width: 100%;
        background: white;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  weight: 35px;
  height: 35px;
  border-radius: 50%;
`;

const LogIn = styled.button`
  background: transparent;
  padding: 8px 16px;
  border: 1px solid white;
  color: white;
  border-radius: 4px;
  letter-spacing: 1.5px;
  transition: all 0.2s linear;
  margin-left: auto;

  &:hover {
    background: white;
    color: black;
  }
`;
