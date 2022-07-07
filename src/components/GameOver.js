import { Fragment } from "react"


function GameOver(props){
    return(props.show?

<div id="gameOver">

<div>Parabéns, você finalizou o jogo!</div>
<button id="restart" onClick={props.handleRestart}>Jogar Novamente</button>

</div>: <Fragment />

    )
}

export default GameOver