import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increaseCount } from "../store/ScoreSlice";

const Question2 = () => {
  const answer = useSelector((store) => store.questionsDetails.question2);
  const dispatch = useDispatch();
  const handleClick = (data) => {
    if (answer === data) {
      dispatch(increaseCount());
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white w-full gap-y-12">
      <div className="text-4xl">
        What is the most common surname in the United States?
      </div>
      <div
        className="flex flex-wrap [&>*]:border [&>*]:border-green-400 w-1/2 justify-evenly [&>*]:w-36 [&>*]:h-12 [&>*]:rounded-xl [&>*]:flex [&>*]:justify-center 
      [&>*]:items-center [&>*]:bg-green-500 [&>*]:cursor-pointer  [&>*]:font-bold [&>*]:text-lg"
      >
        <Link
          to="/question2"
          className="hover:bg-green-300"
          onClick={() => handleClick(1)}
        >
          John
        </Link>
        <Link
          to="/question2"
          className="hover:bg-green-300"
          onClick={() => handleClick(2)}
        >
          Paul
        </Link>
        <Link
          to="/question2"
          className="hover:bg-green-300"
          onClick={() => handleClick(3)}
        >
          Smith
        </Link>
        <Link
          to="/question2"
          className="hover:bg-green-300"
          onClick={() => handleClick(4)}
        >
          Biden
        </Link>
      </div>
    </div>
  );
};

export default Question2;
