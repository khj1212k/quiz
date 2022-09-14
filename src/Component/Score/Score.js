
const Score = (props) => {

  const reTry = () => {
    props.changePage('start');
  }

  return (
    <div>
        <h1>{props.name} 퀴즈에 대한 내 점수는?</h1>
        <div>
            <span>{props.score}</span>
            <p>이정도면 찐친!</p>
        </div>
        <button onClick={reTry}>다시하기</button>
    </div>
  )
}

export default Score