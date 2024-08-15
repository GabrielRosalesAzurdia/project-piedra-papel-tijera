import React, { useContext } from 'react'
import PlayerCardLeft from './PlayerCardLeft'
import { GameContext } from '../../context/GameContext';

interface PlayerCardLeftContainerInterface {
}

const PlayerCardLeftContainer:React.FC<PlayerCardLeftContainerInterface> = ({}) => {

  const { gameState } = useContext(GameContext);

  return (
    <PlayerCardLeft name={gameState.player1.name} avatar={gameState.player1.avatar}></PlayerCardLeft>
  )
}

export default PlayerCardLeftContainer