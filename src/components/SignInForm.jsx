import { useState, useEffect } from "react";
import "../style/SignInForm.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../services/auth";
import { loginSucces, loginFail } from "../actions/loginAction";
import { getUserProfileSuccess, getUserProfileFail } from "../actions/userAction";
import { getUserProfile } from "../services/user";
import { useNavigate } from "react-router";

export default function SignInForm() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error } = useSelector((state) => state.userLogin);
  const { token } = useSelector((state) => state.userLogin);

  ///////////////////////
  const submitHandler = (e) => {
    e.preventDefault();
    login(email, password)
      .then((response) => {
        dispatch(loginSucces(response.data.body.token));
        getUserProfile(response.data.body.token)
          .then((response) => {
            dispatch(getUserProfileSuccess(response.data.body));      
          })
          .catch((error) => {
            console.log("erreur détectée");
            dispatch(getUserProfileFail(error));
          });
        /*appel vers api pour infos*/
      })
      .catch((error) => {
        console.log("erreur détectée");
        dispatch(loginFail(error));
      });
  };

  //////////////////////////

  useEffect(() => {
    if (token) {
      navigate("/profile");
    }
  }, [token, navigate]);

  console.log(error)

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={submitHandler}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" type="submit" name="Login">
          Sign In
        </button>
        {error && (
          <div>
            <br />
            Identifiant ou mot de passe incorrect
          </div>
        )}
      </form>
    </section>
  );
}
