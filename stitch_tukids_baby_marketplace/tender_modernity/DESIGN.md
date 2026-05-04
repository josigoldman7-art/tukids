---
name: Tender Modernity
colors:
  surface: '#fff8f6'
  surface-dim: '#e8d6d3'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0ee'
  surface-container: '#fdeae7'
  surface-container-high: '#f7e4e1'
  surface-container-highest: '#f1dedb'
  on-surface: '#231918'
  on-surface-variant: '#56423f'
  inverse-surface: '#392e2c'
  inverse-on-surface: '#ffedea'
  outline: '#89726e'
  outline-variant: '#dcc0bc'
  surface-tint: '#9e4134'
  primary: '#9e4134'
  on-primary: '#ffffff'
  primary-container: '#ff8c7a'
  on-primary-container: '#762419'
  inverse-primary: '#ffb4a8'
  secondary: '#006b5e'
  on-secondary: '#ffffff'
  secondary-container: '#95f0df'
  on-secondary-container: '#006f62'
  tertiary: '#765b06'
  on-tertiary: '#ffffff'
  tertiary-container: '#cba852'
  on-tertiary-container: '#513d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410100'
  on-primary-fixed-variant: '#7e2a1f'
  secondary-fixed: '#98f3e1'
  secondary-fixed-dim: '#7cd7c6'
  on-secondary-fixed: '#00201b'
  on-secondary-fixed-variant: '#005046'
  tertiary-fixed: '#ffdf96'
  tertiary-fixed-dim: '#e7c269'
  on-tertiary-fixed: '#251a00'
  on-tertiary-fixed-variant: '#594400'
  background: '#fff8f6'
  on-background: '#231918'
  surface-variant: '#f1dedb'
typography:
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

The design system is centered on a "Tender Minimalist" aesthetic, specifically tailored for a premium baby marketplace. It balances modern efficiency with the warmth of early parenthood. The visual language is defined by spaciousness, soft edges, and a playful yet sophisticated color palette that avoids traditional nursery clichés in favor of a contemporary boutique feel.

The brand personality is anchored by **Tuki**, a cute baby toucan mascot. Tuki should be integrated into the UI as a helpful guide—appearing in empty states, onboarding flows, and success animations. His presence reinforces a sense of companionship and trust. The emotional response should be one of "joyful calm," making the shopping experience feel less like a chore and more like a moment of care for the family.

## Colors

The color strategy for this design system utilizes a high-chroma but soft-value palette to evoke a sense of playfulness. 

- **Primary Coral** is the core action color, used for primary buttons and critical brand moments.
- **Secondary Mint** and **Sky Blue** provide a cooling balance, ideal for category tags or secondary information.
- **Butter Yellow** and **Soft Lilac** act as rhythmic accents for highlights, badges, and the Tuki mascot’s features.
- **Off-white** is the mandatory background base to ensure the interface feels airy and clean, while **Charcoal** provides high-legibility text without the harshness of pure black.

## Typography

This design system uses a dual-font approach to balance personality with functional clarity. 

**Plus Jakarta Sans** is used for all headings. Its naturally rounded terminals and friendly geometric construction mirror the "tender" aspect of the brand. It should be used with tight letter-spacing in larger sizes to maintain a modern, "chunky" feel.

**Inter** is the workhorse for all body text, UI labels, and inputs. It provides the necessary "trustworthy" and "modern" grounding for the system, ensuring that product descriptions and checkout details remain highly readable across all devices.

## Layout & Spacing

This design system employs a **fixed grid model** for large screens, transitioning to a fluid layout for mobile. The layout is built on an 8px base unit to ensure rhythmic consistency.

The layout philosophy emphasizes "generous breathing room." Content should never feel cramped; wide margins (48px+) and large vertical gaps between sections are encouraged to maintain the minimalist aesthetic. Use a 12-column grid for desktop with 24px gutters to allow for flexible card arrangements (3, 4, or 6 items per row).

## Elevation & Depth

Hierarchy is established through **ambient shadows** and **tonal layering** rather than heavy borders. 

- **Level 1 (Base):** Off-white background (#FAFAFA).
- **Level 2 (Cards/Containers):** Pure White (#FFFFFF) with a very soft, diffused shadow. Shadows should have a large blur radius (20-30px) and a low opacity (5-8%), occasionally tinted with a hint of the Primary Coral or Sky Blue to add "warmth" to the depth.
- **Level 3 (Floating Elements):** Modals and tooltips use a slightly more defined shadow to pull them away from the background.

Avoid using harsh black shadows. The goal is to make elements look like they are softly resting on a cloud.

## Shapes

The shape language is extremely soft and approachable. A large border-radius is a signature element of this design system.

Standard containers, such as product cards and content blocks, must use a **24px radius**. Interactive elements like buttons and input fields should use a **pill-shape (fully rounded)** design to emphasize the "tender" and "family-oriented" nature of the product. This high level of roundedness eliminates sharp corners, subconsciously communicating safety—a key value for a baby-centric marketplace.

## Components

### Buttons
Primary buttons are pill-shaped, using the Primary Coral background with white text. Hover states should involve a slight scale-up (1.02x) and a deepening of the shadow rather than a color change, maintaining the soft feel.

### Cards
Product cards utilize the 24px border-radius and a white background. Images within cards should also follow the 20-24px rounding. Use subtle Sky Blue or Mint backgrounds for product category badges within the cards.

### Input Fields
Inputs are pill-shaped with a light-grey or Off-white background. The focus state uses a 2px stroke of Secondary Mint to provide a "calm" indication of activity.

### Iconography
Icons must be **linear duotone**. The primary stroke should be Charcoal, with a secondary "accent" shape or shadow in one of the brand colors (Mint or Lilac). Use a 2px stroke weight with rounded caps and corners.

### Mascot Integration (Tuki)
The Tuki mascot should be used as a "Component-level illustration." For example:
- **Empty Cart:** Tuki looking into an empty nest.
- **Loading:** Tuki flapping his wings.
- **Success/Purchase:** Tuki holding a small gift box.