import React from "react";
import styled from "styled-components";

function LogIn() {
  return (
    <Container>
      <Content>
        <LogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL HERE</SignUp>
        <Description>
          You sent Today at 1:37 AM Star on Disney+ brings you more. A brand-new
          world of TV series, movies and new originals, with thousands of hours
          of bigger, bolder and more exciting stories than ever before. Enjoy
          Star as part of your Disney+ subscription.
        </Description>
        <LogoTwo src="/images/cta-logo-two.png" />
      </Content>
    </Container>
  );
}

export default LogIn;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    content: "";
    background: url("/images/login-background.jpg") center center / cover
      no-repeat fixed;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
`;

const Content = styled.div`
  height: 400px;
  width: 700px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
const SignUp = styled.button`
  width: 100%;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 20px;
  padding: 15px 0;
  background-color: #0063e5;
  color: white;
  border: none;
  border-radius: 3px;
  margin-bottom: 10px;
`;
const LogoOne = styled.img`
  margin-bottom: 15px;
  width: 96%;
`;
const Description = styled.p`
  text-align: center;
  font-size: 12px;
  margin-bottom: 30px;
  letter-spacing: 1px;
`;
const LogoTwo = styled.img`
  width: 96%;
`;
