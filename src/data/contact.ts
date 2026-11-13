// Contato exibido em "Nossa próxima conversa" e links da pesquisa.
// O QR de contato é gerado no próprio site a partir destes dados (vCard estático): funciona offline, não expira
// e muda sozinho se o telefone ou o e-mail mudarem. Veja também public/qr-contato.svg (versão para slides e impressão).
export const CONTACT = {
  name: "Ana Claudia",
  org: "Lunera Healthcare",
  email: "ana.claudia@primaconsult.com.br",
  phone: "+5511984334867",
};
export const CONTACT_PHONE_LABEL = "+55 11 98433-4867"; // como aparece escrito na página

// Formulário da pesquisa. Falta o link do formulário "outros países" (SURVEY.intl): enquanto vazio, aparece "link em breve".
export const SURVEY = {
  br: "https://docs.google.com/forms/d/e/1FAIpQLSeB8TyFAEdF6p8gIoF4ogMwFx8kUbfTcfNCmobzxKOLFjVpkA/viewform",
  en: "https://forms.gle/MqdEbJNodaMiL6c19",
  es: "https://forms.gle/tvN9sPDZ5jpPyVw39",
};

export const vcard = (c: typeof CONTACT) =>
  [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${c.name}`,
    `ORG:${c.org}`,
    c.email && `EMAIL:${c.email}`,
    c.phone && `TEL:${c.phone}`,
    "END:VCARD",
  ]
    .filter(Boolean)
    .join("\n");

// Links do app e do vídeo. Enquanto estiverem vazios, o site mostra "link em breve" no lugar do QR/botão.
// APP.web: a versão web do protótipo (abre em qualquer celular ou computador e pode ser instalada pelo navegador).
//   Se o app for publicado dentro deste site (pasta public/app), use "/app/index.html".
// APP.apk: o instalador Android (ex.: https://github.com/<usuario>/<repo>/releases/latest/download/lunera.apk).
// VIDEO_URL: o vídeo de demonstração no YouTube.
export const APP = {
  web: "/app/index.html",
  apk: "",
};
export const VIDEO_URL = "";
