interface LinkDef {
  target: string;
  i18nLabel: string;
}

export const linkDefinitions = (lang: "fr" | "en"): LinkDef[] => [
  {
    i18nLabel: "Curriculum_vitæ_pdf",
    target: `/cv-${lang}.pdf`,
  },
  {
    i18nLabel: "Github_profile",
    target: "https://github.com/remipassmoilesel",
  },
  {
    i18nLabel: "Gitlab_profile",
    target: "https://gitlab.com/remipassmoilesel",
  },
  {
    i18nLabel: "Linkedin_profile",
    target: "https://www.linkedin.com/in/r%C3%A9mi-pace-380a61108/",
  },
];
