/**
 * project-config.ts — Configurazione progetto California.
 *
 * Specializzato per il romanzo California (vedi progetto/README.md).
 */

export interface ProjectConfig {
  title: string;
  subtitle: string;
  description: string;
  language: string;
  expectedUnitsCount: number | null;
  hasMappa: boolean;
  hasStrade: boolean;
  mappaBaseImagePath: string | null;
  mappaAspectRatio: string | null;
  unitAxis: {
    seasonLabel: string | null;
    cycleLabel: string | null;
    atmosphereLabel: string | null;
  };
  imageBaseFallback: string | null;
}

export const PROJECT_CONFIG: ProjectConfig = {
  title: "California",
  subtitle: "Romanzo — fantascienza cargo, smuggling",
  description:
    "Cruscotto editoriale del romanzo California. Catalogo personaggi/luoghi/oggetti, atlante saga, capitoli scritti.",
  language: "it",

  expectedUnitsCount: 18,

  hasMappa: false,
  hasStrade: false,
  mappaBaseImagePath: null,
  mappaAspectRatio: null,

  unitAxis: {
    seasonLabel: null,
    cycleLabel: "Atto",
    atmosphereLabel: null,
  },

  imageBaseFallback: null,
};
