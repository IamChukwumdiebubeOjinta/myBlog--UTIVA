import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const Register = () => {
  const [isSignup, setIsSignup] = useState(false)
  const msg = document.getElementById("msg");
  const navigate = useNavigate();
  const lowerCaseRegex = /(?=.*[a-z])/;
  const upperCaseRegex = /(?=.*[A-Z])/;
  const numericRegex = /(?=.*[0-9])/;

  const registerForm = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        // .notOneOf(emailAddresses, "email already taken")
        .required("Required"),
      password: Yup.string()
        .matches(lowerCaseRegex, "one lowercase required")
        .matches(upperCaseRegex, "one uppercase required")
        .matches(numericRegex, "one number required")
        .min(8, "minimum of 8 character required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/user/signup",
          values
        );

        const jsonResponse = await res.data;
        console.log(jsonResponse);

        if (jsonResponse.success) {
          msg.className = "success";
          msg.innerText = jsonResponse.msg;
          window.setTimeout(() => {
            navigate("/login");
          }, 3000);
        } else {
          msg.className = "error";
          // meant to give an err message if user exists
          msg.innerText = jsonResponse.msg;
        }
      } catch (error) {
        console.log(error.name + ": " + error.message);
        msg.innerText = error.msg;
      };

      resetForm(values);
    },
  });

  const submitReq = (e) => {
    if(isSignup){
      sendRequest("register").then(data => console.log(data))
    }
  }
  return (
    <>
      <div className="flex flex-1 w-full min-h-[88vh]">
        {/* Background-Image */}
        <div
          className="flex-[0.6] loginBg bg-cover"
          style={{ backgroundImage: `url("./introBG.svg")` }}
        ></div>

        {/* Form */}
        <div className="flex-[0.4] flex flex-col justify-center items-center px-5">
          {/* Inputs */}
          <div className="w-full max-w-md space-y-8">
            <div className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
              <p>Are you new here?</p>
              <h2>Sign up!</h2>
            </div>

            <form
              className="mt-8 space-y-6"
              action="#"
              onSubmit={registerForm.handleSubmit}
            >
              {/* Error Handlers */}
              <small>
                <div id="msg" className="w-full max-w-md space-y-8">
                  {/* FirstName */}
                  {registerForm.touched.firstName &&
                  registerForm.errors.firstName ? (
                    <div>{registerForm.errors.firstName}</div>
                  ) : null}
                  {/* LastName */}
                  {registerForm.touched.lastName &&
                  registerForm.errors.lastName ? (
                    <div>{registerForm.errors.lastName}</div>
                  ) : null}
                  {/* Email */}
                  {registerForm.touched.email && registerForm.errors.email ? (
                    <div>{registerForm.errors.email}</div>
                  ) : null}
                  {/* Password */}
                  {registerForm.touched.password &&
                  registerForm.errors.password ? (
                    <div>{registerForm.errors.password}</div>
                  ) : null}
                </div>
              </small>

              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="your-first-name"
                    className="myInputField"
                    placeholder="First Name"
                    {...registerForm.getFieldProps("firstName")}
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="your-last-name"
                    className="myInputField"
                    placeholder="Last Name"
                    {...registerForm.getFieldProps("lastName")}
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="myInputField"
                    placeholder="Email address"
                    {...registerForm.getFieldProps("email")}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    className="myInputField"
                    placeholder="Password"
                    {...registerForm.getFieldProps("password")}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={submitReq}
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
