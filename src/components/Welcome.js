import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Welcome = () => {
  const currentUser = useSelector((store) => store.signInDetails.currentUser);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full gap-y-12">
      <div className="flex flex-col items-center justify-center text-white font-extrabold">
        <div className="text-9xl">WELCOME</div>
        <div className="text-4xl tracking-wider capitalize ">
          {" " + currentUser.userName}
        </div>
      </div>
      <Link to="/quiz"
        className="rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
      >
        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="relative">Start Quiz</span>
      </Link>
    </div>
  );
};

export default Welcome;