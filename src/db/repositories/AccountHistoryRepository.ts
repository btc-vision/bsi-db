import { Collection, Db } from 'mongodb';
import { BaseRepository } from './BaseRepository.js';
import { IAccountHistoryDocument } from '../documents/interfaces/IAccountHistoryDocument.js';

export class AccountHistoryRepository extends BaseRepository<IAccountHistoryDocument> {
    public moduleName: string = 'AccountHistoryRepository';
    public logColor: string = '#afeeee';

    constructor(db: Db) {
        super(db);
    }

    protected override getCollection(): Collection<IAccountHistoryDocument> {
        return this._db.collection('accountshistory');
    }
}
