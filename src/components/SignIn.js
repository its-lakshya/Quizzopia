import signIn from "../assets/SignIn.png"
import { useDispatch } from "react-redux"
import { storeDetails} from "../store/SignInSlice";
import { useState } from "react";
import { Link } from "react-router-dom";
import loginBackground from "../assets/loginBackground.jpg"

const SignIn = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);
    const [areDetailsFilled, setAreDetailsFilled] = useState(false);
    const [visibility, setVisibility] = useState('visible');
    const [text, setText] = useState('SIGN IN')

    const handleLoginDetails = () => {
        dispatch(storeDetails({name, password}))
    }

  return (
    <div className="flex justify-center items-center h-screen"
    style={{backgroundImage:  `url(${loginBackground})`, }}
    >
      <div className="bg-white rounded-lg w-4/6 h-[80%] flex px-4 ">
        <div className="w-1/2 flex justify-center items-center ">
          <div className="w-72 h-72 rounded-full">
            <img src={signIn} alt="login" />
          </div>
        </div>

        <div className="w-1/2 flex justify-center items-center">
          <div className="h-4/6 w-5/6 flex flex-col items-center justify-center gap-y-12">
            <div className="text-2xl font-extrabold">Sign In</div>
            {areDetailsFilled!==false && name!==null && password!==null ? (<div className='w-full flex justify-center items-center h-9'>
              heyyy! your is created now you can{'\u00A0'}
              <Link to="/" className='text-blue-600'>login</Link>{'\u00A0'}
              to start
            </div>) : (null)}
            <div className={`flex flex-col gap-y-4 ${visibility}`}>
              <input
                className=" rounded-3xl w-72 h-12 px-4 font-semibold bg-gray-100"
                placeholder="Email/UserName"
                onChange={(e)=>setName(e.target.value)}
              />
              <input
                className=" rounded-3xl w-72 h-12 px-4 font-semibold bg-gray-100"
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <button
              className={`bg-green-500 w-72 h-12 rounded-3xl px-4 flex items-center justify-center text-white text-lg font-bold
                        hover:bg-gray-700 ${visibility}`}
              onClick = {()=> {handleLoginDetails()
                if(name!==null && password!==null){
                setAreDetailsFilled(true) 
                setText('login')
                setVisibility('hidden')
              }
              }}
            >
              {text}
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
