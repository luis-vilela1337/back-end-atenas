export type CreateTokenUserInputDto = {
  nomeUsuario: string;
  email: string;
  base64: string;
};

export type CreateTokenUserOutputDto = {
  token: string;
};
