import { useState } from "react";
import Quiz from "./Component/Quiz/Quiz";
import Score from "./Component/Score/Score";
import Start from "./Component/Start/Start";
import quizes from "./quizes";

function App() {

  const [page, setPage] = useState('start'); // 
  const [score, setScore] = useState(0); 

  const pageHandler = (newPage) => {
    setPage(newPage);
  }

  const scoreHandler = () => {
    setScore(score + 20);
  }

  console.log(page);
  return (
    <>
      {page === 'start' && (<Start name="세종대왕" changePage={pageHandler} />)}
      {page === 'quiz' && (<Quiz quizes={quizes} changePage={pageHandler} calculateScore={scoreHandler} />)}
      {page === 'score' && (<Score name="세종대왕" score={score} changePage={pageHandler} />)}
    </>
  );
}

export default App;
