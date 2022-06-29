import {
  StyledTitle,
  StyledSubTitle,
  StyledButton,
  ButtonGroup,
  colors,
} from "../App.styles";

const Home = () => {
  return (
    <div>
      {/* <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "transparent",
          width: "100%",
          padding: "15px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      ></div> */}
      <StyledTitle>Shopping Mall</StyledTitle>
      <StyledSubTitle>Welcome</StyledSubTitle>
      <ButtonGroup>
        <StyledButton to="/products">More</StyledButton>
      </ButtonGroup>
    </div>
  );
};

export default Home;
