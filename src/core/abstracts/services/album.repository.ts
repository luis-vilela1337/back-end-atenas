export type CreateAlbumInputDto = {
  numeroContrato: string;
  nomeAluno: string;
  tipoAlbum: string;
  evento: { tipoEvento: string; fotos: Array<string> }[];
};
export abstract class IALbumRepository {
  abstract createAlbum(input: CreateAlbumInputDto): Promise<void>;
  abstract updateAlbum(input: any): Promise<any>;
  abstract deleteAlbum(input: any): Promise<any>;
  abstract findByAlbum(input: any): Promise<any>;
  abstract findAll(input: any): Promise<any>;
}
