import React, { useState } from 'react';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { createStage } from '../gameHelpers';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris' 
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);




    console.log('re-render');
    return (
        <StyledTetrisWrapper>
          <StyledTetris>
            <Stage stage={stage}/>
            <aside>
                {gameOver ? (
                    <Display gameOver={gameOver} text="Game Over" />
                ) : (
                <div>
                  <Display text="Score" />
                  <Display text="Rows" />
                  <Display text="Levels" />
                </div>
                )}
                <StartButton />
            </aside>
          </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;
