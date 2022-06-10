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
import Header from "../Header/Header";
import { MdEmail, MdPassword } from "react-icons/md";
import { BiUserCircle, BiCalendar } from "react-icons/bi";
import * as Yup from "yup";
//Loader
import { ThreeDots } from "react-loader-spinner";
//Auth and Redux
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../auth/actions/userActions";

const Signup = (): JSX.Element => {
  const history = useNavigate();
  return (
    <div>
      <StyledFormArea>
        <div className="FormikArea">
          <StyledTitle>Sign up for an Account</StyledTitle>
          {/* @ts-ignore */}
          <Formik
            initialValues={{
              email: "",
              password: "",
              repeatPassword: "",
              dateOfBirth: "",
              name: "",
            }}
            onSubmit={(values, { setSubmitting, setFieldError }) => {
              signupUser(values, history, setFieldError, setSubmitting);
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              password: Yup.string()
                .min(8, "Password is too short")
                .max(30, "Password is too long")
                .required("Required"),
              name: Yup.string().required("Required"),
              dateOfBirth: Yup.date().required("Required"),
              repeatPassword: Yup.string()
                .required("Required")
                .oneOf([Yup.ref("password")], "Passwords must match"),
            })}
          >
            {({ isSubmitting }) => (
              <Form>
                <TextInput
                  name="name"
                  type="text"
                  label="Full Name"
                  placeholder="Amy Fraud"
                  icon={<BiUserCircle />}
                />
                <TextInput
                  name="email"
                  type="email"
                  label="Email Address"
                  placeholder="123@example.com"
                  icon={<MdEmail />}
                />
                <TextInput
                  name="dateOfBirth"
                  type="date"
                  label="Date of Birth"
                  placeholder=""
                  icon={<BiCalendar />}
                />
                <TextInput
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="**********"
                  icon={<MdPassword />}
                />
                <TextInput
                  name="repeatPassword"
                  type="password"
                  label="Repeat Password"
                  placeholder="**********"
                  icon={<MdPassword />}
                />

                <ButtonGroup>
                  {!isSubmitting && (
                    <StyledFormButton type="submit">Sign Up</StyledFormButton>
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
            Already have a account? <TextLink to="/login">Login</TextLink>
          </ExtraText>
        </div>
      </StyledFormArea>
      <CopyrightText>All rights reserved &copy;2020</CopyrightText>
    </div>
  );
};

export default connect(null, { signupUser })(Signup);
