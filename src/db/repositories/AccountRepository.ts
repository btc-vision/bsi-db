import { Collection, Db } from 'mongodb';
import { BaseRepository } from './BaseRepository.js';
import { IAccountDocument } from '../documents/interfaces/IAccountDocument.js';

export class AccountRepository extends BaseRepository<IAccountDocument> {
    public moduleName: string = 'AccountRepository';
    public logColor: string = '#afeeee';

    constructor(db: Db) {
        super(db);
    }

    protected override getCollection(): Collection<IAccountDocument> {
        return this._db.collection('Accounts');
    }
}
