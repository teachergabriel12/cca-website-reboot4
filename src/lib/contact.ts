export type ContactFlow = "construtora" | "industria";

export type ContactSubmission = {
  flow: ContactFlow;
  nome: string;
  empresa: string;
  cargo: string;
  whatsapp: string;
  email: string;
  /** Campos qualificadores do fluxo (temas, tipos, volume, etc.) */
  details: Record<string, string | string[]>;
};

export type ContactSubmitResult = {
  ok: boolean;
  leadId: string;
  message: string;
};
