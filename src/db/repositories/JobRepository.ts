import { Collection, Db } from 'mongodb';
import { IJobDocument } from '../documents/interfaces/IJobDocument.js';
import { BaseRepositoryWithId } from '@btc-vision/bsi-common';

export class JobRepository extends BaseRepositoryWithId<IJobDocument> {
    public moduleName: string = 'JobRepository';
    public logColor: string = '#afeeee';

    constructor(db: Db) {
        super(db);
    }

    protected override getCollection(): Collection<IJobDocument> {
        return this._db.collection('Jobs');
    }
}
