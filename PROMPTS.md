# Prompts IA — Chronos Time Travel Agency

## 🎯 Objectif

Documenter les prompts utilisés dans le cadre du projet afin d'assurer transparence et bonnes pratiques open source.

---

## 🧠 Prompt — Génération de la Landing Page (Vibe Coding)

```
Build a responsive Single Page Landing Page for "TimeTravel Agency", a luxury time-travel service.

Stack: React, Vite, Tailwind CSS, Lucide-React (icons), Framer Motion.

Structure:
Navbar: Sticky, blurred background. Logo left, Links (Destinations, About, Contact) right.
Hero Section: Full screen height (100vh).
Headline: "Chronos awaits. Where will you go?"
Subtext: "The ultimate luxury travel experience across history."
Primary Button: "Start Journey" (Gold color).
Destinations Grid: A section titled "Curated Eras" with a grid of 3 cards (placeholders for now).
Footer: Simple dark footer with copyright.

Design System:
Background: Very dark grey/almost black (#0a0a0a).
Text: White and Gold (#D4AF37) for accents.
Fonts: Serif for headings (elegant), Sans-serif for body.
```

**Outil** : Lovable 

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
