import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthorContext } from "../../Context/author";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login(props) {
  //conxet
  let navigate = useNavigate();
  const { loginUser, loadUser } = useContext(AuthorContext);
  console.log(loginUser);
  const [loginfrom, setloginfrom] = useState({
    username: "",
    password: "",
  });
  const onChangeLogin = (e) =>
    setloginfrom({
      ...loginfrom,
      [e.target.name]: e.target.value,
    });
  console.log(loginfrom);

  const login = async (e) => {
    console.log(loginfrom);
    e.preventDefault();
    try {
      const loginData = await loginUser(loginfrom);
      console.log(loginData.success);
      if (loginData.success) {
        loadUser();
        navigate("/blog");
      } else {
        alert("Mật khẩu không đúng");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="login h-screen flex items-center justify-center">
      <div
        className="w-[400px] h-[600px] bg-[rgba(255,255,255)] rounded-2xl
      shadow-2xl shadow-black "
      >
        <div className="p-[3rem]">
          <h1 className="text-[2rem] text-center ">
            {props.title ? props.title : "login"}
          </h1>
          <form className="w-full  leading-10 mt-5 " onSubmit={login}>
            <div>
              <label htmlFor="username" className="block p-2">
                User name
              </label>
              <input
                value={loginfrom.username}
                type="text"
                id="username"
                name="username"
                onChange={onChangeLogin}
                className="w-full border-2 border-gray-400 rounded-xl px-3"
              />
            </div>
            <div>
              <label htmlFor="password" className="block p-2">
                Password
              </label>
              <input
                onChange={onChangeLogin}
                value={loginfrom.password}
                type="password"
                id="password"
                name="password"
                className="w-full border-2 border-gray-400 rounded-xl px-3"
              />
            </div>
            {props.children}
            <button
              type="submit"
              className="block bg-orange-600 w-full mt-9 rounded-xl text-center  pt-1  "
            >
              {props.title ? props.title : "login"}
            </button>
          </form>
          {props.title ? (
            <div className="mt-3 px-6 py-2">
              <span> Return to the login page?</span>{" "}
              <button className="bg-transparent font-bold underline p-[0.5rem] rounded-xl">
                <Link to="/login">Login</Link>
              </button>
            </div>
          ) : (
            <div className="mt-3 px-6 py-2">
              <span>Don't have an acount?</span>{" "}
              <button className="bg-transparent font-bold underline p-[0.5rem] rounded-xl">
                <Link to="/register">Register</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
