import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataReceived, dataFailed, start } from "../redux/slices";
import Questions from "../components/interfaces/Questions";
import Loader from "../components/common/Loader";
import Error from "../components/common/Error";
import StartScreen from "./StartScreen";
import ProgressBar from "../components/interfaces/ProgressBar";
import Quiz from "../components/common/Quiz";
import NextButton from "../components/common/NextButton";
import Finished from "../components/common/Finished";
import { Outlet } from "react-router-dom";
import "../styles/x86-output.css";
import Header from "../components/common/Header";

export const ASM_LAYOUT = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
};

const MainPage = () => {
  const dispatch = useDispatch();
  const { questions, status, index, answer, points } = useSelector(
    (store) => store.quiz
  );

  const url =
    "https://rtzwjflattrvmhgikvrv.supabase.co/storage/v1/object/public/CS218/218.json";

  // Add null checks and extract questions from data
  useEffect(() => {
    async function fetchQuestions() {
      try {
        dispatch(start());
        const response = await fetch(url);
        const data = await response.json();
        // Extract questions array from the response
        dispatch(dataReceived(data.questions)); // Notice we're accessing data.questions
      } catch (error) {
        console.error("Fetch error:", error);
        dispatch(dataFailed(error));
      }
    }

    fetchQuestions();
  }, [dispatch]);

  // Add null checks for calculations
  const numQuestions = questions?.length || 0;
  const maxPoints = questions?.reduce((prev, cur) => prev + cur.points, 0) || 0;

  return (
    <div>
      <Questions>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && questions?.length > 0 && (
          <>
            <ProgressBar
              index={index}
              numQuestions={numQuestions}
              points={points}
              maxPoints={maxPoints}
            />
            <Quiz
              answer={answer}
              questions={questions[index]}
              dispatch={dispatch}
            />
            <NextButton
              answer={answer}
              dispatch={dispatch}
              numQuestions={numQuestions}
              index={index}
            />
          </>
        )}
        {status === "finish" && (
          <Finished dispatch={dispatch} points={points} maxPoints={maxPoints} />
        )}
      </Questions>
    </div>
  );
};

export default MainPage;
