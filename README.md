# Lunera Healthcare: página institucional

Página única em **Next.js (App Router) + TailwindCSS v4**, com seletor de idiomas (EN, PT, ES, FR, DE) e **modo claro/escuro** escolhido pela pessoa (o padrão segue o sistema).
Tom visual: saúde feminina de alto nível, inspirado em Maven Clinic e Clue, com a linguagem de página de produto da Apple.

## Rodar
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # versão de produção
```

## O que tem
Hero com a caixa aberta (PNG/WebP sem fundo, direto sobre o fundo da página), o problema (foto da mulher com o patch), a plataforma (3 blocos com telas reais do app), números reais da pesquisa da Lunera, "como funciona", fechamento com a lua e rodapé.
Um único botão de download (ilustrativo): ao clicar mostra um aviso de protótipo.
Animações: entrada no scroll (`Reveal.tsx`), header que fica translúcido ao rolar e hover nos blocos. A caixa fica fixa, sem parallax. Respeita `prefers-reduced-motion`.

## Estrutura
- `src/app/globals.css`: cores da logo, tokens de claro e escuro (`data-theme`), fontes (SF Pro no Mac/iPhone, Inter nos demais).
- `src/app/layout.tsx`: script no `<head>` que aplica o tema antes da primeira pintura.
- `src/i18n/dictionary.ts`: todos os textos nos 5 idiomas. Novo idioma = novo bloco + entrada em `LANGUAGES`.
- `src/components/`: `Landing.tsx` (seções), `ThemeToggle.tsx`, `LanguageSwitcher.tsx`, `Reveal.tsx`.
- `public/`: logo oficial, `box-open.webp` (caixa sem fundo), foto da mulher com o patch, lua e `screens/` (capturas do app em claro e escuro).
- `tools/`: `remove_bg.py` (tira o fundo da foto da caixa) e `capture_screens.py` (refaz as capturas do app quando o app mudar).

## Observações
- Textos baseados na apresentação da Lunera. Os números da seção "Built around what women told us" vêm da pesquisa (42 mulheres de 40 anos ou mais que responderam sobre mudanças recentes): 48% querem um resumo para levar à consulta, 52% querem notificações só se configurarem, 60% compartilhariam só com um profissional de saúde escolhido.
- Traduções feitas com apoio de IA: peça revisão de falantes nativos (principalmente DE e FR) antes da Suíça.
- A fonte Inter é carregada do Google Fonts no navegador; sem internet cai para a fonte do sistema.
