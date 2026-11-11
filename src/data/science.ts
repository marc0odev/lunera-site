// Seção "A ciência": 5 cards (textos em i18n/copy.ts, chaves sc1..sc5) e as referências completas.
export const SCIENCE_CARDS = [
  { id: "sc1", source: "Piasta & Zewail · Obstetrics & Gynecology, 2026" },
  { id: "sc2", source: "Chinoy et al. · Sleep, 2021" },
  { id: "sc3", source: "Thurston et al. · Psychophysiology, 2011 · Carpenter et al. · Menopause, 2005" },
  { id: "sc4", source: "de Zambotti et al. · Fertility and Sterility, 2014" },
  { id: "sc5", source: "NIH · Iniciativa de pesquisa, 2026" },
] as const;

export type Reference = { text: string; url?: string };
export const REFERENCES: Reference[] = [
  { text: "Piasta J, Zewail A. Hormonal options for perimenopause: a clinician toolkit. Obstet Gynecol. 2026 (15 Sep). doi:10.1097/AOG.0000000000006436.", url: "https://doi.org/10.1097/AOG.0000000000006436" },
  { text: "Chinoy ED, Cuellar JA, Huwa KE, Jameson JT, Watson CH, Bessman SC, et al. Performance of seven consumer sleep-tracking devices compared with polysomnography. Sleep. 2021;44(5):zsaa291. doi:10.1093/sleep/zsaa291.", url: "https://doi.org/10.1093/sleep/zsaa291" },
  { text: "Thurston RC, Hernandez J, Del Rio JM, De la Torre F. Support vector machines to improve physiologic hot flash measures: application to the ambulatory setting. Psychophysiology. 2011;48(7):1015–1021. doi:10.1111/j.1469-8986.2010.01155.x.", url: "https://doi.org/10.1111/j.1469-8986.2010.01155.x" },
  { text: "Carpenter JS, Azzouz F, Monahan PO, Storniolo AM, Ridner SH. Is sternal skin conductance monitoring a valid measure of hot flash intensity or distress? Menopause. 2005;12(5):512–519." },
  { text: "de Zambotti M, Colrain IM, Javitz HS, Baker FC. Magnitude of the impact of hot flashes on sleep in perimenopausal women. Fertil Steril. 2014;102(6):1708–1715.e1. doi:10.1016/j.fertnstert.2014.08.016.", url: "https://doi.org/10.1016/j.fertnstert.2014.08.016" },
  { text: "National Institutes of Health. NIH launches $21 million initiative to improve understanding of sex-specific hormonal biology. News release, 14 Sep 2026.", url: "https://www.nih.gov/news-events/news-releases/nih-launches-21-million-initiative-improve-understanding-sex-specific-hormonal-biology" },
];
