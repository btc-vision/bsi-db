import { Collection, Db } from 'mongodb';
import { ICBRCPoolDocument } from '../documents/interfaces/ICBRCPoolDocument.js';
import { BaseRepository } from './BaseRepository.js';

export class CBRCPoolRepository extends BaseRepository<ICBRCPoolDocument> {
    public moduleName: string = 'CBRCPoolRepository';
    public logColor: string = '#afeeee';

    constructor(db: Db) {
        super(db);
    }

    protected override getCollection(): Collection<ICBRCPoolDocument> {
        return this._db.collection('pools');
    }
}
