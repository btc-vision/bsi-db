import { Collection, Db } from 'mongodb';
import { ICBRCDeployDocument } from '../documents/interfaces/ICBRCDeployDocument.js';
import { BaseRepositoryWithId } from '@btc-vision/motoswapcommon';

export class CBRCDeployRepository extends BaseRepositoryWithId<ICBRCDeployDocument> {
    public moduleName: string = 'CBRCDeployRepository';
    public logColor: string = '#afeeee';

    constructor(db: Db) {
        super(db);
    }

    protected override getCollection(): Collection<ICBRCDeployDocument> {
        return this._db.collection('Deploys');
    }
}
