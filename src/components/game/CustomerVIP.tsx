import { motion, AnimatePresence } from "framer-motion";
import { Subject } from "@/lib/gameData";

interface CustomerVIPProps {
  subject: Subject;
  satisfied: boolean | null;
}

const CUSTOMER_EMOJIS: Record<Subject, string> = {
  He: "👨‍💼",
  She: "👩‍💼",
  It: "🤖",
};

const CUSTOMER_NAMES: Record<Subject, string> = {
  He: "Signor Marco",
  She: "Signora Sofia",
  It: "Robot Chef",
};

export const CustomerVIP = ({ subject, satisfied }: CustomerVIPProps) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative rounded-2xl px-4 py-4 flex flex-col items-center gap-1 shadow-pizza-card"
        style={{
          background: "hsl(var(--pizzeria-ticket))",
          border: "3px solid hsl(var(--secondary))",
          minWidth: "110px",
        }}
      >
        {/* VIP badge */}
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full font-body text-xs font-bold"
          style={{ background: "hsl(var(--secondary))", color: "hsl(var(--secondary-foreground))" }}
        >
          ⭐ VIP
        </div>

        {/* Customer emoji */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${subject}-${satisfied}`}
            className="text-5xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={
              satisfied === true
                ? { scale: [1, 1.2, 1], opacity: 1, rotate: [0, 10, -10, 0] }
                : satisfied === false
                ? { scale: 1, opacity: 0.6 }
                : { scale: 1, opacity: 1 }
            }
            exit={{ opacity: 0, scale: 0.8 }}
          >
            {satisfied === true ? "😄" : satisfied === false ? "😕" : CUSTOMER_EMOJIS[subject]}
          </motion.div>
        </AnimatePresence>

        <span
          className="font-display text-lg font-bold text-center"
          style={{ color: "hsl(var(--foreground))" }}
        >
          {subject}
        </span>
        <span
          className="font-body text-xs text-center"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          {CUSTOMER_NAMES[subject]}
        </span>

        {/* Satisfied indicator */}
        <AnimatePresence>
          {satisfied === true && (
            <motion.div
              className="font-body text-xs font-semibold"
              style={{ color: "hsl(var(--accent))" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Grazie! 🍕
            </motion.div>
          )}
          {satisfied === false && (
            <motion.div
              className="font-body text-xs font-semibold"
              style={{ color: "hsl(var(--destructive))" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Mamma mia! 😤
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
