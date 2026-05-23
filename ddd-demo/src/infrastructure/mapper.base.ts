export interface Mapper<DomainEntity, DbRecord> {
    toDomain(record: DbRecord): DomainEntity;
    toPersistence(entity: DomainEntity): DbRecord;
}
