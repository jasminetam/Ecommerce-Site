import {
  StyledTitle,
  // StyledSubTitle,
  ButtonGroup,
  StyledFormButton,
  StyledFormArea,
  colors,
} from "../App.styles";

//auth & redux
import { connect } from "react-redux"
import { logoutUser } from "../auth/actions/userActions";

//react router
import { useNavigate } from "react-router-dom";

const Dashboard = ({ logoutUser }: any) => {
  const history = useNavigate()
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

      <StyledFormArea bg={colors.dark2}>
        <StyledTitle>Welcome, User</StyledTitle>
        <ButtonGroup>
          <StyledFormButton onClick={()=> logoutUser(history)}>Logout</StyledFormButton>
        </ButtonGroup>
      </StyledFormArea>
    </div>
  );
};

export default connect(null, { logoutUser })(Dashboard);
