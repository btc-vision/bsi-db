import { Collection, Db } from 'mongodb';
import { IXSynthDocument } from '../documents/interfaces/IXSynthDocument.js';
import { BaseRepositoryWithId } from '@btc-vision/motoswapcommon';

export class XSynthRepository extends BaseRepositoryWithId<IXSynthDocument> {
    public moduleName: string = 'XSynthRepository';
    public logColor: string = '#afeeee';

    constructor(db: Db) {
        super(db);
    }

    protected override getCollection(): Collection<IXSynthDocument> {
        return this._db.collection('XSynths');
    }
}
