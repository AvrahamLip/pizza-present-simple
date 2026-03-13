import { motion } from "framer-motion";
import kitchenBg from "@/assets/kitchen-bg.jpg";
import chefHappy from "@/assets/chef-happy.png";

interface StartScreenProps {
  highScore: number;
  onStart: () => void;
}

export const StartScreen = ({ highScore, onStart }: StartScreenProps) => {
  return (
    <div
      className="relative min-h-screen min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url("${kitchenBg}")`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />

      <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center">
        {/* Chef */}
        <motion.img
          src={chefHappy}
          alt="Chef Alex"
          className="w-32 h-32 md:w-44 md:h-44 object-contain drop-shadow-2xl"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        />

        {/* Title */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="font-display text-6xl md:text-8xl font-bold text-secondary drop-shadow-lg leading-tight">
            Alex's Pizzeria
          </h1>
          <p className="font-display text-3xl md:text-4xl text-secondary-light mt-1 drop-shadow">
            Present Simple Adventure
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          className="font-body text-base md:text-lg text-muted max-w-md leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Help Alex serve the right verb endings! Pick the correct topping: <strong>+S</strong>, <strong>+ES</strong>, or <strong>+IES</strong>.
        </motion.p>

        {/* High Score */}
        {highScore > 0 && (
          <motion.div
            className="flex items-center gap-2 px-5 py-2 rounded-full font-body text-sm font-semibold"
            style={{ background: "hsl(var(--secondary) / 0.2)", border: "2px solid hsl(var(--secondary))", color: "hsl(var(--secondary))" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            🏆 High Score: {highScore} pizzas
          </motion.div>
        )}

        {/* Rule cheat sheet */}
        <motion.div
          className="grid grid-cols-3 gap-3 max-w-md w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {[
            { icon: "🍅", rule: "+S", example: "eat → eats", color: "hsl(var(--primary))" },
            { icon: "🫙", rule: "+ES", example: "watch → watches", color: "hsl(var(--secondary))" },
            { icon: "🫓", rule: "+IES", example: "study → studies", color: "hsl(var(--accent))" },
          ].map((item) => (
            <div
              key={item.rule}
              className="rounded-xl p-3 text-center"
              style={{ background: "hsl(var(--background) / 0.15)", border: `2px solid ${item.color}` }}
            >
              <div className="text-2xl mb-1">{item.icon}</div>
              <div className="font-display text-xl font-bold" style={{ color: item.color }}>{item.rule}</div>
              <div className="font-body text-xs text-muted">{item.example}</div>
            </div>
          ))}
        </motion.div>

        {/* Play Button */}
        <motion.button
          onClick={onStart}
          className="mt-2 px-10 py-4 rounded-2xl font-display text-4xl font-bold text-primary-foreground shadow-pizzeria transition-transform"
          style={{ background: "hsl(var(--primary))", boxShadow: "var(--shadow-pizzeria)" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: "spring" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🍕 Open the Pizzeria!
        </motion.button>
      </div>
    </div>
  );
};
