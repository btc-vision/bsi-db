import { Collection, Db } from 'mongodb';
import { IAccountDocument } from '../documents/interfaces/IAccountDocument.js';
import { BaseRepositoryWithId } from '@btc-vision/motoswapcommon';

export class AccountRepository extends BaseRepositoryWithId<IAccountDocument> {
    public moduleName: string = 'AccountRepository';
    public logColor: string = '#afeeee';

    constructor(db: Db) {
        super(db);
    }

    protected override getCollection(): Collection<IAccountDocument> {
        return this._db.collection('Accounts');
    }
}
