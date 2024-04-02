import { Collection, Db } from 'mongodb';
import { ICBRCDeployDocument } from '../documents/interfaces/ICBRCDeployDocument.js';
import { BaseRepository } from './BaseRepository.js';

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
