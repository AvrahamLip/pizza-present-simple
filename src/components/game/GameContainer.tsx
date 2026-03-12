import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { StartScreen } from "./StartScreen";
import { GameScreen } from "./GameScreen";
import { GameOverScreen } from "./GameOverScreen";

type GameState = "start" | "playing" | "gameover";

export const GameContainer = () => {
  const [gameState, setGameState] = useState<GameState>("start");
  const [highScore, setHighScore] = useState(0);
  const [lastResult, setLastResult] = useState<{ score: number; correct: number; total: number } | null>(null);

  const handleStart = () => {
    setGameState("playing");
  };

  const handleGameOver = (score: number, correct: number, total: number) => {
    setLastResult({ score, correct, total });
    if (score > highScore) setHighScore(score);
    setGameState("gameover");
  };

  const handleRestart = () => {
    setLastResult(null);
    setGameState("playing");
  };

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {gameState === "start" && (
          <StartScreen key="start" highScore={highScore} onStart={handleStart} />
        )}
        {gameState === "playing" && (
          <GameScreen key={`game-${Date.now()}`} onGameOver={handleGameOver} />
        )}
        {gameState === "gameover" && lastResult && (
          <GameOverScreen
            key="gameover"
            score={lastResult.score}
            correct={lastResult.correct}
            total={lastResult.total}
            highScore={highScore}
            onRestart={handleRestart}
          />
        )}
      </AnimatePresence>
      <footer className="fixed bottom-0 left-0 right-0 p-2 text-center text-xs text-muted-foreground bg-background/50 backdrop-blur-sm z-50">
        <p>
          &copy; {new Date().getFullYear()} Pizza Present Simple | Version 1.0.0 | Updated: {new Date().toLocaleDateString()} | Developed by <a href="mailto:lip.avi@gmail.com" className="hover:text-primary transition-colors">lip.avi@gmail.com</a>
        </p>
      </footer>
    </div>
  );
};
