import { FileValidator } from '@nestjs/common';

export class MaxFileSizeService extends FileValidator<{ maxSize: number }> {
  constructor(options: { maxSize: number }) {
    super(options);
  }

  isValid(file: Express.Multer.File): boolean | Promise<boolean> {
    const fileMb = file.size / 1000000;
    return fileMb <= this.validationOptions.maxSize;
  }

  buildErrorMessage(): string {
    return `File uploaded is too big. Max size is (${this.validationOptions.maxSize} MB)`;
  }
}
