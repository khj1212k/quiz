import { useState } from "react";
import Explanation from "./Explanation";
import './Score.css';

const Score = (props) => {

  const [isRetrieve, setIsRetrieve] = useState(true);
  const quizes = props.quizes;

  const reTry = () => {
    props.changePage('start');
    props.resetScoreHandler();
    props.answerHandler([]);
  }

  const retrieveAnswer = () => {
    setIsRetrieve(!isRetrieve);
  }


  return (
    <div>
      <h1 id="scr">{props.name} 퀴즈에 대한 내 점수는?</h1>

      <div>
        <span className="score">{props.score}</span>
        <span className="str">점</span>
      </div>

      <div>{isRetrieve ? <button className="answer" onClick={retrieveAnswer}>정답 보기</button> :
        <>
          <button className="answer" onClick={retrieveAnswer}>정답 닫기</button>
          <Explanation quizes={quizes} />
        </>
      }
      </div>
      <button className="close" onClick={reTry}>다시하기</button>
      <h3 className='h3'>내 점수 공유하기</h3>
      <div class="social-link">
        <a href="https://www.facebook.com"><img src="./images/fcb.png" id="fcb" /></a>
        <a href="https://www.twitter.com"><img src="./images/twitter.png" id="twitter" /></a>
        <a href="https://www.instagram.com/"><img src="./images/insta.png" id="insta" /></a>
        <a href="https://accounts.kakao.com/"><img src="./images/kakao.png" id="kakao" /></a>
      </div>
    </div>
  )
}

export default Score