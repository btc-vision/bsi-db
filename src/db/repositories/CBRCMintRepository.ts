import { Collection, Db } from 'mongodb';
import { BaseRepository } from './BaseRepository.js';
import { ICBRCMintDocument } from '../documents/interfaces/ICBRCMintDocument.js';

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
