import { motion } from "framer-motion";

interface LevelUpOverlayProps {
  level: number;
  nextLevelName: string;
  unlockedRule: string;
  onNext: () => void;
}

export const LevelUpOverlay = ({ level, nextLevelName, unlockedRule, onNext }: LevelUpOverlayProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="max-w-md w-full bg-pizzeria-ticket border-4 border-pizzeria-ticket-border rounded-3xl p-8 text-center shadow-2xl"
        initial={{ scale: 0.8, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 15 }}
      >
        <div className="text-6xl mb-4">🏆</div>
        <h2 className="font-display text-4xl font-bold text-secondary mb-2">Level Complete!</h2>
        <p className="font-body text-lg mb-6">
          You've mastered Level {level}!
        </p>

        <div className="bg-secondary/10 rounded-2xl p-6 mb-8 border-2 border-dashed border-secondary/30">
          <p className="font-body text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-2">
            Next Level: {nextLevelName}
          </p>
          <p className="font-display text-2xl font-bold text-foreground">
            {unlockedRule}
          </p>
        </div>

        <button
          onClick={onNext}
          className="w-full py-4 bg-primary text-primary-foreground font-display text-2xl font-bold rounded-xl shadow-lg hover:scale-105 transition-transform active:scale-95"
        >
          Let's Cook! 🍕
        </button>
      </motion.div>
    </motion.div>
  );
};
