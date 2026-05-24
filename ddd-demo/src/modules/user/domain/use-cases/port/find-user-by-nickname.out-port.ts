import type { UserEntity } from '../../entities/user.entities';

export abstract class FindUserByNicknameOutPort {
    abstract findUserByNickname(nickname: string): Promise<UserEntity>;
}
