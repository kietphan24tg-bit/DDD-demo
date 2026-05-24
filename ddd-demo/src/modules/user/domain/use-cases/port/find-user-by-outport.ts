import type { UserEntity } from '../../entities/user.entities';

export abstract class FindUserByIdOutPort {
    abstract findUserById(userId: string): Promise<UserEntity>;
}
