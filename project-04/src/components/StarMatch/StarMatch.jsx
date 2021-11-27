import React, { useState } from 'react';
// import classes from './StarMatch.module.css';
import { Game } from "./../Game/Game";

const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};

export { StarMatch };
