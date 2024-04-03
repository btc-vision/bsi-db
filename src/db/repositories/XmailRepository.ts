import { Collection, Db } from 'mongodb';
import { IXmailDocument } from '../documents/interfaces/IXmailDocument.js';
import { BaseRepositoryWithId } from '@btc-vision/motoswapcommon';

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
