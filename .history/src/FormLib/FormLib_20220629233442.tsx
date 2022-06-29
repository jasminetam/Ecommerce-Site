import { useState } from "react";
import { useField } from "formik";
import { StyledTextInput, StyledLabel, StyledIcon, ErrorMsg } from "../App.styles";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

interface Props {
  icon?: any;
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

export const TextInput: React.FC<Props> = ({ icon, ...props }): JSX.Element => {
  const { name, label, type }: Props = props;
  const [field, meta] = useField(props);
  const [show, setShow] = useState<boolean>(false);
  return (
    <div style={{ position: "relative" }}>
      {/* @ts-ignore */}
      <StyledLabel htmlFor={name}>{label}</StyledLabel>

      <div className="textInput">
        <div
          className="textInput"
          style={{ position: "relative", width: "280px" }}
        >
          <StyledIcon style={{ left: "20px" }}>{icon}</StyledIcon>
          {type !== "password" &&
            
            <StyledTextInput
             //@ts-ignore 
          invalid={meta.touched && meta.error}
            {...field} {...props} />}
          {type === "password" && (
            <>
              <StyledTextInput
                 // @ts-ignore 
              invalid={meta.touched && meta.error}
                {...field}
                {...props}
                type={show ? "text" : "password"}
              />
              <StyledIcon
                style={{ right: "20px" }}
                onClick={() => setShow((_prev) => !show)}
              >
                {show && <AiOutlineEye />}
                {!show && <AiOutlineEyeInvisible />}
              </StyledIcon>

         
            </>
          )}
            
        </div>
      
      </div>
      {meta.touched && meta.error ? (
                <ErrorMsg>{meta.error}</ErrorMsg>
              ) : (
                <ErrorMsg style={{visibility: "hidden"}}></ErrorMsg>
              )}

    </div>
  );
};
