import { Collection, Db } from 'mongodb';
import { ICBRCTransferDocument } from '../documents/interfaces/ICBRCTransferDocument.js';
import { BaseRepositoryWithId } from '@btc-vision/bsi-common';

export class CBRCTransferRepository extends BaseRepositoryWithId<ICBRCTransferDocument> {
    public moduleName: string = 'CBRCTransferRepository';
    public logColor: string = '#afeeee';

    constructor(db: Db) {
        super(db);
    }

    protected override getCollection(): Collection<ICBRCTransferDocument> {
        return this._db.collection('Transfers');
    }
}
