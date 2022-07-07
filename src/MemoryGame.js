import React, { useEffect, useState } from "react"
import GameOver from './components/GameOver'
import GameBoard from "./components/GameBoard"
import game from './game/game'

export default function MemoryGame(){

const [gameOVer,setGameOver] = useState(false)
const [cards,setCards] = useState([])

useEffect(()=>{
    setCards(game.createCardsFromTechs())
}, [])

function restart(){
    game.clearCards()
    setCards(game.createCardsFromTechs())
    setGameOver(false)
}

function handleFlip(card){

    if (game.setCard(card.id)) {

        if (game.secondCard) {
            if (game.checkMatch()) {
                game.clearCards();
                if (game.checkGameOver()) {
                   //GameOver
                   setGameOver(true)
                }
            } else {
                setTimeout(() => {
                   //No Match
                   setCards([...game.cards])

                    game.unflipCards();
                }, 1000);

            };
        }
    }

setCards([...game.cards])

}

return(

<div>

<GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
<GameOver show={gameOVer} handleRestart={restart}></GameOver>

</div>

)
}
