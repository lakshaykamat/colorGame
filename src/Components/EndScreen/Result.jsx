import React from 'react'
import { GameContext } from '../Context'
import { tailwindStyle } from '../../styles'
export default function Result(){
    const {
        setGameState,
        score,
        setScore
      } = React.useContext(GameContext)
    const handleGameSate = (e)=>{
        setScore(0)
        const button = e.target.innerHTML
        button == "Play Again" ? setGameState("game") : setGameState("home")
    }
    return(
        <>
        <div className={tailwindStyle.EndScreen.Container}>
        <h1 className={tailwindStyle.EndScreen.text}>Score {score}</h1>
        <button
        onClick={handleGameSate}
        className={tailwindStyle.EndScreen.button}
        >
        Play Again</button>
        <button
        onClick={handleGameSate}
        className={tailwindStyle.EndScreen.button}
        >Home</button>
        </div>
        </>
    )
}