export type SuffixRule = "+s" | "+es" | "+ies";
export type Subject = "He" | "She" | "It";

export interface Question {
  subject: Subject;
  verbBase: string;
  verbConjugated: string;
  correctRule: SuffixRule;
  hint: string;
  sentence: string;
  level: 1 | 2 | 3 | 4;
}

export const QUESTIONS: Question[] = [
  // Level 1: Basic +s and +es (Total 20)
  { subject: "He", verbBase: "eat", verbConjugated: "eats", correctRule: "+s", hint: "Most verbs just need +S!", sentence: "his pizza with a fork.", level: 1 },
  { subject: "She", verbBase: "watch", verbConjugated: "watches", correctRule: "+es", hint: "Verbs ending in -ch need ES!", sentence: "the oven carefully.", level: 1 },
  { subject: "It", verbBase: "smell", verbConjugated: "smells", correctRule: "+s", hint: "Most verbs just need +S!", sentence: "heavenly in this kitchen.", level: 1 },
  { subject: "He", verbBase: "fix", verbConjugated: "fixes", correctRule: "+es", hint: "Verbs ending in -x need ES!", sentence: "the broken pizza peel.", level: 1 },
  { subject: "She", verbBase: "wash", verbConjugated: "washes", correctRule: "+es", hint: "Verbs ending in -sh need ES!", sentence: "the fresh basil.", level: 1 },
  { subject: "He", verbBase: "toss", verbConjugated: "tosses", correctRule: "+es", hint: "Verbs ending in -ss need ES!", sentence: "the dough high up.", level: 1 },
  { subject: "She", verbBase: "go", verbConjugated: "goes", correctRule: "+es", hint: "Verbs ending in -o need ES!", sentence: "to the market for flour.", level: 1 },
  { subject: "He", verbBase: "pass", verbConjugated: "passes", correctRule: "+es", hint: "Verbs ending in -ss need ES!", sentence: "the salt to the chef.", level: 1 },
  { subject: "It", verbBase: "touch", verbConjugated: "touches", correctRule: "+es", hint: "Verbs ending in -ch need ES!", sentence: "the hot tray.", level: 1 },
  { subject: "She", verbBase: "brush", verbConjugated: "brushes", correctRule: "+es", hint: "Verbs ending in -sh need ES!", sentence: "oil on the crust.", level: 1 },
  { subject: "He", verbBase: "cook", verbConjugated: "cooks", correctRule: "+s", hint: "Regular consonant ending? Add +S.", sentence: "the pasta perfectly.", level: 1 },
  { subject: "She", verbBase: "bake", verbConjugated: "bakes", correctRule: "+s", hint: "Ends in 'e'? Just add +S.", sentence: "the focaccia bread.", level: 1 },
  { subject: "It", verbBase: "look", verbConjugated: "looks", correctRule: "+s", hint: "Regular +S.", sentence: "like a busy night.", level: 1 },
  { subject: "He", verbBase: "serve", verbConjugated: "serves", correctRule: "+s", hint: "Ends in 'e'? Just add +S.", sentence: "the VIP customers.", level: 1 },
  { subject: "She", verbBase: "slice", verbConjugated: "slices", correctRule: "+s", hint: "Ends in 'e'? Just add +S.", sentence: "the mozzarella cheese.", level: 1 },
  { subject: "He", verbBase: "order", verbConjugated: "orders", correctRule: "+s", hint: "Regular +S.", sentence: "a giant margherita.", level: 1 },
  { subject: "She", verbBase: "want", verbConjugated: "wants", correctRule: "+s", hint: "Regular +S.", sentence: "extra olives on top.", level: 1 },
  { subject: "It", verbBase: "cost", verbConjugated: "costs", correctRule: "+s", hint: "Regular +S.", sentence: "fifteen dollars.", level: 1 },
  { subject: "He", verbBase: "buzz", verbConjugated: "buzzes", correctRule: "+es", hint: "Verbs ending in -z need ES!", sentence: "the doorbell.", level: 1 },
  { subject: "She", verbBase: "relax", verbConjugated: "relaxes", correctRule: "+es", hint: "Verbs ending in -x need ES!", sentence: "after a long shift.", level: 1 },

  // Level 2: +ies and mixed (Total 20)
  { subject: "He", verbBase: "study", verbConjugated: "studies", correctRule: "+ies", hint: "Consonant + Y? Knead it into IES!", sentence: "new pizza recipes.", level: 2 },
  { subject: "She", verbBase: "copy", verbConjugated: "copies", correctRule: "+ies", hint: "Consonant + Y? Knead it into IES!", sentence: "the secret sauce notes.", level: 2 },
  { subject: "He", verbBase: "carry", verbConjugated: "carries", correctRule: "+ies", hint: "Consonant + Y? Knead it into IES!", sentence: "the heavy flour bags.", level: 2 },
  { subject: "She", verbBase: "fry", verbConjugated: "fries", correctRule: "+ies", hint: "Consonant + Y? Knead it into IES!", sentence: "some potato wedges.", level: 2 },
  { subject: "He", verbBase: "marry", verbConjugated: "marries", correctRule: "+ies", hint: "Consonant + Y? Knead it into IES!", sentence: "classic and modern styles.", level: 2 },
  { subject: "It", verbBase: "fly", verbConjugated: "flies", correctRule: "+ies", hint: "Consonant + Y? Knead it into IES!", sentence: "around the kitchen.", level: 2 },
  { subject: "She", verbBase: "empty", verbConjugated: "empties", correctRule: "+ies", hint: "Consonant + Y? Knead it into IES!", sentence: "the dishwasher.", level: 2 },
  { subject: "He", verbBase: "worry", verbConjugated: "worries", correctRule: "+ies", hint: "Consonant + Y? Knead it into IES!", sentence: "about the burnt crust.", level: 2 },
  { subject: "She", verbBase: "play", verbConjugated: "plays", correctRule: "+s", hint: "Vowel + Y? Just add +S!", sentence: "Italian background music.", level: 2 },
  { subject: "He", verbBase: "buy", verbConjugated: "buys", correctRule: "+s", hint: "Vowel + Y? Just add +S!", sentence: "fresh yeast every day.", level: 2 },
  { subject: "She", verbBase: "say", verbConjugated: "says", correctRule: "+s", hint: "Vowel + Y? Just add +S!", sentence: "'Hello' to the guests.", level: 2 },
  { subject: "He", verbBase: "pay", verbConjugated: "pays", correctRule: "+s", hint: "Vowel + Y? Just add +S!", sentence: "the delivery driver.", level: 2 },
  { subject: "She", verbBase: "enjoy", verbConjugated: "enjoys", correctRule: "+s", hint: "Vowel + Y? Just add +S!", sentence: "tasting new toppings.", level: 2 },
  { subject: "He", verbBase: "has", verbConjugated: "has", correctRule: "+s", hint: "Speical: 'Have' becomes 'Has'!", sentence: "a golden pizza peel.", level: 2 },
  { subject: "She", verbBase: "has", verbConjugated: "has", correctRule: "+s", hint: "Speical: 'Have' becomes 'Has'!", sentence: "twenty years of experience.", level: 2 },
  { subject: "He", verbBase: "mix", verbConjugated: "mixes", correctRule: "+es", hint: "Mixed review! -x ends with ES.", sentence: "the herbs into the sauce.", level: 2 },
  { subject: "She", verbBase: "search", verbConjugated: "searches", correctRule: "+es", hint: "Mixed review! -ch ends with ES.", sentence: "for the sharp knife.", level: 2 },
  { subject: "It", verbBase: "dry", verbConjugated: "dries", correctRule: "+ies", hint: "Consonant + Y becomes IES.", sentence: "the plates quickly.", level: 2 },
  { subject: "He", verbBase: "hurry", verbConjugated: "hurries", correctRule: "+ies", hint: "Consonant + Y becomes IES.", sentence: "to deliver the order.", level: 2 },
  { subject: "She", verbBase: "try", verbConjugated: "tries", correctRule: "+ies", hint: "Consonant + Y becomes IES.", sentence: "every spicy pepper.", level: 2 },

  // Level 3: Adverbs and Fast Pace (Total 20)
  { subject: "He", verbBase: "always cooks", verbConjugated: "always cooks", correctRule: "+s", hint: "Adverb first, then verb with +S.", sentence: "with passion.", level: 3 },
  { subject: "She", verbBase: "often watches", verbConjugated: "often watches", correctRule: "+es", hint: "Adverb first, then verb with +ES.", sentence: "the hungry queue.", level: 3 },
  { subject: "It", verbBase: "usually smells", verbConjugated: "usually smells", correctRule: "+s", hint: "Regular +S after adverb.", sentence: "like oregano.", level: 3 },
  { subject: "He", verbBase: "sometimes teaches", verbConjugated: "sometimes teaches", correctRule: "+es", hint: "Adverb + ES rule.", sentence: "the young interns.", level: 3 },
  { subject: "She", verbBase: "never worries", verbConjugated: "never worries", correctRule: "+ies", hint: "Adverb + IES rule.", sentence: "about busy nights.", level: 3 },
  { subject: "He", verbBase: "always carries", verbConjugated: "always carries", correctRule: "+ies", hint: "Adverb + IES rule.", sentence: "a clean towel.", level: 3 },
  { subject: "She", verbBase: "seldom pays", verbConjugated: "seldom pays", correctRule: "+s", hint: "Adverb + S (Vowel+Y).", sentence: "attention to the TV.", level: 3 },
  { subject: "It", verbBase: "often buzzing", verbConjugated: "often buzzes", correctRule: "+es", hint: "Adverb + ES.", sentence: "when someone enters.", level: 3 },
  { subject: "He", verbBase: "usually buys", verbConjugated: "usually buys", correctRule: "+s", hint: "Adverb + S.", sentence: "Italian tomatoes.", level: 3 },
  { subject: "She", verbBase: "sometimes fixes", verbConjugated: "sometimes fixes", correctRule: "+es", hint: "Adverb + ES.", sentence: "the register.", level: 3 },
  { subject: "He", verbBase: "always says", verbConjugated: "always says", correctRule: "+s", hint: "Adverb + S.", sentence: "'Enjoy your meal!'.", level: 3 },
  { subject: "She", verbBase: "never fries", verbConjugated: "never fries", correctRule: "+ies", hint: "Adverb + IES.", sentence: "the dough.", level: 3 },
  { subject: "It", verbBase: "frequently goes", verbConjugated: "frequently goes", correctRule: "+es", hint: "Adverb + ES.", sentence: "out of stock.", level: 3 },
  { subject: "He", verbBase: "rarely cries", verbConjugated: "rarely cries", correctRule: "+ies", hint: "Adverb + IES.", sentence: "from the onions.", level: 3 },
  { subject: "She", verbBase: "always has", verbConjugated: "always has", correctRule: "+s", hint: "Adverb + Has.", sentence: "a fresh apron.", level: 3 },
  { subject: "He", verbBase: "usually prepares", verbConjugated: "usually prepares", correctRule: "+s", hint: "Adverb + S.", sentence: "the dough early.", level: 3 },
  { subject: "She", verbBase: "often finishes", verbConjugated: "often finishes", correctRule: "+es", hint: "Adverb + ES.", sentence: "her tasks fast.", level: 3 },
  { subject: "He", verbBase: "rarely touches", verbConjugated: "rarely touches", correctRule: "+es", hint: "Adverb + ES.", sentence: "the spicy oil.", level: 3 },
  { subject: "She", verbBase: "generally enjoys", verbConjugated: "generally enjoys", correctRule: "+s", hint: "Adverb + S.", sentence: "making pasta.", level: 3 },
  { subject: "It", verbBase: "always passes", verbConjugated: "always passes", correctRule: "+es", hint: "Adverb + ES.", sentence: "the taste test.", level: 3 },

  // Level 4: Negatives and Advanced (Total 20)
  { subject: "He", verbBase: "doesn't eat", verbConjugated: "doesn't eat", correctRule: "+s", hint: "Negative: 'Doesn't' takes the S!", sentence: "pineapple on pizza.", level: 4 },
  { subject: "She", verbBase: "doesn't watch", verbConjugated: "doesn't watch", correctRule: "+es", hint: "Negative: 'Does' already has ES!", sentence: "the clock while working.", level: 4 },
  { subject: "It", verbBase: "doesn't smell", verbConjugated: "doesn't smell", correctRule: "+s", hint: "Negative: Verb stays in base form.", sentence: "burnt today.", level: 4 },
  { subject: "He", verbBase: "doesn't cry", verbConjugated: "doesn't cry", correctRule: "+ies", hint: "Negative: 'Doesn't' handles the conjugation.", sentence: "for no reason.", level: 4 },
  { subject: "She", verbBase: "doesn't fix", verbConjugated: "doesn't fix", correctRule: "+es", hint: "Negative: Base verb stays base.", sentence: "the oven himself.", level: 4 },
  { subject: "He", verbBase: "doesn't go", verbConjugated: "doesn't go", correctRule: "+es", hint: "Negative: Use base form 'go'.", sentence: "home until late.", level: 4 },
  { subject: "She", verbBase: "doesn't have", verbConjugated: "doesn't have", correctRule: "+s", hint: "Negative: Use base form 'have'!", sentence: "any time for games.", level: 4 },
  { subject: "It", verbBase: "doesn't cost", verbConjugated: "doesn't cost", correctRule: "+s", hint: "Negative: Base form 'cost'.", sentence: "much to upgrade.", level: 4 },
  { subject: "He", verbBase: "doesn't wash", verbConjugated: "doesn't wash", correctRule: "+es", hint: "Negative: Base form 'wash'.", sentence: "the floor yet.", level: 4 },
  { subject: "She", verbBase: "doesn't study", verbConjugated: "doesn't study", correctRule: "+ies", hint: "Negative: Base form 'study'.", sentence: "during work.", level: 4 },
  { subject: "He", verbBase: "doesn't cook", verbConjugated: "doesn't cook", correctRule: "+s", hint: "Negative: Base form 'cook'.", sentence: "frozen pizzas.", level: 4 },
  { subject: "She", verbBase: "doesn't buy", verbConjugated: "doesn't buy", correctRule: "+s", hint: "Negative: Base form 'buy'.", sentence: "cheap cheese.", level: 4 },
  { subject: "He", verbBase: "doesn't play", verbConjugated: "doesn't play", correctRule: "+s", hint: "Negative: Base form 'play'.", sentence: "with the knives.", level: 4 },
  { subject: "She", verbBase: "doesn't slice", verbConjugated: "doesn't slice", correctRule: "+s", hint: "Negative: Base form 'slice'.", sentence: "the pizza unevenly.", level: 4 },
  { subject: "It", verbBase: "doesn't seem", verbConjugated: "doesn't seem", correctRule: "+s", hint: "Negative: Base form 'seem'.", sentence: "too difficult.", level: 4 },
  { subject: "He", verbBase: "doesn't try", verbConjugated: "doesn't try", correctRule: "+ies", hint: "Negative: Base form 'try'.", sentence: "to cut corners.", level: 4 },
  { subject: "She", verbBase: "doesn't empty", verbConjugated: "doesn't empty", correctRule: "+ies", hint: "Negative: Base form 'empty'.", sentence: "the bin yet.", level: 4 },
  { subject: "He", verbBase: "doesn't mix", verbConjugated: "doesn't mix", correctRule: "+es", hint: "Negative: Base form 'mix'.", sentence: "the spices wrong.", level: 4 },
  { subject: "She", verbBase: "doesn't pass", verbConjugated: "doesn't pass", correctRule: "+es", hint: "Negative: Base form 'pass'.", sentence: "her limit.", level: 4 },
  { subject: "It", verbBase: "doesn't buzz", verbConjugated: "doesn't buzz", correctRule: "+es", hint: "Negative: Base form 'buzz'.", sentence: "anymore.", level: 4 }
];

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
