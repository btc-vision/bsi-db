import { Collection, Db } from 'mongodb';
import { ICBRCDistributionDocument } from '../documents/interfaces/ICBRCDistributionDocument.js';
import { BaseRepositoryWithId } from '@btc-vision/bsi-common';

export class CBRCDistributionRepository extends BaseRepositoryWithId<ICBRCDistributionDocument> {
    public moduleName: string = 'CBRCDistributionRepository';
    public logColor: string = '#afeeee';

    constructor(db: Db) {
        super(db);
    }

    protected override getCollection(): Collection<ICBRCDistributionDocument> {
        return this._db.collection('Distributions');
    }
}
