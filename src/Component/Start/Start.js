import React from 'react'
import './Start.css';

const Start = (props) => {

  const clickHandler = () => {
    props.changePage('quiz');
  }

  return (
    <div>
      <div className='sejong'>
        <img src='/images/sejong.png' alt='세종대왕' />
      </div>

      <h2 className='h2'>나는 {props.name}에 대해 얼마나 알고 있을까?</h2>

      <button className='startbutton' onClick={clickHandler}>시작하기</button>
      <h3 className='h3'>퀴즈 공유하기</h3>
      <div class="social-link">
        <a href="https://www.facebook.com"><img src="./images/fcb.png" id="fcb" /></a>
        <a href="https://www.twitter.com"><img src="./images/twitter.png" id="twitter" /></a>
        <a href="https://www.instagram.com/"><img src="./images/insta.png" id="insta" /></a>
        <a href="https://accounts.kakao.com/"><img src="./images/kakao.png" id="kakao" /></a>
      </div>


    </div>
  )
}

export default Start