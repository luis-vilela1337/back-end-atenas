export type ListAllUsersOutputDto = {
  users: {
    numeroContrato: string;
    nomeUsuario: string;
    turma: string;
    telefone: string;
    nomeEscola: string;
    email: string;
    isAdm: boolean;
    foto: string;
    createdAt: Date;
  }[];
  count: number;
};
