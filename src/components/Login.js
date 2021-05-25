import { useContext } from "react";
import { dataLogin } from "../data/data-login";
import { AuthContext } from "../lib/auth.context";

const Login = () => {
  const authContext = useContext(AuthContext);

  return (
    <div className="max-w-lg max-w-xs bg-gray-900 shadow-2xl rounded-lg mx-auto text-center py-12 mt-4 rounded-xl">
      <div className="container py-5 max-w-md mx-auto">
        <form onSubmit={(event) => submitForm(event, authContext.setAuth)}>
          <div className="mb-4">
            <input
              placeholder="Username"
              className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
            />
          </div>
          <div className="mb-6">
            <input
              placeholder="Password"
              className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const submitForm = (event, setAuth) => {
  event.preventDefault();

  const usernameInput = event.target.username.value;
  const passwordInput = event.target.password.value;

  if (
    usernameInput === dataLogin.user &&
    passwordInput === dataLogin.password
  ) {
    setAuth({ user: dataLogin.user, name: dataLogin.name });
  } else {
    alert("Datos incorrectos");
  }
};

export default Login;
