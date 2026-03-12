# Implementation Plan - Alex's Pizzeria: Present Simple Adventure

We will build an interactive educational game where players act as a head chef at "Alex's Pizzeria". The core mechanic involves correctly conjugating verbs for "VIP Customers" (He, She, It) using the Present Simple rules (+s, +es, +ies).

## User Review Required

> [!IMPORTANT]
> **Tech Stack Choice**: I am proposing **Vite + React** for the frontend to manage the game state and components efficiently, with **Vanilla CSS** for premium styling and animations.

> [!NOTE]
> **Game Option**: We are proceeding with **Option 1: The VIP Pizzaiolo**.

## Proposed Changes

### Core Design System
- **Colors**: Deep Pizzeria Red (#C0392B), Warm Flour White (#FDFEFE), Basil Green (#27AE60), Golden Crust (#F39C12).
- **Typography**: Playful Google Fonts (e.g., 'Amatic SC', 'Montserrat').
- **Layout**: Centered game canvas with a "Kitchen" background.
- **Visual Metaphors (from PDF)**:
    - **+s**: "The Tomato" (עגבנייה)
    - **+es**: "The Spice Jar" (מדף התבלינים)
    - **+ies**: "The Flour/Dough" (עמדת הבצק) - referencing the "Y-Dough" that resets.

### Sample Vocabulary & Sentences
- **Basic (+s)**: eat -> eats, run -> runs, play -> plays, throw -> throws, give -> gives.
- **Special Ending (+es)**: watch -> watches, go -> goes, fix -> fixes, wash -> washes.
- **Y-Rule (+ies)**: study -> studies, fly -> flies, cry -> cries.
- **Example Sentence Structure**: "He (eat) a pepperoni pizza every Monday."

### Game Logic
- **Level System**:
    - **Level 1 (The Warm-up)**: Mix of +s and +es rules. Introduction of the "Freshness Timer" (answer before the pizza cools down).
    - **Level 2 (The Professional)**: Focus on the +ies rule (consonant+y) and irregular verbs like "has", mixed with previously learned rules.
    - **Level 3 (The Master)**: Fast-paced "Rush Hour". 15-second rounds with multiple VIP customers appearing simultaneously.
    - **Level 4 (Legendary Pizzaiolo)**: Advanced sentences including frequency adverbs (Always, Usually) and negative forms (Doesn't), requiring complex choices.
- **State Management**: Track current level, score, streaks, and "Pizza Quality" (health).

### Progression Rules
- **Moving to Next Level**: Players must complete all 5 orders in a level.
- **Victory Condition**: Current level changes from 1 → 2 → 3 → 4. Completing Level 4 achieves "Legendary Pizzaiolo" status.
- **Challenge Increase**: 
  - Level 4 introduces a **10-second timer**. 
  - If the timer runs out or an incorrect topping is chosen, a life ("Pizza Heart") is lost.
  - Losing all 5 lives ends the game.

## Verification Plan

### Automated Tests
- Unit tests for the conjugation logic helper.
- Snapshot tests for UI components.

### Manual Verification
- Playthrough of each level to ensure rules are correctly applied.
- Responsive design check on mobile and tablet views.
