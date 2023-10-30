import { useDispatch, useSelector } from "react-redux";
import { increaseCount } from "../store/ScoreSlice";
import { Link } from "react-router-dom";

const Question1 = () => {
  const answer = useSelector((store) => store.questionsDetails.question1);
  const dispatch = useDispatch();
  const handleClick = (data) => {
    if (answer === data) {
      dispatch(increaseCount());
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white w-full gap-y-12">
      <div className="text-4xl">
        Which country has the highest life expectancy?
      </div>
      <div
        className="flex flex-wrap [&>*]:border [&>*]:border-green-400 w-1/2 justify-evenly [&>*]:w-36 [&>*]:h-12 [&>*]:rounded-xl [&>*]:flex [&>*]:justify-center 
      [&>*]:items-center [&>*]:bg-green-500 [&>*]:cursor-pointer  [&>*]:font-bold [&>*]:text-lg"
      >
        <Link to="/quiz/question2" className="hover:bg-green-300" onClick={() => handleClick(1)}>
          Hong Kong
        </Link>
        <Link to="/quiz/question2" className="hover:bg-green-300" onClick={() => handleClick(2)}>
          USA
        </Link>
        <Link to="/quiz/question2" className="hover:bg-green-300" onClick={() => handleClick(3)}>
          India
        </Link>
        <Link to="/quiz/question2" className="hover:bg-green-300" onClick={() => handleClick(4)}>
          Canada
        </Link>
      </div>
    </div>
  );
};

export default Question1;
