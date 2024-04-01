import { ClientSession, Collection, Db } from 'mongodb';
import { BaseRepository } from './BaseRepository.js';
import { IKeyHashToPointerDocument } from '../documents/interfaces/IKeyHashToPointerDocument.js';

export class KeyHashToPointerRepository extends BaseRepository<IKeyHashToPointerDocument> {
    public moduleName: string = 'KeyHashToPointerRepository';
    public logColor: string = '#afeeee';

    constructor(db: Db) {
        super(db);
    }

    public async getByKeyHash(keyHash: string,
        currentSession?: ClientSession): Promise<IKeyHashToPointerDocument | null> {
        const criteria: Partial<IKeyHashToPointerDocument> = {
            keyHash: keyHash
        };

        const document = this.queryOne(criteria,
            currentSession);

        return document;
    }

    protected override getCollection(): Collection<IKeyHashToPointerDocument> {
        return this._db.collection('keyhashtopointer');
    }
}
