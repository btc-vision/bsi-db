import { Collection, Db } from 'mongodb';
import { ICBRCMintDocument } from '../documents/interfaces/ICBRCMintDocument.js';
import { BaseRepositoryWithId } from '@btc-vision/motoswapcommon';

export class CBRCMintRepository extends BaseRepositoryWithId<ICBRCMintDocument> {
    public moduleName: string = 'CBRCMintRepository';
    public logColor: string = '#afeeee';

    constructor(db: Db) {
        super(db);
    }

    protected override getCollection(): Collection<ICBRCMintDocument> {
        return this._db.collection('Mints');
    }
}
