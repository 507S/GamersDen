import classes from "../../designs/FormInput.module.css";
import "../../designs/RegistrationStyle.css";
import Button from "../Button";
import Form from "../Form";
import LoginOption from "../LoginOption";
import LoginLogo from "../RegistrationLogo";
import TextInput from "../TextInput";
export default function Register() {
  return (
    
    <div className="infinity-container">
      <LoginLogo />
      <div className="infinity-form-block">
      <div className="infinity-click-box text-center">
          Create your account
       </div>
       <div className="infinity-fold">
       <div className="infinity-form">
        <Form className = "form-box">
        <div className={classes["form-input"]}>

        <TextInput
              labelIcon="fa fa-user"
              type="text"
              name ="username"
              placeholder="Username"
              tabindex="10"
          />
        <TextInput
              labelIcon="fa fa-envelope"
              type="email"
              name ="email"
              placeholder="Email Address"
              tabindex="10"
          />
          
          
          <TextInput
              labelIcon="fa fa-lock"
              type="password"
              name ="password"
              placeholder="Password"
              tabindex="10"
          />
          </div>
           <div className="row mb-2">
           <div className="col-6 d-flex align-items-center">
           <div className="custom-control custom-checkbox">
            {/* <CheckBox  id = "cb1"  text={"Remember me"} /> */}
           </div>
           </div>
           <div className="col-6 text-right text-sm">
                  {/* <a href="forget.html" className="forget-link">Forgot password?</a> */}
              </div>
           </div>
           <div className="col-12 px-0 text-right">
            <Button type ="submit" text="Register" /> 
           </div>
           <div className="text-center text-sm">
           <LoginOption text="or register with" />
            </div>
            <div className="infinity-social-btn text-center">
                <ul className="text-center">
                  <li className="text-center">
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook"></i
                      ><i className="fa fa-facebook"></i
                    ></a>
                  </li>
                  <li className="text-center">
                    <a href="#" className="google">
                      <i className="fa fa-google"></i><i className="fa fa-google"></i
                    ></a>
                  </li>
                  <li className="text-center">
                    <a href="#" className="twitter">
                      <i className="fa fa-twitter"></i><i className="fa fa-twitter"></i
                    ></a>
                  </li>
                </ul>
              </div>
              <div className="text-center" >
                Already have an account?
                <a className="register-link" href="register.html">&nbsp; Login here</a>
              </div>
        </Form>
       </div>

       </div>


      </div>
    </div>
  )
}
