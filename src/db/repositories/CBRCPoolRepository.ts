import { Collection, Db } from 'mongodb';
import { ICBRCPoolDocument } from '../documents/interfaces/ICBRCPoolDocument.js';
import { BaseRepositoryWithId } from '@btc-vision/motoswapcommon';

export class CBRCPoolRepository extends BaseRepositoryWithId<ICBRCPoolDocument> {
    public moduleName: string = 'CBRCPoolRepository';
    public logColor: string = '#afeeee';

    constructor(db: Db) {
        super(db);
    }

    protected override getCollection(): Collection<ICBRCPoolDocument> {
        return this._db.collection('Pools');
    }
}
