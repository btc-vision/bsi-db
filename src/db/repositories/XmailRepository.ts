import { Collection, Db } from 'mongodb';
import { IXmailDocument } from '../documents/interfaces/IXmailDocument.js';
import { BaseRepository } from './BaseRepository.js';

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
