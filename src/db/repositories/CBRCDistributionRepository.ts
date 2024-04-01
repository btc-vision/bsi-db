import { Collection, Db } from 'mongodb';
import { BaseRepository } from './BaseRepository.js';
import { ICBRCDistributionDocument } from '../documents/interfaces/ICBRCDistributionDocument.js';

export class CBRCDistributionRepository extends BaseRepository<ICBRCDistributionDocument> {
    public moduleName: string = 'CBRCDistributionRepository';
    public logColor: string = '#afeeee';

    constructor(db: Db) {
        super(db);
    }

    protected override getCollection(): Collection<ICBRCDistributionDocument> {
        return this._db.collection('distributions');
    }
}
