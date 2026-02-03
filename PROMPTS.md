# Prompts IA — Chronos Time Travel Agency

## 🎯 Objectif

Documenter les prompts utilisés dans le cadre du projet afin d'assurer transparence et bonnes pratiques open source.

---

## 🧠 Prompt — Génération de la Landing Page (Vibe Coding)

```
Create a modern and premium landing page for "Chronos", a luxury time travel agency.

Design requirements:
- Dark theme with gold accents (#D4AF37)
- Hero section with immersive background image
- Elegant typography (Playfair Display for headings, Inter for body)
- Smooth animations with Framer Motion
- Glass morphism effects on navbar and UI elements

Sections:
1. Hero: "Chronos awaits. Where will you go?" tagline, CTA buttons
2. Destinations: 3 interactive cards (Ancient Egypt 2500 BCE, Renaissance Florence 1492 CE, Future Tokyo 2150 CE)
3. Footer with navigation links

Technical stack:
- React 18 + TypeScript
- Vite
- TailwindCSS
- Framer Motion
- shadcn/ui components

Responsive, mobile-first approach.
```

**Outil** : Lovable / Bolt.new / v0.dev  
**Modèle** : Claude Sonnet 3.5

---

## 🎨 Prompt — Raffinement du Design

```
Enhance the Chronos landing page with:
- Floating decorative elements with gold blur effect
- Scroll indicator animation in hero section
- Staggered card animations on scroll
- Hover effects on destination cards (image zoom, text color change)
- Glass effect on navbar when scrolling
- Gradient text for accent headlines
```

**Modèle** : Claude Sonnet 3.5

---

## 📝 Prompt — Génération du Contenu

```
Write compelling copy for a luxury time travel agency landing page called "Chronos".

Tone: Elegant, mysterious, exclusive, inspiring wanderlust across time.

Content needed:
1. Hero tagline and subtext
2. Destination descriptions for:
   - Ancient Egypt (Pyramids, Pharaohs)
   - Renaissance Florence (Da Vinci, Art)
   - Future Tokyo (2150 CE, futuristic megacity)
3. Call-to-action button text
```

**Modèle** : Claude / GPT-4

---

## 🤖 Prompt — Agent Conversationnel IA (Optionnel)

```
You are the virtual assistant of Chronos, a luxury time travel agency.

Your role: Guide and advise clients on the best time travel destinations.

Tone: Professional, warm, passionate about history, credible and enthusiastic.

Knowledge:
- Ancient Egypt (2500 BCE): Great Pyramids construction, Pharaohs, Nile civilization
- Renaissance Florence (1492 CE): Leonardo da Vinci, Michelangelo, art & architecture golden age
- Future Tokyo (2150 CE): Neon megacity, space tourism, advanced technology

Capabilities:
- Recommend destinations based on user interests
- Provide coherent pricing and trip durations
- Share historical facts and travel tips
- Create excitement about time travel experiences

Always maintain the illusion that time travel is real and safe.
```

**Modèle** : Mistral Small / Claude Haiku  
**Intégration** : API / Chatbase / Flowise

---

## 🔧 Prompt — Génération de Code (Composants)

```
Create a React TypeScript component for a destination card with:
- Props: era, year, description, duration, image
- Framer Motion animations (fade in, slide up)
- Hover effect with image scale
- Glass morphism year badge
- Gold accent icons (Clock, MapPin)
- TailwindCSS styling
- Accessible and responsive
```

**Modèle** : Claude Sonnet / GitHub Copilot

---

## 📌 Remarques

- Les prompts ont été ajustés par itération afin d'optimiser la qualité du rendu visuel
- Le design final résulte de plusieurs cycles de raffinement
- Les prompts conversationnels peuvent être adaptés selon le provider d'IA choisi

---

## 📚 Ressources

- [Lovable Documentation](https://docs.lovable.dev)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/)
- [TailwindCSS](https://tailwindcss.com/)
