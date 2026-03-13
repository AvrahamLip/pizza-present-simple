# Pizza Present Simple - Core Project Rules

To ensure the game functions correctly across all devices and remains pedagogically sound, follow these rules for all future updates.

## 1. Pedagogical Logic (Grammar)
- **Affirmative Only**: Only use third-person singular affirmative sentences (He/She/It).
- **No Negatives**: Never use negative sentences (`doesn't...`). The game's "s, es, ies" topping mechanic is not compatible with English negative structures where the verb stays in its base form.
- **Rules Distribution**:
    - Batch 1: Basic `+s` and `+es` rules.
    - Batch 2: `+ies` (Consonant + Y) rules.
    - Batch 3: Mixed rules including Adverbs of Frequency.

## 2. iOS & Mobile Compatibility (Critical)
- **Legacy HSL Syntax**: Use the comma-separated format for all HSL color variables: `hsl(H, S, L)`. iOS Safari (versions 12 and below) does not support the modern space-separated format.
- **Dynamic Viewport Height**: Use `100dvh` or `min-h-[100dvh]` for layout containers to prevent being cut off by Safari's dynamic navigation bars.
- **Background Image Quoting**: Always wrap `url()` paths in double quotes: `backgroundImage: url("...")`.
- **Responsive Interactions**: Include `touch-action: manipulation` on interactive elements to eliminate the 300ms double-tap delay on mobile browsers.

## 3. UI/UX & Layout Standards
- **Verb Centering**: The base verb in the `OrderTicket` must be perfectly centered above the dashed line. Use fixed container widths with `text-center` instead of relative horizontal offsets.
- **Header Margin**: Maintain a minimum `mb-8` margin below the "Order Ticket" header to prevent the floating verb from overlapping the header text.
- **Text Scaling**: Reduce font sizes for the sentence and feedback messages on screens smaller than 768px (`md:` breakpoint).

## 4. Game Progression Logic
- **9 Level Cycle**: The game must always cycle through 3 brackets of 3 levels each:
    - **Levels 1-3**: Practice Mode (No timer/999s).
    - **Levels 4-6**: Rush Hour (30s timer).
    - **Levels 7-9**: Dinner Rush (15s timer).
- **Sentence batches**: Levels 1, 4, 7 use Batch 1; Levels 2, 5, 8 use Batch 2; Levels 3, 6, 9 use Batch 3.
