import type { UserEntity } from '../../entities/user.entities';

export abstract class CreateUserOutPort {
    abstract insert(user: UserEntity): Promise<UserEntity>;
}
