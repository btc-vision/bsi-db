import { Collection, Db } from 'mongodb';
import { IXopDocument } from '../documents/interfaces/IXopDocument.js';
import { BaseRepositoryWithId } from '@btc-vision/motoswapcommon';

export class XopRepository extends BaseRepositoryWithId<IXopDocument> {
    public moduleName: string = 'XopRepository';
    public logColor: string = '#afeeee';

    constructor(db: Db) {
        super(db);
    }

    protected override getCollection(): Collection<IXopDocument> {
        return this._db.collection('XOps');
    }
}
