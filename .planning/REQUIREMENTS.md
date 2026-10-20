# Requirements: Portfólio Dev

**Defined:** 2026-10-20
**Core Value:** Fazer um recrutador ver os projetos e conseguir entrar em contato com o autor em poucos segundos.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Layout & Shell

- [ ] **LAYOUT-01**: Site é uma página única, responsiva, funcionando em 375px, 768px e 1280px
- [ ] **LAYOUT-02**: Tema fixo escuro/neutro, minimalista, inspirado no mattjinn.com, com contraste de cor acessível (WCAG AA)
- [ ] **LAYOUT-03**: Navegação fixa no topo com âncoras de scroll suave para as seções (amostras dos projetos e "Sobre mim")

### Hero

- [ ] **HERO-01**: Seção de apresentação comunica em segundos que o autor é desenvolvedor front-end (nome, rótulo de cargo, frase-pitch)

### Projetos

- [ ] **PROJ-01**: Vitrine exibe de 3 a 5 projetos em cards
- [ ] **PROJ-02**: Cada card mostra título, descrição curta e tags de stack técnica
- [ ] **PROJ-03**: Cada card tem link para o código (GitHub) e/ou demo ao vivo

### Sobre & Contato

- [ ] **ABOUT-01**: Seção "Sobre mim" apresenta quem o autor é (dev front-end, breve background e skills)
- [ ] **ABOUT-02**: Contato concentrado na seção "Sobre mim" — e-mail + redes sociais (LinkedIn/WhatsApp)
- [ ] **CONTACT-01**: Links de contato/redes sempre acessíveis (na navegação ou no rodapé), com e-mail e redes sociais

### Polimento

- [ ] **POLISH-01**: Micro-interações sutis — hover nos cards e transições suaves (CSS apenas, 150–250ms)
- [ ] **META-01**: Página tem `<title>`, `meta description` e tags Open Graph para previews ao compartilhar o link

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Enhancements

- **CV-01**: Botão de download do currículo em PDF na seção Sobre/Contato (requer o PDF pronto como asset)
- **A11Y-01**: Navegação por teclado e `focus-visible` auditados (skip-to-content, ordem de tab lógica)
- **PROJ-04**: Screenshots/preview images (ou GIFs) nos cards de projeto

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Blog / sistema de posts | Fora do objetivo de conseguir vagas no v1; um blog vazio sinaliza incompletude |
| Formulário de contato com backend | Portfólio é estático; contato via mailto/links evita infraestrutura de servidor |
| Toggle dark/light | Dobra a complexidade de CSS/estado sem ganho de UX; o tema é fixo escuro por decisão de design |
| Múltiplas páginas / rotas complexas | Quebra o conceito de página única e o modelo de navegação por âncoras |
| Internacionalização (PT/EN) | Público-alvo é recrutador brasileiro; conteúdo em português no v1 |
| Splash/loading, parallax, cursor custom, autoplay de mídia | Anti-padrões de UX e acessibilidade; prejudicam performance e credibilidade |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| LAYOUT-01 | Phase 1 | Pending |
| LAYOUT-02 | Phase 1 | Pending |
| LAYOUT-03 | Phase 1 | Pending |
| HERO-01 | Phase 1 | Pending |
| PROJ-01 | Phase 2 | Pending |
| PROJ-02 | Phase 2 | Pending |
| PROJ-03 | Phase 2 | Pending |
| ABOUT-01 | Phase 3 | Pending |
| ABOUT-02 | Phase 3 | Pending |
| CONTACT-01 | Phase 3 | Pending |
| POLISH-01 | Phase 4 | Pending |
| META-01 | Phase 1 | Pending |

**Coverage:**
- v1 requirements: 12 total
- Mapped to phases: 12 ✓
- Unmapped: 0 ✓

---
*Requirements defined: 2026-10-20*
*Last updated: 2026-10-20 after roadmap creation (phase mappings filled in)*
