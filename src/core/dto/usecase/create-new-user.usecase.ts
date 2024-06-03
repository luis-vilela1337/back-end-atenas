export type CreateNewUserInputDto = {
  numeroContrato: string;
  nomeUsuario: string;
  turma: string;
  telefone: string;
  nomeEscola: string;

  email: string;
  senha: string;
  isAdm: boolean;
  foto: Express.Multer.File;
};

export type CreateNewUserOutputDto = void;
