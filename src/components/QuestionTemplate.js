import { useDispatch, useSelector } from "react-redux";
import { increaseCount } from "../store/ScoreSlice";
import { Link } from "react-router-dom";

const QuestionTemplate = ({ question, opt1, opt2, opt3, opt4, answer, link }) => {

  const dispatch = useDispatch();
  const handleClick = (data) => {
    if (answer === data) {
      dispatch(increaseCount());
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white w-full gap-y-12 ">
      <div className="text-4xl max-md:text-2xl text-center">
        {""+question}
      </div>
      <div
        className="flex flex-wrap [&>*]:border [&>*]:border-green-400 w-1/2 justify-evenly [&>*]:w-36 [&>*]:h-12 [&>*]:rounded-xl [&>*]:flex [&>*]:justify-center 
      [&>*]:items-center [&>*]:bg-green-500 [&>*]:cursor-pointer  [&>*]:font-bold [&>*]:text-lg gap-y-6 gap-x-6"
      >
        <Link
          to={link}
          className="hover:bg-green-300"
          onClick={() => handleClick(opt1)}
        >
          {"" + opt1}
        </Link>
        <Link
          to={link}
          className="hover:bg-green-300"
          onClick={() => handleClick(opt2)}
        >
          {"" + opt2}
        </Link>
        <Link
          to={link}
          className="hover:bg-green-300"
          onClick={() => handleClick(opt3)}
        >
          {"" + opt3}
        </Link>
        <Link
          to={link}
          className="hover:bg-green-300"
          onClick={() => handleClick(opt4)}
        >
          {"" + opt4}
        </Link>
      </div>
    </div>
  );
};

export default QuestionTemplate;
