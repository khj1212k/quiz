import React from 'react'

const Explanation = (props) => {
    const quizes = props.quizes;
    // console.log(quizes);
  const listItems = quizes.map((quiz, index) => <li key={index}>{quiz.num+1}번 문제 : {quiz.quiz} 정답 : {quiz.answer} <br /> 설명 : {quiz.explanation}</li>);
//   console.log(listItems);
  return (
    <ul>
        {listItems}
    </ul>
  )
}

export default Explanation