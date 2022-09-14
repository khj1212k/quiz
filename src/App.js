import { useState } from "react";
import Quiz from "./Component/Quiz/Quiz";
import Score from "./Component/Score/Score";
import Start from "./Component/Start/Start";
import quizes from "./quizes";

function App() {

  const [page, setPage] = useState('start'); // 
  const [score, setScore] = useState(0); 
  const [answer, setAnswer] = useState([]); 
  const [myName,setMyname] = useState('');

  const pageHandler = (newPage) => {
    setPage(newPage);
  }

  const scoreHandler = (changedScore) => {
    setScore(changedScore);
  }

  const resetScoreHandler = () => {
    setScore(0);
  }

  const answerHandler = (change)=>{
    setAnswer(change);
  };

  const myNameHandler = (mn)=>{
    setMyname(mn)
  };

  console.log(page);
  return (
    <>
      {page === 'start' && (<Start name="세종대왕" changePage={pageHandler} setMyname={myNameHandler} />)}
      {page === 'quiz' && (<Quiz quizes={quizes} changePage={pageHandler} calculateScore={scoreHandler} score={score} answer = {answer} answerHandler={answerHandler} />)}
      {page === 'score' && (<Score name="세종대왕"  myName={myName} quizes={quizes} score={score} changePage={pageHandler} resetScoreHandler={resetScoreHandler} answerHandler={answerHandler}/>)}
    </>
  );
}

export default App;
