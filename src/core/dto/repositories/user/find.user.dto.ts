export type FindByUserInput = {
  email: string;
  nomeUsuario: string;
};

export type FindByUserOutput = {
  numeroContrato: string;
  nomeUsuario: string;
  turma: string;
  telefone: string;
  nomeEscola: string;
  email: string;
  senha: string;
  isAdm: boolean;
  foto: string;
};
