import React, { useEffect } from 'react'
import "./ScoreScreen.css"
import Input from '../Components/Input'

const ScoreScreen = (props) => {
    const getTeamName = () => {
        return props.ball === 2.0 ? props.setTeam('Team B') : props.team;
    }

    useEffect(() => {
        if (props.ball === 2.0) {
            props.setFinalScore(lastScore => [...lastScore, `${props.team} : ${props.run} / ${props.wicket}`]);
            props.setTeam('Team B');
            props.setRun(0);
            props.setWicket(0);
            props.setBall(0.0)
        }
    }, [props.ball]);

    return (
        <>
            <div className="score-screen">
                <Input type="none" id="team-screen" placeholder={getTeamName()} disable={true} />
                <Input type="none" id="score-screen" placeholder={`Score : ${props.run} / ${props.wicket}     Over :  ${(props.ball).toFixed(1)}`} disable={true} />
            </div>
        </>
    )
}

export default ScoreScreen
