import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
//Components

//Styles
import { HeaderWrapper } from "../App.styles";

const Header = () => {
  //render
  return (

      <HeaderWrapper>
        <div className="headerDiv">
        <div className="headerFlex">
          <div></div>
            <h1>
              <Link to="/" className="Logo">
                Department Store
              </Link>
            </h1>
          </div>
          <div className="header-links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login" className="navItems">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="navItems">
                  SignUp
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </HeaderWrapper>
  
  );
};

export default Header;
