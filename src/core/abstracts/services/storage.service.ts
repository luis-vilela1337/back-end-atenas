export abstract class IStorageService {
  abstract upload(input: UploadInput): Promise<string[]>;
}

export type UploadInput = {
  nomeAluno: string;
  contrato: string;
  fotos: Express.Multer.File[];
};
