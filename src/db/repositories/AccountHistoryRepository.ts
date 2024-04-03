import { Collection, Db } from 'mongodb';
import { IAccountHistoryDocument } from '../documents/interfaces/IAccountHistoryDocument.js';
import { BaseRepositoryWithId } from '@btc-vision/motoswapcommon';

export class AccountHistoryRepository extends BaseRepositoryWithId<IAccountHistoryDocument> {
    public moduleName: string = 'AccountHistoryRepository';
    public logColor: string = '#afeeee';

    constructor(db: Db) {
        super(db);
    }

    protected override getCollection(): Collection<IAccountHistoryDocument> {
        return this._db.collection('AccountsHistory');
    }
}
