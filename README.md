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
- `tools/`: `remove_bg.py` (tira o fundo da foto da caixa) e `capture_all.py` (refaz as capturas do site, as telas do PowerPoint e a gravação do app quando o app mudar).

## Observações
- Textos baseados na apresentação da Lunera. Os números da seção "Built around what women told us" vêm da pesquisa (42 mulheres de 40 anos ou mais que responderam sobre mudanças recentes): 48% querem um resumo para levar à consulta, 52% querem notificações só se configurarem, 60% compartilhariam só com um profissional de saúde escolhido.
- Traduções feitas com apoio de IA: peça revisão de falantes nativos (principalmente DE e FR) antes da Suíça.
- A fonte Inter é carregada do Google Fonts no navegador; sem internet cai para a fonte do sistema.


## Imagens reais (11/11)

- `public/screens/`: telas REAIS do Lunera App (claro e escuro, PT e EN), geradas por `tools/capture_all.py` com o app rodando na web. O componente `Phone` (em `src/components/Art.tsx`) escolhe a captura pelo tema e pelo idioma; ES, FR e DE usam a captura em inglês.
- `public/photos/`: fotos conceituais dos três locais do patch (esterno superior, abaixo do peito, parte superior das costas). Sempre acompanhadas de "Imagem conceitual, localização ainda sujeita à validação".
- A caixa com um patch continua ilustrativa (`PatchBox`), como a Ana pediu.
- Contato: o botão abre a escrita no Gmail; "Salvar contato (.vcf)" baixa o mesmo cartão do QR code; "Abrir no meu app de e-mail" mantém o `mailto:`.

## Download do app e vídeo (12/11)

- O botão "Baixar o app" abre uma janela com Android, iPhone e computador. Ela abre a versão web do app, que fica neste mesmo site em `public/app` (gerada com `EXPO_BASE_URL=/app npx expo export --platform web` na pasta do app). Pelo navegador ela pode ser instalada com ícone, em qualquer aparelho.
- Para oferecer o instalador Android, preencha `APP.apk` em `src/data/contact.ts` com o link do `.apk` (ex.: GitHub Releases). Enquanto estiver vazio, o Android usa a versão web.
- Quando o vídeo estiver no YouTube, cole o link em `VIDEO_URL` (mesmo arquivo). O botão e o QR code da seção "Veja na prática" passam a funcionar sozinhos.
- O contato da Ana fica no rodapé; a seção de busca por cofundador saiu do site.
