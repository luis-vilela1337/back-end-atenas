export type CreateNewUserInputDto = {
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

export type CreateNewUserOutputDto = void;
