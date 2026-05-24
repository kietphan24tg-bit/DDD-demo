import type { UseCase } from '../../../../core/domain/use-case.port';

export interface LoginEmailPasswordCommand {
    username: string;
    password: string;
}

export abstract class LoginEmailPasswordInPort implements UseCase<
    LoginEmailPasswordCommand,
    void
> {
    abstract execute(loginCommand: LoginEmailPasswordCommand): Promise<void>;
}
