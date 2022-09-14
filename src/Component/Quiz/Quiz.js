import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

const Quiz = (props) => {
  const [num, setNum] = useState(0); // 문제번호 num
  const quizes = props.quizes;
  let answer = props.answer

  const onClick = (e) => {

    if(quizes[num].answer === e.target.alt) {
        props.calculateScore(props.score + 20);
    }

    setNum(num + 1);
    // console.log('clicked');
    if(num === 4) {
        props.changePage('score');
    }

    props.answerHandler([...answer,e.target.alt]); // 선택항목을 저장

    console.log(props.score);
    
  }

  const previousQuiz = () =>{ // 이전버튼 눌렀을때
    setNum(num - 1); // 이전문제 번호
    const a = answer.pop();  // 고른답안 리스트에서 제일 마지막꺼 빼주기;
    props.answerHandler(answer);  // 하나빠진 리스트로 answer변경
    if(a===quizes[num-1].answer){props.calculateScore(props.score - 20)}; // a가 정답이였으면 아까 20점 추가됬을테니까 20점 빼주기
  };



  return (
    <div>
        <div>
        <ProgressBar completed={num/5*100} />
        </div>
        <div>
            <p>{num+1}번 문제</p>
            <p>{quizes[num].quiz}</p>
        </div>
        <div>
            <img src='./images/O.png' alt='O' width={200} onClick={onClick} />
            <img src='./images/X.png' alt='X' width={350} onClick={onClick} />
            <p>현제점수 : {props.score}</p>
        </div>
        <div>
          {num!==0 ? <button onClick={previousQuiz}>이전문제</button>: ''} 
        </div>
        
    </div>
  )
}

export default Quiz