# Phase 1: Esqueleto no Ar (casca + navegação + hero) - Context

**Gathered:** 2026-10-20
**Status:** Ready for planning

<domain>
## Phase Boundary

Publicar um site de página única **já no ar** numa URL pública: a casca responsiva + tema escuro/minimalista, navegação fixa por âncoras, a seção hero que comunica o cargo, e as meta/OG tags que fazem o preview do link funcionar ao compartilhar.

Cobre os requisitos LAYOUT-01, LAYOUT-02, LAYOUT-03, HERO-01, META-01.

Fora desta fase: conteúdo real dos cards de projeto (Fase 2), seção "Sobre mim" + contato detalhado (Fase 3), micro-interações de polimento (Fase 4). A nav da Fase 1 aponta para seções que chegam nas Fases 2–3 — ver decisão D-05.
</domain>

<decisions>
## Implementation Decisions

### Stack & Build
- **D-01:** Stack = **Vite + React + TypeScript**, estilização com **Tailwind CSS**, animações/micro-interações com **Framer Motion**. Saída estática (`vite build` → `dist/`). Segue a recomendação de `.planning/research/STACK.md`. — **Reversibility:** costly — trocar o framework depois reescreve toda a árvore de componentes e a config de build; é a fundação das Fases 2–4.
- **D-02:** Build totalmente estático, sem backend/servidor (consistente com PROJECT.md "Out of Scope"). Entregue por D-01 (build estático Vite → `dist/`), verificado no plano 01-01.

### Direção Visual
- **D-03:** Tema fixo escuro/neutro, minimalista, **mono-neutro + 1 cor de acento** (fundo quase-preto/grafite, texto claro, acento único em links/hover). Referência de UX: mattjinn.com. Sem toggle dark/light. — **Reversibility:** reversible — é escolha de tokens de tema no Tailwind.
- **D-04:** Contraste de texto deve atender **WCAG AA** em todos os breakpoints (375 / 768 / 1280px).

### Navegação (seções futuras)
- **D-05:** A nav fixa no topo tem âncoras com scroll suave. Como Projetos (Fase 2) e Sobre mim (Fase 3) ainda não existem, a Fase 1 cria **seções placeholder** com os IDs de âncora corretos para que a navegação funcione desde o lançamento (evita links quebrados). O conteúdo real preenche essas seções nas fases seguintes.

### Hero (conteúdo)
- **D-06:** Nome exibido: **Leonardo Suguino**.
- **D-07:** Rótulo de cargo: **"Desenvolvedor Front-End"**.
- **D-08:** Frase-pitch do hero: **"Transformo interfaces em experiências rápidas, acessíveis e com atenção ao detalhe."**
- **D-09:** E-mail de contato real: **leonardosuguino@gmail.com** (usado no link de contato e nas meta/OG tags).

### Meta / Open Graph
- **D-10:** A página tem `<title>`, `meta description`, e tags Open Graph (`og:title`, `og:description`, `og:image`) desde a Fase 1, porque o link já é compartilhável nesta fase.

### Claude's Discretion
- **Cor de acento exata:** usuário disse "deixa com você" — escolha **ciano/azul-elétrico** sobre grafite, verificando contraste WCAG AA. Flexível se outra cor bater melhor com a paleta final.
- **Imagem OG (og:image, 1200×630):** usar um placeholder/asset gerado simples nesta fase; pode ser refinado depois. Não bloquear o deploy por causa da arte final.
- **Estrutura de componentes, tipografia específica e config do Tailwind:** critério do planner/executor dentro das decisões acima.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Projeto & Requisitos
- `.planning/PROJECT.md` — visão, core value, escopo e out-of-scope
- `.planning/REQUIREMENTS.md` — LAYOUT-01/02/03, HERO-01, META-01 (desta fase)
- `.planning/ROADMAP.md` §Phase 1 — goal e 5 critérios de sucesso

### Pesquisa
- `.planning/research/STACK.md` — stack recomendada (Vite+React+TS, Tailwind, Framer Motion) e versões
- `.planning/research/ARCHITECTURE.md` — padrões de arquitetura para o portfólio estático
- `.planning/research/FEATURES.md` — table stakes (hero, nav, responsivo, contraste, meta tags) e anti-features
- `.planning/research/PITFALLS.md` — armadilhas (ex.: OG preview quebrado, contraste no tema escuro, deploy)

### Referência de UX
- https://mattjinn.com/ — benchmark visual/UX (nav minimalista no topo, estética escura/neutra, cards, micro-interações sutis). A estética é reaproveitada, não o conteúdo.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- Nenhum — projeto greenfield. Não há código-fonte ainda (apenas `.planning/`).

### Established Patterns
- A definir na Fase 1: este é o momento em que a estrutura base (Vite+React+TS+Tailwind) e os tokens de tema são estabelecidos para todas as fases seguintes.

### Integration Points
- A casca + IDs de âncora das seções placeholder (D-05) são o ponto de integração que as Fases 2 e 3 vão preencher.

</code_context>

<specifics>
## Specific Ideas

- "Quero próximo do mattjinn.com": nav minimalista fixa no topo, fundo escuro, hierarquia tipográfica limpa, acento único.
- Hero deve ser legível **sem rolar** (acima da dobra) nos três breakpoints.

</specifics>

<deferred>
## Deferred Ideas

- **Alvo de deploy (GitHub Pages / Netlify / Vercel):** usuário não quis discutir agora. Recomendação: **Vercel** ou **GitHub Pages** (deploy estático trivial a partir de `dist/`). Decisão a ser fechada antes do primeiro deploy (um dos critérios de sucesso da Fase 1 é "site publicado em URL pública"). Permanece como blocker ativo no STATE.md até resolvido.
- CV/currículo em PDF, navegação por teclado auditada, screenshots nos cards — já em v2/REQUIREMENTS (fora desta fase).

</deferred>

---

*Phase: 1-esqueleto-no-ar-casca-navega-o-hero*
*Context gathered: 2026-10-20*
