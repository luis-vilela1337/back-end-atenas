export abstract class IStorageService {
  abstract upload(input: UploadInput): Promise<string[]>;
  abstract uploadProfilePicture(input: UploadProfileInput): Promise<string>;
}

export type UploadInput = {
  nomeAluno: string;
  contrato: string;
  fotos: Express.Multer.File[];
};

export type UploadProfileInput = {
  nomeAluno: string;
  contrato: string;
  foto: Express.Multer.File;
};
