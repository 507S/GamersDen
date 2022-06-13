import Button from "../../components/Button";
import CheckBox from "../../components/CheckBox";
import Form from "../../components/Form";
import LoginLogo from "../../components/LoginLogo";
import LoginOption from "../../components/LoginOption";
import TextInput from "../../components/TextInput";
import classes from "../../designs/FormInput.module.css";
export default function SignIn() {
  return (
    
    <div className="infinity-container">
      <LoginLogo />
      <div className="infinity-form-block">
      <div className="infinity-click-box text-center">
          Login into your account
       </div>
       <div className="infinity-fold">
       <div className="infinity-form">
        <Form className = "form-box">
        <div className={classes["form-input"]}>
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
            <CheckBox  id = "cb1"  text={"Remember me"} />
           </div>
           </div>
           <div className="col-6 text-right text-sm">
                  <a href="forget.html" className="forget-link">Forgot password?</a>
              </div>
           </div>
           <div className="col-12 px-0 text-right">
            <Button type ="submit" text="Login" /> 
           </div>
           <div className="text-center text-sm">
           <LoginOption text="or login with" />
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
                Don't have an account?
                <a className="register-link" href="register.html">&nbsp; Register here</a>
              </div>
        </Form>
       </div>

       </div>


      </div>
    </div>
  )
}
