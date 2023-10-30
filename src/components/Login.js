import { HiOutlineArrowLongRight } from "react-icons/hi2";
import login1 from "../assets/login1.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import loginBackground from "../assets/loginBackground.jpg"

const Login = () => {
  const storedLoginDetails = useSelector(
    (store) => store.signInDetails.details
  );

  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [visibility, setVisibility] = useState("hidden");

  const handleLogin = () => {
    storedLoginDetails.find((x) => {
      if (x.name === userName && x.password === password) {
        setIsAuthenticated("./signIn");
        return null;
      }
      return null;
    });
  };

  const handleVisibility = () => {
    if (!isAuthenticated) {
      setVisibility("visible");
    }
  };

  useEffect(() => {
    handleLogin();
  }, [userName, password]);

  return (
    <div className="flex justify-center items-center h-screen"
    style={{backgroundImage:  `url(${loginBackground})` }}
    >
      <div className="bg-white rounded-lg w-4/6 h-[80%] flex px-4 ">
        <div className="w-1/2 flex justify-center items-center ">
          <div className="w-72 h-72 rounded-full">
            <img src={login1} alt="login" />
          </div>
        </div>

        <div className="w-1/2 flex justify-center items-center">
          <div className="h-4/6 w-5/6 flex flex-col items-center justify-center gap-y-12">
            <div className="text-2xl font-extrabold">Member Login</div>
            <div className="flex flex-col gap-y-4">
              <input
                className=" rounded-3xl w-72 h-12 px-4 font-semibold bg-gray-100"
                placeholder="Email"
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                className=" rounded-3xl w-72 h-12 px-4 font-semibold bg-gray-100"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link
              to={isAuthenticated}
              className="bg-green-500 w-72 h-12 rounded-3xl px-4 flex items-center justify-center text-white text-lg font-bold
              hover:bg-gray-700"
              onClick={() => handleVisibility()}
            >
              LOGIN
            </Link>
            <div className={`${visibility} text-red-500`}>
              username of password is incorrect
            </div>
            <button className="hover:text-blue-500 flex justify-center items-center gap-x-1">
              <Link to="./signIn">create your account</Link>
              <HiOutlineArrowLongRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
