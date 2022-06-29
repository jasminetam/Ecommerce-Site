import axios from "axios"
import { sessionService } from "redux-react-session"
import { Dispatch } from "redux";



export const loginUser = (
    credentials: any,
    history: any,
    setFieldError: any,
    setSubmitting: any
  ) => {
    //make checks and get some data
  
    return () => {
      axios
        .post("https://sleepy-cove-34296.herokuapp.com/user/login", credentials, {
        })
        .then((response) => {
          const { data } = response;
  
          if (data.status === "FAILED") {
            const { message } = data;
            //check for specific error
            if (message.includes("credentials")) {
              setFieldError("email", message);
              setFieldError("password", message);
            } else if (message.includes("password")) {
              setFieldError("password", message);
            }
          } else if (data.status === "SUCCESS") {
            const userData = data.data[0];
            const token = userData._id;
  
            sessionService
              .saveSession(token)
              
              .then(() => {
                sessionService
                  .saveUser(userData)
                  .then(() => {
                    history("/dashboard");
                  })
                  .catch((err) => console.error(err));
              })
              .catch((err) => console.error(err));
          }
        })
        .catch((err) => console.error(err));
  
      // complete Submission
      setSubmitting(false);
    };
};

export const signupUser = (credentials, history, setFieldError, setSubmitting) => {

    return (dispatch: Dispatch) => {
      
      axios.post("https://sleepy-cove-34296.herokuapp.com/user/signup",
      credentials,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
      ).then((response) => {
        const { data } = response
        
        if (data.status === "FAILED") {
          const { message } = data
          //check for specific error
          if (message.includes("name")) {
            setFieldError("name", message)
          } else if (message.includes("email")) {
            setFieldError("email", message)
          } else if (message.includes("date")) {
            setFieldError("dateOfBirth", message)
          } else if (message.includes("password")) {
            setFieldError("password", message)
          }
          // complete submission
          setSubmitting(false)
          
        } else if (data.status === "SUCCESS") {
          const { email, password } = credentials
           {/* @ts-ignore */}
                dispatch(loginUser({email:string, password}, history, setFieldError, setSubmitting))
            }

        }).catch(err => console.error(err))
    
    }
}

export const logoutUser = (history: any) => {
  return () => {
    sessionService.deleteSession();
    sessionService.deleteUser()
    history("/")
  }
}