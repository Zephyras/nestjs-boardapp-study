import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentialDto';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authcredentialsDto: AuthCredentialsDto,
  ): Promise<User> {
    return this.authService.signUp(authcredentialsDto);
  }

  @Post('/signin')
  signIn(@Body(ValidationPipe) authcredentialsDtd: AuthCredentialsDto) {
    return this.authService.signIn(authcredentialsDtd);
  }
}
