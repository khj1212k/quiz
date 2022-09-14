import { useState } from "react";
import Explanation from "./Explanation";

const Score = (props) => {

  const [isRetrieve, setIsRetrieve] = useState(true);
  const quizes = props.quizes;
  // console.log(quizes);
  const reTry = () => {
    props.changePage('start');
    props.resetScoreHandler();
    props.answerHandler([]);
  }

  const retrieveAnswer = () => {
    setIsRetrieve(!isRetrieve);
  }
  // console.log(props.quizes[0]);
  return (
    <div>
        <h1>{props.name} 퀴즈에 대한 내 점수는?</h1>
        <div>
            <span>{props.score}점</span>
        </div>
        <div>{isRetrieve ? <button onClick={retrieveAnswer}>정답 보기</button> : 
                    <>
                      <button onClick={retrieveAnswer}>정답 닫기</button>
                      <Explanation quizes={quizes} />
                    </>
                    }
        </div>
        <button onClick={reTry}>다시하기</button>
    </div>
  )
}

export default Score