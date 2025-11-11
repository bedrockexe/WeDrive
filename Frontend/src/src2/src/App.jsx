import { useEffect, useState } from "react";
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
    const confirm_password_sig = document.getElementById("confirm_password_sig");

    // ✅ Show password toggle for login
    const showPasswordCheckbox = document.getElementById("show-password");
    if (showPasswordCheckbox && password_log) {
      showPasswordCheckbox.addEventListener("change", (e) => {
        password_log.type = e.target.checked ? "text" : "password";
      });
    }

    // ✅ Show password toggle for signup
    const showPasswordSigCheckbox = document.getElementById("show-password-sig");
    if (showPasswordSigCheckbox && password_sig && confirm_password_sig) {
      showPasswordSigCheckbox.addEventListener("change", (e) => {
        const type = e.target.checked ? "text" : "password";
        password_sig.type = type;
        confirm_password_sig.type = type;
      });
    }

    // ✅ Utility functions
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

    const isValidEmail = (email) =>
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        String(email).toLowerCase()
      );

    const validateSignupInputs = () => {
      const fnameValue = fname.value.trim();
      const lnameValue = lname.value.trim();
      const telValue = tel.value.trim();
      const emailValue = email_sig.value.trim();
      const passwordValue = password_sig.value.trim();
      const confirmPasswordValue = confirm_password_sig.value.trim();
      let isValid = true;

      if (!fnameValue) {
        setError(fname, "First name is required");
        isValid = false;
      } else setSuccess(fname);

      if (!lnameValue) {
        setError(lname, "Last name is required");
        isValid = false;
      } else setSuccess(lname);

      if (!telValue) {
        setError(tel, "Phone number is required");
        isValid = false;
      } else if (!/^\d+$/.test(telValue)) {
        setError(tel, "Phone number must contain only digits");
        isValid = false;
      } else if (telValue.length !== 11) {
        setError(tel, "Phone number must be exactly 11 digits");
        isValid = false;
      } else setSuccess(tel);

      if (!emailValue) {
        setError(email_sig, "Email is required");
        isValid = false;
      } else if (!isValidEmail(emailValue)) {
        setError(email_sig, "Provide a valid email address");
        isValid = false;
      } else setSuccess(email_sig);

      if (!passwordValue) {
        setError(password_sig, "Password is required");
        isValid = false;
      } else if (passwordValue.length < 8) {
        setError(password_sig, "Password must be at least 8 characters");
        isValid = false;
      } else setSuccess(password_sig);

      if (!confirmPasswordValue) {
        setError(confirm_password_sig, "Please confirm your password");
        isValid = false;
      } else if (confirmPasswordValue !== passwordValue) {
        setError(confirm_password_sig, "Passwords do not match");
        isValid = false;
      } else setSuccess(confirm_password_sig);

      return isValid;
    };

    const validateLoginInputs = () => {
      const emailValue = email_log.value.trim();
      const passwordValue = password_log.value.trim();
      let isValid = true;

      if (!emailValue) {
        setError(email_log, "Email is required");
        isValid = false;
      } else if (!isValidEmail(emailValue)) {
        setError(email_log, "Enter a valid email address");
        isValid = false;
      } else setSuccess(email_log);

      if (!passwordValue) {
        setError(password_log, "Password is required");
        isValid = false;
      } else setSuccess(password_log);

      return isValid;
    };

    if (signup) {
      signup.addEventListener("submit", (e) => {
        e.preventDefault();
        if (validateSignupInputs()) console.log("Signup success");
      });
    }

    if (login) {
      login.addEventListener("submit", (e) => {
        e.preventDefault();
        if (validateLoginInputs()) console.log("Login success");
      });
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen overflow-hidden bg-gradient-to-br from-green-200 via-emerald-100 to-green-50 relative animate-fadeIn">
      {/* LEFT IMAGE SECTION */}
      <div className="relative hidden md:flex flex-1 h-full bg-[url('/public/carmage.jpg')] bg-no-repeat bg-cover bg-right animate-slowZoom">
        <div className="absolute inset-0 bg-gradient-to-l from-green-900/70 to-green-700/30 backdrop-blur-sm"></div>

        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10 text-white z-10">
          <div className="flex items-center space-x-4">
            <img
              src="./public/WEDRIVE.png"
              alt="WeDrive Logo"
              className="w-14 h-14 md:w-16 md:h-16 drop-shadow-xl animate-float"
            />
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-wider drop-shadow-2xl">
              WeDrive
            </h1>
          </div>

          <p className="italic text-xl sm:text-2xl md:text-3xl text-emerald-100 drop-shadow-lg animate-fadeInDelay">
            “You say, we drive”
          </p>
        </div>
      </div>

      {/* RIGHT LOGIN/REGISTER SIDE */}
      <div
        id="log-reg"
        className={`relative flex flex-col items-center justify-center bg-white/80 backdrop-blur-lg border-l border-green-200 h-full w-full md:w-1/2 px-4 sm:px-6 md:px-10 py-6 shadow-2xl transition-all duration-700 ease-in-out transform ${
          isRegister ? "bg-emerald-50/80" : ""
        }`}
      >
        {/* LOGIN FORM */}
        <div
          id="log"
          className={`w-full max-w-sm sm:max-w-md transition-all duration-700 ${
            isRegister ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          <form
            id="login"
            method="POST"
            className="flex flex-col gap-3 bg-white/70 p-4 sm:p-6 md:p-8 rounded-3xl shadow-lg backdrop-blur-md hover:shadow-emerald-200/50 transition"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-1 text-center">
              Welcome Back
            </h2>

            <div className="flex flex-col">
              <label htmlFor="email_log" className="font-medium text-green-700">
                Email
              </label>
              <input
                type="email"
                id="email_log"
                name="email"
                placeholder="Enter Email"
                className="border-2 border-green-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-600 focus:shadow-md transition placeholder-green-700/50"
              />
              <span className="error text-red-500 text-sm mt-1"></span>
            </div>

            <div className="flex flex-col">
              <label htmlFor="password_log" className="font-medium text-green-700">
                Password
              </label>
              <input
                type="password"
                id="password_log"
                name="password"
                placeholder="Enter Password"
                className="border-2 border-green-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-600 focus:shadow-md transition placeholder-green-700/50"
              />
              <span className="error text-red-500 text-sm mt-1"></span>
            </div>

            <div className="flex items-center gap-2 text-green-700">
              <input
                type="checkbox"
                id="show-password"
                className="w-4 h-4 accent-green-600"
              />
              <label htmlFor="show-password" className="text-green-700 font-small">
                Show Password
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-md font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-400 hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Login
            </button>

            <div className="flex items-center justify-center gap-2">
              <hr className="w-24 sm:w-32 border border-green-600" />
              <h3 className="text-green-700">or</h3>
              <hr className="w-24 sm:w-32 border border-green-600" />
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center py-3 border border-green-700 text-green-700 rounded-md hover:bg-gradient-to-r hover:from-green-700 hover:to-green-500 hover:text-white transition"
            >
              <i className="fa-brands fa-google mr-2"></i> Login with Google
            </button>

            <div className="text-center text-green-700">
              <label
                htmlFor="chk"
                className="cursor-pointer hover:text-green-900 hover:underline transition"
                onClick={() => setIsRegister(true)}
              >
                Don’t have an account? Sign up!
              </label>
            </div>
          </form>
        </div>

        {/* REGISTER FORM */}
        <div
          id="reg"
          className={`w-full max-w-sm sm:max-w-md transition-all duration-700 absolute ${
            isRegister ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          <form
            id="signup"
            method="POST"
            className="w-full flex flex-col gap-2 bg-white/70 rounded-3xl shadow-lg backdrop-blur-md hover:shadow-emerald-200/50 transition p-4 sm:p-6 md:p-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-1 text-center">
              Create Your Account
            </h2>

            {/* Name fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 md:gap-3">
              <div className="flex flex-col">
                <label htmlFor="fname" className="font-medium text-green-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="fname"
                  placeholder="First Name"
                  className="border-2 border-green-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-600 focus:shadow-md transition placeholder-green-700/50"
                />
                <span className="error text-red-500 text-sm mt-1"></span>
              </div>

              <div className="flex flex-col">
                <label htmlFor="lname" className="font-medium text-green-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lname"
                  placeholder="Last Name"
                  className="border-2 border-green-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-600 focus:shadow-md transition placeholder-green-700/50"
                />
                <span className="error text-red-500 text-sm mt-1"></span>
              </div>
            </div>

            {/* Contact fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 md:gap-3">
              <div className="flex flex-col">
                <label htmlFor="tel" className="font-medium text-green-700">
                  Number
                </label>
                <input
                  type="tel"
                  id="tel"
                  placeholder="Enter Number"
                  className="border-2 border-green-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-600 focus:shadow-md transition placeholder-green-700/50"
                />
                <span className="error text-red-500 text-sm mt-1"></span>
              </div>

              <div className="flex flex-col">
                <label htmlFor="email_sig" className="font-medium text-green-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email_sig"
                  placeholder="Enter Email"
                  className="border-2 border-green-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-600 focus:shadow-md transition placeholder-green-700/50"
                />
                <span className="error text-red-500 text-sm mt-1"></span>
              </div>
            </div>

            {/* Password fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 md:gap-3">
              <div className="flex flex-col">
                <label htmlFor="password_sig" className="font-medium text-green-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password_sig"
                  placeholder="Enter Password"
                  className="border-2 border-green-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-600 focus:shadow-md transition placeholder-green-700/50"
                />
                <span className="error text-red-500 text-sm mt-1"></span>
              </div>

              <div className="flex flex-col">
                <label htmlFor="confirm_password_sig" className="font-medium text-green-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm_password_sig"
                  placeholder="Confirm Password"
                  className="border-2 border-green-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-600 focus:shadow-md transition placeholder-green-700/50"
                />
                <span className="error text-red-500 text-sm mt-1"></span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-green-700 mt-1">
              <input
                type="checkbox"
                id="show-password-sig"
                className="w-4 h-4 accent-green-600"
              />
              <label htmlFor="show-password-sig" className="text-green-700 font-small">
                Show Password
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-md font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-400 hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Register
            </button>

            <div className="flex items-center justify-center gap-2">
              <hr className="w-24 sm:w-32 border border-green-600" />
              <h3 className="text-green-700">or</h3>
              <hr className="w-24 sm:w-32 border border-green-600" />
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center py-3 border border-green-700 text-green-700 rounded-md hover:bg-gradient-to-r hover:from-green-700 hover:to-green-500 hover:text-white transition"
            >
              <i className="fa-brands fa-google mr-2"></i> Register with Google
            </button>

            <div className="text-center text-green-700">
              <label
                htmlFor="chk"
                className="cursor-pointer hover:text-green-900 hover:underline transition"
                onClick={() => setIsRegister(false)}
              >
                Already have an account? Log in!
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
