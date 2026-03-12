import { motion, AnimatePresence } from "framer-motion";
import chefHappy from "@/assets/chef-happy.png";
import chefConfused from "@/assets/chef-confused.png";

type ChefMood = "neutral" | "happy" | "confused";

interface ChefCharacterProps {
  mood: ChefMood;
}

export const ChefCharacter = ({ mood }: ChefCharacterProps) => {
  const src = mood === "confused" ? chefConfused : chefHappy;

  return (
    <div className="flex flex-col items-center">
      <AnimatePresence mode="wait">
        <motion.img
          key={mood}
          src={src}
          alt={`Chef ${mood}`}
          className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-xl"
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={
            mood === "happy"
              ? {
                  opacity: 1,
                  scale: 1,
                  y: [0, -10, 0],
                  transition: { y: { repeat: 1, duration: 0.3 }, opacity: { duration: 0.2 }, scale: { duration: 0.2 } },
                }
              : mood === "confused"
              ? { opacity: 1, scale: 1, rotate: [-3, 3, 0], y: 0 }
              : { opacity: 1, scale: 1, y: 0 }
          }
          exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
        />
      </AnimatePresence>
      <span
        className="font-display text-lg font-bold mt-1"
        style={{ color: "hsl(var(--secondary))" }}
      >
        Chef Alex
      </span>
    </div>
  );
};
