import { Collection, Db } from 'mongodb';
import { IBlockDocument } from '../documents/interfaces/IBlockDocument.js';
import { BaseRepositoryWithId } from '@btc-vision/bsi-common';

export class BlockRepository extends BaseRepositoryWithId<IBlockDocument> {
    public moduleName: string = 'BlockRepository';
    public logColor: string = '#afeeee';

    constructor(db: Db) {
        super(db);
    }

    protected override getCollection(): Collection<IBlockDocument> {
        return this._db.collection('Blocks');
    }
}
