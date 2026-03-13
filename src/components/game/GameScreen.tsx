import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import kitchenBg from "@/assets/kitchen-bg.jpg";
import { OrderTicket } from "./OrderTicket";
import { ToppingStation } from "./ToppingStation";
import { GameHUD } from "./GameHUD";
import { ChefCharacter } from "./ChefCharacter";
import { CustomerVIP } from "./CustomerVIP";
import { LevelUpOverlay } from "./LevelUpOverlay";
import { QUESTIONS, SuffixRule, MAX_LIVES, TIMER_SECONDS, QUESTIONS_PER_GAME } from "@/lib/gameData";

type ChefMood = "neutral" | "happy" | "confused";

interface GameScreenProps {
  onGameOver: (score: number, correct: number, total: number) => void;
}

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const GameScreen = ({ onGameOver }: GameScreenProps) => {
  const [currentLevel, setCurrentLevel] = useState<number>(1);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [lives, setLives] = useState(MAX_LIVES);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [levelCorrectCount, setLevelCorrectCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const [selectedRule, setSelectedRule] = useState<SuffixRule | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [chefMood, setChefMood] = useState<ChefMood>("neutral");
  const [customerSatisfied, setCustomerSatisfied] = useState<boolean | null>(null);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [floatingScore, setFloatingScore] = useState<{ id: number; x: number } | null>(null);
  const floatingIdRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const advanceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const getLevelInfo = (level: number) => {
    if (level <= 3) {
      switch (level) {
        case 1: return { name: "The Professional", rule: "Practice mode: +S and +ES rules!" };
        case 2: return { name: "The Master", rule: "Practice mode: +IES (Consonant + Y) rules!" };
        case 3: return { name: "Legendary Pizzaiolo", rule: "Practice mode: Mixed rules & Adverbs!" };
      }
    } else if (level <= 6) {
      return { name: "Lunch Rush", rule: "Be fast! 30 second timer enabled." };
    } else if (level <= 9) {
      return { name: "Dinner Rush", rule: "Ultimate Challenge! 15 second timer!" };
    }
    return { name: "Game Complete", rule: "You are the Pizza Master!" };
  };

  // Filter questions for the current level and shuffle them
  const [currentLevelQuestions, setCurrentLevelQuestions] = useState(() => 
    shuffleArray(QUESTIONS.filter(q => q.level === 1)).slice(0, 5)
  );

  const currentQuestion = currentLevelQuestions[questionIndex];

  const clearTimers = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (advanceRef.current) clearTimeout(advanceRef.current);
  };

  const startNextLevel = useCallback(() => {
    const next = currentLevel + 1;
    setCurrentLevel(next);
    
    // Load next level questions (map 1-3, 4-6, 7-9 to batches 1, 2, 3)
    const batchLevel = ((next - 1) % 3) + 1;
    const nextQuestions = shuffleArray(QUESTIONS.filter(q => q.level === batchLevel)).slice(0, 5);
    setCurrentLevelQuestions(nextQuestions);
    setQuestionIndex(0);
    setLevelCorrectCount(0);
    setSelectedRule(null);
    setIsCorrect(null);
    setChefMood("neutral");
    setCustomerSatisfied(null);
    setShowLevelUp(false);
    
    // Timer logic
    if (next <= 3) {
      setTimeLeft(999);
    } else if (next <= 6) {
      setTimeLeft(30);
    } else {
      setTimeLeft(15);
    }
  }, [currentLevel]);

  const nextLevel = useCallback(() => {
    if (currentLevel >= 9) {
      onGameOver(score, correctCount, 45); // 5 * 9
      return;
    }
    setShowLevelUp(true);
  }, [currentLevel, score, correctCount, onGameOver]);

  const advanceQuestion = useCallback(() => {
    if (questionIndex + 1 >= currentLevelQuestions.length) {
      nextLevel();
    } else {
      setQuestionIndex((i) => i + 1);
      setSelectedRule(null);
      setIsCorrect(null);
      setChefMood("neutral");
      setCustomerSatisfied(null);
      
      const baseTime = currentLevel <= 3 ? 999 : (currentLevel <= 6 ? 30 : 15);
      setTimeLeft(baseTime);
    }
  }, [questionIndex, currentLevelQuestions.length, nextLevel, currentLevel]);

  // Timer
  useEffect(() => {
    if (selectedRule !== null || currentLevel <= 3) return;
    
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          handleAnswer(null, true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [questionIndex, selectedRule, currentLevel]);

  const handleAnswer = useCallback(
    (rule: SuffixRule | null, isTimeout = false) => {
      clearTimers();
      const correct = !isTimeout && rule === currentQuestion.correctRule;
      setSelectedRule(rule ?? ("timeout" as SuffixRule));
      setIsCorrect(correct);
      setCustomerSatisfied(correct);

      if (correct) {
        const pts = Math.max(1, Math.ceil(timeLeft / 3)) * currentLevel;
        setScore((s) => s + pts);
        setCorrectCount((c) => c + 1);
        setLevelCorrectCount((lc) => lc + 1);
        setChefMood("happy");
        floatingIdRef.current += 1;
        setFloatingScore({ id: floatingIdRef.current, x: Math.random() * 40 - 20 });
        setTimeout(() => setFloatingScore(null), 900);
      } else {
        setLives((l) => {
          const newLives = l - 1;
          if (newLives <= 0) {
            advanceRef.current = setTimeout(() => {
              onGameOver(score, correctCount, 45);
            }, 1800);
            return 0;
          }
          return newLives;
        });
        setChefMood("confused");
      }

      advanceRef.current = setTimeout(() => {
        advanceQuestion();
      }, correct ? 1400 : 2200);
    },
    [currentQuestion, timeLeft, score, correctCount, onGameOver, advanceQuestion, currentLevel]
  );

  // cleanup on unmount
  useEffect(() => () => clearTimers(), []);

  if (!currentQuestion) return null;

  return (
    <div
      className="relative min-h-screen min-h-[100dvh] flex flex-col"
      style={{ backgroundImage: `url("${kitchenBg}")`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: "hsla(var(--background), 0.75)" }} />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* HUD */}
        <div className="px-4 pt-4 pb-2">
          <GameHUD
            score={score}
            lives={lives}
            timeLeft={timeLeft}
            questionIndex={questionIndex}
            totalQuestions={currentLevelQuestions.length}
            currentLevel={currentLevel}
          />
        </div>

        {/* Characters row */}
        <div className="flex items-end justify-between px-6 pt-2 pb-1 overflow-hidden">
          <div className="w-1/3 md:w-auto">
            <ChefCharacter mood={chefMood} />
          </div>
          <div className="w-1/2 md:w-auto">
            <CustomerVIP subject={currentQuestion.subject} satisfied={customerSatisfied} />
          </div>
        </div>

        {/* Order Ticket */}
        <div className="px-2 md:px-4 py-3">
          <OrderTicket
            question={currentQuestion}
            selectedAnswer={selectedRule}
            isCorrect={isCorrect}
          />
        </div>

        {/* Topping Station */}
        <div className="px-2 md:px-4 pb-4 md:pb-6 mt-auto">
          <ToppingStation
            onSelect={(rule) => handleAnswer(rule)}
            disabled={selectedRule !== null}
            selectedRule={selectedRule === ("timeout" as SuffixRule) ? null : selectedRule}
            correctRule={selectedRule !== null ? currentQuestion.correctRule : null}
          />
        </div>
      </div>

      {/* Floating score */}
      <AnimatePresence>
        {floatingScore && (
          <motion.div
            key={floatingScore.id}
            className="fixed top-1/2 left-1/2 pointer-events-none font-display text-4xl font-bold z-50"
            style={{
              color: "hsl(var(--secondary))",
              textShadow: "0 2px 8px hsl(var(--foreground) / 0.3)",
              transform: `translateX(calc(-50% + ${floatingScore.x}px))`,
            }}
            initial={{ opacity: 1, y: 0, scale: 1 }}
            animate={{ opacity: 0, y: -70, scale: 1.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            +🍕
          </motion.div>
        )}
      </AnimatePresence>

      {/* Level Up Overlay */}
      <AnimatePresence>
        {showLevelUp && (
          <LevelUpOverlay
            level={currentLevel}
            nextLevelName={getLevelInfo(currentLevel).name}
            unlockedRule={getLevelInfo(currentLevel).rule}
            onNext={startNextLevel}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
