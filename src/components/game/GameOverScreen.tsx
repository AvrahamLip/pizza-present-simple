import { motion } from "framer-motion";
import kitchenBg from "@/assets/kitchen-bg.jpg";

interface GameOverScreenProps {
  score: number;
  correct: number;
  total: number;
  highScore: number;
  onRestart: () => void;
}

export const GameOverScreen = ({ score, correct, total, highScore, onRestart }: GameOverScreenProps) => {
  const accuracy = Math.round((correct / total) * 100);
  const isNewHighScore = score >= highScore;

  const getGrade = () => {
    if (accuracy >= 90) return { emoji: "⭐⭐⭐", label: "Master Pizzaiolo!", color: "hsl(var(--secondary))" };
    if (accuracy >= 70) return { emoji: "⭐⭐", label: "Great Chef!", color: "hsl(var(--accent))" };
    if (accuracy >= 50) return { emoji: "⭐", label: "Keep Practicing!", color: "hsl(var(--primary))" };
    return { emoji: "🍕", label: "Try Again!", color: "hsl(var(--muted-foreground))" };
  };

  const grade = getGrade();

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${kitchenBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-foreground/65 backdrop-blur-sm" />

      <motion.div
        className="relative z-10 flex flex-col items-center gap-6 px-6 w-full max-w-md"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {/* Title */}
        <motion.h1
          className="font-display text-6xl md:text-7xl font-bold text-center"
          style={{ color: "hsl(var(--secondary))" }}
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          Pizzeria Closed!
        </motion.h1>

        {/* Result Card */}
        <motion.div
          className="w-full rounded-3xl p-6 text-center"
          style={{
            background: "hsl(var(--pizzeria-ticket))",
            border: "3px solid hsl(var(--secondary))",
            boxShadow: "0 20px 60px hsl(var(--foreground) / 0.3)",
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Grade */}
          <div className="text-5xl mb-2">{grade.emoji}</div>
          <h2 className="font-display text-4xl font-bold mb-4" style={{ color: grade.color }}>
            {grade.label}
          </h2>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { label: "🍕 Pizzas", value: score },
              { label: "✅ Correct", value: `${correct}/${total}` },
              { label: "🎯 Accuracy", value: `${accuracy}%` },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-3 flex flex-col items-center"
                style={{ background: "hsl(var(--muted))" }}
              >
                <span className="font-body text-xs text-muted-foreground">{stat.label}</span>
                <span className="font-display text-3xl font-bold" style={{ color: "hsl(var(--primary))" }}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* New high score */}
          {isNewHighScore && score > 0 && (
            <motion.div
              className="mb-4 px-4 py-2 rounded-full font-body text-sm font-bold"
              style={{ background: "hsl(var(--secondary))", color: "hsl(var(--secondary-foreground))" }}
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.1, 1] }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              🏆 New High Score!
            </motion.div>
          )}

          {/* Rules reminder */}
          <div
            className="rounded-xl p-3 text-left mb-4"
            style={{ background: "hsl(var(--primary) / 0.08)", border: "1px solid hsl(var(--primary) / 0.2)" }}
          >
            <p className="font-body text-xs font-semibold mb-1" style={{ color: "hsl(var(--primary))" }}>
              📚 Remember the rules:
            </p>
            <p className="font-body text-xs" style={{ color: "hsl(var(--foreground))" }}>
              🍅 <strong>+S</strong> — most verbs (eat→eats, run→runs)<br/>
              🫙 <strong>+ES</strong> — after ch/sh/x/z/s (watch→watches)<br/>
              🫓 <strong>+IES</strong> — consonant+y (study→studies)
            </p>
          </div>

          {/* Restart button */}
          <motion.button
            onClick={onRestart}
            className="w-full py-4 rounded-2xl font-display text-3xl font-bold text-primary-foreground"
            style={{ background: "hsl(var(--primary))", boxShadow: "var(--shadow-pizzeria)" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            🔁 Re-open Pizzeria!
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};
