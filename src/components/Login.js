import { HiOutlineArrowLongRight } from "react-icons/hi2";
import login1 from "../assets/login1.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import loginBackground from "../assets/loginBackground.jpg"
import { storeCurrentUser } from "../store/SignInSlice";
import { setAuthentication } from "../store/AuthenticationSlice";

const Login = () => {
  const storedLoginDetails = useSelector(
    (store) => store.signInDetails.details
  );

  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [visibility, setVisibility] = useState("hidden");
  const dispatch = useDispatch()

  const handleLogin = () => {
    storedLoginDetails.find((x) => {
      if (x.name === userName && x.password === password) {
        setIsAuthenticated("./welcome");
        dispatch(storeCurrentUser({userName, password}))
        dispatch(setAuthentication());
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
      <div className="bg-white rounded-lg w-4/6 h-[80%] flex px-4 max-lg:w-full max-lg:mx-12 max-md:flex-col 
      max-md:items-center max-md:justify-center max-sm:mx-4 max-md:gap-y-8 max-md:h-auto max-md:py-12">
        <div className="w-1/2 flex justify-center items-center max-md:w-full">
          <div className="w-72 h-72 rounded-full max-sm:w-60 max-sm:h-60">
            <img src={login1} alt="login" />
          </div>
        </div>

        <div className="w-1/2 flex justify-center items-center max-md:w-full">
          <div className="h-4/6 w-5/6 flex flex-col items-center justify-center gap-y-12">
            <div className="text-2xl font-extrabold">Member Login</div>
            <div className="flex flex-col gap-y-4">
              <input
                className=" rounded-3xl w-72 h-12 px-4 font-semibold bg-gray-100"
                placeholder="Email/Username"
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
              username or password is incorrect
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
