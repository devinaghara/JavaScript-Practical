import React, { useState } from 'react'
import ScoreScreen from './ScoreScreen';
import ScoreInputButton from './ScoreInputButton';
import FinalScoreBoard from './FinalScoreBoard';

const ScoreCard = () => {
  let [run, setRun] = useState(0)
  let [wicket, setWicket] = useState(0)
  let [ball, setBall] = useState(0.0)
  let [team, setTeam] = useState("Team A")
  let [finalScore, setFinalScore] = useState([])
  let [winner, setWinner] = useState("");
  return (
    <>
      <ScoreScreen run={run} setRun={setRun} wicket={wicket} setWicket={setWicket} setBall={setBall} ball={ball} team={team} setTeam={setTeam} setFinalScore={setFinalScore} />
      <ScoreInputButton run={run} setRun={setRun} setWicket={setWicket} wicket={wicket} ball={ball} setBall={setBall} />
      <FinalScoreBoard run={run} finalScore={finalScore} winner={winner}/>
    </>
  )
}

export default ScoreCard
