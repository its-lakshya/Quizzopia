import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Score = () => {
  const score = useSelector((store) => store.scoreDetails.count);
  const authStatus = useSelector(
    (store) => store.authenticationDetails.isAuthenticated
  );

  if (!authStatus) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="text-white h-screen flex flex-col items-center justify-center gap-y-8">
      <div className="w-80 h-80 rounded-full border-4 border-green-500 border-dashed flex items-center justify-center ">
        <div
          className="w-72 h-72 rounded-full border-8 border-white animate-pulse flex items-center justify-center font-bold
                text-9xl"
        >
          {"" + score}
        </div>
      </div>
      <div className="font-bold text-4xl">heyy! here are your score</div>
    </div>
  );
};

export default Score;
