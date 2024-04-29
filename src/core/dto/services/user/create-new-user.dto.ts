export type CreateTokenUserInputDto = {
  nome: string;
  cpf: string;
  matricula: string;
};

export type CreateTokenUserOutputDto = {
  token: string;
};
