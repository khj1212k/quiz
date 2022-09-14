import React from 'react'

const Start = (props) => {

  const clickHandler = () => {
    props.changePage('quiz');
    props.setMyname(document.getElementById('myName').value);
  }

  return (
    <div>
        <img src='/images/sejong.jpg' alt='세종대왕'/>
        <h1>나는 {props.name}에 대해 얼마나 알고 있을까?</h1>
        <input id='myName' type="text" placeholder='내 이름'/>
        <button onClick={clickHandler}>시작하기</button>
    </div>
  )
}

export default Start