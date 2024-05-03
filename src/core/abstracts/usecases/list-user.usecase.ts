export type ListUserInputDto = {
  nomeUsuario: string;
  email: string;
};
export type ListUserOutputDto = {
  numeroContrato: string;
  nomeUsuario: string;
  turma: string;
  telefone: string;
  nomeEscola: string;
  email: string;
  isAdm: boolean;
  foto: string;
  createdAt: Date;
};
export abstract class IListUserUseCase {
  abstract execute(input: ListUserInputDto): Promise<ListUserOutputDto>;
}
