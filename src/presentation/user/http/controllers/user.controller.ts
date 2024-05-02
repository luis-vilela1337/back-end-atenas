import { CreateNewUserApplication } from '@application/user/create-new-user.application';
import { ListAllUsersApplication } from '@application/user/list-all-user.application';
import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@presentation/auth/guards/jwt.guard';
import { CreateNewUserInputDto } from '@presentation/user/dto/create-new-user.dto';
import { ListAllUsersOutputDto } from '@presentation/user/dto/list-all-users.dto';

@Controller('v1/user')
export class UserController {
  constructor(
    private readonly _createUserApplication: CreateNewUserApplication,
    private readonly _listAllUser: ListAllUsersApplication,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createNewUser(@Body() input: CreateNewUserInputDto): Promise<void> {
    return await this._createUserApplication.execute(input);
  }

  @Get('getAll')
  @UseGuards(JwtAuthGuard)
  async listAllUser(
    @Query() skip: string,
    @Query() limit: string,
  ): Promise<ListAllUsersOutputDto[]> {
    return await this._listAllUser.execute({ skip, limit });
  }
}
