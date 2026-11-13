export const CONTACT = {
  name: "Ana Claudia Campana",
  org: "Lunera Healthcare",
  email: "ana.claudia@primaconsult.com.br",
  phone: "+5511984334867",
};
export const CONTACT_PHONE_LABEL = "+55 11 98433-4867";

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

export const APP = {
  web: "/app/index.html",
  apk: "https://github.com/marc0odev/lunera-app/releases/download/v1/lunera.apk",
};
export const VIDEO_URL = "https://youtu.be/psBT3XumM7U";
