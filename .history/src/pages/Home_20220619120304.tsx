import { StyledTitle, StyledSubTitle, StyledButton, ButtonGroup, colors } from "../App.styles";


const Home = () => {
  return (
    <div>
     

      <StyledTitle>Shopping Mall</StyledTitle>
      <StyledSubTitle>Welcome</StyledSubTitle>
      <ButtonGroup>
         {/* @ts-ignore */}
        <StyledButton to="/products" >More</StyledButton>
      </ButtonGroup>
    </div>
  );
};

export default Home;
