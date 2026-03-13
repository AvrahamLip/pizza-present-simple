export type SuffixRule = "+s" | "+es" | "+ies";
export type Subject = "He" | "She" | "It";

export interface Question {
  subject: Subject;
  verbBase: string;
  verbConjugated: string;
  correctRule: SuffixRule;
  hint: string;
  sentence: string;
  level: number;
}

import questionsData from "./sentenceWarehouse.json";

export const QUESTIONS: Question[] = questionsData as any as Question[];


export const TOPPING_OPTIONS: { rule: SuffixRule; label: string; emoji: string; description: string; color: string }[] = [
  {
    rule: "+s",
    label: "+S",
    emoji: "🍅",
    description: "Tomato Sauce",
    color: "primary",
  },
  {
    rule: "+es",
    label: "+ES",
    emoji: "🫙",
    description: "ES Spice Jar",
    color: "secondary",
  },
  {
    rule: "+ies",
    label: "+IES",
    emoji: "🫓",
    description: "Y-Dough",
    color: "accent",
  },
];

export const MAX_LIVES = 5;
export const TIMER_SECONDS = 15;
export const QUESTIONS_PER_GAME = 5; // Questions per level
