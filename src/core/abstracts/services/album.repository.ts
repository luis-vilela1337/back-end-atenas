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
  fotos: string[];
  createdAt: Date;
};
export type FindAllInputDto = {
  limit: number;
  skip: number;
  nomeUsuario: string;
};
export type FindOutputDto = {
  numeroContrato: string;
  nomeAluno: string;
  tipoAlbum: string;
  evento: string[];
  createdAt: Date;
  fotos: string[];
};

export type FindAllAlbuns = {
  albuns: FindAlbunsOutputDto[];
  count: number;
};
export abstract class IALbumRepository {
  abstract createAlbum(input: CreateAlbumInputDto): Promise<void>;
  abstract updateAlbum(input: any): Promise<any>;
  abstract deleteAlbum(input: FindByAlbumnInputDto): Promise<boolean>;
  abstract findByAlbum(input: FindByAlbumnInputDto): Promise<FindOutputDto>;
  abstract findAll(input: FindAllInputDto): Promise<FindAllAlbuns>;
}
