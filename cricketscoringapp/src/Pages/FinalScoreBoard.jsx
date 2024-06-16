import React from 'react'

const FinalScoreBoard = (props) => {  
  return (
    <>
      <div className="final-score-card">
        <h1>Final ScoreBoard</h1>
        <ul>
          {props.finalScore.map((score, index) => (
            <li key={index}>{score}</li>
          ))}
        </ul>
        <h3> Winner : {props.winner}</h3>
      </div>
    </>
  )
}

export default FinalScoreBoard
