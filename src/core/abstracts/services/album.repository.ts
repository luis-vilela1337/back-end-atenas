export type CreateAlbumInputDto = {
  numeroContrato: string;
  nomeAluno: string;
  tipoAlbum: string;
  evento: string[];
  fotos: string[];
};
export type FindByAlbumnInputDto = {
  numeroContrato: string;
  nomeAluno: string;
};
export type FindAlbunsOutputDto = {
  numeroContrato: string;
  nomeAluno: string;
  tipoAlbum: string;
  evento: string[];
};
export type FindAllInputDto = {
  limit: number;
  skip: number;
};
export type FindAllOutputDto = {
  numeroContrato: string;
  nomeAluno: string;
  tipoAlbum: string;
  evento: string[];
  createdAt: Date;
  // fotos: string[];
}[];
export abstract class IALbumRepository {
  abstract createAlbum(input: CreateAlbumInputDto): Promise<void>;
  abstract updateAlbum(input: any): Promise<any>;
  abstract deleteAlbum(input: any): Promise<any>;
  abstract findByAlbum(input: FindByAlbumnInputDto): Promise<any>;
  abstract findAll(input: FindAllInputDto): Promise<FindAllOutputDto>;
}
