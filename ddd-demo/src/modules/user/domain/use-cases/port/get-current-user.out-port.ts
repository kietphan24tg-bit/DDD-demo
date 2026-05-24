import type { UserEntity } from '../../entities/user.entities';

export abstract class GetCurrentUserOutPort {
    abstract getCurrentUser(): Promise<UserEntity>;
}
