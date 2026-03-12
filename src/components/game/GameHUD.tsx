import { motion } from "framer-motion";
import { MAX_LIVES, TIMER_SECONDS } from "@/lib/gameData";

interface GameHUDProps {
  score: number;
  lives: number;
  timeLeft: number;
  questionIndex: number;
  totalQuestions: number;
  currentLevel: number;
}

export const GameHUD = ({ score, lives, timeLeft, questionIndex, totalQuestions, currentLevel }: GameHUDProps) => {
  const timerPercent = (timeLeft / (currentLevel === 4 ? 10 : currentLevel === 3 ? 12 : 15)) * 100;
  const timerColor =
    timerPercent > 60
      ? "hsl(var(--accent))"
      : timerPercent > 30
      ? "hsl(var(--secondary))"
      : "hsl(var(--destructive))";

  return (
    <div className="w-full flex flex-col gap-2">
      {/* Top bar: lives + question + score */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        {/* Level Tag */}
        <div 
          className="px-3 py-1 rounded-full font-display font-bold text-sm flex items-center gap-1 shadow-sm"
          style={{ background: "hsl(var(--secondary))", color: "hsl(var(--secondary-foreground))" }}
        >
          🏆 Level {currentLevel}
        </div>

        {/* Lives */}
        <div className="flex items-center gap-1">
          {[...Array(MAX_LIVES)].map((_, i) => (
            <motion.span
              key={i}
              className="text-xl"
              animate={i >= lives ? { scale: [1, 0.8, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              {i < lives ? "❤️" : "🖤"}
            </motion.span>
          ))}
        </div>

        {/* Question progress */}
        <span
          className="font-body text-sm font-semibold px-3 py-1 rounded-full"
          style={{ background: "hsl(var(--muted))", color: "hsl(var(--muted-foreground))" }}
        >
          Order {questionIndex + 1} / {totalQuestions}
        </span>

        {/* Score */}
        <motion.div
          className="flex items-center gap-1 font-display text-2xl font-bold"
          style={{ color: "hsl(var(--secondary))" }}
          key={score}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.3 }}
        >
          🍕 {score}
        </motion.div>
      </div>

      {/* Timer bar */}
      {currentLevel >= 4 && (
        <div
          className="relative w-full h-4 rounded-full overflow-hidden"
          style={{ background: "hsl(var(--muted))", border: "1px solid hsl(var(--border))" }}
        >
          <motion.div
            className="absolute left-0 top-0 h-full rounded-full transition-colors duration-300"
            style={{ width: `${timerPercent}%`, background: timerColor }}
            animate={{ width: `${timerPercent}%` }}
            transition={{ duration: 0.1 }}
          />
          {/* Timer label */}
          <div
            className="absolute inset-0 flex items-center justify-center font-body text-[10px] font-bold"
            style={{ color: timerPercent > 50 ? "hsl(var(--primary-foreground))" : "hsl(var(--foreground))" }}
          >
            ⏱ {timeLeft}s
          </div>
        </div>
      )}
    </div>
  );
};
