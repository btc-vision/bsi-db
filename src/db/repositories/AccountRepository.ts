import { Collection, Db } from 'mongodb';
import { IAccountDocument } from '../documents/interfaces/IAccountDocument.js';
import { BaseRepository } from './BaseRepository.js';

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
