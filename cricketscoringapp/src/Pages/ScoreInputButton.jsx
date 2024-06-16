import React from 'react'
import "./ScoreInputButton.css"
import Input from '../Components/Input'
let ballCount = 1
let maxBall = 6;

const ScoreInputButton = (props) => {
    const handleClick = (e) => {
        console.log("max", maxBall)
        console.log("ball", ballCount)
        console.log("bb", props.ball)
        if (e.target.value == "Wicket") {
            if (ballCount == maxBall) {
                props.ball == 1.5000000000000004 ? props.setBall(2.0) : props.setBall(1.0)
                ballCount = 1
                maxBall = 6
                props.setWicket(props.wicket + 1)
            } else {
                props.setWicket(props.wicket + 1)
                props.setBall(props.ball + 0.1)
                ballCount += 1
            }
        } else if ((e.target.value == "Dotball")) {
            if (ballCount == maxBall) {
                props.ball == 1.5000000000000004 ? props.setBall(2.0) : props.setBall(1.0)
                ballCount = 1
                maxBall = 6
                props.setRun(props.run + 0)
            } else {
                props.setRun(props.run + 0)
                props.setBall(props.ball + 0.1)
                ballCount += 1
            }
        } else if ((e.target.value == "Wideball" || e.target.value == "Noball")) {
            console.log("wide,nb")
            maxBall += 1
            ballCount += 1
            props.setRun(props.run + 1)
        } else {
            if (ballCount == maxBall) {
                props.ball == 1.5000000000000004 ? props.setBall(2.0) : props.setBall(1.0)
                ballCount = 1
                maxBall = 6
                props.setRun(props.run + parseInt(e.target.value, 10))
            } else {
                props.setRun(props.run + parseInt(e.target.value, 10))
                props.setBall(props.ball + 0.1)
                ballCount += 1
            }
        }
    }

    return (
        <>
            <div className="run-button">
                <div className="run-input-button">
                    <Input type='button' value="1" onclick={handleClick} disable={false} />
                    <Input type='button' value="2" onclick={handleClick} disable={false} />
                    <Input type='button' value="3" onclick={handleClick} disable={false} />
                    <Input type='button' value="4" onclick={handleClick} disable={false} />
                    <Input type='button' value="5" onclick={handleClick} disable={false} />
                    <Input type='button' value="6" onclick={handleClick} disable={false} />
                </div>
                <div className="extra-run-button">
                    <Input type='button' value="Dotball" onclick={handleClick} disable={false} />
                    <Input type='button' value="Wicket" onclick={handleClick} disable={false} />
                    <Input type='button' value="Wideball" onclick={handleClick} disable={false} />
                    <Input type='button' value="Noball" onclick={handleClick} disable={false} />
                </div>
            </div>
        </>
    )
}

export default ScoreInputButton
