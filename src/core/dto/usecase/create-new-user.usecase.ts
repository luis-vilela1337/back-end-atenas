export type CreateNewUserInputDto = {
  nome: string;
  curso: string;
  periodo: number;
  cpf: string;
  matricula: number;
  senha: string;
};

export type CreateNewUserOutputDto = void;
