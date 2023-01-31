// Interface for the fetched options from backend:

interface OptionsI {
  lopsdato: string;
  paamelding_aapner: string;
  paamelding_avgift_gamp: string;
  paamelding_avgift_gamp_arena: string;
  paamelding_avgift_gamp_etteranmelding: string;
  paamelding_avgift_snusk: string;
  paamelding_avgift_snusk_etteranmelding: string;
  paamelding_avgift_snusk_ettranmelding: string;
  paamelding_stenger: string;
}

export type Options = OptionsI;
