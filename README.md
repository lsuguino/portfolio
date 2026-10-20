# Portfólio — Leonardo Suguino

Portfólio pessoal de Leonardo Suguino, Desenvolvedor Front-End. Site de página única que apresenta minha identidade profissional, projetos em destaque e um caminho de contato direto para recrutadores e empresas.

## Stack

| Tecnologia | Versão | Propósito |
|---|---|---|
| Vite | 5.x | Build tool e dev server |
| React | 18.x | Modelo de componentes UI |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.x | Estilização utilitária com tokens de tema escuro |
| Framer Motion | 11.x | Micro-interações e animações de entrada |
| lucide-react | ~0.427 | Ícones SVG tree-shakeable |
| @fontsource/geist | 5.x | Tipografia de títulos (self-hosted) |
| @fontsource/inter | 5.x | Tipografia de corpo (self-hosted) |

**App root:** Repositório raiz (todos os arquivos de configuração e `src/` ficam aqui).

## Como rodar localmente

```bash
# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev
```

O site fica disponível em `http://localhost:5173`.

## Como fazer o build

```bash
npm run build
```

Gera o bundle estático em `dist/`. A saída é um diretório com `index.html` e `assets/` — sem necessidade de servidor.

## Deploy

> URL pública: **a preencher após o primeiro deploy** (Checkpoint Task 3)

### Opção A — Vercel (recomendado, zero-config)

```bash
npm i -g vercel
vercel
```

O Vercel detecta automaticamente o framework Vite: build command `npm run build`, output directory `dist`. Nenhuma alteração no `vite.config.ts` é necessária.

### Opção B — GitHub Pages

1. Adicione `base: '/<nome-do-repositorio>/'` ao `vite.config.ts`
2. Faça o build: `npm run build`
3. Publique o diretório `dist/` na branch `gh-pages` (via ação do GitHub Pages ou pacote `gh-pages`)

> Nota: a opção A (Vercel) é recomendada — sem gestão de branch extra e sem configuração de `base`.

## Estrutura do projeto

```
src/
  components/    # Componentes de UI (Hero, Nav, ProjectCard…)
  data/
    content.ts   # Fonte única de verdade: nome, cargo, tagline, e-mail
  index.css      # Camadas Tailwind + base escura + imports de fontes
  App.tsx        # Raiz de composição da página
  main.tsx       # Ponto de entrada React
tailwind.config.js  # Tokens do tema escuro/grafite
```
