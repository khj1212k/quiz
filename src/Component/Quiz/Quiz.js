import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

const Quiz = (props) => {
  const [num, setNum] = useState(0); // 문제번호 num
  const quizes = props.quizes;



  const onClick = (e) => {

    if(quizes[num].answer === e.target.alt) {
        props.calculateScore();
    }

    setNum(num + 1);
    console.log('clicked');
    if(num === 4) {
        props.changePage('score');
    }

    
  }


  return (
    <div>
        <div>
        <div className="App">
        <ProgressBar  completed={num/5*100} />
    </div>
            <p>{num+1}번 문제</p>
            <p>{quizes[num].quiz}</p>
        </div>
        <div>
            <img src='./images/O.png' alt='O' width={200} onClick={onClick} />
            <img src='./images/X.png' alt='X' width={350} onClick={onClick} />
        </div>
    </div>
  )
}

export default Quiz