import type { UserEntity } from '../../entities/user.entities';

export abstract class LoginEmailPasswordOutPort {
    abstract insert(user: UserEntity): Promise<UserEntity>;
    abstract findByKey(key: string): Promise<UserEntity>;
}
