# Roadmap: Portfólio Dev

## Overview

O projeto sobe no ar cedo e cresce em fatias verticais entregáveis. A Fase 1 publica um site de página única já no ar — casca responsiva, tema escuro, navegação com âncoras, hero que diz em segundos "sou dev front-end" e meta tags para o preview do link funcionar ao compartilhar. A partir daí, cada fase adiciona uma fatia visível e implantável: a vitrine de projetos (Fase 2), a seção "Sobre mim" com contato (Fase 3) e, por fim, o polimento de micro-interações (Fase 4). Ao final, um recrutador vê os projetos e fala com o autor em poucos segundos.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Esqueleto no Ar (casca + navegação + hero)** - Site de página única publicado, responsivo, tema escuro, hero que comunica "dev front-end" e meta tags para preview de link
- [ ] **Phase 2: Vitrine de Projetos** - Cards de 3 a 5 projetos com título, descrição, tags de stack e links para código/demo
- [ ] **Phase 3: Sobre mim + Contato** - Seção que apresenta o autor e concentra os caminhos de contato (e-mail + redes) sempre acessíveis
- [ ] **Phase 4: Polimento e Micro-interações** - Hover nos cards e transições suaves em CSS, respeitando reduced-motion

## Phase Details

### Phase 1: Esqueleto no Ar (casca + navegação + hero)
**Goal**: Publicar um site de página única já no ar — responsivo, escuro/minimalista, com navegação por âncoras, hero que comunica o cargo e meta tags que fazem o preview do link funcionar ao compartilhar.
**Mode:** mvp
**Depends on**: Nothing (first phase)
**Requirements**: LAYOUT-01, LAYOUT-02, LAYOUT-03, HERO-01, META-01
**Success Criteria** (what must be TRUE):
  1. O site está publicado em uma URL pública (estática) e abre sem erros
  2. Em 375px, 768px e 1280px o layout funciona sem scroll horizontal nem conteúdo cortado
  3. O tema é escuro/neutro e minimalista, com texto legível (contraste WCAG AA) em todos os tamanhos
  4. Uma navegação fixa no topo leva com scroll suave às seções (âncoras de projetos e "Sobre mim")
  5. Ao abrir, o visitante lê em segundos o nome, o rótulo "Desenvolvedor Front-End" e uma frase-pitch, sem precisar rolar; e ao compartilhar o link o preview mostra título, descrição e imagem (Open Graph)
**Plans**: 3 plans
- [ ] 01-01-PLAN.md — Walking Skeleton: scaffold Vite+React+TS+Tailwind+Framer Motion, dark theme tokens, hero above the fold, deploy to a public static URL (HERO-01, LAYOUT-02)
- [ ] 01-02-PLAN.md — Responsive shell: fixed top nav + smooth-scroll anchors + placeholder #projetos/#sobre sections, verified at 375/768/1280px (LAYOUT-01, LAYOUT-02, LAYOUT-03)
- [ ] 01-03-PLAN.md — Meta/Open Graph tags + placeholder OG image + favicon so the shared-link preview unfurls (META-01, HERO-01)
**UI hint**: yes

### Phase 2: Vitrine de Projetos
**Goal**: Mostrar de 3 a 5 projetos em cards claros e escaneáveis, cada um com descrição útil, tags de stack e pelo menos um link funcional (código e/ou demo) — a metade "ver os projetos" do valor central.
**Mode:** mvp
**Depends on**: Phase 1
**Requirements**: PROJ-01, PROJ-02, PROJ-03
**Success Criteria** (what must be TRUE):
  1. A seção de projetos exibe entre 3 e 5 cards, visíveis e legíveis em 375px, 768px e 1280px
  2. Cada card mostra título, descrição curta (o que é, o que o autor fez e um ponto relevante) e tags de stack técnica
  3. Cada card tem link para o código (GitHub) e/ou demo ao vivo, e todo link clicado abre um destino real (status 200, sem localhost nem placeholder)
  4. Os cards são alcançáveis pela âncora de navegação do topo
**Plans**: TBD
**UI hint**: yes

### Phase 3: Sobre mim + Contato
**Goal**: Apresentar quem o autor é e concentrar os caminhos de contato num lugar só, sempre alcançáveis — a metade "falar com o autor" do valor central.
**Mode:** mvp
**Depends on**: Phase 2
**Requirements**: ABOUT-01, ABOUT-02, CONTACT-01
**Success Criteria** (what must be TRUE):
  1. A seção "Sobre mim" apresenta o autor como dev front-end com breve background e uma lista de skills
  2. O e-mail e as redes (LinkedIn/WhatsApp) aparecem como links reais (mailto:/href) na seção "Sobre mim", clicáveis em até 3 toques no mobile
  3. Um caminho de contato (e-mail + rede) está sempre acessível pela navegação do topo ou pelo rodapé, sem depender de rolar a página
  4. A seção "Sobre mim" é alcançável pela âncora de navegação do topo
**Plans**: TBD
**UI hint**: yes

### Phase 4: Polimento e Micro-interações
**Goal**: Dar o toque "techie" sutil — hover nos cards e transições suaves — sem jank nem exagero, respeitando quem prefere menos movimento.
**Mode:** mvp
**Depends on**: Phase 3
**Requirements**: POLISH-01
**Success Criteria** (what must be TRUE):
  1. Ao passar o mouse sobre um card, há uma micro-interação sutil (ex.: leve elevação/realce), usando apenas transform/opacity
  2. As transições duram entre 150 e 250ms e rolam a 60fps, sem travadas perceptíveis
  3. Com `prefers-reduced-motion` ativo, as animações são reduzidas ou desligadas
**Plans**: TBD
**UI hint**: yes

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Esqueleto no Ar | 0/3 | Not started | - |
| 2. Vitrine de Projetos | 0/TBD | Not started | - |
| 3. Sobre mim + Contato | 0/TBD | Not started | - |
| 4. Polimento e Micro-interações | 0/TBD | Not started | - |
