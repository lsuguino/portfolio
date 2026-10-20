# Phase 1: Esqueleto no Ar (casca + navegação + hero) - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-10-20
**Phase:** 1-esqueleto-no-ar-casca-navega-o-hero
**Areas discussed:** Stack & build, Conteúdo do hero, Direção visual

---

## Stack & build

| Option | Description | Selected |
|--------|-------------|----------|
| Vite + React + TS | Recomendação da pesquisa: reuso de componentes, Tailwind, Framer Motion | ✓ |
| HTML/CSS/JS puro | Mais simples, sem build; menos reuso | |
| Astro | Ótimo para estático; modelo mental maior para SPA | |

**User's choice:** Vite + React + TS (+ Tailwind + Framer Motion)
**Notes:** Alinhado com `.planning/research/STACK.md`.

---

## Direção visual

| Option | Description | Selected |
|--------|-------------|----------|
| Mono-neutro + 1 acento | Fundo grafite, texto claro, 1 cor de acento; mais próximo do mattjinn.com | ✓ |
| Escuro quente | Tons escuros com toque âmbar/laranja | |
| Escuro + vidro (glass) | Base escura com painéis translúcidos/blur | |

**User's choice:** Mono-neutro + 1 acento
**Notes:** Acento específico delegado ao Claude (ver abaixo).

### Sub-decisão — Cor de acento

| Option | Description | Selected |
|--------|-------------|----------|
| Ciano/azul-elétrico | Frio e técnico, alto contraste | |
| Verde-néon | Vibe terminal/hacker | |
| Roxo/violeta | Moderno e criativo | |
| Deixa com você | Claude escolhe com bom contraste WCAG AA | ✓ |

**User's choice:** Deixa com você → Claude escolheu ciano/azul-elétrico.

---

## Conteúdo do hero

**Formato:** texto livre + confirmação.

- Nome: **Leonardo Suguino** (fornecido pelo usuário)
- Rótulo de cargo: **Desenvolvedor Front-End** (proposto por Claude, aceito implicitamente)
- E-mail: **leonardosuguino@gmail.com** (fornecido pelo usuário)

### Sub-decisão — Frase-pitch

| Option | Description | Selected |
|--------|-------------|----------|
| Foco em interfaces limpas | "Desenvolvedor front-end focado em interfaces limpas, responsivas e bem-acabadas." | |
| Experiências com detalhe | "Transformo interfaces em experiências rápidas, acessíveis e com atenção ao detalhe." | ✓ |
| Eu escrevo a minha | Usuário digita a própria frase | |

**User's choice:** Experiências com detalhe

---

## Claude's Discretion

- Cor de acento exata (ciano/azul-elétrico, WCAG AA)
- Imagem OG (1200×630) — placeholder nesta fase
- Estrutura de componentes, tipografia e config do Tailwind

## Deferred Ideas

- Alvo de deploy (GitHub Pages / Netlify / Vercel) — não discutido; recomendação Vercel ou GitHub Pages; blocker ativo até fechar antes do deploy.
- CV em PDF, navegação por teclado auditada, screenshots nos cards — já em v2/REQUIREMENTS.
