import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import customAxios from "../config/customAxios";
import { getLoginError, setActiveSession } from "../store/actions";
import ErrorComponent from "../components/ErrorComponent";
import { useNavigate } from "react-router-dom";

import { isValidObj } from "../config/util";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPrompt, setErrorPrompt] = useState(false);
  const user = useSelector((state) => state.user);

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const onSubmitSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await customAxios.post(
        "/login",
        {
          email: email,
          password: password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      dispatch(setActiveSession(response.data));
      navigate("/appointment", { replace: true });
    } catch (error) {
      dispatch(getLoginError(error.response));
      setErrorPrompt(true);
    }
  };

  const handleCloseError = () => {
    setErrorPrompt(false);
  };
  return (
    <>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                className="bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-300 rounded-md py-2 px-4 block w-full appearance-none leading-normal transition duration-300"
                id="email"
                name="email"
                type="email"
                onChange={onEmailChange}
                required
              />
            </div>
          </div>
          <div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm"></div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                onChange={onPasswordChange}
                required
                className="bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-300 rounded-md py-2 px-4 block w-full appearance-none leading-normal transition duration-300"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={onSubmitSignIn}
            >
              LOG IN
            </button>
          </div>
        </form>
        {isValidObj(user.error) && errorPrompt && (
          <ErrorComponent
            errorData={user.error}
            handleCloseModal={() => handleCloseError()}
          />
        )}
      </div>
    </>
  );
};

export default Login;
