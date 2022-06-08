import {
  // StyledTextInput,
  StyledFormArea,
  StyledFormButton,
  // StyledLabel,
  // Avatar,
  StyledTitle,
  colors,
  ButtonGroup,
  ExtraText,
  TextLink,
  CopyrightText,
} from "../App.styles";
//formik
import {
  Formik,
  Form,
  // FormikProps
} from "formik";
import { TextInput } from "../FormLib/FormLib";
import { MdEmail, MdPassword } from "react-icons/md";
import * as Yup from "yup";
//Loader
import { ThreeDots } from "react-loader-spinner";
//Auth and Redux
// import { connect } from "react-redux";
// import { loginUser } from "../auth/actions/userActions";

const Login = (): JSX.Element => {
  return (
    <div>
      <StyledFormArea>
        <div className="FormikArea">
          <StyledTitle>Login</StyledTitle>
          {/* @ts-ignore */}
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              password: Yup.string()
                .min(8, "Password is too short")
                .max(30, "Password is too long")
                .required("Required"),
            })}
          >
            {({ isSubmitting }) => (
              <Form>
                <TextInput
                  name="email"
                  type="email"
                  label="Email Address"
                  placeholder="123@example.com"
                  icon={<MdEmail />}
                />
                <TextInput
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="**********"
                  icon={<MdPassword />}
                />
                {/* <StyledLabel htmlFor={"email"}>{"email"}</StyledLabel>
              <StyledTextInput placeholder="123@example.com" />
              <StyledLabel htmlFor={"password"}>{"password"}</StyledLabel>
              <StyledTextInput placeholder="**********" /> */}
                <ButtonGroup>
                  {!isSubmitting && (
                    <StyledFormButton type="submit">Login</StyledFormButton>
                  )}
                  {isSubmitting && (
                    /* @ts-ignore */
                    <ThreeDots color={colors.theme} height={49} width={100} />
                  )}
                </ButtonGroup>
              </Form>
            )}
          </Formik>
          <ExtraText>
            {/* @ts-ignore */}
            New here? <TextLink to="/signup">Signup</TextLink>
          </ExtraText>
        </div>
      </StyledFormArea>
      <CopyrightText>All rights reserved &copy;2020</CopyrightText>
    </div>
  );
};

export default Login;
