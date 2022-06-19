import styled from "styled-components";
import { Link } from "react-router-dom";
import background from "./background.jpg";

export const colors = {
  primary: "#fff",
  theme: "#BE185D",
  light1: "#F3F4F6",
  light2: "#E5E7Eb",
  dark1: "#1F2937",
  dark2: "#4B5563",
  dark3: "9CA3Af",
  red: "#DC2626",
};

export const BackgroundDiv = styled.div`
width: 100%;
height: ;
*{ 
  margin: 0;
  padding: 0;}
`

export const Wrapper = styled.div`
  margin: 40px;
`;

export const HeaderWrapper = styled.div`
  .headerDiv {
    position: sticky;
    min-height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
  }

  .header-links {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .Logo {
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    padding-left: 40px;
  }
  .Logo:hover {
    color: #c5979d;
  }

  .header-links ul li {
    list-style-type: none;
    display: inline-block;
    font-size: 18px;
  }

  .header-links ul li a {
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    padding: 0px 15px;
  }


  .header-links ul li a:hover {
    color: #c5979d;
  }

  @media (max-width: 768px) {
    .Logo {
      text-decoration: none;
      text-transform: uppercase;
      color: white;
      font-size: 22px;
      display: grid;
    }
    .header-links ul li {
      list-style-type: none;
      display: inline;
      font-size: 16px;
      margin: 0;
      padding: 0;
    }
 
  }
`;

export const StyledCartButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 35px;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  -moz-border-radius: 50px 50px 50px 50px;
  -webkit-border-radius: 50px 50px 50px 50px;
  border-radius: 50px 50px 50px 50px;
  color: black;
  font-size: 40px;
  &:hover {
    color: ${colors.theme};
    background: lightpink;
  }
  @media (max-width: 768px) {
    color: black;
    z-index: 100;
    right: 35px;
  }
`;

export const StyledButton = styled(Link)`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 18px;
  border: 3px solid ${colors.light1};
  border-radius: 25px;
  color: ${colors.light1};
  text-decoration: none;
  text-align: center;
  transition: ease-in-out 0.3s;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.theme};
    cursor: pointer;
  }
`;
//Sttyled components
export const StyledContainer = styled.div`
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${background});
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
`;
//Home
export const StyledTitle = styled.h2`
  font-size: 65px;
  text-align: center;
  color: white;
  padding: 5px;
  margin-bottom: 20px;
`;
export const StyledSubTitle = styled.p`
  font-size: 27px;
  color: white;
  text-align: center;
  padding: 5px;
  margin-bottom: 205px;
`;

export const Avatar = styled.div`
  width: 85px;
  height: 85px;
  border-radius: 50px;
  background-size: cover;
  background-position: center;
  margin: auto;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 25px;
`;

export const StyledTextInput = styled.input`
  width: 280px;
  padding: 15px;
  padding-left: 50px;
  font-size: 17px;
  letter-spacing: 1px;
  outline: 0;
  color: ${colors.light2};
  border: 0;
  display: block;
  margin: 5px auto 10px auto;
  transition: ease-in-out 0.3s;

  ::-ms-reveal {
    display: none;
  }

  &:focus {
    background-color: ${colors.dark2};
    color: ${colors.primary};
  }
`;

export const StyledLabel = styled.p`
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  color: white;
`;

export const StyledFormArea = styled.div`
  background-color: ${colors.dark2};
  text-align: center;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .textInput {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledFormButton = styled.button`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 16px;
  border: 2px solid ${colors.theme};
  border-radius: 25px;
  color: ${colors.theme};
  transition: ease-in-out 0.3s;

  &:hover {
    background-color: ${colors.theme};
    color: ${colors.primary};
    cursor: pointer;
  }
`;

export const ErrorMsg = styled.div`
  font-size: 11pz;
  color: ${colors.red};
  margin-top: -5px;
  margin-bottom: 10px;
  text-align: center;
`;

export const ExtraText = styled.p`
  text-align: center;
  color: white;
  padding: 2px;
  margin-top: 10px;
`;

export const TextLink = styled(Link)`
  text-decoration: none;
  color: ${colors.theme};
  transition: ease-in-out 0.3s;
  outline: 0;

  &:hover {
    text-decoration: underline;
    letter-spacing: 2px;
    font-weight: bold;
  }
`;

//Icons

export const StyledIcon = styled.p`
  color: ${colors.dark1};
  position: absolute;
  font-size: 21px;
  z-index: 100;

  .passwordIcon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

//copyright
export const CopyrightText = styled.p`
  padding: 5px;
  margin: 20px;
  text-align: center;
  color: ${colors.light2};
`;
