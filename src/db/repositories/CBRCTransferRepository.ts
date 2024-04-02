import { Collection, Db } from 'mongodb';
import { ICBRCTransferDocument } from '../documents/interfaces/ICBRCTransferDocument.js';
import { BaseRepository } from './BaseRepository.js';

export class CBRCTransferRepository extends BaseRepository<ICBRCTransferDocument> {
    public moduleName: string = 'CBRCTransferRepository';
    public logColor: string = '#afeeee';

    constructor(db: Db) {
        super(db);
    }

    protected override getCollection(): Collection<ICBRCTransferDocument> {
        return this._db.collection('transfers');
    }
}
