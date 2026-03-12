# UI Design Specifications: Alex's Pizzeria - Present Simple Adventure

This document provides the visual and interactive specifications for building the "VIP Pizzaiolo" game. Use these details to guide the UI implementation.

## 1. Visual Style & Theme
- **Theme**: Warm, inviting Italian pizzeria.
- **Color Palette**:
  - **Primary**: #C0392B (Pizzeria Red)
  - **Secondary**: #F39C12 (Golden Crust)
  - **Background**: #FDFEFE (Warm Flour White) or an image of an Italian kitchen.
  - **Accent**: #27AE60 (Basil Green).
- **Typography**: 
  - Headings: 'Amatic SC' or similar playful, hand-written font.
  - Body: 'Montserrat' or 'Inter' for readability.

## 2. Key Components

### A. The Kitchen Canvas
- **Background**: A blurry or stylized image of a pizza oven and prep table.
- **The Chef**: An animated character on the left (neutral, happy, or thinking states).
- **The Customer**: On the right, appearing in a "VIP Box" (He, She, It).

### B. The Sentence Display
- **Location**: Top center, inside a stylized "Order Ticket" or chalkboard.
- **Layout**: `[Subject] [Verb Placeholder] [The rest of the sentence]`.
- **Placeholder**: A dashed box where the suffix will be dropped or appear.

### C. The Topping Station (Main Interaction)
Interactive containers representing the grammar rules:
1. **The Tomato (+s)**: A vibrant red tomato icon.
2. **The Spice Jar (+es)**: A glass jar labeled "ES Spices".
3. **The Y-Dough (+ies)**: A mound of dough where the 'y' gets "re-kneaded" into 'ies'.

## 3. Interaction & Animations

### Correct Answer
- **Animation**: The selected topping flies to the verb placeholder. 
- **Chef Reaction**: The chef tosses the pizza in the air or gives a thumbs up.
- **Visual**: A green glow or "Correct!" popup.
- **Transition**: The customer gets served, a "Happy" animation plays, and they slide out to make room for the next one.

### Incorrect Answer
- **Animation**: The topping "burns" or bounces back.
- **Chef Reaction**: The chef looks confused or points to a "Rule Poster".
- **Visual**: A subtle red shake and a feedback message (e.g., "Wait! This verb ends in 'ch', use the ES Spice Jar!").

### Progress Indicators
- **Freshness Timer**: A progress bar that depletes as time passes.
- **Pizza Quality (Health)**: Five hearts or "Quality Stars" that decrease on errors.
- **Score**: A floating pizza counter on the top right.

## 4. Layout States
- **Start Screen**: Big "Play" button, title, and a "High Score" display.
- **Game Screen**: The main kitchen view.
- **Level Up**: A full-screen overlay with "Level Complete!" and "New Rule Unlocked: +ies".
- **Game Over**: Summary of results and a "Re-open Pizzeria" button.
