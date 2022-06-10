import {
  StyledTitle,
  // StyledSubTitle,
  ButtonGroup,
  StyledButton,
  StyledFormArea,
  colors,
} from "../App.styles";

//auth & redux
import { connect } from "react-redux"
import { logoutUser } from "../auth/actions/userActions";
const Dashboard = () => {
  return (
    <div>
      <div
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
      ></div>
      {/* @ts-ignore */}
      <StyledFormArea bg={colors.dark2}>
        <StyledTitle>Welcome, User</StyledTitle>
        <ButtonGroup>
          <StyledButton to="#">Logout</StyledButton>
        </ButtonGroup>
      </StyledFormArea>
    </div>
  );
};

export default Dashboard;
