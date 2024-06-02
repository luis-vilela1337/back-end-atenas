export type UpdateUserInputDto = {
  numeroContrato: string;
  nomeUsuario: string;
  turma: string;
  telefone: string;
  nomeEscola: string;
  email: string;
  isAdm: boolean;
  foto: Express.Multer.File;
};

export type UpdateUserOutputDto = void;
