import {
  IStorageService,
  UploadInput,
  UploadProfileInput,
} from '@core/abstracts/services/storage.service';
import { GetSignedUrlConfig, Storage } from '@google-cloud/storage';

export class StorageService implements IStorageService {
  constructor(
    private readonly _storage: Storage,
    private readonly _bucketName: string,
  ) {
    this._storage = new Storage();
    this._bucketName = process.env.BUCKETNAME;
  }

  private async _getSignedUrl(fileName: string): Promise<string> {
    const options: GetSignedUrlConfig = {
      version: 'v2',
      action: 'read',
      expires: '12/31/2025',
    };

    const [url] = await this._storage
      .bucket(this._bucketName)
      .file(fileName)
      .getSignedUrl(options);

    return url;
  }

  private async _saveBucketFile(
    fileName: string,
    buffer: Buffer,
  ): Promise<void> {
    const bucketFile = this._storage.bucket(this._bucketName).file(fileName);
    await bucketFile.save(buffer);
  }

  async upload({ contrato, fotos, nomeAluno }: UploadInput): Promise<string[]> {
    const urls = fotos.map(async (foto) => {
      const filename = `${contrato}+${nomeAluno}/${foto.originalname}`;
      await this._saveBucketFile(filename, foto.buffer);

      return await this._getSignedUrl(filename);
    });

    return Promise.all(urls);
  }

  async uploadProfilePicture({
    contrato,
    foto,
    nomeAluno,
  }: UploadProfileInput): Promise<string> {
    const filename = `${contrato}-${nomeAluno}-${foto.originalname}`;
    await this._saveBucketFile(filename, foto.buffer);

    return await this._getSignedUrl(filename);
  }
}
