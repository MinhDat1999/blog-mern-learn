import React from "react";
import Login from "./Login";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthorContext } from "../../Context/author";
import { useNavigate } from "react-router-dom";

function Register() {
  let navigate = useNavigate();
  const { registerUser } = useContext(AuthorContext);
  console.log(registerUser);
  const [Registerfrom, setRegisterfrom] = useState({
    username: "",
    password: "",
    comfirmPassword: "",
  });

  const onChangeRegister = (e) =>
    setRegisterfrom({
      ...Registerfrom,
      [e.target.name]: e.target.value,
    });
  console.log(Registerfrom);

  const Register = async (e) => {
    console.log(Registerfrom);
    e.preventDefault();
    if (Registerfrom.password !== Registerfrom.comfirmPassword) {
      alert("Xác nhận mật khẩu chưa đúng");
      return;
    }
    try {
      const RegiterData = await registerUser(Registerfrom);
      console.log(RegiterData.success);
      if (RegiterData.success) {
        navigate("/login");
      } else {
        alert(RegiterData.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login h-screen flex items-center justify-center">
      <div
        className="w-[400px] h-[600px] bg-[rgba(255,255,255)] rounded-2xl
      shadow-2xl shadow-black "
      >
        <div className="p-[3rem]">
          <h1 className="text-[2rem] text-center ">singup</h1>
          <form className="w-full  leading-10 mt-5  " onSubmit={Register}>
            <div>
              <label htmlFor="username" className="block p-2">
                User name
              </label>
              <input
                value={Registerfrom.username}
                type="text"
                id="username"
                name="username"
                onChange={onChangeRegister}
                className="w-full border-2 border-gray-400 rounded-xl px-3"
              />
            </div>
            <div>
              <label htmlFor="password" className="block p-2">
                Password
              </label>
              <input
                onChange={onChangeRegister}
                value={Registerfrom.password}
                type="password"
                id="password"
                name="password"
                className="w-full border-2 border-gray-400 rounded-xl px-3"
              />
            </div>
            <div>
              <label htmlFor="confirmpassword" className="block p-2 ">
                Confirm Password
              </label>
              <input
                value={Registerfrom.comfirmPassword}
                type="password"
                onChange={onChangeRegister}
                name="comfirmPassword"
                id="confirmpassword"
                className="w-full border-2 border-gray-400 rounded-xl px-3"
              />
            </div>
            <button
              type="submit"
              className="block bg-orange-600 w-full mt-9 rounded-xl text-center  pt-1  "
            >
              Singup
            </button>
          </form>
          <div className="mt-3 px-6 py-2">
            <span> Return to the login page?</span>{" "}
            <button className="bg-transparent font-bold underline p-[0.5rem] rounded-xl">
              <Link to="/login">Login</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
