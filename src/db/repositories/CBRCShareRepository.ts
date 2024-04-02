import { Collection, Db } from 'mongodb';
import { ICBRCShareDocument } from '../documents/interfaces/ICBRCShareDocument.js';
import { BaseRepository } from './BaseRepository.js';

export class CBRCShareRepository extends BaseRepository<ICBRCShareDocument> {
    public moduleName: string = 'CBRCShareRepository';
    public logColor: string = '#afeeee';

    constructor(db: Db) {
        super(db);
    }

    protected override getCollection(): Collection<ICBRCShareDocument> {
        return this._db.collection('shares');
    }
}
