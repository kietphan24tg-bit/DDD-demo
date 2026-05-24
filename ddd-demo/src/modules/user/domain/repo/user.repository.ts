import type { RepositoryPort } from '../../../core/domain/repo/repository.port';
import type { UserEntity } from '../entities/user.entities';

export interface IUserRepository extends RepositoryPort<UserEntity> {}
