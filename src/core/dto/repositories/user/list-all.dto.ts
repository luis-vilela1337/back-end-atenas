export type ListAllUsersOutputDto = {
  users: UserRepositoryDto[];
  count: number;
};

export type UserRepositoryDto = {
  numeroContrato: string;
  nomeUsuario: string;
  turma: string;
  telefone: string;
  nomeEscola: string;
  email: string;
  senha: string;
  isAdm: boolean;
  foto: string;
  createdAt: Date;
};
