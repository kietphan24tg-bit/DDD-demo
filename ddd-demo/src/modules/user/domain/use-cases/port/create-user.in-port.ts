import type { UseCase } from "../../../../core/domain/use-case.port";
import type { UserEntity } from '../../entities/user.entities';
import type { CreateUserProps } from '../../entities/user.types';

export interface CreateUserCommand extends CreateUserProps {}

export abstract class CreateUserInPort implements UseCase<
    CreateUserCommand,
    UserEntity
> {
    abstract execute(createUserCommand: CreateUserCommand): Promise<UserEntity>;
}