import { useEffect, useState } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [isRegister, setIsRegister] = useState(false);

  useEffect(() => {
    const login = document.getElementById("login");
    const email_log = document.getElementById("email_log");
    const password_log = document.getElementById("password_log");

    const signup = document.getElementById("signup");
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const tel = document.getElementById("tel");
    const email_sig = document.getElementById("email_sig");
    const password_sig = document.getElementById("password_sig");

    const setError = (element, message) => {
      const inputControl = element.parentElement;
      const errorDisplay = inputControl.querySelector(".error");
      if (errorDisplay) errorDisplay.innerText = message;
      inputControl.classList.add("error");
      inputControl.classList.remove("success");
    };

    const setSuccess = (element) => {
      const inputControl = element.parentElement;
      const errorDisplay = inputControl.querySelector(".error");
      if (errorDisplay) errorDisplay.innerText = "";
      inputControl.classList.add("success");
      inputControl.classList.remove("error");
    };

    const isValidEmail = (email) => {
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return re.test(String(email).toLowerCase());
    };

    const validateSignupInputs = () => {
      if (!fname || !lname || !tel || !email_sig || !password_sig) return false; 
      const fnameValue = fname.value.trim();
      const lnameValue = lname.value.trim();
      const telValue = tel.value.trim();
      const emailValue = email_sig.value.trim();
      const passwordValue = password_sig.value.trim();
      let isValid = true;

      if (fnameValue === "") {
        setError(fname, "First name is required");
        isValid = false;
      } else setSuccess(fname);

      if (lnameValue === "") {
        setError(lname, "Last name is required");
        isValid = false;
      } else setSuccess(lname);

      if (telValue === "") {
        setError(tel, "Phone number is required");
        isValid = false;
      } else if (!/^\d+$/.test(telValue)) {
        setError(tel, "Phone number must contain only digits");
        isValid = false;
      } else if (telValue.length !== 11) {
        setError(tel, "Phone number must be exactly 11 digits");
        isValid = false;
      } else setSuccess(tel);

      if (emailValue === "") {
        setError(email_sig, "Email is required");
        isValid = false;
      } else if (!isValidEmail(emailValue)) {
        setError(email_sig, "Provide a valid email address");
        isValid = false;
      } else setSuccess(email_sig);

      if (passwordValue === "") {
        setError(password_sig, "Password is required");
        isValid = false;
      } else if (passwordValue.length < 8) {
        setError(password_sig, "Password must be at least 8 characters");
        isValid = false;
      } else setSuccess(password_sig);

      return isValid;
    };

    const validateLoginInputs = () => {
      if (!email_log || !password_log) return false;
      const emailValue = email_log.value.trim();
      const passwordValue = password_log.value.trim();
      let isValid = true;

      if (emailValue === "") {
        setError(email_log, "Email is required");
        isValid = false;
      } else if (!isValidEmail(emailValue)) {
        setError(email_log, "Enter a valid email address");
        isValid = false;
      } else setSuccess(email_log);

      if (passwordValue === "") {
        setError(password_log, "Password is required");
        isValid = false;
      } else setSuccess(password_log);

      return isValid;
    };

    if (signup) {
      signup.addEventListener("submit", (e) => {
        e.preventDefault();
        if (validateSignupInputs()) {
          console.log("hello terrence");
        }
      });
    }

    if (login) {
      login.addEventListener("submit", (e) => {
        e.preventDefault();
        if (validateLoginInputs()) {
          console.log("hello terrence");
        }
      });
    }

    return () => {
      if (signup) signup.removeEventListener("submit", () => {});
      if (login) login.removeEventListener("submit", () => {});
    };
  }, []);

  return (
    <>
      <div id="img-side">
        <div className="overlay-content">
          <div className="img-text">
            <img src="./public/WEDRIVE.png" alt="" />
            <h1>WeDrive</h1>
          </div>
          <div className="img-text">
            <p className="tagline">“You say, we drive”</p>
          </div>
        </div>
      </div>

      <div id="log-reg" className={isRegister ? "show-register" : ""}>
        <div id="log">
          <form id="login" action="#" method="POST">
            <h2 className="ls-label">Login</h2>

            <div className="input-control">
              <label htmlFor="email_log">Email</label>
              <input type="email" id="email_log" name="email" placeholder="Enter Email" />
              <div className="error"></div>
            </div>

            <div className="input-control">
              <label htmlFor="password_log">Password</label>
              <input type="password" id="password_log" name="password" placeholder="Enter Password" />
              <div className="error"></div>
            </div>

            <div className="checkbox">
              <input type="checkbox" id="show-password" />
              <label htmlFor="show-password">Show Password</label>
            </div>

            <div className="switch">
              <input
                type="checkbox"
                id="chk"
                aria-hidden="true"
                checked={isRegister}
                onChange={() => setIsRegister((s) => !s)}
              />
              <label htmlFor="chk" aria-hidden="true" className="sign_up-link">
                Don't have an account? Sign-up!
              </label>
            </div>

            <button type="submit">Login</button>

            <div className="or_part">
              <hr />
              <h3>or</h3>
              <hr />
            </div>

            <div className="google_btn">
              <i className="fa-brands fa-google"></i>
              <label htmlFor="fa-brands fa-google">Login with your Google</label>
            </div>
          </form>
        </div>

        <div id="reg">
          <form id="signup" action="#" method="POST">
            <h2 className="ls-label">Sign Up</h2>

            <div className="first-line">
              <div className="input-control">
                <label htmlFor="first_name">First Name</label>
                <input type="text" id="fname" className="fname" name="first_name" placeholder="First Name" />
                <div className="error"></div>
              </div>

              <div className="input-control">
                <label htmlFor="second_name">Last Name</label>
                <input type="text" id="lname" className="lname" name="last_name" placeholder="Last Name" />
                <div className="error"></div>
              </div>
            </div>

            <div className="input-control">
              <label htmlFor="tel">Number</label>
              <input type="tel" id="tel" name="tel" placeholder="Enter Number" />
              <div className="error"></div>
            </div>

            <div className="input-control">
              <label htmlFor="email_sig">Email</label>
              <input type="email" id="email_sig" name="email" placeholder="Enter Email" />
              <div className="error"></div>
            </div>

            <div className="input-control">
              <label htmlFor="password_sig">Password</label>
              <input type="password" id="password_sig" name="password" placeholder="Enter Password" />
              <div className="error"></div>
            </div>

            <div className="switch">
              <label htmlFor="chk" className="sign_up-link">
                Already have an account? Log-in!
              </label>
            </div>

            <button type="submit">Register</button>

            <div className="or_part">
              <hr />
              <h3>or</h3>
              <hr />
            </div>

            <div className="google_btn">
              <i className="fa-brands fa-google"></i>
              <label htmlFor="fa-brands fa-google">Register with your Google</label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
