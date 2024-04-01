import { Collection, Db } from 'mongodb';
import { BaseRepository } from './BaseRepository.js';
import { ICBRCDeployDocument } from '../documents/interfaces/ICBRCDeployDocument.js';

export class CBRCDeployRepository extends BaseRepository<ICBRCDeployDocument> {
    public moduleName: string = 'CBRCDeployRepository';
    public logColor: string = '#afeeee';

    constructor(db: Db) {
        super(db);
    }

    protected override getCollection(): Collection<ICBRCDeployDocument> {
        return this._db.collection('deploys');
    }
}
