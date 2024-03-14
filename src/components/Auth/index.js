
import Header from "../Layout/Header";
import Subheader from "../Layout/Subheader";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../UI/Loader";
import { useDispatch } from "react-redux";
import { loginWithEmailAndPassword, signupWithEmailAndPassword } from "../../actions/auth";

const AuthIndex = () => {
  const [loader,setLoader]=useState(false)
  const [buttonText, setButtonText] = useState("Login");
  const [details, setDetails] = useState({
    email: "",
    password: ""
})
const dispatch=useDispatch();
const navigate=useNavigate();

function handleInput(e){
    
   setDetails({
    ...details,
    [e.target.name]:e.target.value
   })
}

useEffect(()=>{
  return ()=>{setLoader(false)
  setDetails({
    email:"",
    password:""
  })
}
},[])

const handleSubmission = e => {
  e.preventDefault();
  if(buttonText === "Sign Up") {
      setLoader(true)
      dispatch(signupWithEmailAndPassword(details, data => {
          if(data.error) {
              console.log(data.error)
              alert("Some error occurred")
          }
          else {
              console.log("Successfully Signed up!")
              navigate("/")
          }
          setLoader(false)
      }))
  }
  else if (buttonText === "Login") {
      setLoader(true)
      dispatch(loginWithEmailAndPassword(details, data => {
          if(data.error) {
              console.log(data.response)
              alert(data?.response?.data?.error?.message || "Some error occurred")
          }
          else {
              console.log("Successfully Logged in!")
              navigate("/")
          }
          setLoader(false)
      }))
  }
}


  // Function to update the button text based on the clicked NavLink
  const handleNavLinkClick = (text) => {
    setButtonText(text);
  };

  

  return (
    <>
      <Header />
      <Subheader />
      <div className="auth-container">
        <div className="auth-container--box">
          <div className="tab-selector">
            {/* NavLink for Login */}
            <NavLink
              exact
              to="/login"
              onClick={() => handleNavLinkClick("Login")}
            >
              <h3>Login</h3>
            </NavLink>
            {/* NavLink for Signup */}
            <NavLink
              exact
              to="/signup"
              onClick={() => handleNavLinkClick("Sign Up")}
            >
              <h3>Sign Up</h3>
            </NavLink>
          </div>
          <form autoComplete="false" onSubmit={handleSubmission}>
          <div className="input-wrap">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Enter Email" 
                            value={details.email}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="input-wrap">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Enter Password" 
                            value={details.password}
                            onChange={handleInput}
                        />
                    </div>
            <div className="button-wrap">
              <button className="login-btn">{buttonText}</button>
            </div>
          </form>
        </div>
      </div>
      {loader && <Loader/>}
    </>
  );
  };

export default AuthIndex;
