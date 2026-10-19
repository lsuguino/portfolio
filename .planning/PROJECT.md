# Portfólio Dev

## What This Is

Um portfólio pessoal de desenvolvedor front-end: um site (página única) que apresenta quem o autor é e exibe seus projetos em destaque, com um caminho de contato claro. O público-alvo são recrutadores e empresas — é uma ferramenta para conseguir vagas e trabalho na área de dev.

## Core Value

Fazer um recrutador olhar os projetos e conseguir entrar em contato com o autor em poucos segundos. Se tudo o mais falhar, essas duas coisas — ver os projetos e falar com o autor — precisam funcionar.

## Requirements

### Validated

(Nenhum ainda — lançar para validar)

### Active

- [ ] Página única, responsiva, com visual moderno e escuro/neutro, minimalista, inspirado no mattjinn.com
- [ ] Menu de navegação no topo com atalhos/amostras dos projetos e para a aba "Sobre mim"
- [ ] Seção de apresentação (hero) comunicando rapidamente que o autor é dev front-end
- [ ] Vitrine de 3 a 5 projetos em cards, cada um com descrição e link para código e/ou demo
- [ ] Aba "Sobre mim" que também concentra o contato (quem o autor é + como falar com ele)
- [ ] Links de contato/redes sempre acessíveis (e-mail e redes sociais)
- [ ] Micro-interações sutis (hover nos cards, transições suaves) para dar um toque "techie" sem exagero

### Out of Scope

- Blog ou sistema de posts — não é necessário para o objetivo de conseguir vagas no v1
- Backend/banco de dados — portfólio é estático; contato via e-mail/links, sem formulário com servidor no v1
- Múltiplas páginas/rotas complexas — a referência e a intenção são de página única
- Internacionalização (multi-idioma) — conteúdo em português por enquanto

## Context

- O autor está iniciando na área de desenvolvimento e quer usar o portfólio para se conectar com mais pessoas e, principalmente, conseguir oportunidades.
- Perfil que o site deve comunicar: **desenvolvedor front-end**.
- Já existem de 3 a 5 projetos prontos (ou quase) para exibir.
- Referência visual e de UX: **https://mattjinn.com/** — navegação minimalista no topo, estética escura/neutra, conteúdo em cards, micro-interações sutis, contato fácil (e-mail + redes). O site referência é de um artista musical; a estética é reaproveitada, não o conteúdo.
- O menu deve destacar amostras dos projetos; a aba "Sobre mim" substitui o "About" tradicional e serve também de ponto de contato.

## Constraints

- **Tech stack**: Front-end — projeto de portfólio de um dev front-end; a escolha entre HTML/CSS/JS puro ou um framework (ex.: React) fica para a fase de planejamento, priorizando algo simples de hospedar como site estático.
- **Hosting**: Deve poder ser publicado como site estático (ex.: GitHub Pages, Netlify, Vercel) — barato/gratuito e simples de manter.
- **Design**: Estética definida pela referência mattjinn.com — moderno, escuro/neutro, minimalista.
- **Idioma**: Interface e conteúdo em português.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Página única (single-page) | Referência (mattjinn.com) e objetivo pedem algo direto e enxuto | — Pending |
| Aba "Sobre mim" acumula apresentação + contato | Pedido explícito do autor; concentra "quem sou" e "como falar comigo" num lugar só | — Pending |
| Estética escura/neutra e minimalista | Inspirada na referência escolhida pelo autor | — Pending |
| Foco em recrutadores/empresas | Objetivo principal é conseguir vagas/trabalho | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-10-19 after initialization*
