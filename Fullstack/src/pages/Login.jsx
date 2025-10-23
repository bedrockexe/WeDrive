import { useEffect, useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // <- fixed
// removed unused 'z' import

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^\d{11}$/;
const PASSWORD_MIN = 8;

function Login() {
  const [isRegister, setIsRegister] = useState(false);

  // login form state
  const [login, setLogin] = useState({ email: "", password: "" });
  const [loginErrors, setLoginErrors] = useState({});
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginServerError, setLoginServerError] = useState("");
  const navigate = useNavigate();

  // signup form state
  const [signup, setSignup] = useState({
    fname: "",
    lname: "",
    tel: "",
    email: "",
    password: "",
  });
  const [signupErrors, setSignupErrors] = useState({});
  const [signupLoading, setSignupLoading] = useState(false);
  const [signupServerError, setSignupServerError] = useState("");

  // show password toggle
  const [showPassword, setShowPassword] = useState(false);

  // simple validate functions returning an object of errors
  const validateLogin = (values) => {
    const errs = {};
    const email = (values.email || "").trim();
    const pw = (values.password || "").trim();

    if (!email) errs.email = "Email is required";
    else if (!EMAIL_REGEX.test(email)) errs.email = "Enter a valid email address";

    if (!pw) errs.password = "Password is required";
    return errs;
  };

  const validateSignup = (values) => {
    const errs = {};
    const fname = values.fname.trim();
    const lname = values.lname.trim();
    const tel = values.tel.trim();
    const email = values.email.trim();
    const pw = values.password.trim();

    if (!fname) errs.fname = "First name is required";
    if (!lname) errs.lname = "Last name is required";

    if (!tel) errs.tel = "Phone number is required";
    else if (!/^\d+$/.test(tel)) errs.tel = "Phone number must contain only digits";
    else if (!PHONE_REGEX.test(tel)) errs.tel = "Phone number must be exactly 11 digits";

    if (!email) errs.email = "Email is required";
    else if (!EMAIL_REGEX.test(email)) errs.email = "Provide a valid email address";

    if (!pw) errs.password = "Password is required";
    else if (pw.length < PASSWORD_MIN) errs.password = `Password must be at least ${PASSWORD_MIN} characters`;

    return errs;
  };

  // Generic handler to set form fields
  const handleChange = (setter) => (e) => {
    const { name, value } = e.target;
    setter((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    setLoginServerError("");
    const errs = validateLogin(login);
    setLoginErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoginLoading(true);
    try {
      const data = {
        email: login.email.trim(),
        password: login.password,
      };

      // Example: if backend is on different host/port, make sure it's accessible,
      // or use a proxy in dev (create-react-app) so you can do /api/login
      const response = await axios.post("http://localhost:5000/login", data);

      const { token, user } = response.data;
      if (!token) {
        setLoginServerError(response.data?.message || "Login failed");
        return;
      }

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      // navigate after storing token
      navigate("/dashboard");
    } catch (err) {
      // try to read server message if available
      const serverMsg =
        err?.response?.data?.message || err?.response?.data || err.message;
      setLoginServerError(serverMsg || "Network error. Try again.");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setSignupServerError("");
    const errs = validateSignup(signup);
    setSignupErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSignupLoading(true);
    try {
      const payload = {
        firstName: signup.fname.trim(),
        lastName: signup.lname.trim(),
        phone: signup.tel.trim(),
        email: signup.email.trim(),
        password: signup.password,
      };

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setSignupServerError(data?.message || "Registration failed");
      } else {
        console.log("signup success", data);
        // optionally auto-login or switch to login view
        setIsRegister(false);
        // optionally prefill login email
        setLogin((l) => ({ ...l, email: signup.email }));
        // clear signup form
        setSignup({ fname: "", lname: "", tel: "", email: "", password: "" });
      }
    } catch (err) {
      setSignupServerError("Network error. Try again.");
    } finally {
      setSignupLoading(false);
    }
  };

  useEffect(() => {
    setLoginServerError("");
  }, [login.email, login.password]);

  useEffect(() => {
    setSignupServerError("");
  }, [signup.fname, signup.lname, signup.tel, signup.email, signup.password]);

  return (
    <div className="login-container">
      <div id="img-side">
        <div className="overlay-content">
          <div className="img-text">
            <img src="/WEDRIVE.png" alt="WeDrive logo" /> {/* prefer /WEDRIVE.png from public */}
            <h1>WeDrive</h1>
          </div>
          <div className="img-text">
            <p className="tagline">“You say, we drive”</p>
          </div>
        </div>
      </div>

      <div id="log-reg" className={isRegister ? "show-register" : ""}>
        <div id="log">
          <form id="login" onSubmit={handleLoginSubmit}>
            <h2 className="ls-label">Login</h2>

            <div className={`input-control ${loginErrors.email ? "error" : login.email ? "success" : ""}`}>
              <label htmlFor="email_log">Email</label>
              <input
                type="email"
                id="email_log"
                name="email"
                placeholder="Enter Email"
                value={login.email}
                onChange={handleChange(setLogin)}
                required
                aria-invalid={!!loginErrors.email}
                aria-describedby="email_log_error"
              />
              <div id="email_log_error" className="error" aria-live="polite">
                {loginErrors.email}
              </div>
            </div>

            <div className={`input-control ${loginErrors.password ? "error" : login.password ? "success" : ""}`}>
              <label htmlFor="password_log">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password_log"
                name="password"
                placeholder="Enter Password"
                value={login.password}
                onChange={handleChange(setLogin)}
                required
                aria-invalid={!!loginErrors.password}
                aria-describedby="password_log_error"
              />
              <div id="password_log_error" className="error" aria-live="polite">
                {loginErrors.password}
              </div>
            </div>

            <div className="checkbox">
              <input
                type="checkbox"
                id="show-password"
                checked={showPassword}
                onChange={() => setShowPassword((s) => !s)}
              />
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

            <button type="submit" disabled={loginLoading}>
              {loginLoading ? "Logging in..." : "Login"}
            </button>

            {loginServerError && <div className="server-error" role="alert">{loginServerError}</div>}

            <div className="or_part">
              <hr />
              <h3>or</h3>
              <hr />
            </div>

            <div className="google_btn">
              <i className="fa-brands fa-google"></i>
              <label>Login with your Google</label>
            </div>
          </form>
        </div>

        <div id="reg">
          <form id="signup" onSubmit={handleSignupSubmit}>
            <h2 className="ls-label">Sign Up</h2>

            <div className="first-line">
              <div className={`input-control ${signupErrors.fname ? "error" : signup.fname ? "success" : ""}`}>
                <label htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="fname"
                  placeholder="First Name"
                  value={signup.fname}
                  onChange={handleChange(setSignup)}
                  required
                  aria-invalid={!!signupErrors.fname}
                  aria-describedby="fname_error"
                />
                <div id="fname_error" className="error" aria-live="polite">
                  {signupErrors.fname}
                </div>
              </div>

              <div className={`input-control ${signupErrors.lname ? "error" : signup.lname ? "success" : ""}`}>
                <label htmlFor="second_name">Last Name</label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  className="lname"
                  placeholder="Last Name"
                  value={signup.lname}
                  onChange={handleChange(setSignup)}
                  required
                  aria-invalid={!!signupErrors.lname}
                  aria-describedby="lname_error"
                />
                <div id="lname_error" className="error" aria-live="polite">
                  {signupErrors.lname}
                </div>
              </div>
            </div>

            <div className={`input-control ${signupErrors.tel ? "error" : signup.tel ? "success" : ""}`}>
              <label htmlFor="tel">Number</label>
              <input
                type="tel"
                id="tel"
                name="tel"
                placeholder="Enter Number"
                value={signup.tel}
                onChange={handleChange(setSignup)}
                required
                pattern="\d{11}"
                aria-invalid={!!signupErrors.tel}
                aria-describedby="tel_error"
              />
              <div id="tel_error" className="error" aria-live="polite">
                {signupErrors.tel}
              </div>
            </div>

            <div className={`input-control ${signupErrors.email ? "error" : signup.email ? "success" : ""}`}>
              <label htmlFor="email_sig">Email</label>
              <input
                type="email"
                id="email_sig"
                name="email"
                placeholder="Enter Email"
                value={signup.email}
                onChange={handleChange(setSignup)}
                required
                aria-invalid={!!signupErrors.email}
                aria-describedby="email_sig_error"
              />
              <div id="email_sig_error" className="error" aria-live="polite">
                {signupErrors.email}
              </div>
            </div>

            <div className={`input-control ${signupErrors.password ? "error" : signup.password ? "success" : ""}`}>
              <label htmlFor="password_sig">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password_sig"
                name="password"
                placeholder="Enter Password"
                value={signup.password}
                onChange={handleChange(setSignup)}
                required
                minLength={PASSWORD_MIN}
                aria-invalid={!!signupErrors.password}
                aria-describedby="password_sig_error"
              />
              <div id="password_sig_error" className="error" aria-live="polite">
                {signupErrors.password}
              </div>
            </div>

            <div className="switch">
              <label htmlFor="chk" className="sign_up-link">
                Already have an account? Log-in!
              </label>
            </div>

            <button type="submit" disabled={signupLoading}>
              {signupLoading ? "Registering..." : "Register"}
            </button>

            {signupServerError && <div className="server-error" role="alert">{signupServerError}</div>}

            <div className="or_part">
              <hr />
              <h3>or</h3>
              <hr />
            </div>

            <div className="google_btn">
              <i className="fa-brands fa-google"></i>
              <label>Register with your Google</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
