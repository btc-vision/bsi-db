import { Collection, Db } from 'mongodb';
import { ICBRCMintDocument } from '../documents/interfaces/ICBRCMintDocument.js';
import { BaseRepository } from './BaseRepository.js';

export class CBRCMintRepository extends BaseRepository<ICBRCMintDocument> {
    public moduleName: string = 'CBRCMintRepository';
    public logColor: string = '#afeeee';

    constructor(db: Db) {
        super(db);
    }

    protected override getCollection(): Collection<ICBRCMintDocument> {
        return this._db.collection('mints');
    }
}
