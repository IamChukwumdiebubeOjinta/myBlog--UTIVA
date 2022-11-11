import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const msg = document.getElementById("msg");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lowerCaseRegex = /(?=.*[a-z])/;
  const upperCaseRegex = /(?=.*[A-Z])/;
  const numericRegex = /(?=.*[0-9])/;

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
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
    onSubmit: async (values) => {
      try {
        msg.innerText = "Submitting data...";

        const res = await axios.post(
          "http://localhost:5000/api/user/login",
          values
        );

        const jsonResponse = await res.data;
        console.log(jsonResponse.data);

        if (jsonResponse.success) {
          msg.className = "success";
          // save auth token in local storage
          localStorage.setItem("token", jsonResponse.data.accessToken);
          localStorage.setItem("user", JSON.stringify(jsonResponse.data.user));

          msg.innerText = jsonResponse.msg;
          window.setTimeout(() => {
            navigate("/");
          }, 3000);
        } else {
          msg.className = "error";
          // meant to give an err message if user exists
          msg.innerText = jsonResponse.msg;
        }
      } catch (error) {
        console.log(error.name + ": " + error.message);
        msg.innerText = error.msg;
      }

      resetForm(values);
    },
  });

  return (
    <div className="flex flex-1 w-full min-h-[88vh]">
      <div className="flex-[0.4] flex flex-col justify-center items-center px-5">
        <div className="w-full max-w-md space-y-8">
          <div className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            <p>Hello there</p>
            <h2>Sign in to your account</h2>
          </div>
          <form
            className="mt-8 space-y-6"
            action="#"
            onSubmit={loginForm.handleSubmit}
          >
            {/* Error Handler */}
            <small>
              <div id="msg" className="w-full max-w-md space-y-8">
                {/* Email */}
                {loginForm.touched.email && loginForm.errors.email ? (
                  <div>{loginForm.errors.email}</div>
                ) : null}
                {/* Password */}
                {loginForm.touched.password && loginForm.errors.password ? (
                  <div>{loginForm.errors.password}</div>
                ) : null}
              </div>
            </small>

            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="myInputField"
                  placeholder="Email address"
                  {...loginForm.getFieldProps("email")}
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
                  {...loginForm.getFieldProps("password")}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="flex-[0.6] loginBg bg-cover"
        style={{ backgroundImage: `url("./introBG.svg")` }}
      ></div>
    </div>
  );
};

export default Login;
