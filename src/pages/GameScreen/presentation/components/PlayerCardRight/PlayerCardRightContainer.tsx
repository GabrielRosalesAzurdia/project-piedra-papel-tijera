import React, { useContext } from 'react'
import PlayerCardRight from './PlayerCardRight'
import { GameContext } from '../../context/GameContext';

interface PlayerCardRightContainerInterface{
}

const PlayerCardRightContainer:React.FC<PlayerCardRightContainerInterface> = ({}) => {

  const { gameState } = useContext(GameContext);

  return (
    <PlayerCardRight opponentName={gameState.player2.name} avatar={gameState.player2.avatar}></PlayerCardRight>
  )
}

export default PlayerCardRightContainer