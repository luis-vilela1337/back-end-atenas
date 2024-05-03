type Evento = {
  tipoEvento: string;
  fotos: Array<string>;
};

export type CreateAlbumInputDto = {
  numeroContrato: string;
  nomeAluno: string;
  tipoAlbum: string;
  evento: Array<Evento>;
};

export type CreateAlbumOutputDto = void;
