# Portfólio Dev

## What This Is

Um portfólio pessoal de desenvolvedor front-end: um site (página única) que apresenta quem o autor é e exibe seus projetos em destaque, com um caminho de contato claro. O público-alvo são recrutadores e empresas — é uma ferramenta para conseguir vagas e trabalho na área de dev.

## Core Value

Fazer um recrutador olhar os projetos e conseguir entrar em contato com o autor em poucos segundos. Se tudo o mais falhar, essas duas coisas — ver os projetos e falar com o autor — precisam funcionar.

## Requirements

### Validated

- ✓ Página única, responsiva (375/768/1280px), visual escuro/neutro minimalista inspirado no mattjinn.com — Phase 1
- ✓ Menu de navegação fixo no topo com âncoras de scroll suave para as seções — Phase 1 (conteúdo das amostras de projetos entra na Phase 2)
- ✓ Seção de apresentação (hero) comunicando que o autor é dev front-end — Phase 1
- ✓ Meta tags / Open Graph para preview do link ao compartilhar — Phase 1
- ✓ Site publicado em URL pública (Vercel, deploy contínuo) — Phase 1

### Active

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
| Página única (single-page) | Referência (mattjinn.com) e objetivo pedem algo direto e enxuto | ✓ Good — Phase 1 |
| Aba "Sobre mim" acumula apresentação + contato | Pedido explícito do autor; concentra "quem sou" e "como falar comigo" num lugar só | — Pending (Phase 3) |
| Estética escura/neutra e minimalista | Inspirada na referência escolhida pelo autor | ✓ Good — Phase 1 |
| Foco em recrutadores/empresas | Objetivo principal é conseguir vagas/trabalho | — Pending |
| Stack: Vite + React + TS + Tailwind + Framer Motion | Recomendação da pesquisa; reuso de componentes, dark mode e animação; sinaliza skill de front-end | ✓ Good — Phase 1 |
| Acento visual ciano/azul-elétrico sobre grafite | Critério do Claude dentro de "escuro + 1 acento"; contraste WCAG AA | ✓ Good — Phase 1 |
| Deploy: Vercel conectado ao GitHub (branch `main`, deploy contínuo) | Zero-config para Vite; cada push publica | ✓ Good — Phase 1 |

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
*Last updated: 2026-10-21 after Phase 1 (Esqueleto no Ar — site live at https://portfolio-leosuguino.vercel.app/)*
