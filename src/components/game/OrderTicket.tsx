import { motion, AnimatePresence } from "framer-motion";
import { Question } from "@/lib/gameData";

interface OrderTicketProps {
  question: Question;
  selectedAnswer: string | null;
  isCorrect: boolean | null;
}

export const OrderTicket = ({ question, selectedAnswer, isCorrect }: OrderTicketProps) => {
  const getPlaceholderContent = () => {
    if (selectedAnswer && isCorrect !== null) {
      return (
        <span
          className="font-display text-4xl md:text-5xl font-bold underline decoration-wavy px-1"
          style={{ color: isCorrect ? "hsl(var(--accent))" : "hsl(var(--destructive))" }}
        >
          {question.verbConjugated}
        </span>
      );
    }
    return (
      <span className="relative inline-block mx-1">
        <span
          className="inline-block border-b-4 border-dashed w-32 md:w-40 align-bottom"
          style={{ borderColor: "hsl(var(--secondary))" }}
        />
        <span 
          className="absolute -top-6 left-1/2 -translate-x-1/2 font-body text-sm font-bold italic opacity-70"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          ({question.verbBase})
        </span>
      </span>
    );
  };

  return (
    <motion.div
      className="relative w-full max-w-2xl mx-auto"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Ticket top notch holes */}
      <div className="flex justify-between px-8 -mb-2 relative z-10">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 rounded-full"
            style={{ background: "hsl(var(--background))", border: "2px solid hsl(var(--pizzeria-ticket-border))" }}
          />
        ))}
      </div>

      {/* Main Ticket */}
      <div
        className="relative rounded-2xl px-6 py-5 text-center shadow-pizza-card"
        style={{
          background: "hsl(var(--pizzeria-ticket))",
          border: "2px solid hsl(var(--pizzeria-ticket-border))",
          boxShadow: "0 4px 20px hsl(var(--secondary) / 0.15), inset 0 1px 0 hsl(0 0% 100% / 0.8)",
        }}
      >
        {/* Ticket header */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="h-px flex-1" style={{ background: "hsl(var(--pizzeria-ticket-border))" }} />
          <span className="font-body text-xs font-semibold uppercase tracking-widest" style={{ color: "hsl(var(--muted-foreground))" }}>
            📋 Order Ticket
          </span>
          <div className="h-px flex-1" style={{ background: "hsl(var(--pizzeria-ticket-border))" }} />
        </div>

        {/* The sentence */}
        <div className="font-display text-3xl md:text-4xl font-bold leading-relaxed" style={{ color: "hsl(var(--foreground))" }}>
          <span
            className="inline-block px-3 py-1 rounded-lg mr-2 text-primary-foreground font-display text-3xl md:text-4xl font-bold"
            style={{ background: "hsl(var(--primary))" }}
          >
            {question.subject}
          </span>
          {getPlaceholderContent()}
          <span className="ml-2">{question.sentence}</span>
        </div>

        {/* Feedback message */}
        <AnimatePresence>
          {isCorrect === false && (
            <motion.p
              className="mt-3 font-body text-sm font-medium px-4 py-2 rounded-lg"
              style={{
                background: "hsl(var(--destructive) / 0.1)",
                color: "hsl(var(--destructive))",
                border: "1px solid hsl(var(--destructive) / 0.3)",
              }}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              🔥 Wait! {question.hint}
            </motion.p>
          )}
          {isCorrect === true && (
            <motion.p
              className="mt-3 font-body text-sm font-semibold px-4 py-2 rounded-lg"
              style={{
                background: "hsl(var(--accent) / 0.1)",
                color: "hsl(var(--accent))",
                border: "1px solid hsl(var(--accent) / 0.3)",
              }}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              ✅ Perfetto! <strong>{question.subject} {question.verbConjugated}</strong> {question.sentence}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Ticket bottom tear */}
      <div
        className="h-3 mx-4 rounded-b-lg"
        style={{
          background: "repeating-linear-gradient(90deg, hsl(var(--pizzeria-ticket-border)) 0, hsl(var(--pizzeria-ticket-border)) 10px, transparent 10px, transparent 20px)",
          borderTop: "2px dashed hsl(var(--pizzeria-ticket-border))",
        }}
      />
    </motion.div>
  );
};
