import { motion } from "framer-motion";
import { SuffixRule, TOPPING_OPTIONS } from "@/lib/gameData";

interface ToppingStationProps {
  onSelect: (rule: SuffixRule) => void;
  disabled: boolean;
  selectedRule: SuffixRule | null;
  correctRule: SuffixRule | null;
}

const COLORS: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  primary: {
    bg: "hsl(var(--primary))",
    border: "hsl(var(--primary-dark))",
    text: "hsl(var(--primary-foreground))",
    glow: "hsl(var(--primary) / 0.4)",
  },
  secondary: {
    bg: "hsl(var(--secondary))",
    border: "hsl(35 80% 40%)",
    text: "hsl(var(--secondary-foreground))",
    glow: "hsl(var(--secondary) / 0.4)",
  },
  accent: {
    bg: "hsl(var(--accent))",
    border: "hsl(145 63% 30%)",
    text: "hsl(var(--accent-foreground))",
    glow: "hsl(var(--accent) / 0.4)",
  },
};

export const ToppingStation = ({ onSelect, disabled, selectedRule, correctRule }: ToppingStationProps) => {
  const getState = (rule: SuffixRule) => {
    if (!selectedRule) return "idle";
    if (rule === selectedRule && correctRule && rule === correctRule) return "correct";
    if (rule === selectedRule && correctRule && rule !== correctRule) return "wrong";
    if (rule !== selectedRule && correctRule && rule === correctRule) return "reveal";
    return "dimmed";
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Station label */}
      <div className="text-center mb-4">
        <span
          className="font-display text-2xl md:text-3xl font-bold"
          style={{ color: "hsl(var(--secondary))" }}
        >
          🧑‍🍳 Topping Station
        </span>
        <p className="font-body text-xs mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>
          Pick the right suffix to complete the order!
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 md:gap-4">
        {TOPPING_OPTIONS.map((option) => {
          const state = getState(option.rule);
          const colors = COLORS[option.color];

          return (
            <motion.button
              key={option.rule}
              onClick={() => !disabled && onSelect(option.rule)}
              disabled={disabled}
              className="relative flex flex-col items-center justify-center gap-1 md:gap-2 rounded-xl md:rounded-2xl py-3 md:py-5 px-1 md:px-3 font-body font-semibold transition-all cursor-pointer select-none"
              style={{
                background: state === "dimmed" ? "hsl(var(--muted))" : colors.bg,
                border: `3px solid ${state === "dimmed" ? "hsl(var(--border))" : colors.border}`,
                color: state === "dimmed" ? "hsl(var(--muted-foreground))" : colors.text,
                boxShadow: state === "idle" ? `0 6px 20px -4px ${colors.glow}` : undefined,
                opacity: state === "dimmed" ? 0.5 : 1,
              }}
              whileHover={!disabled && state === "idle" ? { scale: 1.06, y: -4 } : {}}
              whileTap={!disabled ? { scale: 0.95 } : {}}
              animate={
                state === "wrong"
                  ? { x: [-6, 6, -6, 6, 0], transition: { duration: 0.4 } }
                  : state === "correct"
                  ? { scale: [1, 1.1, 1], transition: { duration: 0.3 } }
                  : {}
              }
            >
              {/* State indicator */}
              {state === "correct" && (
                <motion.div
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: "hsl(var(--accent))", color: "hsl(var(--accent-foreground))" }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  ✓
                </motion.div>
              )}
              {state === "wrong" && (
                <motion.div
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: "hsl(var(--destructive))", color: "hsl(var(--destructive-foreground))" }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  ✗
                </motion.div>
              )}
              {state === "reveal" && (
                <motion.div
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-sm"
                  style={{ background: "hsl(var(--accent))", color: "hsl(var(--accent-foreground))" }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  👆
                </motion.div>
              )}

              <span className="text-3xl">{option.emoji}</span>
              <span className="font-display text-3xl font-bold">{option.label}</span>
              <span className="font-body text-xs opacity-90">{option.description}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
