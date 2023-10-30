import { HiOutlineArrowLongRight } from "react-icons/hi2";
import login1 from "../assets/login1.png"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg w-4/6 h-[80%] flex px-4 ">
        <div className="w-1/2 flex justify-center items-center ">
            <div className='w-72 h-72 rounded-full'>
                <img src={login1} alt='login'/>
            </div>
        </div>

        <div className="w-1/2 flex justify-center items-center">
          <div className="h-4/6 w-5/6 flex flex-col items-center justify-center gap-y-12">
            <div className="text-2xl font-extrabold">Member Login</div>
            <div className="flex flex-col gap-y-4">
              <input
                className=" rounded-3xl w-72 h-12 px-4 font-semibold bg-gray-100"
                placeholder="Email"
              />
              <input
                className=" rounded-3xl w-72 h-12 px-4 font-semibold bg-gray-100"
                placeholder="Password"
              />
            </div>
            <button
              className="bg-green-500 w-72 h-12 rounded-3xl px-4 flex items-center justify-center text-white text-lg font-bold
                        hover:bg-gray-700"
            >
              LOGIN
            </button>
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
