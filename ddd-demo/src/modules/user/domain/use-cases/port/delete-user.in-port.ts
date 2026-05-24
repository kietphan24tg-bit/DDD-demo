import type { UseCase } from '../../../../core/domain/use-case.port';
import type { UserEntity } from '../../entities/user.entities';

export interface DeleteUserCommand {
    userId: string;
}

export abstract class DeleteUserInPort implements UseCase<
    DeleteUserCommand,
    UserEntity
> {
    abstract execute(deleteUserCommand: DeleteUserCommand): Promise<UserEntity>;
}
