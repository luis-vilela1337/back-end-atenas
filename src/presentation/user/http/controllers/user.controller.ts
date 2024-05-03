import { CreateNewUserApplication } from '@application/user/create-new-user.application';
import { DeleteUserApplication } from '@application/user/delete-user.application';
import { ListAllUsersApplication } from '@application/user/list-all-user.application';
import { ListUserApplication } from '@application/user/list-user.application';
import { UpdateUserApplication } from '@application/user/update-user.application';
import {
  Body,
  Controller,
  Patch,
  Get,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '@presentation/auth/guards/jwt.guard';
import { CreateNewUserInputDto } from '@presentation/user/dto/create-new-user.dto';
import { DeleteUserInputDto } from '@presentation/user/dto/delete-user.dto';
import { ListAllUsersOutputDto } from '@presentation/user/dto/list-all-users.dto';
import { UpdateUserInputDto } from '@presentation/user/dto/update-user.dto';

@Controller('v1/user')
export class UserController {
  constructor(
    private readonly _createUserApplication: CreateNewUserApplication,
    private readonly _listAllUser: ListAllUsersApplication,
    private readonly _listUser: ListUserApplication,
    private readonly _updateUser: UpdateUserApplication,
    private readonly _deleteUser: DeleteUserApplication,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createNewUser(@Body() input: CreateNewUserInputDto): Promise<void> {
    return await this._createUserApplication.execute(input);
  }

  @Get('getAll')
  @UseGuards(JwtAuthGuard)
  async listAllUser(
    @Query() username: string,
    @Query() skip: number,
    @Query() limit: number,
  ): Promise<ListAllUsersOutputDto[]> {
    return await this._listAllUser.execute({ skip, limit, username });
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async listUser(
    @Body() input: { nomeUsuario: string; email: string },
  ): Promise<ListAllUsersOutputDto> {
    return await this._listUser.execute(input);
  }

  @Put()
  @UseGuards(JwtAuthGuard)
  async updateUser(@Body() input: UpdateUserInputDto) {
    return await this._updateUser.execute(input);
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  async deleteUser(@Body() input: DeleteUserInputDto) {
    return await this._deleteUser.execute(input);
  }
}
