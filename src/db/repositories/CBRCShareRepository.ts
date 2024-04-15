import { Collection, Db } from 'mongodb';
import { ICBRCShareDocument } from '../documents/interfaces/ICBRCShareDocument.js';
import { BaseRepositoryWithId } from '@btc-vision/bsi-common';

export class CBRCShareRepository extends BaseRepositoryWithId<ICBRCShareDocument> {
    public moduleName: string = 'CBRCShareRepository';
    public logColor: string = '#afeeee';

    constructor(db: Db) {
        super(db);
    }

    protected override getCollection(): Collection<ICBRCShareDocument> {
        return this._db.collection('Shares');
    }
}
