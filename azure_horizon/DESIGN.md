# Design System Specification: Editorial Precision in Fintech

## 1. Overview & Creative North Star
**The Creative North Star: "The Kinetic Vault"**

Traditional fintech often feels sterile or overly rigid. This design system rejects the "template" look in favor of **Kinetic Vault**—an aesthetic that combines the perceived security of a high-end financial institution with the fluid speed of modern data. 

We break the grid through **intentional asymmetry**. Hero elements should bleed off-canvas, and high-contrast typography scales create an editorial rhythm. Instead of boxing content, we let it breathe. We use "The Kinetic Vault" to signal that while your money is safe, it is never stagnant; it is moving, growing, and accessible.

---

## 2. Color & Atmospheric Depth
Our palette transitions from the deep, authoritative foundations of the night sky to the electric hum of digital commerce.

### The "No-Line" Rule
**Prohibit 1px solid borders for sectioning.** Structural boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section sitting on a `surface` background provides all the separation a user needs without the "clutter" of lines.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—stacked sheets of frosted glass.
*   **Base:** `surface` (#f9f9ff)
*   **Secondary Content:** `surface-container-low` (#f0f3ff)
*   **Interactive Cards:** `surface-container-lowest` (#ffffff)
*   **Elevated Modals:** `surface-container-highest` (#d7e3fc)

### The "Glass & Gradient" Rule
To achieve a signature feel, main CTAs and Hero backgrounds must utilize **Signature Textures**. 
*   **Primary Action Gradient:** Linear 135° from `primary` (#005946) to `primary-fixed` (#55fcd0).
*   **Data Visualization Gradient:** Linear 180° from `secondary` (#003ec6) to `secondary-container` (#0052fe).
*   **Glassmorphism:** For floating navigation or overlays, use `surface-container-lowest` at 70% opacity with a `20px` backdrop-blur.

---

## 3. Typography: Editorial Authority
We use **Inter** not as a standard sans-serif, but as a tool for hierarchy and impact.

| Token | Size | Weight | Use Case |
| :--- | :--- | :--- | :--- |
| **Display-LG** | 3.5rem | 800 (Extra Bold) | Large balances or "Total Wealth" metrics. |
| **Headline-LG** | 2.0rem | 700 (Bold) | Main page titles and section introductions. |
| **Title-MD** | 1.125rem | 600 (Semi-Bold) | Card titles and transactional headers. |
| **Body-LG** | 1rem | 400 (Regular) | Primary descriptive text. |
| **Label-MD** | 0.75rem | 500 (Medium) | Navigation labels and metadata. |

**The Typography Rule:** Always pair a `Display` or `Headline` element with a `Body-MD` element to create a dramatic "High-Low" contrast that feels like a premium financial journal.

---

## 4. Elevation & Depth: Tonal Layering
We convey hierarchy through **Tonal Layering** rather than traditional structural lines.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a soft, natural "lift" that mimics paper on a desk.
*   **Ambient Shadows:** If a floating effect is required (e.g., a "Send Money" FAB), use a shadow with a blur of `24px` at 6% opacity. The shadow color must be a tinted version of `on-surface` (#101c2e), never pure black.
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use `outline-variant` at **15% opacity**. 100% opaque borders are strictly forbidden as they interrupt the visual flow.

---

## 5. Components

### Buttons
*   **Primary:** Uses the Primary Action Gradient. Shape: `rounded-full` (9999px). Shadow: None (use color contrast for depth).
*   **Secondary:** `surface-container-highest` background with `on-surface` text. Shape: `rounded-md` (0.75rem).
*   **Tertiary:** No background. Bold `secondary` (#003ec6) text.

### Input Fields
*   **The Signature Input:** Forbid box-style inputs. Use a `surface-container-low` background with a `rounded-sm` (0.25rem) corner. Upon focus, transition the background to `surface-container-lowest` and add a subtle `primary` (#005946) "Ghost Border."

### Cards & Lists
*   **The "No-Divider" Rule:** Forbid the use of divider lines. Separate list items using `spacing-4` (1rem) of vertical white space or by alternating background tints between `surface` and `surface-container-low`.
*   **Fintech Special: The Transaction Row:** `leading-icon` (circular, `secondary-fixed`), `title-md` for the merchant name, `label-sm` for the date, and a bold `title-lg` for the amount.

### Fintech-Specific: The "Quick-Action" Chip
*   Floating chips using `surface-container-lowest` with a `1px` Ghost Border. Used for "Add Funds," "Freeze Card," or "Split Bill."

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical layouts where the left margin is wider than the right to create an editorial feel.
*   **Do** use `primary-fixed-dim` (#28dfb5) for positive financial trends (gains).
*   **Do** ensure all interactive elements have a minimum touch target of 48px, even if the visual element is smaller.

### Don't
*   **Don't** use 100% black (#000000) for text. Use `on-surface` (#101c2e) to maintain a premium, deep-blue tonal consistency.
*   **Don't** use sharp corners. Financial trust is built on approachable, modern softness—stick to the `0.75rem` (md) and `1rem` (lg) roundedness scale.
*   **Don't** use standard "Drop Shadows." If it looks like a default plugin setting, it is wrong. Soften and tint every shadow.