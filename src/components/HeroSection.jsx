import React from "react";
import styled from "styled-components";
import bg from "../assets/images/bg.mp4"; // Importing the video
import rem from "../assets/images/rem.gif";

const HeroSection = () => {
  return (
    <Hero>
      <VideoBackground autoPlay loop muted>
        <source src={bg} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <Content>
        <h1>Your Vision Our Innovation</h1>
        <p>
          Unlock Your Potential with Our Expertise in Web App Development, AI/ML
          Innovations, and Powerful Digital Marketing Strategies.
        </p>
        <Button>Let's Move Ahead</Button>
      </Content>
      <Illustration>
        <img src={rem} alt="Illustration" />
      </Illustration>
    </Hero>
  );
};

const Hero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  color: #ffffff;
  height: 100vh;
  width: 84%;
  overflow: hidden;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 30px 50px;
    text-align: left;
    justify-content: space-between; /* Space between content and illustration */
  }

  @media (min-width: 1200px) {
    padding: 50px 100px; /* Adjust padding for larger screens */
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Content = styled.div`
  max-width: 90%;
  z-index: 1;

  h1 {
    font-size: 24px;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    max-width: 50%;
    h1 {
      font-size: 36px;
      margin-bottom: 20px;
    }
    p {
      font-size: 18px;
      margin-bottom: 30px;
    }
  }

  @media (min-width: 1200px) {
    max-width: 40%;
    h1 {
      font-size: 40px;
      margin-bottom: 25px;
    }
    p {
      font-size: 20px;
      margin-bottom: 40px;
    }
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  color: #0a0f2c;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Illustration = styled.div`
  margin-bottom: 20px;
  margin-right: 100px;
  img {
    max-width: 100%;
    height: auto;
    width: 200px; /* Adjust width based on your design */
  }

  img {
    width: 150px; /* Default width for small screens */
    height: auto;
    margin-left: 70px;
    margin-top: 20px;
    align-item: center;
  }

  @media (min-width: 768px) {
    bottom: 30px;
    left: 30px;
    img {
      width: 250px; /* Adjust width for medium screens */
    }
  }

  @media (min-width: 1200px) {
    bottom: 40px;
    left: 40px;
    img {
      width: 300px; /* Adjust width for large screens */
    }
  }
`;

export default HeroSection;
