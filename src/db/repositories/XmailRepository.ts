import { Collection, Db } from 'mongodb';
import { BaseRepository } from './BaseRepository.js';
import { IXmailDocument } from '../documents/interfaces/IXmailDocument.js';

export class XmailRepository extends BaseRepository<IXmailDocument> {
    public moduleName: string = 'XmailRepository';
    public logColor: string = '#afeeee';

    constructor(db: Db) {
        super(db);
    }

    protected override getCollection(): Collection<IXmailDocument> {
        return this._db.collection('xmails');
    }
}
