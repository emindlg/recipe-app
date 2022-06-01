import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyles";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
      {/* sayfanın tamamı */}
      <StyledImage src={codingSvg} />
      <HeaderContainer>
        <h1>
          About Software Developer <span>Emin DELİGÖZ </span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, I'am Emin</h2>
        <h3>I'm currently learning Full-Stack Development Languages.</h3>
        <h4>
          
          I've already known JS, ReactJS, Python, HTML-CSS, Bootstrap, MUI.
          Still learning Django for backend.
        </h4>
        <h2>
          <a href="mailto:Ashley@clarusway.com">Send email</a> :
          eminddeligoz@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
