import { Collection, Db } from 'mongodb';
import { IXmailDocument } from '../documents/interfaces/IXmailDocument.js';
import { BaseRepositoryWithId } from '@btc-vision/bsi-common';

export class XmailRepository extends BaseRepositoryWithId<IXmailDocument> {
    public moduleName: string = 'XmailRepository';
    public logColor: string = '#afeeee';

    constructor(db: Db) {
        super(db);
    }

    protected override getCollection(): Collection<IXmailDocument> {
        return this._db.collection('XMails');
    }
}
